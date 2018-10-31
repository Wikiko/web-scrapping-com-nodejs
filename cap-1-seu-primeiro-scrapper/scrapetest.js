const axios = require('axios');
const cheerio = require('cheerio');

async function main() {
    const response = await axios.get('http://pythonscraping.com/exercises/exercise1.html')
    const $ = cheerio.load(response.data);
    console.log($('h1').text())
}

main();