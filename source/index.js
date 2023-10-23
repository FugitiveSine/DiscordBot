require('dotenv').config();
const {Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');
const prompt = require('prompt-sync')();
const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})



client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()){
        return;
    }
    if (interaction.commandName === 'add'){//listens for the command add
         const num1 = interaction.options.get('first-number').value;
         const num2 = interaction.options.get('second-number').value;

        interaction.reply(`The sum is ${num1 + num2}`);

    }
    if(interaction.commandName === 'getimg'){

        async function getImg(){
            const response = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAYAPIKEY}&q=apple&image_type=photo`)
            const data = await response.url
            interaction.reply(response)
        }
        getImg();
        
    }
    if(interaction.commandName === 'song'){
        



        const url = 'https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY'
        async function getArtist() {
            const request = new Request(url, {
                headers: {
                    'Authorization': 'Bearer'
                }
            })
            const res = await fetch(request)
            const data = await res.json()
            console.log(data)
        }
        getArtist();
    }
    if(interaction.commandname === 'hey'){
        interaction.reply('HI!!!!')
    }
})

//let pixabaySearch = prompt('Enter an image you would like to search for:')
//console.log(pixabaySearch)

client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready`)
})



client.login(process.env.TOKEN)