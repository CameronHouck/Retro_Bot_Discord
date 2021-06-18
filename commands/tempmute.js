const { Message, MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "tempmute",
  /**
   * @param {Message} message
   */
  run: async (client, message, args) => {
    const Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    const time = args[1];
    if (!Member)
      return message.channel.send("That person doesn't even exist Dummy!");
    if (!time) return message.channel.send("Pick a time stupid!");
    const role = message.guild.roles.cache.find(
      (role) => role.name.toLowerCase() === "muted"
    );
    const other = message.guild.roles.cache.find(
      (role) => role.name.toLowerCase() === "member"
    );
    if (!role) {
      try {
        message.channel.send("Where the fuck is the muted role?!");
      } catch (error) {
        console.log(error);
      }
    }
    if (Member.roles.cache.has(role))
      return message.channel.send(
        `${Member.displayName} is already muted stupid!`
      );
    await Member.roles.add(role);
    Member.roles.remove(other);
    message.channel.send(`${Member.displayName} has been muted, now shut it!`);

    setTimeout(async () => {
      await Member.roles.remove(role);
      Member.roles.add(other);
      message.channel.send(`${Member.displayName} has been unmuted, be good!`);
    }, ms(time));
  },
};
