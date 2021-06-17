module.exports = {
  name: "clear",
  description: "clears messages!",
  async execute(message, args) {
    if (!args[0])
      return message.reply("Enter a number of messages to clear, idiot!");
    if (isNaN(args[0]))
      return message.reply("Those arent numbers, go back to school!");
    if (args[0] > 100)
      return message.reply("I only clear 100 at a time, loser!");
    if (args[0] < 1)
      return message.reply("Do you have autism, thats not even possible?!");

    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  },
};
