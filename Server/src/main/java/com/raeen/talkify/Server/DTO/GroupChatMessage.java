package com.raeen.talkify.Server.DTO;

public class GroupChatMessage {
    private Long groupId;
    private Long senderId;
    private String content;

    // Empty constructor for deserialization
    public GroupChatMessage() {}

    // All-args constructor (optional)
    public GroupChatMessage(Long groupId, Long senderId, String content) {
        this.groupId = groupId;
        this.senderId = senderId;
        this.content = content;
    }

    // Getters and Setters
    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public Long getSenderId() {
        return senderId;
    }

    public void setSenderId(Long senderId) {
        this.senderId = senderId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
