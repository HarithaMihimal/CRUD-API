const express = require('express');
const mongoose = require('mongoose');
const app=  express();





app.get('/', (req, res) => {
res.send('Hello World-');
    
});

app.post('/api/products', (req, res) => {
    // https://youtu.be/_7UQPve99r4?si=0jygEnm2ClrMxJmF&t=2095

// Connect to MongoDB
mongoose.connect(`mongodb+srv://admin:admin@crud-api-backenddb.vjpkb.mongodb.net/CRUD-API?retryWrites=true&w=majority&appName=CRUD-API-BackendDB`)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
})
.catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});
