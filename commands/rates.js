exports.run = (client, message, Discord, prefix) => {
  var  lb = [];
  var i = 1;
const sql = require("sqlite");
  sql.open("./rates.sqlite");
  message.channel.send("Please wait a moment...")
  sql.each(`SELECT * FROM rates ORDER BY week DESC LIMIT 20`, (err, row) =>{
    lb.push(`${i++}. ${row.tag} - Rate: ${row.rate}, Week: ${row.week}, Total Points: ${row.points}`);
  })
    setTimeout(() => {
      message.channel.send(".");
      message.channel.fetchMessages({
 limit: 2,
}).then((messages) => {
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
      });
    }, 3400);
    setTimeout(() => {
      let embed = new Discord.RichEmbed()
              .addField("Here is a list of how the team is currently doing", lb.join("\n\n")); 
              console.log(lb)
              return message.channel.send(embed);
          }, 3500);
    
}