exports.run = (client, message, Discord, prefix) => {
	var embed = new Discord.RichEmbed()
	.setTitle("Server")
	.setDescription("Here are all of my server related commands")
	.addField(prefix + "sinfo", "Check out information about the LoESoft Discord Server")
	.setColor('RANDOM')
	return message.author.send(embed);
}