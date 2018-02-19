const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = ';';

client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;

  let pictures = ['http://random.cat//i//bI8D6.jpg', 'http://random.cat//i//IWBs0.jpg', 'http://random.cat//i//SuaQS.jpg', 'http://random.cat//i//supbro.jpg', 'http://random.cat//i//87jfa.jpg', 'http://random.cat//i//Q6BqP.jpg', 'http://random.cat//i//FEJRQ.jpg', 'http://random.cat//i//AqyNm.jpg', 'http://random.cat//i//RgvdW.jpg', 'http://random.cat//i//yhBYD.jpg', 'http://random.cat//i//703eJ.jpg', 'http://random.cat//i//meowa1.jpg', 'http://random.cat//i//5866761095_e23c246ba3.jpg'];
  let picture = pictures[Math.floor(Math.random() * pictures.length)];

  if (msg.content.startsWith(prefix + 'cat')) {
    msg.channel.sendMessage({
      files: [picture],
    });
  }

  if (msg.content.startsWith(prefix + 'userinfo')) {
    let embed = new Discord.RichEmbed()
      .setAuthor(msg.author.username)
      .setDescription("This is the user's info!")
      .setColor('#9B59B6')
      .addField('Full Username', `${msg.author.username}#${msg.author.discriminator}`)
      .addField('ID', msg.author.id)
      .addField('Created At', msg.author.createdAt);

    msg.channel.sendEmbed(embed);

    return;

  }

  if (msg.content.startsWith(prefix + 'dog')) {
    msg.reply('NOT COOL BRO!');
  }

});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to the guilds default channel (usually #general), mentioning the member
  member.guild.defaultChannel.send(`Welcome to the server, ${member}!`);
});

client.login(TOKEN);
