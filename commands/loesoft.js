exports.run = (client, message, Discord, prefix) => {
	var embed = new Discord.RichEmbed()
	.setTitle("LoESoft")
	.setDescription("Here are all the commands available to the LoESoft Team")
	.addField(prefix + "eval", "Information about the command available on the Internet")
	.addField(prefix + "wipedata", "Wipes the databases the bot uses \nOnly usable by the bot developers and Devwarlt.")
	.addField(prefix + "esay", "Puts whatever you say after the command into an embed")
  .addField(prefix + "trate", "Used to rate the LoESoft team \n**ONLY USABLE BY A SERVER ADMIN**")
  .addField(prefix + "rates", "Check out how the LoESoft team is doing")
  .addField(prefix + "clean", "Wipes the database that stores the team's status \n**ONLY USABLE BY A SERVER ADMIN**")
	.setColor('RANDOM')
	return message.author.send(embed);
}