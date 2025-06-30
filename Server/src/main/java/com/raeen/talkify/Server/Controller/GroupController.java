package com.raeen.talkify.Server.Controller;

import com.raeen.talkify.Server.Model.Group;
import com.raeen.talkify.Server.Model.GroupMember;
import com.raeen.talkify.Server.Service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/groups")
public class GroupController {

    @Autowired
    private GroupService groupService;

    // 1️⃣ Create a group
    @PostMapping("/create")
    public Group createGroup(@RequestParam String groupName, @RequestParam Long creatorId) {
        return groupService.createGroup(groupName, creatorId);
    }

    // 2️⃣ Add a member
    @PostMapping("/{groupId}/add-member")
    public void addMember(@PathVariable Long groupId, @RequestParam Long userId) {
        groupService.addMember(groupId, userId);
    }

    // 3️⃣ Remove a member
    @DeleteMapping("/{groupId}/remove-member")
    public void removeMember(@PathVariable Long groupId, @RequestParam Long userId) {
        groupService.removeMember(groupId, userId);
    }

    // 4️⃣ Get members
    @GetMapping("/{groupId}/members")
    public List<GroupMember> getMembers(@PathVariable Long groupId) {
        return groupService.getGroupMembers(groupId);
    }
}
