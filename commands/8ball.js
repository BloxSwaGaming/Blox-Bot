module.exports = {
    name: '8ball',
    execute(client, message, args) {
        const Discord = require('discord.js');
        let q = args[2];
        const responses = [
            "It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes – definitely",
            "You may rely on it",
            "As I see it",
            "Yes",
            "Most Likely",
            "Outlook good",
            "Yes",
            "Signs point to yes",
            "Probably not",
            "Certainly not",
            "No",
            "Definitely not"
        ];
        if (!q) {
            const embed1 = new Discord.MessageEmbed()
                .setColor("#fa2525")
                .setDescription("**Invalid syntax!**\n**Syntax:** *8ball yourQuestion");

            message.channel.send(embed1);
        } else {
            let replySent = Math.floor(Math.random() * 100) + 1;
            let randomReply = Math.floor(Math.random() * responses.length);
            let selectedReply = responses[randomReply];
            const embed2 = new Discord.MessageEmbed()
                .setColor('#2dc455')
                .setDescription(`${selectedReply}`);

            message.channel.send(embed2)
        }
    }
}