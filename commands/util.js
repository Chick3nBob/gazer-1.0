exports.run = (client, message, Discord, prefix) => {
var embed = new Discord.RichEmbed()
.setTitle("Util")
.setDescription("Here are all of my utility commands")
.addField(prefix + "uinfo", "Displays information about a mentioned user")
.addField(prefix + "myinfo", "Displays information about yourself")
.addField(prefix + "setdesc", "Set your description of yourself")
.addField(prefix + "mydesc", "Displays your current description")
.addField(prefix + "weather", "Checks the weather of some places")
.addField(prefix + "hook", "Hooks your message")
.setColor('RANDOM')
return message.author.send(embed);
}