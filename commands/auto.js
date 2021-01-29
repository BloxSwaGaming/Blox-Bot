module.exports = {
    name: 'auto',
    execute(message){
        
        const Discord = require('discord.js');
        const words = [''];
        //Put the bad words here
        
        var msg = message.content;

        if(words.some(word => message.content.includes(word))){
                    const embed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setDescription(`${message.author}, you **CANNOT** say that!`)

                    message.delete().then(message => {
                        message.author.send(embed)}).catch(message.channel.send(embed))
        }
    },    
};