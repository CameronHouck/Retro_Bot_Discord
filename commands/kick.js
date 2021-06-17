module.exports = {
  name: "kick",
  description: "This command kicks a member!",
  execute(message, args) {
    const target = message.mentions.users.first();
    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      memberTarget.kick();
      message.channel.send("His ass outta here!");
    } else {
      message.channel.send(`You have to mention someone dumbass!`);
    }
  },
};
