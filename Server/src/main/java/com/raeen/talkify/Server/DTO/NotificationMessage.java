package com.raeen.talkify.Server.DTO;

public class NotificationMessage {
    private Long recipientId;          // Who should receive the notification
    private String type;               // e.g., "NEW_MESSAGE", "MESSAGE_READ"
    private String content;            // e.g., "New message from Alice"
    private Long relatedMessageId;     // Which message this refers to
    private Long groupId;              // Optional, null for private chat

    // Constructors
    public NotificationMessage() {}

    public NotificationMessage(Long recipientId, String type, String content, Long relatedMessageId, Long groupId) {
        this.recipientId = recipientId;
        this.type = type;
        this.content = content;
        this.relatedMessageId = relatedMessageId;
        this.groupId = groupId;
    }

    // Getters and Setters
    public Long getRecipientId() {
        return recipientId;
    }

    public void setRecipientId(Long recipientId) {
        this.recipientId = recipientId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getRelatedMessageId() {
        return relatedMessageId;
    }

    public void setRelatedMessageId(Long relatedMessageId) {
        this.relatedMessageId = relatedMessageId;
    }

    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }
}
