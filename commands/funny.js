module.exports = {
        name: 'funny',
        execute(message) {
                const Discord = require('discord.js')
                const got = require('got')
                const memeEmbed = new Discord.MessageEmbed();
                got('https://www.reddit.com/r/funny/random/.json').then(response => {
                        let content = JSON.parse(response.body);
                        let permalink = content[0].data.children[0].data.permalink;
                        let memeUrl = `https://reddit.com${permalink}`;
                        let memeImage = content[0].data.children[0].data.url;
                        let memeTitle = content[0].data.children[0].data.title;
                        let memeUpvotes = content[0].data.children[0].data.ups;
                        let memeNumComments = content[0].data.children[0].data.num_comments;
                        memeEmbed.setTitle(`${memeTitle}`);
                        memeEmbed.setURL(`${memeUrl}`)
                        memeEmbed.setColor('RANDOM')
                        memeEmbed.setImage(memeImage);
                        message.channel.send(memeEmbed)
                }).catch(console.error);
        }
}