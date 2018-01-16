exports.run = (client, message, Discord, prefix) => {
  const sql = require("sqlite");
  sql.open("./shop.sqlite");
  var red = ":x:Red:x:";
  var black = ":x:Black:x:";
  var green = ":x:Green:x:";
  var limegreen = ":x:Lime Green:x:";
  var skyblue = ":x:Sky Blue:x:";
  
  sql.get(`SELECT * FROM shop WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      message.reply("It appears that you have not bought any colours.");
      return;
    } else {
      message.reply(`${row.red} ${row.black} ${row.green} ${row.limegreen} ${row.skyblue}`);
      if(row.red == "y"){ red = ":white_check_mark:Red:white_check_mark:" }
      if(row.black == "y"){ black = ":white_check_mark:Black:white_check_mark:" }
      if(row.green == "y"){ green = ":white_check_mark:Green:white_check_mark:" }
      if(row.limegreen == "y"){ limegreen= ":white_check_mark:Lime Green:white_check_mark:" }
      if(row.skyblue == "y"){ skyblue = ":white_check_mark:Sky Blue:white_check_mark:" }
    }
  });
  var embed = new Discord.RichEmbed()
  .setTitle("Colour Menu")
  .addField("Options", `${red}\n${black}\n${green}\n${limegreen}\n${skyblue}`)
  return message.channel.send(embed);
}