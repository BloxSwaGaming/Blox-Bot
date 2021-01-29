module.exports = {
    name: 'help',
    execute(message) {
        const Discord = require('discord.js');
        //Help Embed
        const helpList = new Discord.MessageEmbed()
            .setColor('#00FFFF')
            .setTitle('Blox Bot')
            .setThumbnail('https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55816/question-mark-emoji-clipart-md.png')
            .setAuthor('  ', 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55816/question-mark-emoji-clipart-md.png', 'https://discordjs.guide/')
            .setDescription([
                "Here are some commands:\n\n",
                "**Moderation**",
                "`*mod`",
                "**--------------------------------------**",
                "**Fun**",
                "`*fun`",
                "**--------------------------------------**\n",
                '**Prefix:** *'
            ])
            .setFooter("Blox Bot")
            .setTimestamp();
        
        message.delete();
        message.channel.send(helpList);
    }
}