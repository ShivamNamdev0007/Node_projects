const axios = require('axios');
const cheerio = require('cheerio');
const XLSX = require('xlsx');

async function scrapeWebsite(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    
    
    $('.sc-1hp8d8a-0 .sc-Ehqfj .bxOQva').each((index, element) => {
      console.log($(element).text());
    });

    console.log(titles);
  } catch (error) {
    console.error('Error fetching the webpage:', error);
  }
}

scrapeWebsite('https://example-ecommerce-website.com');
