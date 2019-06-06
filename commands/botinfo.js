const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  module.exports.help = { name: "botinfo" }
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#1e27ce")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Can I buy a bot?", "Yes you can, it will not be like this one however I will develop one for your community!")
    .setFooter(`Requested By: ${message.author.username} | PredatorMC`)


    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}