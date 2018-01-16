exports.run = (client, message, Discord, prefix) => {
  if(message.author.id === "257351188310130698"){
  const split = message.content.split(" ")
  let role = message.guild.roles.find(`name`, split[2]);
  let role2 = ""
  let role3 = ""
  let author = message.guild.member(message.author);
  if(split[3]){
    role2 = message.guild.roles.find(`name`, split[3]);
  }
  if(split[4]){
    role3 = message.guild.roles.find(`name`, split[4]);
  }
  let member = message.mentions.members.first()
  if(!role){
    message.channel.send("Role #1 is invalid");
  }else if(role2 != "" && !role2){
    message.channel.send("Role #2 is invalid")
  }else if(role3 != "" && !role3){
    message.channel.send("Role #3 is invalid")
  }else if(!member){
    message.channel.send("Invalid Member");
  }else if(split[5]){
    message.channel.send("Too many roles.")
  } else if(message.author.id === "257351188310130698"){
  member.addRole(role).catch(console.error);
  if(role2 == "" && role3 == ""){
  var embed = new Discord.RichEmbed()
  .setDescription(role + " was successfully given to " + member)
  .addField("Giver of the role", message.author.toString())
  return message.channel.send(embed)
  } else if(role2 != "" && role3 == ""){
    member.addRole(role).catch(console.error);
    member.addRole(role2).catch(console.error);
    var embed = new Discord.RichEmbed()
  .setDescription(role + " and " + role2 + " were successfully given to " + member)
  .addField("Giver of the roles", message.author.toString())
  return message.channel.send(embed)
    
  } else {
    member.addRole(role).catch(console.error);
    member.addRole(role2).catch(console.error);
    member.addRole(role3).catch(console.error);
    var embed = new Discord.RichEmbed()
  .setDescription(role + ", " + role2 + ", and " + role3 + " were successfully given to " + member)
  .addField("Giver of the roles", message.author.toString())
  return message.channel.send(embed)
  }
  } else { message.channel.send("You don't seem to have enough permission to use this.")}
} else { message.reply("you cannot do this")}
}