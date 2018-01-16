exports.run = (client, message, Discord, prefix) => {
if (message.channel.type === "dm") return;
  const args = message.content.split(" ").slice(2);
  var author = message.guild.member(message.author);
  

  var messagesplit = message.content.split(" ")
  var member = message.mentions.members.first()
  var reason = args.join(" ")
  var role = message.guild.roles.find(`name`, `Muted`);
  var perms = ""
  if(author.hasPermission(2)){
     perms = "true"
  }
  if(perms !== "true"){
     var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(':x: Invalid :x:')
     .addField('Info', 'You do not have permission to mute users.')
     return message.channel.send(embed);
  } else if(!member){ 
     var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(':x: Invalid :x:')
     .addField('Info', 'You did not mention a user to mute.')
     return message.channel.send(embed);
 }else if(!reason){
     var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(':x: Invalid :x:')
     .addField('Info', 'You did not specify a reason to mute.')
     return message.channel.send(embed);
 }else if(author.highestRole.position < member.highestRole.position){
     var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(':x: Invalid :x:')
     .addField('Info', 'You seem to be a lower or equal rank to the user you wish to kick.')
     return message.channel.send(embed);

} else if(author.hasPermission(2)) {
   member.addRole(role)
   let channel = message.guild.channels.find(`name`, `bot-logs`)
    var embed = new Discord.RichEmbed()
    .setDescription("Results")
    .addField("User was successfully muted", member)
    .addField("Staff who muted this user", message.author.toString(), true)
    .addField("Reason", reason, true)
    .setColor(0xff5148)
   return  channel.send(embed);

  }else { 
    var embed = new Discord.RichEmbed()
    .setDescription("Results")
    .addField("Uh Oh", "You do not seem to have permission to mute users.")
    .setColor(0xff5148)
   return  message.channel.send(embed);
  }
 
}


