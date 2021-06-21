const { Message, DiscordAPIError } = require('discord.js')

module.exports = {
    name: 'unmute',
    /**
     * @param {Message} message
     */
    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#fa2525')
            .setDescription("You don't have the permission to use that command!\n**Required Permission:** `MANAGE_MESSAGES` / `ADMINISTRATOR`");
        const embed1 = new Discord.MessageEmbed()
            .setColor('#fa2525')
            .setDescription('Member not found!');
        const embed2 = new Discord.MessageEmbed()
            .setColor('#fa2525')
            .setDescription("That member has already been unmuted!");
        const embed3 = new Discord.MessageEmbed()
            .setColor('#fa2525')
            .setDescription(`**Successfully** unmuted ${Member.displayName}!`)

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embed);
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        if (!Member) return message.channel.send(embed1);

        if (Member.roles.cache.find(a => a.name === "muted")) {
            await Member.roles.remove(role).then(m => message.channel.send(embed3));
        } else {
            message.channel.send(embed2);
        }
    }
}