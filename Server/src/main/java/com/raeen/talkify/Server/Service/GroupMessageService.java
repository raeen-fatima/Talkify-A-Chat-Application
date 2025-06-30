package com.raeen.talkify.Server.Service;

import com.raeen.talkify.Server.Model.GroupMessage;
import com.raeen.talkify.Server.Repository.GroupMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class GroupMessageService {

    @Autowired
    private GroupMessageRepository groupMessageRepository;

    public GroupMessage saveGroupMessage(Long groupId, Long senderId, String content) {
        GroupMessage message = new GroupMessage(
            groupId,
            senderId,
            content,
            LocalDateTime.now()
        );
        return groupMessageRepository.save(message);
    }

    public List<GroupMessage> getGroupMessages(Long groupId) {
        return groupMessageRepository.findByGroupId(groupId);
    }

    public void updateStatus(Long messageId, String status) {
        GroupMessage message = groupMessageRepository.findById(messageId)
            .orElseThrow(() -> new RuntimeException("Group Message not found"));
        message.setStatus(status);
        message.setStatusUpdatedAt(LocalDateTime.now());
        groupMessageRepository.save(message);
    }
}
