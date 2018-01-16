exports.run = (client, message, Discord, prefix) => {
  const sql = require("sqlite");
  sql.open("./rates.sqlite");
  var role = message.guild.roles.find('name', 'Server Admin');
  
  if(!message.member.roles.has(role.id)){
    var embed = new Discord.RichEmbed()
    .setTitle(":x:ERROR:x:")
    .setDescription("You do not have the `Server Admin` role required to use this command")
    return message.channel.send(embed);
    return;
  }
  sql.run(`DELETE FROM rates`);
  message.reply("Successfully cleared the rates database.")
}