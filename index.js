const axios = require('axios');

axios.get('https://ozarktechwebdev.com/api/jokes.json')
  .then((response) => {

    //get the array of jokes
    const jokes = response.data.jokes;

    //pick a random index from 0 to the last joke
    const joke = jokes[Math.floor(Math.random() * jokes.length)];


    console.log("Here's a developer joke for today:");
    console.log("Q: " + joke.question);
    console.log("A: " + joke.answer);
    })
	.catch(() => {
		console.log("Could not fetch a joke. Try again later.");
	});
