module.exports = {
  name: 'weather',
  description: "Used to get the weather of a place",
  execute(message, args, Discord, weather) {

    const city = args[0]

    weather.find({search: args.join(" "), degreeType: "C"}, function(error, result){

      if (error) return message.channel.send(error)
      if (!city) return message.channel.send("You didn't enter the name of the place of which you want to get the weather.")

      if (result === undefined || result.length === 0) return message.channel.send("You didn't specify a valid location")

      let current = result[0].current
      let location = result[0].location

      const embed = new Discord.MessageEmbed()
      .setTitle(`Weather for ${current.observationpoint}`)
      .setDescription(current.skytext)
      .setThumbnail(current.imageUrl)
      .setColor('RANDOM') 
      .setTimestamp()
      .addField("Temperature: ", `${current.temperature}°C`, true)
      .addField("Wind Speed: ", `${current.winddisplay}`, true)
      .addField("Humidity: ", `${current.humidity}%`, true)
      .addField("Timezone: ", `**UTC:** ${location.timezone}`, true)

      message.channel.send(embed)

    })

  }
}