module.exports = {
        name: 'roast',
        execute(client, message, args) {
                let user = message.user;
                let roastee = message.mentions.users.first();
                let timeout = 5000;
                let roasts =
                        [
                                'Beauty is only skin deep, but ugly goes clean to the bone.',
                                'I thought of you today. It reminded me to take out the trash.',
                                'You bring everyone so much joy…. when you leave the room.',
                                'Don’t worry about me. Worry about your eyebrows.',
                                'Light travels faster than sound, which is why you seemed bright until you spoke.',
                                'If I throw a stick, will you leave?',
                                'If your brain was dynamite, there wouldn’t be enough to blow your hat off.',
                                " I’ll never forget the first time we met. But I’ll keep trying.",
                                'Your face makes onions cry.',
                                'You have so many gaps in your teeth it looks like your tongue is in jail.',
                                'Your secrets are always safe with me. I never even listen when you tell me them.',
                                'Hold still. I’m trying to imagine you with a personality.',
                                'Your face is just fine, but we’ll have to put a bag over that personality.'

                        ];
                if(roastee.id === client.id) {
                        message.channel.send("Nope!");
                } else {
                        if (user !== null && timeout - (Date.now() - user) > 0) {
                        let time = ms(timeout - (Date.now() - user));
                        return message.channel.send(`${user}, this channel might start burning up, so please wait for another **${time.minutes}m** and **${time.seconds}s**!`)
                } else {
                        let roastSent = Math.floor(Math.random() * 100) + 1;
                        let randomRoast = Math.floor(Math.random() * roasts.length);
                        let selectedRoast = roasts[randomRoast];

                        return message.channel.send(`${roastee}, ${selectedRoast}`);
                }
                }
        }
}