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
                "`*help mod`",
                "**--------------------------------------**",
                "**Fun**",
                "`*help fun`",
                "**--------------------------------------**",
                "**Utility**",
                "`*help util`",
                "**--------------------------------------**\n",
                "**Prefix: ***",
                '**Invite me:** https://dsc.gg/blox-bot',
                '**Support Server:** https://dsc.gg/blox-support'
            ])
            .setFooter("Blox Bot")
            .setTimestamp();

        message.delete();
        message.channel.send(helpList);
    }
}