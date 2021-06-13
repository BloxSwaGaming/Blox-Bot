module.exports = {
	name: 'nickname',
	execute(client, message, args){
		const Discord = require('discord.js');

		if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send("You don't have the permission to use that command!\n**Required Permission:** `MANAGE_NICKNAMES` / `ADMINISTRATOR`");
		let member = message.mentions.members.first();
                let finalNickname = args.slice(2).join(' ');

		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**Successfully** changed the nickname to **${finalNickname}**!`);

		if (!member) return message.channel.send("Please mention the user whose nickname you'd like to change.");
		if (!args[2]) return message.channel.send(`Please mention the nickname you would like to change for ${member}.`);
		member.setNickname(finalNickname).then(() => message.channel.send(embed));
	},
}