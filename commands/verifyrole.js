module.exports = {
  name: "verifyrole",
  description: "Sets up a reaction role message!",
  async execute(message, args, Discord, client) {
    const channel = "894598935455350814";
    const verifiedRole = message.guild.roles.cache.find(
      (role) => role.name === "Member"
    );
    const unverifiedRole = message.guild.roles.cache.find(
      (role) => role.name === "Unverified"
    );

    const verifiedEmoji = "✅";

    let embed = new Discord.MessageEmbed()
      .setColor("#e42643")
      .setDescription(
        "Click the checkmark to get verified!\n\n" +
          `${verifiedEmoji} To get verified!\n`
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(verifiedEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === verifiedEmoji) {
          const hello = await reaction.message.guild.members.cache.get(user.id);
          hello.roles.add(verifiedRole);
          hello.roles.remove(unverifiedRole);
        }
      } else {
        return;
      }
    });
  },
};
