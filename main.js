const Discord = require("discord.js");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const prefix = "^";

const fs = require("fs");

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
});

client.on("guildMemberAdd", (member) => {
  console.log(member);
  let welcomeRole = member.guild.roles.cache.find(
    (role) => role.id === "855179545161236480"
  );
  member.roles.add(welcomeRole);

  const welcomeEmbed = new Discord.MessageEmbed();

  welcomeEmbed.setColor("#FEC510");
  welcomeEmbed.setTitle("Welcome to my server, enjoy your stay!");
  welcomeEmbed.setImage(
    "https://media1.tenor.com/images/ab75f02a4474553c851318bda0a08aa6/tenor.gif?itemid=21819402"
  );

  member.guild.channels.cache
    .find((i) => i.name === "joins")
    .send(welcomeEmbed);
});

client.on("guildMemberRemove", (member) => {
  const goodbyeEmbed = new Discord.MessageEmbed();

  goodbyeEmbed.setColor("#EF2559");
  goodbyeEmbed.setTitle("Cya bitch, I didn't want you in here anyway!");
  goodbyeEmbed.setImage(
    "https://i.kym-cdn.com/photos/images/newsfeed/001/046/414/9bc.gif"
  );

  member.guild.channels.cache
    .find((i) => i.name === "joins")
    .send(goodbyeEmbed);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!message.member.roles.cache.has("853123121418993664")) {
  } else if (command === "verifyrole") {
    client.commands.get("verifyrole").execute(message, args, Discord, client);
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
