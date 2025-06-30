package com.raeen.talkify.Server.DTO;

public class MessageStatusUpdate {
    private Long messageId;
    private String status;
    private Long senderId;


    public MessageStatusUpdate() {}
    
    // 2 argument constructor (yeh missing tha)
    public MessageStatusUpdate(Long messageId, String status) {
        this.messageId = messageId;
        this.status = status;
    }

    public MessageStatusUpdate(Long messageId, String status, Long senderId) {
        this.messageId = messageId;
        this.status = status;
        this.senderId = senderId;
    }

    public Long getMessageId() {
        return messageId;
    }

    public void setMessageId(Long messageId) {
        this.messageId = messageId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getSenderId() {
        return senderId;
    }

    public void setSenderId(Long senderId) {
        this.senderId = senderId;
    }
}
