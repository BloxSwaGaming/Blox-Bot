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
            .setDescription('Here is the list of the moderation commands:\n\n')
            .addFields({
                name: '**Bans a user**',
                value: '`ban @user <Reason>`\n**--------------------------------------------**'
            })
            .addFields({
                name: '**Unbans a user**',
                value: '`unban userID`\n**--------------------------------------------**'
            })
            .addFields({
                name: '**Mutes a user**',
                value: '`mute @user <Reason>`\n**--------------------------------------------**'
            })
            .addFields({
                name: '**Unmutes a user**',
                value: '`unmute @user`\n**--------------------------------------------**'
            })
            .addFields({
                name: '**Kicks a user**',
                value: '`kick @user <Reason>`\n**--------------------------------------------**'
            })
            .addFields({
                name: '**Clears messages in a channel**',
                value: '`clear <2-100>`\n**--------------------------------------------**'
            })
            .addFields({
                name: '**Changes the slowmode**',
                value: '`slowmode <1-1800>`\n**--------------------------------------------**'
            })
            .addFields({
                name: '**Mutes a user**',
                value: '`mute @user`\n**--------------------------------------------**'
            })
            .addFields({
                name: '**Temporarily mutes a user**',
                value: '`tmute @user <Duration>`\n**--------------------------------------------**'
            })
            .addFields({
                name: '**Unmutes a muted user**',
                value: '`unmuted @user`\n**--------------------------------------------**'
            })
            .addFields({
                name: '**Time for temp mute:**',
                value: 'd - day/s\nh - hour/s\nm - minute/s'
            })
            .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL())
            .setTimestamp();

        message.delete();
        message.channel.send(moderationEmbed);
    }
}