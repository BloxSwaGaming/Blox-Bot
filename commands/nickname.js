module.exports = {
	name: 'nickname',
	execute(client, message, args){
		const Discord = require('discord.js');

		if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send("You don't have the permission to use that command!");
		const member = message.mentions.members.first();

		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**Successfully** changed the members nickname to **${args[2]}**!`);

		if (!member) return message.channel.send("Please mention the user whose nickname you'd like to change.");
		if (!args[2]) return message.channel.send(`Please mention the nickname you would like to change for ${member}.`);
		member.setNickname(args[2]).then(() => message.channel.send(embed));
	},
}