const express = require('express');
const PORT = process.env.PORT|| 5000;

const app= express();

// view engine to display HTML, "ejs" -- to convert the code to HTML
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(PORT, ()=>{
    console.log(`Server connected to port ${PORT}`)
});