module.exports = {
    name: 'flip',
    execute(message){
        const Discord = require('discord.js');

        var sides = ["heads", "tails"];

        var result = sides[Math.floor(Math.random() * sides.length)];

        const embed = new Discord.MessageEmbed()
            .setColor("#b71890")
            .setDescription(`${message.author} you landed on **${result}**!`);
        
        const coinEmbed = new Discord.MessageEmbed()
            .setColor("#b71890")
            .setDescription("Flipping a coin :coin: ...")

        message.channel.send(coinEmbed).then(message => message.edit(embed))
    },
}