const express = require("express");
const router = express.Router();
const auth = require("../auth");
const axios = require("axios")

//API route
router.get("/api", auth, async (req, res) => {
    try {
        const response = await axios("https://openapi.etsy.com/v2/listings/active?includes=MainImage&api_key=5351youj6cfiov6nca92yf3i&tags=gift")
        // console.log(response.data)


        
        //function that can get a random number from 1-25, 
        //we'll use this to target a random result from our search results object!
        function randomNumber(){
        const randNum = Math.floor(Math.random() * 25)
        return randNum
        }
        //categories response is an array, let's loop through the categories
        let products = []
    
        for (let i=0; i<11; i++) {
        //get random number which we will use as index
        const randomIndex = randomNumber()
        console.log(randomIndex)

        //get product name from API response 
        const productName = response.data.results[randomIndex].title
        console.log(productName)

        //get product URL from API response
        const productURL = response.data.results[randomIndex].url
        console.log(productURL)

        //get product image from API response
        const productImage = response.data.results[randomIndex].MainImage.url_fullxfull
        console.log(productImage)
        products[i] = {
            name: productName,
            image: productImage,
            url: productURL 
            };
        }
        console.log(products);


    

    
        res.json(response.data)
        
    } catch (error) {
        res.status(400).json(error);
    }
});
  
module.exports = router;