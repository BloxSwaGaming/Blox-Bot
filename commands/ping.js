module.exports = {
    name: 'ping',
    execute(message, client){
        const Discord = require('discord.js');
        
        
        const pingEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .addFields({
                name: '**Bot Latency:**',
                value: `${Date.now() - message.createdTimestamp}ms`,
                inline: true
            },
            {
                name: '**API Latency:**',
                value: `${Math.round(client.ws.ping)}ms`,
                inline: true
            })
            .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL())
        
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`:thinking: Calculating Bot and API Latency.....`)
        
        message.delete()
        message.channel.send(embed).then(message => {
            message.edit(pingEmbed)
        });
        
    },
};