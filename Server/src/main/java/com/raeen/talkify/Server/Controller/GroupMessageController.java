package com.raeen.talkify.Server.Controller;

import com.raeen.talkify.Server.Model.GroupMessage;
import com.raeen.talkify.Server.Service.GroupMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/groups/messages")
public class GroupMessageController {

    @Autowired
    private GroupMessageService groupMessageService;

    // Create/send a new group message
    @PostMapping("/send")
    public GroupMessage sendMessage(
            @RequestParam Long groupId,
            @RequestParam Long senderId,
            @RequestParam String content
    ) {
        return groupMessageService.saveGroupMessage(groupId, senderId, content);
    }

    // Get all messages in a group
    @GetMapping("/{groupId}")
    public List<GroupMessage> getGroupMessages(@PathVariable Long groupId) {
        return groupMessageService.getGroupMessages(groupId);
    }

    // Update the status of a message (e.g., delivered/read)
    @PutMapping("/{messageId}/status")
    public void updateStatus(
            @PathVariable Long messageId,
            @RequestParam String status
    ) {
        groupMessageService.updateStatus(messageId, status);
    }
}
