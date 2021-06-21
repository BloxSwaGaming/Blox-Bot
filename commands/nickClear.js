module.exports = {
    name: 'nickClear',
    execute(client, message, args) {
        const Discord = require('discord.js');
        const embed1 = new Discord.MessageEmbed()
            .setColor('#fa2525')
            .setDescription("You don't have the permission to use that command!\n**Required Permission:** `MANAGE_NICKNAMES` / `ADMINISTRATOR`");

        if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(embed1);
        let member = message.mentions.members.first();

        const embed = new Discord.MessageEmbed()
            .setColor('#3ac916')
            .setDescription(`**Successfully** cleared **${member}'s** nickname!`);

        member.setNickname(null).then(() => message.channel.send(embed));
    },
}