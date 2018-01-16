exports.run = (client, message, Discord, prefix) => {
if (message.channel.type === "dm") return;
var embed = new Discord.RichEmbed()
.setDescription(message.guild.name + "'s Info")
.setColor('RANDOM')
.setThumbnail(message.guild.iconURL)
.addField("Server Name", message.guild.name, true)
.addField("Member Count", message.guild.memberCount, true)
.addField("Roles", message.guild.roles.map(role => role.name).join(', '), true)
.addField("Server Owner", message.guild.owner, true)
.addField("Channels", message.guild.channels.size, true)
.addField("Bots", message.guild.members.filter(member => member.user.bot).size, true)
.setFooter(message.author.tag + " has used this command")
return message.channel.send(embed)
}
