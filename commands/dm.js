const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "dm",
  description: "This command lets you dm people!",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const user =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0])?.user;
    if (message.content.includes("-a")) {
      const str = args.join(" ").replace("-a", "");
      user.send(string);
    } else {
      user.send(`${message.author.tag}: ${args.join(" ")}`);
    }
  },
};
