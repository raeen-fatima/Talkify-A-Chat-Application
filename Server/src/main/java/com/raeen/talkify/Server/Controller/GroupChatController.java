package com.raeen.talkify.Server.Controller;

import com.raeen.talkify.Server.Model.GroupMessage;
import com.raeen.talkify.Server.Service.GroupMessageService;
import com.raeen.talkify.Server.DTO.GroupChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import java.util.List;
import com.raeen.talkify.Server.DTO.NotificationMessage;

@Controller
public class GroupChatController {

    @Autowired
    private GroupMessageService groupMessageService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/group.chat")  // clients send to /app/group.chat
    public void processGroupMessage(@Payload GroupChatMessage chatMessage) {
        // 1. Save to DB
        GroupMessage savedMessage = groupMessageService.saveGroupMessage(
            chatMessage.getGroupId(),
            chatMessage.getSenderId(),
            chatMessage.getContent()
        );

        // 2. Broadcast to all group subscribers
        messagingTemplate.convertAndSend(
            "/topic/groups/" + chatMessage.getGroupId(),
            savedMessage
        );

        
         // 3. Optionally send notification to all group members (excluding sender)
    // Example: assume you track group members somewhere
    // For now, just an example list:
    List<Long> groupMembers = List.of(2L, 3L, 4L); // Replace with actual member IDs

    for (Long memberId : groupMembers) {
        if (!memberId.equals(chatMessage.getSenderId())) {
            NotificationMessage notification = new NotificationMessage(
                memberId,
                "NEW_GROUP_MESSAGE",
                "New message in group " + chatMessage.getGroupId(),
                savedMessage.getId(),
                chatMessage.getGroupId()
            );

            messagingTemplate.convertAndSendToUser(
                memberId.toString(),
                "/queue/notifications",
                notification
            );

        }
    }
  }
}
