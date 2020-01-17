const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://semanaomnistack10:199010@personalcluster-nahse.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000' } ));
app.use(express.json());

app.use(routes);

app.listen(42069);


