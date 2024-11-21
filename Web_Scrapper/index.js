const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsite(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    // Example: Extracting all the titles from a blog page
    
    $('.sc-1hp8d8a-0 .sc-Ehqfj .bxOQva').each((index, element) => {
      console.log($(element).text());
    });

    // console.log(titles);
  } catch (error) {
    console.error('Error fetching the webpage:', error);
  }
}

scrapeWebsite('https://www.zomato.com/indore/delivery/dish-pizza');
