const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'dadjoke',
    execute(client, message, args) {
        let user = message.user;
        let timeout = 5000;
        let jokes = [
            "I got a reversible jacket for Christmas, I can't wait to see how it turns out.",
            "What do you call a magician who has lost their magic? Ian.",
            "Why is the ocean always blue? Because the shore never waves back.",
            "Why did the tomato blush? Because it saw the salad dressing.",
            "What do you call a fashionable lawn statue with an excellent sense of rhythmn? A metro-gnome",
            "What did Romans use to cut pizza before the rolling cutter was invented? Lil Caesars",
            "Why couldn't the kid see the pirate movie? Because it was rated arrr!",
            "Have you heard about corduroy pillows? They're making headlines!",
            "Shout out to my grandma, that's the only way she can hear.",
            "Do you want a brief explanation of what an acorn is? In a nutshell, it's an oak tree.",
            "There's not really any training for garbagemen. They just pick things up as they go.",
            "Why did the scarecrow win an award? Because he was outstanding in his field.",
            "I went to the zoo the other day, there was only one dog in it. It was a shitzu.",
            "Did you hear the one about the giant pickle? He was kind of a big dill.",
            "I hate perforated lines, they're tearable.",
            "Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.",
            "There’s a new type of broom out, it’s sweeping the nation.",
            "Never Trust Someone With Graph Paper...\n\nThey're always plotting something.",
            "Why are pirates called pirates? Because they arrr!",
            '"I\'ll call you later." Don\'t call me later, call me Dad.',
            "Two satellites decided to get married. The wedding wasn't much, but the reception was incredible.",
            "What do you call your friend who stands in a hole? Phil.",
            "My friend said to me: \"What rhymes with orange\" I said: \"No it doesn't\"",
            "I cut my finger chopping cheese, but I think that I may have grater problems.",
            "What kind of tree fits in your hand? A palm tree!",
            "What happens to a frog's car when it breaks down? It gets toad.",
            "Mountains aren't just funny, they are hill areas",
            "What did the pirate say on his 80th birthday? Aye Matey!",
            "Who is the coolest Doctor in the hospital? The hip Doctor!",
            "How did the hipster burn the roof of his mouth? He ate the pizza before it was cool.",
            "Have you heard about the film \"Constipation\", you probably haven't because it's not out yet."

        ];
        if (user !== null && timeout - (Date.now() - user) > 0) {
            let time = ms(timeout - (Date.now() - user));
            return message.channel.send(`${user}, please wait for another **${time.minutes}m** and **${time.seconds}s**!`)
        } else {
            let jokeSent = Math.floor(Math.random() * 100) + 1;
            let randomJoke = Math.floor(Math.random() * jokes.length);
            let selectedJoke = jokes[randomJoke];
            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`${selectedJoke}`);

            return message.channel.send(embed);
        }
    }
}