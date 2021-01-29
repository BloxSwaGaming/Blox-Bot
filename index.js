const Discord = require("discord.js");
const got = require("got");
const client = new Discord.Client({ ws: { intents: Discord.Intents.ALL } });
const { prefix, token } = require("./Info.json");
const weather = require('weather-js');
const fs = require('fs');
const Canvas = require('canvas');
const Enmap = require('enmap');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//Join
client.on('guildMemberAdd', async (member) => {
    const channel = member.guild.channels.cache.find(r => r.name === 'welcome');

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./r.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#3dcf19';
    ctx.strokeRect(2, 2, 695, 247);

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#1866db';
    ctx.fillText('Welcome,', canvas.width / 2.5, 110);

    ctx.fillStyle = '#1866db';
    ctx.fillText(`${member.user.tag}!`, canvas.width / 2.5, 160);

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 100, 50, 150, 150);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'img.png');

    channel.send(attachment)
})
//Leave
client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.cache.find(r => r.name === 'goodbye');

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./r.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#3dcf19';
    ctx.strokeRect(2, 2, 695, 247);

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#1866db';
    ctx.fillText('Goodbye,', canvas.width / 2.5, 110);

    ctx.fillStyle = '#1866db';
    ctx.fillText(`${member.user.tag}`, canvas.width / 2.5, 160);

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 100, 50, 150, 150);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'img.png');

    channel.send(attachment)
})

//Ready Event
client.on('ready', () => {
    console.log('Blox Bot is now online!');
    //Bot Status
    client.user.setStatus('online');
    client.user.setActivity('*help | Blox Bot', { type: 'LISTENING' });
});

client.on('message', async message => {
    //*help 
    if (message.content === `${prefix}help`) {
        client.commands.get('help').execute(message);
    };
    //*mod 
    if (message.content === `${prefix}mod`) {
        client.commands.get('moderation').execute(message);
    };
    //*fun
    if (message.content === `${prefix}fun`) {
        client.commands.get('fun').execute(message);
    };
    //Ban
    if (message.content.startsWith(`${prefix}ban`)) {
        client.commands.get('ban').execute(message);
    };
    //Unban
    if (message.content.startsWith(`${prefix}unban`)) {
        const args = message.content.slice(prefix.length).split(" ");
        client.commands.get('unban').execute(client, message, args);
    };
    //Kick
    if (message.content.startsWith(`${prefix}kick`)) {
        client.commands.get('kick').execute(message, client);
    };
    //Mute
    if (message.content.startsWith(`${prefix}mute`)) {
        let command = client.commands.get('mute');
        const args = message.content.slice(prefix.length).split(" ");
        if (command) command.run(client, message, args);
    };
    //Tempmute
    if (message.content.startsWith(`${prefix}tmute`)) {
        let command = client.commands.get('tmute');
        const args = message.content.slice(prefix.length).split(" ");
        if (command) command.run(client, message, args);
    };
    //Unmute
    if (message.content.startsWith(`${prefix}unmute`)) {
        let command = client.commands.get('unmute');
        const args = message.content.slice(prefix.length).split(" ");
        if (command) command.run(client, message, args);
    };
    //Meme
    if (message.content.startsWith(`${prefix}meme`)) {
        client.commands.get('meme').execute(message);
    };
    //User Info Others
    if (message.content.startsWith(`${prefix}info`) && message.mentions.users.first()) {
        let user = message.mentions.users.first();
        const args = message.content.slice(prefix.length).trim().split(' ');
        let member = message.mentions.members.first();

        if (!user) user = message.author;
        if (!member) member = message.author;

        const userInfoEmbed = new Discord.MessageEmbed()
            .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
            .setColor('RANDOM')
            .addField(
                '**User Tag:**',
                `${message.mentions.users.first()}`,
            )
            .addField(
                '**Nickname:**',
                `${member.nickname == null ? member.nickname = "None" : member.nickname = member.nickname}`,
            )
            .addField(
                '**Joined Server On:**',
                new Date(member.joinedTimestamp).toLocaleDateString(),
            )
            .addField(
                '**Joined Discord On:**',
                new Date(user.createdTimestamp).toLocaleDateString(),
            )
            .addField(
                '**Role Count:**',
                member.roles.cache.size - 1,
            )
            .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());

        message.channel.send(userInfoEmbed);
    };
    //Ping
    if (message.content.startsWith(`${prefix}ping`)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if (!client.commands.has(command)) return;

        client.commands.get('ping').execute(message, client);
    };
    //Auto Mod
    try {
        client.commands.get('auto').execute(message);
    } catch {
        return;
    };
    //Flips a coin
    if (message.content.startsWith(`${prefix}flip`)) {
        client.commands.get('flip').execute(message);
    };
    //Rolls a dice
    if (message.content.startsWith(`${prefix}dice`)) {
        client.commands.get('dice').execute(message);
    };
    //Math
    if (message.content.startsWith(`${prefix}math`)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        client.commands.get('math').execute(message, args);
    };
    //Weather
    if (message.content.startsWith(`${prefix}weather`)) {
        let args = message.content.slice(prefix.length).split(" ");
        client.commands.get('weather').execute(message, args, Discord, weather);
    }
    //Slowmode
    if (message.content.startsWith(`${prefix}slowmode`)) {
        client.commands.get('slowmode').execute(client, message);
    }
    //Nickname
    if (message.content.startsWith(`${prefix}nickname`)) {
        const args = message.content.slice(prefix.length).split(" ");
        client.commands.get('nickname').execute(client, message, args);
    }
    //Clear
    if (message.content.startsWith(`${prefix}clear`)) {
        const args = message.content.slice(prefix.length).split(" ");
        client.commands.get('clear').execute(client, message, args);
    }
});

client.login(token);