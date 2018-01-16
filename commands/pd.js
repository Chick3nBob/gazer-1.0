exports.run = (client, message, Discord, prefix) => {
  const cookies = require('cookiesdb');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const items = require('../items.json');
  const moment = require('moment');
  const am = message.author.id
  const me = "228349229230325760"
  const mee = "257351188310130698"
  
  if (message.author.id != me && message.author.id != mee) return message.reply('Sorry but this command is not ready for public.')
  
  if (message.author.id === me || message.author.id === mee) {
    cookies.updateCookies(am, 250).then(i => {
      message.reply('`$250` has been added to your account. You now have `$' + i.value + '`')
    })
}
}
