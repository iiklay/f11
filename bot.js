const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
if (message.content === '!help') {
              var embed  = new Discord.RichEmbed()
                .addField("**LINKS**" ,":no_entry_sign: تم اضافه منع الروابط :no_entry_sign: ")
                .addField("broadcast (bc)" ,"**الاستخدام:** ``$broadcast <الرساله> , $bc <الرساله>``")
                .addField("**BAN**" ,"**الاستخدام:** ``$ban <المستخدم>``")
                .addField("**KICK**" ,"**الاستخدام:** ``$kick <المستخدم> ``")
                .addField("**ِAVATAR**" ,"**الاستخدام:** ``$avatar``")
                .addField("**INFO**", "**الأستخدام :** ``$info``")
                .addField("**SAY**" ,"**الاستخدام:** ``$say <الرساله>``")
                .addField("**ID**" ,"**ال��ستخدام:** ``$id``")
                .addField("**SERVER**" ,"**الاستخدام:** ``$server``")
                .addField("**INVITE**" ,"**الاستخدام:** ``$invite <لأضافه البوت لأى سيرفر>``")
                .addField("**SUPPORT**" ,"**الاستخدام:** ``$suppport <سيرفر دعم الفنى>``")
                .addField("**QA**" ,"**الاستخدام:** ``$qa <السؤال>``  ")
                .addField("**CLEAR**" ,"**الاستخدام:** ``$clear <العدد>``")
                .addField("**PING**", "**الأستخدام:** ``$ping``")
                .addField("**SERVERNAME**", "**الأستخدام:** ``$servername``")
                .addField("**CUT_TWEET**", "**الاستخدام** ``$ct``")
                .addField("**TWEET**", "**الاستخدام** ``$tweet <الرساله>``")
                .addField("**NO INVITE LINKE**","تم اضافة خاصية منع الانفيتات ")
                .addField("**LOGIN**" , " تم اضافة خاصية التفعيل لطلب تشغيلها في السيرفر كلم المبيرمجين ")
                .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
  if(message.content === ('clear')) {
  let modRole = message.guild.roles.find("name", "Admin");
  if (!modRole) return message.reply('You do not have Admin Role'); {
    }
  const params = message.content.split(" ").slice(1)
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
  }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
});
client.on('message', msg => {
  if (msg.content === '$invite') {
    msg.reply('link');
  }
});
client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');
  }
});
client.on("message", message => {
    var prefix = "!";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Name Bot."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
// Your Avatar URL!
client.on('message', message => {
    if (message.content === "!Avatar") {
    message.reply(message.author.avatarURL); 
    }
});
client.on('message', msg => {
  if (msg.content === '!suppport') {
    msg.reply('السيرفر للمساعده,https://discord.gg/ewCq8jt');
  }
});
client.on("message", message => {
      if (message.content === "!ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
    client.on('message', message => {
     if (message.content === "!id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Name Bot.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
var prefix = "!";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
});
client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' Bye ..',
}}).catch(console.error);
  }
);
client.on("message", (message) => {
    if (message.content.startsWith("*ban ")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " لقد تم طرده بنجاح :wave: ");
        }).catch(() => {
            message.channel.send(":x: هناك خطاء حاول مره أخرى:x: ");
        });
    }
});

    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "id")) {
                               let user = message.mentions.users.first();
         var human = message.mentions.users.first();
            var author;
            if(human) {
                author = human;
            } else {
                author = message.author;
            }
          var mentionned = message.mentions.members.first();
             var ah;
            if(mentionned) {
                ah = mentionned;
            } else {
                ah = message.member;
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!id[getvalueof.id]) id[getvalueof.id] = {textrank: 0,points: 1};
            let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
            fs.readFile("./id/rank.png", function (err, Background) {
            if (err) return console.log(err);
            let id = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
 
});
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        // N A M E  |  S H A D O W
                        ctx.font = 'bold 18px Arial';
                        ctx.fontSize = '18px';
                        ctx.fillStyle = "#000000";
                        ctx.textAlign = "center";
                        ctx.fillText(`${getvalueof.username}`, 253, 79);
 
                        // N A M E
                        ctx.font = 'bold 18px Arial';
                        ctx.fontSize = '18px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${getvalueof.username}`, 253, 77);
 
 
                        // T E X T  R A N K
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${id[getvalueof.id].textrank}`, 252, 124);
 
                        // P O I N T S
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${id[getvalueof.id].points}`, 253, 171);
 
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 26, 69, 93, 93);
                       
message.channel.sendFile(canvas.toBuffer());
 
});
});
}
});
});


client.login("Mzc1OTE3NDc1NTc5Mjk3Nzky.DN244Q.MuueoiiKgxK6J7t0fFzXGosWS6k");