const express = require('express');
const kitchen = require('./data/kitchen');
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const userRoutes=require('./routes/userRoutes');
const kitchenRoutes=require('./routes/kitchenRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});

//app.get('/api/kitchen', (req, res) => {
 //  res.json(protect,kitchen);
//});

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 9999;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));