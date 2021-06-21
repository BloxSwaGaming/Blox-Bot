module.exports = {
    name: 'util',
    execute(client, message) {
        const Discord = require('discord.js');
        //Fun
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Utility')
            .addFields({
                name: 'Nickname',
                value: '`name @user newNickname`',
                inline: true
            }, {
                name: 'Clear Nickname',
                value: '`nickClear @user`',
                inline: true
            }, {
                name: 'Roast',
                value: '`roast @user`',
                inline: true
            }, {
                name: 'AFK',
                value: '`afk`',
                inline: true
            }, {
                name: '**Invite me:**',
                value: 'https://dsc.gg/blox-bot'
            })
            .setTimestamp();

        message.channel.send(embed)
    }
}