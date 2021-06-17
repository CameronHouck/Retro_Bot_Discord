module.exports = {
    name: "ban",
    description: "This command kicks a member!",
    execute(message, args) {
      const target = message.mentions.users.first();
      if (target) {
        const memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.ban();
        message.channel.send("We ain't ever seeing him again!");
      } else {
        message.channel.send(`You have to mention someone dumbass!`);
      }
    },
  };