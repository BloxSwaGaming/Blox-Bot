module.exports = {
    name: 'fun',
    execute(message) {
        const Discord = require('discord.js');
        //https://cdn.pixabay.com/photo/2014/12/21/23/36/dice-575658_960_720.png
        //Fun
        const funEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Fun')
            .setThumbnail('https://cdn.pixabay.com/photo/2014/12/21/23/36/dice-575658_960_720.png')
            .setAuthor('  ', 'https://cdn.pixabay.com/photo/2014/12/21/23/36/dice-575658_960_720.png', 'https://discordjs.guide/')
            .addFields({
                name: 'Info about of a user',
                value: '`info @user`\n',
                inline: true
            },
            {
                name: 'Memes',
                value: '`meme`\n',
                inline: true
            },{
                name: 'Funny',
                value: '`funny`\n',
                inline: true
            },
            {
                name: 'Roll a dice',
                value: '`dice`\n',
                inline: true
            },
            {
                name: 'Flip a coin',
                value: '`flip`\n',
                inline: true
            },
            {
                name: 'Calculates',
                value: '`math`',
                inline: true
            },
            {
                name: 'Weather Info',
                value: '`weather city/state`',
                inline: true
            })
            .addFields({
                name: '**Operators:**',
                value: "` add | sub | mult | div | mod | pow | root `"
            },
            {
                name: '**Invite me:**',
                value: 'https://dsc.gg/blox-bot'
            })
            .setTimestamp();

        message.delete();
        message.channel.send(funEmbed);
    }
}