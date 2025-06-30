package com.raeen.talkify.Server.Service;

import com.raeen.talkify.Server.Model.Message;
import com.raeen.talkify.Server.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public Message saveMessage(Long senderId, Long receiverId, String content) {
        Message message = new Message(
                senderId,
                receiverId,
                content,
                LocalDateTime.now()
        );
        message.setStatus("SENT"); // Initial status when the message is created
        
        return messageRepository.save(message);
    }

    public List<Message> getConversation(Long senderId, Long receiverId) {
        return messageRepository.findBySenderIdAndReceiverId(senderId, receiverId);
    }
    public void updateStatus(Long messageId, String status) {
    Message message = messageRepository.findById(messageId)
        .orElseThrow(() -> new RuntimeException("Message not found"));
    message.setStatus(status);
    message.setStatusUpdatedAt(LocalDateTime.now());

    messageRepository.save(message);
}
// public void updateMessageStatus(Long messageId, String status) {
//         messageRepository.updateStatus(messageId, status);
//     }

}
