exports.run = (client, message, Discord, prefix) => {
const Enmap = require('enmap');
const cookies = require('cookiesdb');
const EnmapLevel = require('enmap-level');
let user = message.mentions.members.first();
if(!user){
	var embed = new Discord.RichEmbed()
	.setDescription(":x: Error :x:")
	.addField("Error", "A proper user wasn't mentioned.")
	.setColor('RANDOM')
	return message.channel.send(embed);
	}
    let uuser = user.user
    const sql = require("sqlite");
  var desc = "This user has not written a description of themselves yet.";
  sql.open("./descriptions.sqlite");
  sql.get(`SELECT * FROM descriptions WHERE userId ="${uuser.id}"`).then(row => {
  if(row){
    desc = row.desc
  }
    let bott = uuser.bot.toString()
    let name = uuser.username.toString()
    let dname = uuser.discriminator.toString()
    let roles = user.roles.map(role => role.name).join(', ')
    let id = uuser.id.toString()
    let status = uuser.presence.status.toString()
    if(bott == "true"){ bott = "Yes"
                    }else { bott = "No"}
    if(status == "dnd"){ status = "Do Not Disturb"}else if(status == "online"){status = "Online"}else if(status == "idle"){status = "Idle"}else{ status = "Offline"}
    var embed = new Discord.RichEmbed()
    .setDescription("" + user.toString() + "'s Info")
    .setThumbnail(uuser.avatarURL)
    .addField("True Name", name + "#" + dname, true)
    .addField("Name", uuser, true)
    .addField("Roles", roles)
    .addField("Bot", bott, true)
    .addField("Status", status, true)
    .addField("ID", id, true)
    .addField("Personal Description", desc) 
    .setColor('RANDOM')
   return message.channel.send(embed);
  });
}

