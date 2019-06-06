const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    module.exports.help = { name: "shop" }
    let shopEmbed = new Discord.RichEmbed()
    .setTitle("Shop")
    .setDescription("Shop for PredatorMC")
    .setColor("#1800f4")
    .addField(`${message.author.username}`, `No you cannot buy ${message.author.username}`)
    .addField("Booster (P$250)", "Permanant Discord Booster.")
    .addField("Event Roles (P$120)", "Special event role.")
    .addField("More items to come soon!", "Stay Tuned")
    .setFooter(`Requested By: ${message.author.username} | PredatorMC |  You currently have NO P$'s`)
    let botChannel = message.guild.channels.find(`name`, "bot-commands");
    if(!botChannel) return message.channel.send("Can't find bot-commands channel.");

    botChannel.send(shopEmbed)
    return;
}

module.exports.help = {
    name: 'shop'
}