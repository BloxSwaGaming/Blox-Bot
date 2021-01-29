module.exports = {
	name: 'slowmode',
	execute(client, message){
		const Discord = require('discord.js');
		const messageArray = message.content.split(' ');
		const args = messageArray.slice(1);

		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**Successfully** set slowmode to ${args[0]}s`)
			.addField('Action: ', 'Slowmode', false)
			.addField('Moderator: ', `${message.author.tag}`, false)
			.addField('Slowmode: ', `${args[0]}s`, false);

		if (!args[0]) return message.channel.send(`${message.author} please specify the time.`);
		message.channel.setRateLimitPerUser(args[0]).then(() => message.channel.send(embed));
	},
}