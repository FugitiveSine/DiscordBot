require('dotenv').config();
const {REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'add',
        description: 'adds two numbers',
    },
    {
        name: 'getimg',
        description: 'retrieves an image',
    },
    {
        name: 'hey',
        description: 'HIII!!!!',
    },
    {
        name: 'song',
        description: 'musik',
    },

]
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
(async () => {
    try {
      console.log('Registering slash commands...');
  
      await rest.put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID,
          process.env.GUILD_ID,
          process.env.TOKEN,
          process.env.PIXABAYAPIKEY,
          
        ),
        { body: commands }
      );
  
      console.log('Slash commands were registered successfully!');
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  })();



