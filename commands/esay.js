exports.run = (client, message, Discord, prefix) => {
const args = message.content.split(" ").slice(1);
const content = args.join(" ");
var role = message.guild.roles.find(`name`, `LoESoft`);
if(message.member.roles.has(role.id)){
if(!content){ message.reply("Please enter content to be put into an embed");}
message.delete();
var embed = new Discord.RichEmbed()
.setDescription(content)
.setColor('RANDOM')
return message.channel.send(embed);
} else { 
message.channel.send("You do not have permission to use this command.");
}
}