const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'a!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`cooming soon`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "🎉»✴↑↑𝑾𝑬𝑳𝑪𝑶𝑴𝑬↑↑✴«🎉")
        const embed = new Discord.RichEmbed()
        .setColor('00FF01')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("اهلا وسهلا فيك ومرحبتين منور  ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});

client.on("guildMemberRemove", function(member) {
    const wc = member.guild.channels.find("name", "🎉»✴↑↑𝑾𝑬𝑳𝑪𝑶𝑴𝑬↑↑✴«🎉")
        const embed = new Discord.RichEmbed()
        .setColor('FF0000')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("خرج عضو انشالله يكون استمتع معنا ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});


client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "🎉»✴↑↑𝑾𝑬𝑳𝑪𝑶𝑴𝑬↑↑✴«🎉")
        const embed = new Discord.RichEmbed()
        .setColor('363940')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('')
.setThumbnail(member.avatarURL)
  .setImage('https://cdn.discordapp.com/attachments/459347899046690817/465563057658265600/download.png')
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("395147213065682956");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});

client.on('message', message => {
    var prefix = "a!"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});

client.on('message',function(message) {
  if(message.content.startsWith (prefix +'server')) {
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAt = millis / 1000 / 60 / 60 / 24;
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField(`${message.guild.name}`,`\`\`منذ ${createdAt.toFixed(0)} يوما \`\``)
    .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${message.guild.region}__ **]`,true)
    .addField(':medal:** __الرتب__**',`[** __${message.guild.roles.size}__ **]`,true)
    .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${message.guild.memberCount}__ **]`,true)
    .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${message.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField(':pencil:**__ الرومات الكتابية__**',`[** __${message.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField(':microphone:**__ رومات الصوت__**',`[** __${message.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField(':crown:**__ الأونـر__**',`**${message.guild.owner}**`,true)
    .addField(':id:**__ ايدي السيرفر__**',`**${message.guild.id}**`,true)
    message.channel.send({embed:embed});
  }
});



















client.login(process.env.BOT_TOKEN);
