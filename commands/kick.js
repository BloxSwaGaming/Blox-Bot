module.exports = {
    name: 'kick',
    execute(message, client) {
        const Discord = require('discord.js');
        const prefix = '*';

        //Kick
        if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have the permission to use that command!")
        let user = message.mentions.users.first();
        let member = message.guild.member(user);
        const args = message.content.slice(prefix.length).trim().split(' ');
        let reason = args.slice(2).join(" ");

        if (!user) return message.channel.send("You didn't mention the user you wanted to kick!");
        if (user.id === message.author.id) return message.channel.send("You cannot kick yourself!");
        if (user.id === client.user.id) return message.channel.send("You cannot kick me!");

        if (!reason) reason = "No reason provided";
        member.kick(user).then(() => {
            message.channel.send(kickEmbed);
        }).catch(err => {
            message.reply("Unable to kick member!");
        })
        const kickEmbed = new Discord.MessageEmbed()
            .setColor("#fc5508")
            .addField('Action:', 'Kick')
            .addField('Reason:', `${reason}`)
            .addField('User:', `${user}`)
            .addField('Moderator:', `${message.author.tag}`);
    }
}