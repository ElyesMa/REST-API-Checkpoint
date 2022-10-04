require('dotenv').config({path:'./config/.env'});
const mongoose=require('mongoose')
const express=require('express');
const app=express();
const userRoutes=require("./Routers/userRoutes")
app.use(express.json());

//Redirect each request to userRoutes
app.use('/api/v1/users', userRoutes);

//Connect to the database on Mango Atlas
mongoose.connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

//Connect to server once we are connected to the database
mongoose.connection.once('open', () => {
console.log('Connected to MongoDB');
app.listen(3000, () => console.log(`Server running on port 3000`));
})

