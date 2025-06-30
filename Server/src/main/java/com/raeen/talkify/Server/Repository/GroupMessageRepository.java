package com.raeen.talkify.Server.Repository;

import com.raeen.talkify.Server.Model.GroupMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface GroupMessageRepository extends JpaRepository<GroupMessage, Long> {
    List<GroupMessage> findByGroupId(Long groupId);
}
