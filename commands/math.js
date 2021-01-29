module.exports = {
        name: 'math',
        execute(message, args) {
                const Discord = require('discord.js');

                var operator = args[1];

                switch (operator) {
                        case 'add':
                                var num1 = parseInt(args[2]);
                                var num2 = parseInt(args[3]);
                                var add = num1 + num2;

                                message.channel.send(`${message.author} your answer is:  **${add}**`);
                                break;

                        case 'sub':
                                var num1 = parseInt(args[2]);
                                var num2 = parseInt(args[3]);
                                var sub = num1 - num2;

                                message.channel.send(`${message.author} your answer is:  **${sub}**`);
                                break;

                        case 'mult':
                                var num1 = parseInt(args[2]);
                                var num2 = parseInt(args[3]);
                                var mult = num1 * num2;

                                message.channel.send(`${message.author} your answer is:  **${mult}**`);
                                break;

                        case 'div':
                                var num1 = parseInt(args[2]);
                                var num2 = parseInt(args[3]);
                                var div = num1 / num2;

                                message.channel.send(`${message.author} your answer is:  **${div}**`);
                                break;

                        case 'mod':
                                var num1 = parseInt(args[2]);
                                var num2 = parseInt(args[3]);
                                var remain = num1 % num2;

                                message.channel.send(`${message.author} your answer is:  **${remain}**`);
                                break;

                        case 'pow':
                                var num1 = parseInt(args[2]);
                                var num2 = parseInt(args[3]);
                                var pow = Math.pow(num1, num2);

                                message.channel.send(`${message.author} your answer is:  **${pow}**`);
                                break;

                        case 'root':
                                var num1 = parseInt(args[2]);
                                var num2 = parseInt(args[3]);
                                var root = Math.pow(num1, 1/num2)

                                message.channel.send(`${message.author} your answer is:  **${root}**`);
                                break;

                        default:
                                message.channel.send("You have entered an incorrect operator!");
                }
        },
};