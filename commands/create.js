exports.run = (client, message, Discord, prefix) => {
  var Frame  = require('canvas-to-buffer')
  var ready = false;
var Buffer = require('buffer/').Buffer
var fs = require('fs')
var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(500, 500)
  , ctx = canvas.getContext('2d');
 
ctx.font = '10px Impact';
  var ready = false;
  var img = new Image;
  var dir = ``;

  const download = require('image-downloader')
const options = {
  url: `${message.author.avatarURL}`,
  dest: 'images'
}
download.image(options).then(({ filename, image }) => {
  dir = `images/${filename}`;
  }).catch((err) => {
    throw err
  });
  img.onload = function() {
    ctx.drawImage(img, img.length, img.width);
    ready = true;
  }
  img.src = `${message.author.avatarURL}`;
  



if(ready == true){
console.log('<img src="' + canvas.toDataURL() + '" />');


 let out = fs.createWriteStream('images' + '/text.png')
   let stream = canvas.pngStream();

stream.on('data', function(chunk){
  out.write(chunk);
});

stream.on('end', function(){
  console.log('saved png');
});

 message.channel.send({
    files: [
      "./images/text.png"
    ]
  });
}
}
