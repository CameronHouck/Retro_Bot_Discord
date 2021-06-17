module.exports = {
  name: "unmute",
  description: "This unmutes a member",
  execute(message, args) {
    const target = message.mentions.users.first();
    if (target) {
      let mainRole = message.guild.roles.cache.find(
        (role) => role.name === "Member"
      );
      let nsfwRole = message.guild.roles.cache.find(
        (role) => role.name === "18+"
      );
      let muteRole = message.guild.roles.cache.find(
        (role) => role.name === "Muted"
      );

      let memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(muteRole.id);
      memberTarget.roles.add(nsfwRole.id);
      memberTarget.roles.add(mainRole.id);
      message.channel.send(
        `<@${memberTarget.user.id}> you are unmuted, be good!`
      );
    } else {
      message.channel.send("That person doesn't even exist Dummy!");
    }
  },
};
