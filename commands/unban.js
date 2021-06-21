const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor('#fa2525')
            .setDescription("You don't have the permission to use that command!\n**Required Permission:** `BAN_MEMBERS` / `ADMINISTRATOR`");
        const embed2 = new Discord.MessageEmbed()
            .setColor('#fa2525')
            .setDescription('**ERROR!** User not found!');

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }));

        if (!args[1]) return message.channel.send(embed2).then(m => m.delete({ timeout: 5000 }));

        let member;

        async function unban() {

            let toBan = await client.users.fetch(args[1]);

            message.guild.members.unban(toBan)

            const embed3 = new Discord.MessageEmbed()
                .setTitle(`Unbanned ${toBan.tag}`)
                .addFields({
                    name: '**Action:**',
                    value: 'Unban'
                }, {
                    name: '**Moderator:**',
                    value: `${message.author.tag}`
                }, {
                    name: '**Status:**',
                    value: '**Successful**'
                })

            message.channel.send(embed);
        }

        unban();
    },
}