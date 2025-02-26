const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');






// MongoDB Bağlantısı
mongoose.connect("mongodb://localhost:27017/restaurant" )
  .then(() => {
    console.log("MongoDB'ye bağlanıldı");
  })
  .catch((err) => {
    console.error("MongoDB bağlantı hatası:", err);
  });

  const secondDb = mongoose.createConnection("mongodb://localhost:27017/restaurantcards")
  
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
  Category: String,
  rating: Number,
  review: String,
  image: String,
  distance: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'restaurants');

const SecondRestaurant = secondDb.model('Restaurant', restaurantSchema, 'restaurants');


// Express Setup
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



// API Endpoint
app.get('/restaurant', async (req, res) => {
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

// Sunucuyu Başlatma
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});





