module.exports = {
    name: 'ban',
    execute(message) {
        const Discord = require('discord.js');
        const prefix = '*';
        const embed1 = new Discord.MessageEmbed()
            .setColor('#fa2525')
            .setDescription("**ERROR!** You don't have the permission to use that command!\n**Required Permission:** `BAN_MEMBERS` / `ADMINISTRATOR`");
        const embed2 = new Discord.MessageEmbed()
            .setColor('#fa2525')
            .setDescription("**ERROR!** Please mention a user to ban!")

        //Ban
        if (!message.member.permissions.has("ADMINISTRATOR") || !message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(embed1);
        let user = message.mentions.users.first();
        const args = message.content.slice(prefix.length).trim().split(' ');
        let reason = args.slice(2).join(" ");
        if (!message.mentions.users.first()) return message.channel.send(embed2);
        if (!reason) reason = "No reason provided!";
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

        message.guild.members.ban(user, { reason: reason, days: 7 }).then(message.channel.send(banEmbed));
    }
}