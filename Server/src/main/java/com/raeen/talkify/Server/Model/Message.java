package com.raeen.talkify.Server.Model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long senderId;
    private Long receiverId;
    
    private String content;
    @Column(name = "status")
    private String status; // e.g., "SENT", "DELIVERED", "READ"
    @Column(name = "status_updated_at")
    private LocalDateTime statusUpdatedAt;



    private LocalDateTime timestamp;

    // Constructors
    public Message() {}

    public Message(Long senderId, Long receiverId, String content, LocalDateTime timestamp) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.content = content;
        this.timestamp = timestamp;
    }

    // Getters and Setters
    

public Long getId() {
    return id;
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

public String getContent() {
    return content;
}

public void setContent(String content) {
    this.content = content;
}

public LocalDateTime getTimestamp() {
    return timestamp;
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


public void setTimestamp(LocalDateTime timestamp) {
    this.timestamp = timestamp;
}

}
