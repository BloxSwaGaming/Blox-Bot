const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'unban',
	execute(client, message, args){
		if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("You don't have the permission to use that command!").then(m => m.delete({ timeout: 5000 }));

        if (!args[1]) return message.channel.send('**ERROR!** User not found!').then(m => m.delete({ timeout: 5000 }));

        let member;

        async function unban() {

            let toBan = await client.users.fetch(args[1]);

            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have the permission to use that command!");

            message.guild.members.unban(toBan)

            const embed = new Discord.MessageEmbed()
                .setTitle(`Unbanned ${toBan.tag}`)
                .addFields({
                    name: '**Action:**',
                    value: 'Unban'
                },
                {
                    name: '**Moderator:**',
                    value: `${message.author.tag}`
                },
                {
                    name: '**Status:**',
                    value: '**Successful**'
                })

            message.channel.send(embed);
        }//.catch(err => console.log(err));

        unban();
	},
}