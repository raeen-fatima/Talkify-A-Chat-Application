package com.raeen.talkify.Server.Controller;

import com.raeen.talkify.Server.Model.Message;
import com.raeen.talkify.Server.Service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import com.raeen.talkify.Server.DTO.ChatMessage;
import com.raeen.talkify.Server.DTO.MessageStatusUpdate;
import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;
    @Autowired
    private SimpMessagingTemplate messagingTemplate;


    @PostMapping("/send")
public Message sendMessage(@RequestBody ChatMessage message) {
    return messageService.saveMessage(
        message.getSenderId(),
        message.getReceiverId(),
        message.getContent()
    );
}

    @GetMapping("/conversation")
    public List<Message> getConversation(@RequestParam Long senderId,
                                         @RequestParam Long receiverId) {
        return messageService.getConversation(senderId, receiverId);
    }
    @GetMapping("/test")
public String testMessage() {
    return "Message Controller working!";
}
@PutMapping("/status")
    public ResponseEntity<String> updateStatus(@RequestParam Long messageId,
                                               @RequestParam String status) {
        messageService.updateStatus(messageId, status);
          // WebSocket broadcast
            MessageStatusUpdate update = new MessageStatusUpdate(messageId, status);
            messagingTemplate.convertAndSend("/topic/message-status", update);
        return ResponseEntity.ok("Message status updated to " + status);
    }

}
