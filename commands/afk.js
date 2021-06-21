const Discord = require('discord.js');

module.exports = {
    name: 'afk',
    /**
     * @param {Message} message
     */
    execute(client, message, args, db) {
        client.afk = new Map();
        let member = message.author;

        if (db.has(message.author.id + '.afk')) {
            message.member.setNickname(`${message.author.username}`).catch((err) => {
                return;
            })
            const embed1 = new Discord.MessageEmbed()
                .setColor('#fa2525')
                .setDescription(`**${message.author}**, you are no longer AFK!`);
            message.reply(embed1)
            db.delete(message.author.id + '.afk')
            db.delete(message.author.id + '.message')
        } else {
            message.member.setNickname(`[AFK] ${message.author.username}`).catch((err) => {
                console.log(err)
            })

            db.set(message.author.id + '.afk', 'true')
            db.set(message.author.id + '.messageafk', message.content.split(' ').slice(1))
            const embed2 = new Discord.MessageEmbed()
                .setColor('#3ac916')
                .setDescription(`**${message.author}**, you are now AFK!`);
            message.reply(embed2);
        }

        if (message.author.bot) return;
        if (message.channel.type === 'dm') return
    }
}