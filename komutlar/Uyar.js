const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **UYARI** :warning:', '`uyar` Adlı Komutu Özel Mesajlarda Kullanamazsın !!!')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', '😀server-sohbet😀');
  if (!modlog) return message.reply('`mod-log` Kanalı Bulamıyorum.');
  if (message.mentions.users.size < 1) return message.reply('Kimi Uyarcağımı Yazmalısın.').catch(console.error);
  if (reason.length < 1) return message.reply('Uyarı Sebebini Yazmalısın.');
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Eylem:', 'Uyarma')
  .addField('Kullanıcı:', `${user.username}#${user.discriminator}`)
  .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['warn'],
  permLevel: 2
};

exports.help = {
  name: 'uyar',
  description: 'İstediğiniz Kişiyi Uyarır.',
  usage: 'uyar [Kullanıcı] [Sebep]'
};