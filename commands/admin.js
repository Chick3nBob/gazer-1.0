exports.run = (client, message, Discord, prefix) => {
  var embed = new Discord.RichEmbed()
  .setTitle("Admin")
  .setDescription("Here are all of my administrative commands")
  .addField(prefix + "ban", "Bans a user. \nEx. " + prefix + "ban (mention a user) (reason) \nRequires permission to ban users.")
  .addField(prefix + "kick", "Kicks a user. \nEx. " + prefix + "kick (mention a user) (reason) \nRequires permission to kick users.")
  .addField(prefix + "purge", "Purges a channel/user's messages \nEx: " + prefix + "purge (number of messages to purge (limit is 100)) \nOr: " + prefix + "purge (mention a user) (number of messages to purge)")
  .setColor('RANDOM')
  return message.author.send(embed);
}
