exports.run = (client, message, Discord, prefix) => {
			message.reply("I have DM'd you successfully with help.");
		var embed = new Discord.RichEmbed()
		.setTitle("Help")
		.setColor('RANDOM')
		.setDescription("Here is all my information")
		.addField(prefix + "admin", "Displays Admin Commands")
		.addField(prefix + "util", "Displays Utility Commands")
		.addField(prefix + "server", "Displays Server Commands")
		.addField(prefix + "loesoft", "Displays LoEsoft Specific Commands")
		.addField(prefix + "fun", "Displays 'Fun' Commands")
		.addField(prefix + "botinfo", "Displays Information About the Bot")
		return message.author.send(embed);
}
