module.exports = {
    name: 'dice',
    execute(message){
        const Discord = require('discord.js');

        let rolledNumber = Math.floor(Math.random() * 6 + 1);

        const rolling = new Discord.MessageEmbed()
            .setColor("6320A3")
            .setDescription("Rolling a dice 🎲 ...");

        const embed = new Discord.MessageEmbed()
            .setColor("6320A3")
            .setDescription(`${message.author} you got a **${rolledNumber}**!`);

        message.channel.send(rolling).then(message => message.edit(embed))
    },
}