const { Message } = require("discord.js");
const Schema = require("../models/mute");

module.exports = {
  name: "unmute",
  /**
   * @param {Message} message
   */
  run: async (client, message, args) => {
    const Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send("Ping someone that exists moron!");

    const role = message.guild.roles.cache.find(
      (r) => r.name.toLowerCase() === "muted"
    );
    const other = message.guild.roles.cache.find(
      (r) => r.name.toLowerCase() === "member"
    );
    Schema.findOne(
      {
        Guild: message.guild.id,
      },
      async (err, data) => {
        if (!data) return message.reply("Member was not muted");
        const user = data.Users.findIndex((prop) => prop === Member.id);
        if (user == -1) return message.reply("Member is not muted");
        data.Users.splice(user, 1);
        data.save();
        await Member.roles.remove(role);
        Member.roles.add(other);
        message.channel.send(`${Member} has been unmuted, be good!`);
      }
    );
  },
};
