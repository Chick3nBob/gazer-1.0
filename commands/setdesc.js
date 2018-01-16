exports.run = (client, message, Discord, prefix) => {
  const sql = require("sqlite");
  sql.open("./descriptions.sqlite");
 var args = message.content.split(" ").slice(1);
 var cnt = args.join(" ");
  if(!cnt){
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(":x:Error:x:")
    .addField("Type of Error", "You need to input some text you wish to have as your personal description.")
    return message.channel.send(embed);
  }
  sql.get(`SELECT * FROM descriptions WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO descriptions (userId, desc) VALUES (?, ?)", [message.author.id, cnt]);
    } else {
      sql.run(`UPDATE descriptions SET desc = "${cnt}" WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS descriptions (userId TEXT, desc TEXT)").then(() => {
      sql.run("INSERT INTO descriptions (userId, desc) VALUES (?, ?)", [message.author.id, cnt]);
    });
  });
  message.reply("Your description has been set successfully.");
}