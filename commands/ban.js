module.exports = {
    name: 'ban',
    execute(message) {
    const Discord = require('discord.js');
    const prefix = '*';

    //Ban
    if(!message.member.permissions.has("ADMINISTRATOR") || !message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**ERROR!** You don't have the permission to use that command!");
            let user = message.mentions.users.first();
            const args = message.content.slice(prefix.length).trim().split(' ');
            let reason = args.slice(2).join(" ");
            if(!message.mentions.users.first()) return message.channel.send("**ERROR!** Please mention a user to ban!");
            if(!reason) reason = "No reason provided!";
            const banEmbed = new Discord.MessageEmbed()
                .setColor("#fc5508")
                .setDescription([
                    "**Action:**",
                    "Ban\n",
                    "**Reason:**",
                    `${reason}\n`,
                    "**Moderator:**",
                    `${message.author}\n`,
                    "**User:**",
                    `${user.tag}`
                ])

        message.guild.members.ban(user, {reason: reason, days: 7}).then(message.channel.send(banEmbed));
    } 
}