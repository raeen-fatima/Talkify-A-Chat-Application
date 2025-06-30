package com.raeen.talkify.Server.Repository;

import com.raeen.talkify.Server.Model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Long> {
}
