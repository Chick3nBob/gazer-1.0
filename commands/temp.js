exports.run = (client, message, Discord, prefix) => {
  var split = message.content.split(" ");
  var mentioned = message.mentions.users.first();
var A = 4;
var B = 3;
var C = 2;
var D = 1;
var points = 0;
  
  if(!mentioned) {
    var embed = new Discord.RichEmbed()
    .setDescription('Why no mention??')
    return message.channel.send(embed)
  }
  
if(split[2] === "A" || split[2] === "B" || split[2] === "C" || split[2] === "D"){
    if(split[2] === "A"){ 
        points = A;
    } else if(split[2] === "B"){
        points = B;
    } else if(split[2] === "C"){
        points = C;
    } else {
        points = D;
    }
    message.reply(`Successfully detected the letter ${split[2]} and its associated value ${points}. `);
} else { 
   message.reply(`Error, ${split[2]} is invalid.`);
}
}