module.exports = (client) => {
  const channelId = "854982499117563934"; // welcome channel

  client.on("guildMemberAdd", (member) => {
    console.log(member);

    const message = `Welcome <@${member.id}> to the server!`;

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
  });
};
