const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    module.exports.help = { name: "help" }
    let helpEmbed = new Discord.RichEmbed()
    .setTitle("Help Menu")
    .setDescription("Shows the help menu!")
    .setColor("#1e27ce")
    .addField("Prefix:", "p!")
    .addField("shop", "Shows the shop menu!")
    .addField("new", "Comming soon in an update in the future!")
    .addField("buy", "Comming soon in an update in the near future!")
    .addField("modhelp", "For staff only!")
    .addField("serverinfo", "Shows server info!")
    .addField("userinfo", "Comming soon in an update soon!")
    .addField("economy", "SOON can't wait!")
    .addField("botinfo", "Shows information abot the bot!")
    .setFooter(`Requested by ${message.author.name} | Bot by AxleRex | PredatorMS`)

    let botChannel = message.guild.channels.find(`name`, "bot-commands");
    if(!botChannel) return message.channel.send("Can't find bot-commands channel.");

    botChannel.send(helpEmbed)
    return;

}

module.exports.help = {
    name: 'help'
}