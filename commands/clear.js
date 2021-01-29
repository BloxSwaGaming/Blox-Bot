module.exports = {
	name: 'clear',
	execute(client, message, args){
		const Discord = require('discord.js');
			
		const anotherEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`${message.author}, invalid format! Use the following format: ***clear 5**`);
			
		let messagesDeleted = args[1];
		if (!messagesDeleted) return message.channel.send("**ERROR!** Couldn't find the number of messages to clear!");
		if (messagesDeleted < 2) return message.channel.send("**ERROR!** You cannot delete less than 2 messages!");
		if (messagesDeleted > 100) return message.channel.send("**ERROR!** You cannot clear more than 100 messages at once!");
			
		const embed = new Discord.MessageEmbed()
			.setColor('#43ff40')
			.setDescription(`**Successfully** cleared ${messagesDeleted} messages!`);

		if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You don't have the permission to use that command!");
		message.channel.bulkDelete(messagesDeleted).then(() => message.channel.send(embed)).then(message => message.delete({timeout: 2500}));
	},
}