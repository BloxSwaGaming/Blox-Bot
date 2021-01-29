const { Message } = require('discord.js')

module.exports = {
    name: 'unmute',
    /**
     * @param {Message} message
     */
    run: async (client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        if (!Member) return message.channel.send('Member not found!');

        if (Member.roles.cache.find(a => a.name === "muted")) {
            await Member.roles.remove(role).then(m => message.channel.send(`**Successfully** unmuted ${Member.displayName}!`));
        } else {
            message.channel.send("That member has already been unmuted!");
        }
    }
}