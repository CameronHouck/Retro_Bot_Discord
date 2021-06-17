const Discord = require("discord.js");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const prefix = "^";

const fs = require("fs");

const welcome = require("./commands/welcome");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Retro bot is Online!");
  client.user.setActivity('Prefix:"^"');

  welcome(client);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!message.member.roles.cache.has("853123121418993664")) {
  } else if (command === "reactionrole") {
    client.commands.get("reactionrole").execute(message, args, Discord, client);
  }
  if (!message.member.roles.cache.has("853125409745666069")) {
    message.channel.send("you can't use this command retard!");
  } else if (command === "kick") {
    client.commands.get("kick").execute(message, args);
  } else if (command === "ban") {
    client.commands.get("ban").execute(message, args);
  } else if (command === "clear") {
    client.commands.get("clear").execute(message, args);
  } else if (command === "mute") {
    client.commands.get("mute").execute(message, args);
  } else if (command === "unmute") {
    client.commands.get("unmute").execute(message, args);
  }
});

client.login("ODU0ODQ3NTA3Nzk1OTM1MjUy.YMp4yA.sc8hpoGuQabNNadcQFTEQBCoQHs");
