module.exports = (client) => {
  const isInvite = async (guild, code) => {
    return await new Promise((resolve) => {
      guild.fetchInvites().then((invites) => {
        for (const invite of invites) {
          if (code === invite[0]) {
            resolve(true);
            return;
          }
        }

        resolve(false);
      });
    });
  };

  client.on("message", async (message) => {
    const { guild, member, content } = message;

    // discord.gg/5TeYRAapjG

    const code = content.split("discord.gg/")[1];

    if (content.includes("discord.gg/")) {
      const isOurInvite = await isInvite(guild, code);

      if (!isOurInvite) {
        member.kick();
        message
          .delete({ timeout: 0000 })
          .then((msg) =>
            console.log(
              `Deleted message from ${msg.author.username} after 0 seconds`
            )
          )
          .catch(console.error);
        const messageToDelete = await message.channel.send(
          "Don't advertise bitch gtfo"
        );
        setTimeout(() => {
          messageToDelete.delete();
        }, 5000);
      }
    }
  });
};
