const Discord = require("discord.js");
const fs = require("fs")
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    module.exports.help = { name: "warns" }

//p!warn @(user) <reason>
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You lack permissions to do that!")


}

module.exports.help = {
    name: "warn"
}

