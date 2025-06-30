package com.raeen.talkify.Server.Service;

import com.raeen.talkify.Server.Model.Group;
import com.raeen.talkify.Server.Model.GroupMember;
import com.raeen.talkify.Server.Repository.GroupRepository;
import com.raeen.talkify.Server.Repository.GroupMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private GroupMemberRepository groupMemberRepository;

    // 1️⃣ Create a group
    public Group createGroup(String groupName, Long creatorId) {
        Group group = new Group(groupName, creatorId);
        Group savedGroup = groupRepository.save(group);

        // Auto-add creator as member
        GroupMember member = new GroupMember(savedGroup.getId(), creatorId);
        groupMemberRepository.save(member);

        return savedGroup;
    }

    // 2️⃣ Add a member
    public void addMember(Long groupId, Long userId) {
        if (!groupMemberRepository.existsByGroupIdAndUserId(groupId, userId)) {
            GroupMember member = new GroupMember(groupId, userId);
            groupMemberRepository.save(member);
        }
    }

    // 3️⃣ Remove a member
    public void removeMember(Long groupId, Long userId) {
        List<GroupMember> members = groupMemberRepository.findByGroupId(groupId);
        members.stream()
            .filter(m -> m.getUserId().equals(userId))
            .findFirst()
            .ifPresent(m -> groupMemberRepository.deleteById(m.getId()));
    }

    // 4️⃣ Get members of a group
    public List<GroupMember> getGroupMembers(Long groupId) {
        return groupMemberRepository.findByGroupId(groupId);
    }
}
