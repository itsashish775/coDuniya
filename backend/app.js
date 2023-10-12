const express = require('express');
const userRoutes = require("./app/routes/userRoute");
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())




// Use routes
app.use('/users', userRoutes);

// ...

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});