const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const cookies = require('cookiesdb');
const sql = require("sqlite");
sql.open("./descriptions.sqlite");
sql.open("./rates.sqlite");
sql.open("./money.sqlite");
const prefix = "l!";



const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 36000);

client.on("ready", () => { //detects when the bot boots
	console.log("Successfully booted and ready for action!"); //logs the boot
	client.user.setGame(prefix + "help / LoE") //sets the game the bot is playing
	const tableSource = new EnmapLevel({name: "descriptions"});
	const descriptions = new Enmap({provider: tableSource});
	client.descriptions = new Enmap({name: "descriptions"});
});

client.on("guildMemberAdd", member => { //activates when a user is added to a guild
    const welcomechannel = member.guild.channels.find('name', 'bot-log');
     if (welcomechannel) { //checks if the welcome channel exists
         welcomechannel.send({embed: {
            color: 0x008000,
            description: '**' + member.user.tag + '** has `joined` the server.  (' + member.user.id + ')',
            timestamp: new Date(),
            footer: {
              icon_url: member.user.avatarURL,
              text: "Member Joined!"
            }
        }
                             });
            }
});

  
client.on("guildMemberRemove", member => { //activates when a user leaves a guild
    const welcomechannel = member.guild.channels.find('name', 'bot-log');
     if (welcomechannel) { //checks if the welcome channel exists
         welcomechannel.send({embed: {
            color: 0xFC0000,
            description: '**' + member.user.tag +  '** has `left` the server.(' + member.user.id + ')',
            timestamp: new Date(),
            footer: {
              icon_url: member.user.avatarURL,
              text: "Member Left!"
            }
        }
    });
            }
});


client.on("message", message => { //activates when a message is sent
  if (message.author.bot) return; //returns if the message author is the bot
  if(message.content.startsWith(prefix)){ //checks if the message starts with the variable `prefix`
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    
        if (message.content.includes('https://discord.gg/')) { 
    message.delete(); // Delete the message
      message.reply('NO INVITE LINKS') // Sends this message
  }
    
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, Discord, prefix);
  } catch (err) {
    console.error(err);
  }
 }
});


client.login(process.env.SECRET); //the token to log the bot in
