package com.raeen.talkify.Server.Controller;
import com.raeen.talkify.Server.Model.Message;
import com.raeen.talkify.Server.DTO.ChatMessage;
import com.raeen.talkify.Server.Service.MessageService;
import com.raeen.talkify.Server.DTO.MessageStatusUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import com.raeen.talkify.Server.DTO.TypingIndicator;

@Controller
public class ChatController {
    @Autowired
    private MessageService messageService;
     @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/chat") // Clients send to /app/chat
    public void processMessage(@Payload ChatMessage chatMessage) {
         System.out.println("🔥 Received chat message: " + chatMessage);

        // 1. DB me save
        Message savedMessage = messageService.saveMessage(
                chatMessage.getSenderId(),
                chatMessage.getReceiverId(),
                chatMessage.getContent()
        );
         // 2. Broadcast to topic
        messagingTemplate.convertAndSend("/topic/messages", savedMessage);
        // 3. Send acknowledgment to sender
        messagingTemplate.convertAndSend(
                "/queue/ack/" + chatMessage.getSenderId(),
                "Your message was delivered successfully!"
        );

    }

    @MessageMapping("/message/status")//update message status
    public void updateMessageStatus(MessageStatusUpdate update) {
        // DB me status update karo
        messageService.updateStatus(update.getMessageId(), update.getStatus());

        // Sender ko notify karo
        messagingTemplate.convertAndSend(
            "/queue/status/" + update.getSenderId(),
            update
        );
    }
    @MessageMapping("/typing") // Client sends to /app/typing
public void typing(@Payload TypingIndicator indicator) {
    // Broadcast to receiver's topic
    messagingTemplate.convertAndSend("/topic/typing/" + indicator.getReceiverId(), indicator);
}

}



