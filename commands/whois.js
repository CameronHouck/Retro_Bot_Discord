const { MessageEmbed } = require("discord.js");
const Commando = require("discord.js-commando");

module.exports = {
  name: "whois",

  run: async (client, message, args) => {
    const { guild, channel } = message;

    const user = message.mentions.users.first() || message.member.user;
    const member = guild.members.cache.get(user.id);

    console.log(member);

    const embed = new MessageEmbed()
      .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
      .addFields(
        {
          name: "User tag",
          value: user.tag,
        },
        {
          name: "Is bot",
          value: user.bot,
        },
        {
          name: "User id",
          value: user.id,
        },
        {
          name: "Nickname",
          value: member.nickname || "None",
        },
        {
          name: "Joined Server",
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: "Joined Discord",
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        {
          name: "Roles",
          value: member.roles.cache.size - 1,
        }
      );
    channel.send(embed);
  },
};
