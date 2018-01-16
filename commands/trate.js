exports.run = (client, message, Discord, prefix) => {
  const sql = require("sqlite");
  sql.open("./rates.sqlite");
  var split = message.content.split(" ")
  var mentioned = message.mentions.members.first();
  var id = "257351188310130698"
  var rate = split[2];
  var week = split[3];


    let member = message.mentions.users.first();
  
    if(message.author.id !== "220913972251983872") {
        var embed = new Discord.RichEmbed()
        .setDescription('**Invalid:**\nYou are not Devwarlt')
        return message.channel.send(embed);
      return;
    }

    if(!mentioned) {
        var embed = new Discord.RichEmbed()
        .setDescription('**Invalid:**\nYou did not mention a member to rate.')
        return message.channel.send(embed);
      if(message.content) return;
    }
  
    if(!rate){
      var embed = new Discord.RichEmbed()
      .setDescription('**Invalid**\nYou did not provide a proper rate.')
      return message.channel.send(embed);
      if(message.content) return
    }
    if(!week){
      var embed = new Discord.RichEmbed()
      .setDescription('**Invalid**\nYou did not provide a proper week.')
      return message.channel.send(embed);
      if(message.content) return;
    }
  var A = 4;
  var B = 3;
  var C = 2;
  var D = 1;
  var points = 0
  if(rate == "A" || rate == "B" || rate == "C" || rate == "D"){
    if(rate == "A"){
      points = A;
    } else if(rate == "B"){
      points = B;
    } else if(rate == "C"){
      points = C;
    } else {
      points = D;
    }
  sql.get(`SELECT * FROM rates WHERE userId ="${mentioned.user.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO rates (userId, rate, week, points, tag) VALUES (?, ?, ?, ?, ?)", [mentioned.user.id, rate, week, points, mentioned.user.tag]);
    } else {
      sql.run(`UPDATE rates SET rate = "${rate}" WHERE userId = ${mentioned.user.id}`);
      sql.run(`UPDATE rates SET week = "${week}" WHERE userId = ${mentioned.user.id}`);
      sql.run(`UPDATE rates SET points = ${row.points + points} WHERE userId = ${mentioned.user.id}`);
      sql.run(`UPDATE rates SET tag = ${mentioned.user.tag} WHERE userId = ${mentioned.user.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS rates (userId TEXT, rate TEXT, week TEXT, points INT, tag TEXT)").then(() => {
      sql.run("INSERT INTO rates (userId, rate, week, points, tag) VALUES (?, ?, ?, ?, ?)", [mentioned.user.id, rate, week, points, mentioned.user.tag]);
    });
  });
  message.channel.send(mentioned.user.tag + " has been rated successfully.");
  }
}