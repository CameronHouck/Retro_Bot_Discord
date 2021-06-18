const { Message } = require("discord.js");

module.exports = {
  name: "unmute",
  /**
   * @param {Message} message
   */
  run: async (client, message, args) => {
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if(!Member) return message.channel.send("Ping someone that exists moron!")

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === "muted")
    const other = message.guild.roles.cache.find(r => r.name.toLowerCase() === "member")

    await Member.roles.remove(role)
    Member.roles.add(other)

    message.channel.send(`${Member} has been unmuted, be good!`)
  },
};
