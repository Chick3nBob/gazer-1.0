exports.run = (client, message, Discord, prefix) => {
if (message.channel.type === "dm") return;
  
  var member = message.mentions.members.first();
  const author = message.guild.member(message.author);
  const args = message.content.split(" ").slice(2);
  var reason = args.join(" ")
  var perms = ""
   if(author.hasPermission(2)){
      perms = "true"
   }
   if(perms !== "true"){
      var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(':x: Invalid :x:')
     .addField('Info', 'You do not have permission to kick users!')
     return message.channel.send(embed);
      
   }else if(!member){ 
     
     var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(':x: Invalid :x:')
     .addField('Info', 'You did not mention a user to kick.')
     return message.channel.send(embed);
   } else if (!reason) {
    var embed = new Discord.RichEmbed()
                     .setDescription(":x: Invalid :x:")
                     .setColor('RANDOM')
                     .addField("Info", "You did not supply a reason to kick the user.")
                     return message.channel.send(embed);
   } else if (author.highestRole.position < member.highestRole.position){
    var embed = new Discord.RichEmbed()
                     .setDescription(":x: Invalid :x:")
                     .setColor('RANDOM')
                     .addField("Info", "Your role is either the same or lower than the user you wish to kick.")
                     return message.channel.send(embed);
                     return;
   } else if(author.hasPermission(2)) {
     
    let name = message.guild.name
    member.send("Hey. You have been kicked from " + name + " for: `" + reason + "`. Too bad, so sad.");
   member.kick(reason);
   let channel = message.guild.channels.find(`name`, `bot-logs`);
     var embed = new Discord.RichEmbed()
                 .setDescription(":white_check_mark: Kick Sucess :white_check_mark:")
                 .addField("Staff Member", message.author.tag, true)
                 .addField("User", member, true)
                 .addField("Reason", reason)
                 .setColor('RANDOM')
                return channel.send(embed);
  }
}
