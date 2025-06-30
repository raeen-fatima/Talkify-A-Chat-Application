package com.raeen.talkify.Server.Model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "group_messages")
public class GroupMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long groupId;
    private Long senderId;
    private String content;

    private LocalDateTime sentAt;

    @Column(name = "status")
    private String status; // e.g., "SENT", "DELIVERED", "READ"

    @Column(name = "status_updated_at")
    private LocalDateTime statusUpdatedAt;

    private LocalDateTime timestamp;

    public GroupMessage() {}

    public GroupMessage(Long groupId, Long senderId, String content, LocalDateTime timestamp) {
        this.groupId = groupId;
        this.senderId = senderId;
        this.content = content;
        this.timestamp = timestamp;
        this.sentAt = timestamp; // ✅ This line sets sentAt field
        this.status = "SENT";
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getStatusUpdatedAt() {
        return statusUpdatedAt;
    }

    public void setStatusUpdatedAt(LocalDateTime statusUpdatedAt) {
        this.statusUpdatedAt = statusUpdatedAt;
    }

    public LocalDateTime getSentAt() {
        return sentAt;
    }

    public void setSentAt(LocalDateTime sentAt) {
        this.sentAt = sentAt;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}