exports.run = (client, message, Discord, prefix) => {
	var embed = new Discord.RichEmbed()
	.setTitle("Fun")
	.setDescription("Here are all of my 'fun' commands")
	.addField(prefix + "rate", "Rates something out of ten \nEx. " + prefix + "rate Cheese")
  .addField(prefix + "hook", "Sends a hooked message")
	.setColor('RANDOM')
	return message.author.send(embed)
}