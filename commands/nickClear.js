module.exports = {
    name: 'nickClear',
    execute(client, message, args) {
        const Discord = require('discord.js');

        if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send("You don't have the permission to use that command!\n**Required Permission:** `MANAGE_NICKNAMES` / `ADMINISTRATOR`");
        let member = message.mentions.members.first();

        const embed = new Discord.MessageEmbed()
            .setColor('#3ac916')
            .setDescription(`**Successfully** cleared **${member}'s** nickname!`);

        member.setNickname(null).then(() => message.channel.send(embed));
    },
}