exports.run = (client, message, Discord, prefix) => {
if (message.channel.type === "dm") return;
const sql = require("sqlite");
const cookies = require('cookiesdb');
  var desc = "This user has not written a description of themselves yet.";
  sql.open("./descriptions.sqlite");
  sql.get(`SELECT * FROM descriptions WHERE userId ="${message.author.id}"`).then(row => {
  if(row){
    desc = row.desc
  }
let bott = message.author.bot
  if(bott == "true"){ bott = "Yes"}else { bott = "No"}
  let roles = message.member.roles.map(role => role.name).join(', ')
  let uname = message.author.username.toString()
  let tname = message.author.discriminator.toString()
  let id = message.author.id
   let status = message.author.presence.status.toString();
   if(status == "dnd"){ status = "Do Not Disturb"}else if(status == "online"){status = "Online"}else if(status == "idle"){status = "Idle"}else{ status = "Offline"}

    var embed = new Discord.RichEmbed()
    .setDescription("" + message.author.toString() + "'s Info")
    .setThumbnail(message.author.avatarURL)
    .addField("True Name", uname + "#" + tname, true)
    .addField("Name", uname, true)
    .addField("Roles", roles)
    .addField("Bot", bott, true)
    .addField("Status", status, true)
    .addField("ID", id, true)
    .addField("Your Description", desc)
    .setColor('RANDOM')
   return  message.channel.send(embed);
  });
  }
