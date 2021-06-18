const client = require("./main");

const Schema = require("../models/mute");

client.on("guildMemberAdd", async (member) => {
  const data = await Schema.findOne({
    Guild: member.guild.id,
    Users: member.id,
  });
  if (!data) return;
  const user = data.Users.findIndex((prop) => prop === member.id);
  if (user == -1) return;
  const role = member.guild.roles.cache.find(
    (role) => role.name.toLowerCase() === "muted"
  );
  const take = member.guild.roles.cache.find(
    (role) => role.name.toLowerCase() === "unverified"
  );
  member.roles.add(role.id);
  member.roles.remove(take.id);
});
