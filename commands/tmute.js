const { Message, MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'tmute',
    /**
     * @param {Message} message
     */
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do n\'t have the permission to use that command!');
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[2]

        if (Member === client) return message.reply("You cannot mute me!");
        if (!Member) return message.channel.send('Member is not found.')
        if (!time) return message.channel.send('Please specify a time.')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if (!role) {
            try {
                message.channel.send('Muted role not found, attempting to create it...')

                let muterole = await message.guild.roles.create({
                    data: {
                        name: 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('**Successfully** created muted role!')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if (Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} is already muted.`)
        await Member.roles.add(role2)
        message.channel.send(`**Successfully** muted ${Member.displayName}!`)

        setTimeout(async () => {
            await Member.roles.remove(role2)
            message.channel.send(`**${Member.displayName}** has been unmuted!`)
        }, ms(time))
    }
}