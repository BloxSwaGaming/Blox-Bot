module.exports = {
        name: '8ball',
        execute(client, message, args) {
                let q = args[2];
                const responses = [
                        "It is certain",
                        "It is decidedly so",
                        "Without a doubt",
                        "Yes – definitely",
                        "You may rely on it",
                        "As I see it",
                        "Yes",
                        "Most Likely",
                        "Outlook good",
                        "Yes",
                        "Signs point to yes",
                        "Probably not",
                        "Certainly not",
                        "No",
                        "Definitely not"
                ];
                if(!q) {message.channel.send("**Invalid syntax!**\n**Syntax:** *8ball yourQuestion");} else {
                        let replySent = Math.floor(Math.random() * 100) + 1;
                        let randomReply = Math.floor(Math.random() * responses.length);
                        let selectedReply = responses[randomReply];
                        message.channel.send(`${selectedReply}`)
                }
        }
}