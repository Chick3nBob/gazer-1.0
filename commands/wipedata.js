exports.run = (client, message, Discord, prefix) => {
	var channel = message.guild.channels.find('name', 'bot-log');

	if(message.author.id === "257351188310130698" || message.author.id === "228349229230325760" || message.author.id === "220913972251983872"){
		var embed = new Discord.RichEmbed()
		.setDescription(":exclamation: Attention :exclamation:")
		.addField("Info", message.author.toString() + " has wiped the bot's database.")
		.setColor('RANDOM')
		return channel.send(embed);
		message.channel.send("Restarting");
		console.log("The bot has been restarted by " + message.author.tag);
		process.exit(1337);
	} else { 
		message.reply("You are not able to use this command.");
	}
}
