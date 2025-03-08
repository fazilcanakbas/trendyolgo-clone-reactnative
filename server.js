const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const AWS = require('aws-sdk');

const path = require('path');



mongoose.connect("mongodb://localhost:27017/restaurantapi" )
  .then(() => {
    console.log("MongoDB'ye bağlanıldı");
  })
  .catch((err) => {
    console.error("MongoDB bağlantı hatası:", err);
  });

  const secondDb = mongoose.createConnection("mongodb://localhost:27017/restaurantapi")
  
  secondDb.on("connected", () => {
    console.log("MongoDB'2ye bağlanıldı");  
  });
  
  secondDb.on("error", (err) => {
    console.error("MongoDB 2 bağlantı hatası:", err);
  });
  


// Schema ve Model
const restaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: String,
  time: String,
  workingHours: String,
  Category: String,
  rating: Number,
  review: String,
  image: String,
  distance: String,
  products: [
    {
     categoryname: String,
    name: String,
    description: String,
    price: Number,
 image: String,
 discountedPrice: Number,
    }
  ],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'restaurants');

const SecondRestaurant = secondDb.model('Restaurant', restaurantSchema, 'restaurants');


const app = express();
app.use(cors());
app.use(express.json());


app.get('/trendyolgo',async (req,res) => {
  try{
    const trendyolgo = await SecondRestaurant.find();
    res.json(trendyolgo);
  } catch (err){
    console.error('Hata:', err);
    res.status(500).send(err);
  }
});



app.get('restaurant', async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      // console.log('MongoDB verileri:', restaurants);  Loglama
      res.json(restaurants);
    } catch (err) {
      console.error('Hata:', err);
      res.status(500).send(err);
    }
  });

app.get('/restaurantcards', async (req, res) => {
  try{
    const restaurantcards = await SecondRestaurant.find();
    console.log('restaurantcards: ', restaurantcards);
    res.json(restaurantcards);
  }
  catch(err){
    console.error('Hata:', err);
    res.status(500).send(err);  }
  });


  app.get('/restaurants', async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      res.status(200).json(restaurants);
    } catch (err) {
      res.status(500).json({ error: "Restoranlar alınamadı" });
    }
  });



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});





