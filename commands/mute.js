const {Message, MessageEmbed} = require("discord.js")
const ms = require("ms")

module.exports = {
  name : "mute",
 /**
* @param {Message} message
*/
  run : async(client, message, args) => {
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!Member) return message.channel.send("That person doesn't even exist Dummy!")
    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === "muted")
    const other = message.guild.roles.cache.find(role => role.name.toLowerCase() === "member")
    if (!role) {
      try {
        message.channel.send("Where the fuck is the muted role?!")
      } catch (error) {
        console.log(error)
      }
    };
    if(Member.roles.cache.has(role)) return message.channel.send(`${Member.displayName} is already muted stupid!`)
    await Member.roles.add(role)
    Member.roles.remove(other)
    message.channel.send(`${Member.displayName} has been muted, now shut it!`)
  }
}