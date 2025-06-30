package com.raeen.talkify.Server.DTO;

public class TypingIndicator {
    private Long senderId;
    private Long receiverId;
    private boolean typing;

    public TypingIndicator() {}

    public TypingIndicator(Long senderId, Long receiverId, boolean typing) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.typing = typing;
    }

    public Long getSenderId() {
        return senderId;
    }

    public void setSenderId(Long senderId) {
        this.senderId = senderId;
    }

    public Long getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(Long receiverId) {
        this.receiverId = receiverId;
    }

    public boolean isTyping() {
        return typing;
    }

    public void setTyping(boolean typing) {
        this.typing = typing;
    }
}
