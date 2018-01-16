exports.run = (client, message, Discord, prefix) => {
	var embed = new Discord.RichEmbed()
	.setTitle("Bot Info")
  .setThumbnail(client.user.avatarURL)
	.setDescription("Here is some information about me")
  .addField("Bot Name", "Gazer")
	.addField("Developers", "allte#4008 & Pain#9305", true)
	.addField("Library", "Discord.js", true)
	.addField("Uptime", uptime(), true)
  .addField("Donation Info", "[Click here for allte's Paypal](https://www.paypal.me/allte)")
	return message.channel.send(embed);	
function uptime() { 
    var date = new Date(client.uptime);
    var strDate = '';
     strDate += date.getUTCDate() - 1 + " days, ";
    strDate += date.getUTCHours() + " hours, ";
    strDate += date.getUTCMinutes() + " minutes, ";
    strDate += date.getUTCSeconds() + " seconds";
    return strDate;
}
}
