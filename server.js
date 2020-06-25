const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//الحين حط اي كود تريد×_×
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "السلام عليكم") {
    msg.reply("وعليكم السلام");
  }
});
client.on("ready", () => {
  console.log(`logged in as ${client.user.tag}¡`);
});

client.on("message", msg => {
  if (msg.content === "هلا والله") {
    msg.reply("هلا بيك");
  }
});
client.on("message", msg => {
  if (msg.content === "prefix") {
    msg.reply("prefix = %");
  }
});
client.on("message", msg => {
  if (msg.content === prefix + "invite") {
    msg.replay("رابط اضافة البوت : https://discord.com/api/oauth2/authorize?client_id=719608104408318032&permissions=8&scope=bot"); 
//كود الحالة
client.on("ready", () => {
console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(`%help`);
client.user.setStatus("Online"); // الحالة
});
//شرح الاوامر
//online => online
//Do Not Disturb => dnd
//Idle => idle
//offline => offline

//كود طرد شخص
client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if (!reason) return message.reply("**اكتب سبب الطرد**");
    if (!message.guild.member(user).kickable)
      return message.reply(
        "**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**"
      );
    if (
      message.mentions.members.first().highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send("ما تقدر تطرد شخص رتبته اعلى منك!");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});
//كود اليوزر
client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    const membre = message.mentions.members.first() || message.member;
    let embed1 = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setTitle(`${membre.user.username} :`)
      .setThumbnail(membre.user.avatarURL)
      .addField(
        "`موعد دخولك للدسكورد :`",
        `__${moment.utc(membre.user.createdAt).format("LL")}__`,
        true
      )
      .addField(
        "`موعد دخولك للسيرفر :`",
        `__${moment.utc(membre.joinedAt).format("LL")}__`,
        true
      )
      .setFooter(
        membre.user.id,
        "https://images-ext-1.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif"
      );

    message.channel.sendEmbed(embed1);
  }
});
//كود الافتار او الصورة
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "avatar")) {
    const mention = message.mentions.users.first();

    if (!mention) return console.log("");
    let embed = new Discord.RichEmbed()
      .setColor("BLAC")
      .setAuthor(
        `${mention.username}#${mention.discriminator}`,
        `${mention.avatarURL}`
      )
      .setTitle("Avatar Link")
      .setURL(`${mention.avatarURL}`)
      .setImage(`${mention.avatarURL}`)
      .setFooter(
        `Requested By ${message.author.tag}`,
        `${message.author.avatarURL}`
      );
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setTitle("Avatar Link")
      .setURL(message.guild.iconURL)
      .setImage(message.guild.iconURL)
      .setFooter(
        `Requested By ${message.author.tag}`,
        message.author.avatarURL
      );
    message.channel.send(doma);
  } else if (message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    client.fetchUser(avt).then(user => {
      avt = user;
      let embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor(`${avt.tag}`, avt.avatarURL)
        .setTitle("Avatar Link")
        .setURL(avt.avatarURL)
        .setImage(avt.avatarURL)
        .setFooter(
          `Requested By ${message.author.tag}`,
          message.author.avatarURL
        );
      message.channel.send(embed);
    });
  }
});
//كود معلومات البوت
client.on("message", message => {
  if (message.content.startsWith(prefix + "botinfo")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("#00F0FF")
        .setTitle("INFO |__=_=__|")
        .addField(
          "``My Ping``",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField("``servers``", [client.guilds.size], true)
        .addField("``channels``", `[ ${client.channels.size} ]`, true)
        .addField("``Users``", `[ ${client.users.size} ]`, true)
        .addField("``My Name``", `[ ${client.user.tag} ]`, true)
        .addField("``My ID``", `[ ${client.user.id} ]`, true)
        .addField("``My Prefix``", `[ % ]`, true)
        .addField("``My Language``", `[ JavaScript ]`, true)
        .addField("``Bot Version``", `[ v1.0 ]`, true)
    });
  }
});
//كود إرسال رسالة على الخاص
client.on("message", msg => {
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if (cmd === `${prefix}dm`) {
    let mentions = msg.guild.member(
      msg.mentions.users.first() || msg.guild.members.get(args[0])
    );
    if (!mentions)
      return msg.reply("**منشن العضو**").then(men => {
        men.delete(2222);
        msg.delete();
      });
    let args2 = args.join(" ").slice(22);
    if (!args2)
      return msg.reply("**اكتب الرسالة**").then(am => {
        am.delete(2222);
        msg.delete();
      });
    let emb = new Discord.RichEmbed()
      .setTitle("**DM**")
      .addField("**الرسالة**", args2)
      .addField("**الرسالة لـ**", mentions)
      .addField("**من قبل**", msg.author)
      .setDescription(`**هل انت متاْكد برسالتك؟
✔ | نعم

❌ | لا**`);
    msg.channel.send(emb).then(od => {
      od.react("✔")
        .then(() => od.react("✔"))
        .then(() => od.react("❌"));
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "✔" && user.id === msg.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "❌" && user.id === msg.author.id;

      let reaction1 = od.createReactionCollector(reaction1Filter, {
        time: 12000
      });
      let reaction2 = od.createReactionCollector(reaction2Filter, {
        time: 12000
      });
      reaction2.on("collect", r => {
        msg.reply("**تم الغاء رسل رسالتك بنجاح**").then(cn => {
          cn.delete(2222);
          msg.delete();
        });
        od.delete(2222);
      });
      reaction1.on("collect", r => {
        let embd = new Discord.RichEmbed().setTitle("**DM**")
          .setDescription(`** الرسالة نوع وش؟ :arrow_down:
🚩 | امبد

✨ | بدون امبد
**`);
        msg.delete();
        od.delete(2222);
        msg.channel.send(embd).then(bo => {
          bo.react("🚩")
            .then(() => bo.react("🚩"))
            .then(() => bo.react("✨"));
          let r1 = (reaction, user) =>
            reaction.emoji.name === "🚩" && user.id === msg.author.id;
          let r2 = (reaction, user) =>
            reaction.emoji.name === "✨" && user.id === msg.author.id;

          let rec1 = bo.createReactionCollector(r1, { time: 12000 });
          let rec2 = bo.createReactionCollector(r2, { time: 12000 });
          rec1.on("collect", r => {
            let embde = new Discord.RichEmbed()
              .setTitle("**رسالة**")
              .addField("**الرسالة**", args2)
              .addField("**من قبل**", msg.author);
            bo.delete(2222);
            msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(op => {
              op.delete(2222);
              msg.delete();
            });
            mentions.send(embde);
          });
          rec2.on("collect", r => {
            mentions.send(args2);
            msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(ede => {
              ede.delete(2222);
              bo.delete(2222);
              msg.delete();
            });
          });
        });
      });
    });
  }
});
//كود منع دخول البوتات

var Enmap = require("enmap");
client.antibots = new Enmap({ name: "chat" });
var antibots = client.antibots;
var julian = client;

julian.on("message", codes => {
  if (codes.content.startsWith(prefix + "antibots on")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "On"
    });

    codes.channel.send("**تم تفعيل خاصية منع دخول البوتات 🔐 **");
  }
  if (codes.content.startsWith(prefix + "antibots off")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "Off"
    });
    codes.channel.send("**تم الغاء خاصية منع دخول البوتات 🔓 **");
  }
});

julian.on("guildMemberAdd", member => {
  if (!antibots.get(`${member.guild.id}`)) {
    antibots.set(`${member.guild.id}`, {
      onoff: "Off"
    });
  }
  if (antibots.get(`${member.guild.id}`).onoff == "Off") return;
  if (member.user.bot) return member.kick();
});

client.on("message", async message => {
  const moment = require("moment"); //npm i moment
  const ms = require("ms"); //npm i ms
  var time = moment().format("Do MMMM YYYY , hh:mm");
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
    hours = currentTime.getHours() + 3,
    minutes = currentTime.getMinutes(),
    done = currentTime.getMinutes() + duration,
    seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }
});
//كود الوقت
client.on("message", message => {
  if (message.content.startsWith(prefix + `time`)) {
    let embed = new Discord.RichEmbed()
      .setDescription("الوقت حاليآ")
      .addField("الوقت", message.createdAt);
    message.channel.send(embed);
  }
});
//كود معلومات السيرفر
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "moreinfo") {
    var server = client.guilds.find(
      c => c.id === message.content.split(" ")[1]
    );
    if (!server) return message.channel.send("انا لست داخل هذا السيرفر 🧨");
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("#36393e")
        .setTitle(`📖 **${server.name}** Info`)
        .setImage(
          `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png?size=1024`
        )
        .addField(
          "**Members Cout:**",
          `**${server.memberCount -
            server.members.filter(m => m.user.bot).size}** | **${
            server.members.filter(m => m.user.bot).size
          }** bots`,
          true
        )
        .addField(
          `**Channels [${server.channels.size}]**`,
          `**${
            server.channels.filter(m => m.type === "text").size
          }** Text | **${
            server.channels.filter(m => m.type === "voice").size
          }** Voice | **${
            server.channels.filter(m => m.type === "category").size
          }** Category`,
          true
        )
        .addField("**Server Region:**", server.region, true)
        .addField("**Server Owner**", `**${server.owner}**`, true)
        .addField(`**Roles Count [${server.roles.size}]**`, `** **`, true)
        .addField(
          `**verification Level [ ${server.verificationLevel} ]**`,
          `** **`,
          true
        )
    );
  }
});
//كود الرد التلقائي
client.on("message", msg => {
  if (msg.content === "hi") {
    msg.reply("hi");
  }
}); //بنستخدم هاذا الكود لانو يمنشن الشخص
//كود يبين اونر البوت
client.on("message", async message => {
  if (message.content.startsWith(prefix + "Owner")) {
    let i = client.users.size;
    if (message.author.id !== "588434790655590427")
      return message.channel.send("انت لست صاحب البوت ❌");
    message.channel.send("**انت صاحب البوت تم الاثبات✅**");
  }
});

//Ping
client.on("message", message => {
  if (message.content === prefix + "ping") {
    const embed = new Discord.RichEmbed()

      .setColor("#00FFF1")
      .addField(
        "``سرعة أتصال الــبوت`` ",
        `${Date.now() - message.createdTimestamp}` + " ms`"
      );

    message.channel.sendEmbed(embed);
  }
});
//Soon....
client.on("message", msg => {
  if (msg.content === prefix + "help") {
    msg.reply("نحن متاسفون جدا لكن يتم العمل على الكود حاليا");
  }
});
//Hide/Show Channel
client.on("message", message => {
  /// edit fox
  if (message.content === prefix + "hidechannel") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("ليس لديك صلاحية ادمن :x:");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: false
    });
    message.channel.send("تم اخفاء الشات ! :white_check_mark:  "); ///edit fox
  }
});

client.on("message", message => {
  if (message.content === prefix + "showchannel") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("ليست لديك صلاحية ادمن :x:");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: true
    });
    message.channel.send("تم اضهار الشات ");
  }
});
//Calculator
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;

client.on("message", msg => {
  if (msg.content.startsWith(prefix + "حاسبة")) {
    // هنا امر الحساب تقد تغيير وتحط اي كلمة غير
    let args = msg.content.split(" ").slice(1);
    const question = args.join(" ");
    if (args.length < 1) {
      msg.reply("رجاءا.ضع العملية الحسابية ");
    } else {
      let answer;
      try {
        answer = math.eval(question);
      } catch (err) {
        msg.reply(`Error: ${err}`);
      }

      const embed = new Discord.RichEmbed()
        .addField("**السؤال**: ", `**${question}**`, true)
        .addField("**الناتج**: ", `**${answer}**`, true)
        .setFooter("Snow-Bot حاسبه");
      msg.channel.send(embed);
    }
  }
});
//كود المسح مع رقم
client.on("message", message => {
  var prefix = "%";
  var args = message.content.substring(prefix.length).split(" ");
  if (message.content.startsWith(prefix + "مسح")) {
    if (!args[1]) {
      let x5bz1 = new Discord.RichEmbed()
        .setDescription("#clear <number>")
        .setColor("#0000FF");
      message.channel.sendEmbed(x5bz1);
    } else {
      let messagecount = parseInt(args[1]);
      message.channel
        .fetchMessages({ limit: messagecount })
        .then(messages => message.channel.bulkDelete(messages));
      message.channel
        .fetchMessages({ limit: messagecount })
        .then(messages => message.channel.bulkDelete(messages));
      message.channel
        .fetchMessages({ limit: messagecount })
        .then(messages => message.channel.bulkDelete(messages));
      let x5bz2 = new Discord.RichEmbed()
        .setColor("#008000")
        .setDescription(":white_check_mark: | Delete " + args[1] + " Message!");
      message.delete("..");
      message.channel.sendEmbed(x5bz2);
    }
  }
});
//Warn
client.on("message", message => {
  if (message.content.startsWith(prefix + "warn")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(`You Don't Have Permission`);
    let user = message.mentions.users.first();
    if (!user)
      return message
        .reply("**Mention The User Please !**")
        .then(message => message.delete(4500));
    let reason = message.content.split(" ").slice(2);

    if (message.guild.member(user).hasPermission("ADMINISTRATOR"))
      return message
        .reply(`**You Can't Warn This User**`)
        .then(message => message.delete(5000));
    let embed = new Discord.RichEmbed()
      .setTitle(":warning: **You Were warned!**")
      .addField(reason)
      .setFooter(
        `${message.guild.iconURL} ${message.guild.name} | ${message.createdAt}`
      );
    user.sendEmbed(embed);
    message.channel.send(`**This User Has Ben Warned!:warning:**`);
  }
}); ///قفل الشات وفتحو
client.on("message", message => {
  if (message.content === prefix + "close") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**تم قفل الشات :no_entry: **");
      });
  }
  if (message.content === prefix + "open") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**تم فتح الشات :white_check_mark:**");
      });
  }
});

client.on("error", err => {
  console.log(err);
});

client.on("messageCreate", async message => {
  let args = message.cleanContent.split(" ");
  if (args[0] == `${prefix}roles`) {
    let space = "                         ";
    let roles = message.guild.roles
      .map(r => r)
      .sort((a, b) => b.position - a.position);
    let rr = roles
      .map(
        r =>
          `${r.name +
            space.substring(r.name.length) +
            message.guild.members.filter(m => m.roles.includes(r.id))
              .length} members`
      )
      .join("\n");
    await message.channel.sebd(`\`\`\`${rr}\`\`\``);
  }
});
//say
client.on("message", message => {
  //حقوق Alpha and FireKingYT and SoEdit
  if (message.author.bot) return; //حقوق Alpha and FireKingYT and SoEdit
  if (!message.content.startsWith(prefix)) return; //حقوق Alpha and FireKingYT and SoEdit
  let args = message.content.split(" ").slice(1); //حقوق Alpha and FireKingYT and SoEdit
  let x = args.join(" "); //حقوق Alpha and FireKingYT and SoEdit
  if (message.content.startsWith(prefix + "say")) {
    //حقوق Alpha and FireKingYT and SoEdit
    let FireKing1 = new Discord.RichEmbed() //حقوق Alpha and FireKingYT and SoEdit
      .setTitle("**اختار نوع الرسالة او الساي|Choose The Message Or Say Type**")
      .setDescription(`**
       📇 | Send To You Without Embed|اذا تريد الرسالة بدون  امبد
       📬 | Send To You With  Embed|اذا تريد الرسالة مع امبد
       **`); //حقوق Alpha and FireKingYT and SoEdit
    message.channel.send(FireKing1).then(b => {
      //say code يعني تكتب رسالة البوت يرسالها
      b.react("📇") //حقوق Alpha and FireKingYT and SoEdit
        .then(() => b.react("📇")) //حقوق Alpha and FireKingYT and SoEdit and SoEdit
        .then(() => b.react("📬")); //حقوق Alpha and FireKingYT and SoEdit
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "📇" && user.id === message.author.id; //حقوق Alpha and FireKingYT and SoEdit
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "📬" && user.id === message.author.id; //حقوق Alpha and FireKingYT and SoEdit
      //حقوق Alpha and FireKingYT and SoEdit
      let reaction1 = b.createReactionCollector(reaction1Filter, {
        time: 12000
      });
      let reaction2 = b.createReactionCollector(reaction2Filter, {
        time: 12000
      });
      reaction2.on("collect", r => {
        //حقوق Alpha and FireKingYT and SoEdit
        message.channel.send("" + x).then(a => {
          //حقوق Alpha and FireKingYT and SoEdit
          //حقوق Alpha and FireKingYT and SoEdit
        });
      });
      reaction1.on("collect", r => {
        let FireKing2 = new Discord.RichEmbed()
          .setDescription("" + x)
          .setFooter(`Snow Bot Embed`);
        message.channel.send(FireKing2).then(a => {});
      });
    });
  }
});
//منع النشر
client.on("message", message => {
  if (message.content.includes("discord.gg")) {
    if (!message.channel.guild) return message.reply("");
    if (!message.member.hasPermissions(["MANAGE_MESSAGES"])) {
      message.channel.send("#warn <@" + message.author.id + ">نشر");
      message.delete();
    }
  }
  if (message.content.startsWith("warn")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply();
    var member = message.mentions.members.first();
    member.warn().then(member => {
      message.channel.sendMessage("", {
        embed: {
          author: {},
          title: "بسبب النشر " + member.displayName + " تم تحذير",
          color: 490101
        }
      });
    });
  }
});
//كود انتي سبام
const antispam = JSON.parse(fs.readFileSync("./antispam.json", "utf8"));

client.on("message", async message => {
  if (antispam[message.author.id] == undefined) {
    antispam[message.author.id] = {
      lastmessage: "none"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  } else if (antispam[message.guild.id] == undefined) {
    antispam[message.guild.id] = {
      onoff: "off"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }
  let args = message.content.split(" ");
  let command = args[0];
  if (command === prefix + "antispam") {
    if (!args[1])
      return message.channel.send("**Error | Use `antispam on/off`**");
    if (args[1] === "on") {
      message.channel.send("**Done Sir Anti Spam Changed To ON**");
      antispam[message.guild.id].onoff = "on";
      fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
        if (err) throw err;
      });
    } else if (args[1] === "off") {
      antispam[message.guild.id].onoff = "off";
      fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
        if (err) throw err;
      });
      message.channel.send("**Done Sir Anti Spam Changed To OFF**");
    }
  }
});

client.on("message", async message => {
  if (antispam[message.author.id] == undefined) {
    antispam[message.author.id] = {
      lastmessage: "none"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  } else if (antispam[message.guild.id] == undefined) {
    antispam[message.guild.id] = {
      onoff: "off"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  } else if (antispam[message.author.id].lastmessage === "none") {
    return;
  } else if (antispam[message.guild.id].onoff === "off") {
    return;
  } else if (antispam[message.author.id].lastmessage === message.content) {
    return message.delete();
  }

  antispam[message.author.id].lastmessage = message.content;
  fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
    if (err) throw err;
  });
});
//كود الفويس اونلاين
/*let vojson = JSON.parse(fs.readFileSync("vojson.json", "utf8")); // ملف تخزين الفويس اونلاين
client.on("message", message => {
  if (message.content.startsWith(prefix + "setVc")) {
    let channel = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**ADMINISTRATOR ليس لديك صلاحية :rolling_eyes: ** "
      );
    let channelfind = message.guild.channels.find(c => c.name == channel);
    if (!channel)
      return message.channel.send(
        "Please Type The Voice Channel Name Example: " +
          `${prefix}setVc <Channel name>`
      );
    if (!channelfind)
      return message.channel.send(`I can't find this channel \`${channel}\``);
    vojson[message.guild.id] = {
      stats: "enable",
      chid: channelfind.id,
      guild: message.guild.id
    };
    channelfind.setName(
      `الفويس اونلاين : ${message.guild.members.filter(m => m.voiceChannel).size}` ///تعديل غير اساسي تعديل اسم روم الفويس اونلاين
    );
    message.channel.send("**Done The Voice Online  Is Turned On**");
  }
  if (message.content.startsWith(prefix + "vc off")) {
    // ايقاف الفويس اونلاين
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "ADMINISTRATOR ليس لديك صلاحية :rolling_eyes:"
      );

    message.guild.channels
      .find(gg => gg.name === vojson[message.guild.id].chid)
      .delete();
    vojson[message.guild.id] = {
      stats: "disable",
      chid: "undefined",
      guild: message.guild.id
    };
    message.channel.send("**Done The Voice Online Is Turned Off**");
  }
  fs.writeFile("./vojson.json", JSON.stringify(vojson), err => {
    if (err) console.error(err);
  });
});

client.on("voiceStateUpdate", (oldMember, newMember) => {
  if (!vojson[oldMember.guild.id])
    vojson[oldMember.guild.id] = {
      stats: "disable",
      chid: "undefined",
      guild: "undefined"
    };
  if (vojson[oldMember.guild.id].stats === "enable") {
    let ch = vojson[oldMember.guild.id].chid;
    let channel = oldMember.guild.channels.get(ch);
    if (!channel) return;
    let guildid = vojson[oldMember.guild.id].guild;
    channel.setName(
      `الفويس اونلاين : ${
        oldMember.guild.members.filter(m => m.voiceChannel).size
      }` ///تعديل غير اساسي تغير اسم روم الفويس اونلاين
    );
  }
  if (vojson[oldMember.guild.id].stats === "disable") {
    return;
  }
});*/
//كود توب السيرفرات الي فيها الب
client.on("message", message =>{
  if(message.content.startsWith(prefix + 'topservers')){ // الامر (topserver)
    let count = message.content.split(" ")[1];
    const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
    if(!count) count = 10;
    if(isNaN(count)) count = 10;
    if(count <= 0) count = 10;
    if(count > top.length) count = top.length;
    let embed = new Discord.RichEmbed();
    for(let i = 0; i < count; i++){
    embed.addField(`**${top[i].name}** : ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
    }
    embed.setTitle(`**Top ${count} Servers**`);
    embed.setThumbnail(message.author.displayAvatarURL);
    embed.setTimestamp();
    embed.setFooter(client.user.username,client.user.displayAvatarURL);
    message.channel.send(embed);
  }});
//كود معلومات السيرفر بصورة
const bbg =["https://i.pinimg.com/236x/22/75/5f/22755f39c8f4f712cfdb237a4b8f0e7a.jpg", //MA$TER_killer!!
            "https://i.pinimg.com/564x/b6/d9/94/b6d994a07f9dd19a98b52994b5fcf7d7.jpg", //MA$TER_killer!!
            "https://i.pinimg.com/236x/2d/7a/92/2d7a92241570589639f5922a5021a38e.jpg", //MA$TER_killer!!
            "https://i.pinimg.com/236x/2a/f7/f3/2af7f307ccfda22028e261657f07ca7b.jpg", //MA$TER_killer!! 
            "https://i.pinimg.com/236x/1e/08/fc/1e08fca2fc4df9f5cbca156d61b6ecd3.jpg",  //MA$TER_killer!!
            "https://i.pinimg.com/236x/f5/f8/38/f5f8380ef692c55e7b97cf0f64d07556.jpg", //MA$TER_killer!!
           ]; //MA$TER_killer!!

  client.on("message",async msg => {  //MA$TER_killer!!
if(msg.content.startsWith(prefix + "serverjpg")){  //MA$TER_killer!!
const Canvas = require("canvas");        //MA$TER_killer!!
let mentions = msg.mentions.members.first()  //MA$TER_killer!!
if(!mentions) {  //MA$TER_killer!!
let bbs = bbg[Math.floor(Math.random() * bbg.length)]
let serverid = msg.guild.id  //MA$TER_killer!!
let serverna = msg.guild.name  //MA$TER_killer!! 
let owner = msg.guild.owner   //MA$TER_killer!!
let ownerna = owner.user.username //MA$TER_killer!!
let ownerta = owner.user.discriminator//MA$TER_killer!!
let channels = msg.guild.channels.size   //MA$TER_killer!! 
let voice = msg.guild.channels.filter(f => f.type === "voice").size  //MA$TER_killer!! 
let text = msg.guild.channels.filter(f => f.type === "text").size  //MA$TER_killer!! 
let createdo = moment(msg.guild.createdAt).format(`D/M/YYYY h:mm`)   //MA$TER_killer!! 
let createdf = moment(msg.guild.createdAt).locale("EN-eg").fromNow()   //MA$TER_killer!! 
let members = msg.guild.members.size //MA$TER_killer!!
let online = msg.guild.members.filter(c => c.presence.status !== "offline").size //MA$TER_killer!!
let region = msg.guild.region   //MA$TER_killer!! 
let verificationl = msg.guild.verificationLevel   //MA$TER_killer!! 
let roles = msg.guild.roles.size   //MA$TER_killer!!
let by = msg.author.username  //MA$TER_killer!!
let tserverid = "server id:"  //MA$TER_killer!!
let townerna = "owner:"  //MA$TER_killer!!
let tchannels = "channels:"  //MA$TER_killer!! 
let tvoice = "voice:"  //MA$TER_killer!! 
let ttext = "text:"  //MA$TER_killer!! 
let tcreatedo = "created at:"   //MA$TER_killer!! 
let tregion = "region:"   //MA$TER_killer!! 
let tverificationl = "verification level:"   //MA$TER_killer!! 
let troles = "roles"   //MA$TER_killer!!
let tmembers = "members:"  //MA$TER_killer!!
let tonline = "online:" //MA$TER_killer!!
let hm = "Requested by" //MA$TER_killer!!
let servericon = msg.guild.iconURL   //MA$TER_killer!!
let canvas = Canvas.createCanvas(800 , 500) //MA$TER_killer!!
let ctx = canvas.getContext('2d'); //MA$TER_killer!!
const background = await Canvas.loadImage(`${bbs}`);//MA$TER_killer!!
const bg = await Canvas.loadImage("https://cdn.discordapp.com/attachments/637449457658494999/642490023954087946/hmmmm.PNG");
const icon = await Canvas.loadImage(`${servericon}`); //MA$TER_killer!!
const avatar = await Canvas.loadImage(`${msg.author.avatarURL}`);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height); //MA$TER_killer!!
ctx.drawImage(bg, 0, 0, canvas.width, canvas.height); //MA$TER_killer!!
ctx.font = '25px Elephant';//MA$TER_killer!!
ctx.fontSize = '30px';//MA$TER_killer!!
ctx.textAlign = "center";//MA$TER_killer!!
ctx.fillStyle = "#007cff"; //MA$TER_killer!!
ctx.fillText(serverid, canvas.width / 2, canvas.height / 1.6); //MA$TER_killer!!
ctx.font = '30px Elephant';//MA$TER_killer!!
ctx.fillStyle = "#93BFE6"; //MA$TER_killer!!
ctx.fillText(serverna, canvas.width / 2, canvas.height / 2); //MA$TER_killer!!
ctx.font = '25px Elephant';//MA$TER_killer!!
ctx.fillStyle = "#ffd304"; //MA$TER_killer!!
ctx.fillText(ownerna+"#"+ownerta, canvas.width / 2, canvas.height / 1.8); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.fillText(channels, canvas.width / 1.1, canvas.height / 6); //MA$TER_killer!!
ctx.fillText(voice, canvas.width / 1.1, canvas.height / 4.8); //MA$TER_killer!!
ctx.fillText(text, canvas.width / 1.1, canvas.height / 3.9); //MA$TER_killer!!
ctx.fillStyle = "#e9abab"; //MA$TER_killer!!
ctx.fillText(createdo, canvas.width / 5, canvas.height / 3.1); //MA$TER_killer!!
ctx.fillText(createdf, canvas.width / 5, canvas.height / 2.75); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.fillText(region, canvas.width / 1.2, canvas.height / 2.9); //MA$TER_killer!!
ctx.fillText(verificationl, canvas.width / 2.9, canvas.height / 6); //MA$TER_killer!!
ctx.fillText(roles, canvas.width / 1.5, canvas.height / 1.3); //MA$TER_killer!!
ctx.font = '30px Elephant';//MA$TER_killer!!
ctx.fillStyle = "#007cff"; //MA$TER_killer!!
ctx.fillText(tserverid, canvas.width / 6, canvas.height / 1.6); //MA$TER_killer!!
ctx.font = '30px Elephant';//MA$TER_killer!!
ctx.fillStyle = "#ffd304"; //MA$TER_killer!!
ctx.fillText(townerna, canvas.width / 6, canvas.height / 1.8); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.font = '30px Elephant';//MA$TER_killer!!
ctx.fillText(tchannels, canvas.width / 1.4, canvas.height / 6); //MA$TER_killer!!
ctx.fillText(tvoice, canvas.width / 1.4, canvas.height / 4.8); //MA$TER_killer!!
ctx.fillText(ttext, canvas.width / 1.4, canvas.height / 3.9); //MA$TER_killer!!
ctx.fillStyle = "#e9abab"; //MA$TER_killer!!
ctx.fillText(tcreatedo, canvas.width / 5, canvas.height / 3.6); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.font = '25px Elephant';//MA$TER_killer!!
ctx.fillText(tregion, canvas.width / 1.5, canvas.height / 2.9); //MA$TER_killer!!
ctx.fillText(tverificationl, canvas.width / 5.5, canvas.height / 6);
ctx.font = '30px Elephant';
ctx.fillText(troles, canvas.width / 1.8, canvas.height / 1.3);
ctx.font = '25px Elephant';
ctx.fillText(hm, canvas.width / 4.3, canvas.height / 1.1);
ctx.font = '30px Elephant';
ctx.fillStyle = "#ff0000";
ctx.fillText(tmembers, canvas.width / 5, canvas.height / 1.4);
ctx.fillStyle = "#00ff70";
ctx.fillText(tonline, canvas.width / 4.3, canvas.height / 1.3);
ctx.fillStyle = "#ff0000";
ctx.font = '25px Elephant';
ctx.fillText(members, canvas.width / 2.5, canvas.height / 1.4);
ctx.fillStyle = "#00ff70";
ctx.fillText(online, canvas.width / 2.5, canvas.height / 1.3);
ctx.fillStyle = "#ffffff";
ctx.fillText(by, canvas.width / 1.99, canvas.height / 1.1);
ctx.drawImage(avatar, 50, 410, 50, 50);
ctx.strokeStyle = '#74037b';
ctx.strokeRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.arc(394, 125, 85, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip();
ctx.drawImage(icon, 309, 40, 170, 170);
msg.channel.sendFile(canvas.toBuffer()) 
}
}
});
//كود اضهار جميع البوتات
client.on('message', alphamsg => {
      if(alphamsg.content === prefix + "bots") {
      if(!alphamsg.channel.guild) return;
    let alphaf = 1;
  const alpha = alphamsg.guild.members.filter(m=>m.user.bot).map(m=>`:small_orange_diamond: ${alphaf++} - <@${m.id}>`);
              alphamsg.channel.send(`**وجدت ${alphamsg.guild.members.filter(m=>m.user.bot).size} بوت
 البوتات الموجوده في السيرفر
${alpha.join('')}
**
`)
 }
});
//