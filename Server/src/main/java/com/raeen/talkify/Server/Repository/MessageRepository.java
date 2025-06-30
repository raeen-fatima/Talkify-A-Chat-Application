package com.raeen.talkify.Server.Repository;

import com.raeen.talkify.Server.Model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findBySenderIdAndReceiverId(Long senderId, Long receiverId);
    List<Message> findByReceiverId(Long receiverId);

    @Modifying
    @Transactional
    @Query("UPDATE Message m SET m.status = :status WHERE m.id = :messageId")
    void updateStatus(@Param("messageId") Long messageId, @Param("status") String status);
}
