const { MessageEmbed } = require("discord.js");

const prefix = "^";

module.exports = {
  name: "8ball",
  description: "tells your fortune!",
  run: async (bot, message, args) => {
    let question = message.content.split(`${bot.prefix}8ball `).join("");
    if (!question) {
      return message.reply("That's not a question!");
    } else {
      let responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful",
      ];
      let Response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let embed = new MessageEmbed()
        .setTitle("8ball")
        .setColor("RANDOM")
        .setDescription( "\n"+Response);
      message.channel.send(embed);
    }
  },
};

// slice(bot.prefix.length + 6);
