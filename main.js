const Discord = require("discord.js");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const mongoose = require("mongoose");

const antiAd = require("./commands/anti-ad");

mongoose
  .connect(
    "mongodb+srv://CameronHouck:200284jb@retrobotcluster.6soct.mongodb.net/Data",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(console.log("Connected to mongo db!"));

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
  console.log("Retro is Online!");
  client.user.setActivity('Prefix:"^"');
});

client.on("message", (messagesent) => {
  if (messagesent.content.length > 100)
    messagesent.channel.send("slow down bitch!");
});

client.on("message", (messagesent) => {
  if (messagesent.content.length > 100)
    setTimeout(() => {
      messagesent.delete();
    }, 0);
});

client.on("message", (message) => {
  if (message.content.toLowerCase() === "hi") message.channel.send("HELLO!");
  if (message.content.toLowerCase() === "hello") message.channel.send("HI!");
  if (message.content.toLowerCase() === "nigger")
    message.channel.send("faggot");
  if (message.content.toLowerCase() === "suck my dick")
    message.channel.send("You don't have one!");
  if (message.content.toLowerCase() === "oof")
    message.channel.send("Imagine playing roblox.");
  if (message.content.toLowerCase() === "wtf") message.channel.send(":eyes:");
  if (message.content.toLowerCase() === "wth") message.channel.send(":eyes:");
  if (message.content.toLowerCase() === "i'm bored")
    message.channel.send("So Am I!");
  if (message.content.toLowerCase() === "bored")
    message.channel.send("So Am I!");
  if (message.content.toLowerCase() === "so bored")
    message.channel.send("So Am I!");
  if (message.content.toLowerCase() === "im bored")
    message.channel.send("So Am I!");
  if (message.content.toLowerCase() === "hey retro")
    message.channel.send("What do you want, leave me alone?");
  if (message.content.toLowerCase() === "hi retro")
    message.channel.send("Don't talk to me!");
  if (message.content.toLowerCase() === "hello retro")
    message.channel.send("Please fuck off!");
  if (message.content.toLowerCase() === "yo retro")
    message.channel.send("'yo'? what are you fucking stupid? stfu!");
});

antiAd(client);

client.on("guildMemberAdd", (member) => {
  console.log(member);
  let welcomeRole = member.guild.roles.cache.find(
    (role) => role.id === "894599008335560724"
  );

  member.roles.add(welcomeRole);

  const welcomeEmbed = new Discord.MessageEmbed();

  welcomeEmbed.setColor("#FEC510");
  welcomeEmbed.setTitle(
    `Welcome to the server, @${person.user.tag} enjoy your stay!`
  );
  welcomeEmbed.setImage(
    "https://media.discordapp.net/attachments/864181115334033488/906993890312208424/welcome.gif"
  );

  member.guild.channels.cache
    .find((i) => i.name === "joins")
    .send(welcomeEmbed);
});

client.on("guildMemberRemove", (member) => {
  const goodbyeEmbed = new Discord.MessageEmbed();

  goodbyeEmbed.setColor("#EF2559");
  goodbyeEmbed.setTitle(
    `Cya @${person.user.tag}, didn't want you here anyway!`
  );
  goodbyeEmbed.setImage(
    "https://media.discordapp.net/attachments/864181115334033488/906994469721755668/7Dsn96S.gif"
  );

  member.guild.channels.cache
    .find((i) => i.name === "joins")
    .send(goodbyeEmbed);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!message.member.roles.cache.has("894592214016073799")) {
  } else if (command === "kick") {
    client.commands.get("kick").execute(message, args);
  } else if (command === "ban") {
    client.commands.get("ban").execute(message, args);
  } else if (command === "clear") {
    client.commands.get("clear").execute(message, args);
  } else if (command === "mute") {
    client.commands.get("mute").run(client, message, args);
  } else if (command === "unmute") {
    client.commands.get("unmute").run(client, message, args);
  } else if (command === "tempmute") {
    client.commands.get("tempmute").run(client, message, args);
  } else if (command === "dm") {
    client.commands.get("dm").run(client, message, args);
  } else if (command === "verifyrole") {
    client.commands.get("verifyrole").execute(message, args, Discord, client);
  } else if (command === "avatar") {
    client.commands.get("avatar").execute(client, message, args);
  } else if (command === "ping") {
    client.commands.get("ping").run(client, message, args);
  } else if (command === "8ball") {
    client.commands.get("8ball").run(client, message, args);
  } else if (command === "whois") {
    client.commands.get("whois").run(client, message, args);
  }

  if (!message.member.roles.cache.has("894592798723022888")) {
  } else if (command === "avatar") {
    client.commands.get("avatar").execute(client, message, args);
  } else if (command === "ping") {
    client.commands.get("ping").run(client, message, args);
  } else if (command === "8ball") {
    client.commands.get("8ball").run(client, message, args);
  } else if (command === "whois") {
    client.commands.get("whois").run(client, message, args);
  }
});

client.login("OTIzNzc1MDMxNDYzNTI2NDYw.YcU6ig.ZxyJL2LOOzO0n-Hz18t7ck8CIaY");
