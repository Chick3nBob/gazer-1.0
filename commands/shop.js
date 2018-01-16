exports.run = (client, message, Discord, prefix) => {
  const sql = require("sqlite");
  sql.open("./shop.sqlite");
  var ok = false;
  sql.get(`SELECT * FROM shop WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO shop (userId, black, red, skyblue, limegreen, green) VALUES (?, ?, ?, ?, ?, ?)", ["n", "n", "n", "n", "n", "n"]);
    } else {

    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS shop (userId TEXT, black TEXT, red TEXT, skyblue TEXT, limegreen TEXT, green TEXT)").then(() => {
      sql.run("INSERT INTO shop (userId, black, red, skyblue, limegreen, green) VALUES (?, ?, ?, ?, ?, ?)", ["n", "n", "n", "n", "n", "n"]);

    });
  });
  /*if(ok === false){
    message.reply("It appears you aren't in our database or haven't been loaded properly. Please retry this command. If the issue persists contact allte#4008.");
    return;
  }*/
  const cookies = require('cookiesdb');
  const me = "228349229230325760"
   let cont = message.content.slice(prefix.length).split(" "); // This slices off the prefix, then stores everything after that in an array split by spaces.
  let args = cont.slice(1);
  const items = require('../items.json');
  // Variables
        let categories = []; // Lets define categories as an empty array so we can add to it.

        //Set to me only

  
       
  
        // We want to make it so that if the item is not specified it shows a list of items
        if (!args.join(" ")) { // Run if no item specified...

            // First, we need to fetch all of the categories.
            for (var i in items) { // We can do this by creating a for loop.

                // Then, lets push the category to the array if it's not already in it.
                if (!categories.includes(items[i].type)) {
                    categories.push(items[i].type)
                }

            }

            // Now that we have the categories we can start the embed
            const embed = new Discord.RichEmbed()
                .setDescription(`Available Items`)
                .setColor(0xD4AF37)

            for (var i = 0; i < categories.length; i++) { // This runs off of how many categories there are. - MAKE SURE YOU DELETE THAT = IF YOU ADDED IT.

                var tempDesc = '';

                for (var c in items) { // This runs off of all commands
                    if (categories[i] === items[c].type) {

                        tempDesc += `${items[c].name} - $${items[c].price} - ${items[c].desc}\n`; // Remember that \n means newline

                    }

                }

                // Then after it adds all the items from that category, add it to the embed
                embed.addField(categories[i], tempDesc);

            }

            // Now we need to send the message, make sure it is out of the for loop.
            return message.channel.send({
                embed
            }); // Lets also return here.

            // Lets test it! x2

        }

        // Buying the item.

        // Item Info
        let itemName = '';
        let itemPrice = 0;
        let itemDesc = '';

        for (var i in items) { // Make sure you have the correct syntax for this.
            if (args.join(" ").trim().toUpperCase() === items[i].name.toUpperCase()) { // If item is found, run this...
                itemName = items[i].name;
                itemPrice = items[i].price;
                itemDesc = items[i].desc;
            }
        }

        // If the item wasn't found, itemName won't be defined
        if (itemName === '') {
            return message.channel.send(`**Item ${args.join(" ").trim()} not found.**`)
        }

        // Now, lets check if they have enough money.
        cookies.fetchCookies(message.author.id).then((i) => { // Lets fix a few errors - If you use the unique guild thing, do this.
            if (i.value <= itemPrice) { // It's supposed to be like this instead...

                return message.channel.send(`**You don't have enough money for this item.**`);
            }
          
          if (cookies.value === 0) {
            message.reply('Sorry but you have no more money.')
          }

            cookies.updateCookies(message.author.id, parseInt(`-${itemPrice}`)).then((i) => {

                message.channel.send('**You bought ' + itemName + '!**');

                // You can have IF statements here to run something when they buy an item.
                if (itemName === 'Pizza') {
                  message.channel.send('https://vignette.wikia.nocookie.net/thehungergames/images/f/f4/Pizza.png/revision/latest?cb=20140715165127')
                }
              
              if (itemName === 'Black') {
                message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "Black")); //Adds The Color Role Black To Who evers buys it.
                sql.run(`UPDATE shop SET black = "y" WHERE userId = ${message.author.id}`);
              }
              if (itemName === "Burger") {
                message.channel.send('https://www.redrobin.com/content/dam/web/menu/tavern-menu/tavern-double-burger-1100.jpg')
              }
              if (itemName === "Red") {
                message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "Red"));
                sql.run(`UPDATE shop SET red = "y" WHERE userId = ${message.author.id}`);
              }
              if(itemName === "Green") {
                message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "Green"));
                sql.run(`UPDATE shop SET green = "y" WHERE userId = ${message.author.id}`);
              }
              if(itemName === "Lime Green") {
                message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "Lime Green"));
                sql.run(`UPDATE shop SET limegreen = "y" WHERE userId = ${message.author.id}`);
              }
              if (itemName === "Sky Blue") {
                message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "Sky Blue"));
                sql.run(`UPDATE shop SET skyblue = "y" WHERE userId = ${message.author.id}`);
              }
            })

        })
}