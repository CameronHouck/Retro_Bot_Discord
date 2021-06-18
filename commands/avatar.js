const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "This command makes someones pfp bigger!",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  execute: async (client, message, args) => {
    const member = message.mentions.members.first() || message.member;

    message.channel.send(
      new MessageEmbed()
        .setTitle(`${member.user.tag}'s avatar, why you stalking?`)
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
        .setColor("#F47838")
    );
  },
};
