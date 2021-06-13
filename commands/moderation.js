module.exports = {
    name: 'moderation',
    execute(message) {
        const Discord = require('discord.js');
        //Moderation Embed 
        const moderationEmbed = new Discord.MessageEmbed()
            .setTitle('Moderation')
            .setColor('#FF0000')
            .setThumbnail('https://images.emojiterra.com/mozilla/512px/1f528.png')
            .setAuthor('  ', 'https://images.emojiterra.com/mozilla/512px/1f528.png', 'https://discordjs.guide/')
            .setDescription('Here is the list of the moderation commands:')
            .addFields({
                name: '**Bans a user**',
                value: '`ban @user <Reason>`',
                inline: true
            })
            .addFields({
                name: '**Unbans a user**',
                value: '`unban userID`',
                inline: true
            })
            .addFields({
                name: '**Mutes a user**',
                value: '`mute @user <Reason>`',
                inline: true
            })
            .addFields({
                name: '**Unmutes a user**',
                value: '`unmute @user`',
                inline: true
            })
            .addFields({
                name: '**Kicks a user**',
                value: '`kick @user <Reason>`',
                inline: true
            })
            .addFields({
                name: '**Clears messages in a channel**',
                value: '`clear <2-100>`',
                inline: true
            })
            .addFields({
                name: '**Changes the slowmode**',
                value: '`slowmode <1-1800>`',
                inline: true
            })
            .addFields({
                name: '**Mutes a user**',
                value: '`mute @user`',
                inline: true
            })
            .addFields({
                name: '**Unmutes a muted user**',
                value: '`unmuted @user`',
                inline: true
            })
            .addFields({
                name: '**Change the nickname of a user**',
                value: '`name @user newNickname`',
                inline: true
            })
            .addFields({
                    name: '**Reset the nickname of a user**',
                    value: '`nickClear @user`',
                    inline: true
            })
            .addFields({
                name: '**Timecodes for mute:**',
                value: 'd - day/s | h - hour/s | m - minute/s | s - seconds | p - permanent'
            })
            .addFields({
                name: '**Invite me:**',
                value: 'https://dsc.gg/blox-bot'
            })
            .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL())
            .setTimestamp();

        message.delete();
        message.channel.send(moderationEmbed);
    }
}