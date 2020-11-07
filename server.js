const express = require('express');
const PORT = process.env.PORT|| 5000;

const articleRouter = require('./routes/arcticles');

const app= express();

// view engine to display HTML, "ejs" -- to convert the code to HTML
app.set('view engine', 'ejs');


app.use('/articles',articleRouter);
app.get('/', (req, res)=>{
    const articles= [
        {
            title:'Test Article',
            createdAt : new Date(),
            description :"Test description"
        },
        {
            title:'Test Article 2',
            createdAt :new Date(),
            description :"Test description 2"
        }
    ]
    res.render('articles/index',{articles:articles});
})

app.listen(PORT, ()=>{
    console.log(`Server connected to port ${PORT}`)
});

