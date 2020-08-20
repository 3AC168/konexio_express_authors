// Import et instantiation
const express = require('express');
const port = 3000;

const app = express(); 

// J'ai créé les 'const' pour Indice - Bonus
const authors = [{name: "Lawrence Nowell", nationality: "UK"}, {name: "William Shakespeare", nationality: "UK"}, {name: "Charles Dicken", nationality: "UK"}, {name: "Oscar Wilde", nationality: "UK"}]; 
const books = [{books: ["Beowulf"]}, {books: ["Hamlet", "Othello", "Romeo ad Juliet", "MacBeth"]}, {books: ["Oliver Twist", "A Christmas Carol"]}, {books: ["The Picture of Dorian Gray", "The Importance of Being Earnes"]}];


// Exercice 1 : Routes Authors
app.get('/', (req, res) => { 
    res.send('Authors API')
});
app.get('/authors/1', (req, res) => {
    res.send('Lawrence Nowell, UK')
});
app.get('/authors/2', (req, res) => {
    res.send('William Shakespeare, UK')
}); 
app.get('/authors/3', (req, res) => {
    res.send('Charles Dicken, UK')
}); 
app.get('/authors/4', (req, res) => {
    res.send('Oscar Wilde, UK')
});
// Indice - Bonus 1 : Les 2 méthodes marchent
//app.get('/authors', (req, res) => {
//    res.send('Lawrence Nowell, UK, William Shakespeare, UK, Charles Dicken, UK, Oscar Wilde, UK')
//});
app.get('/authors', (req, res) => {
    res.send(authors)
});


// Exercice 2 : Routes Authors with theirs Books
app.get('/authors/1/books', (req, res) => {
    res.send('Beowulf')
});
app.get('/authors/2/books', (req, res) => {
    res.send('Hamlet, Othello, Romeo ad Juliet, MacBeth')
}); 
app.get('/authors/3/books', (req, res) => {
    res.send('Oliver Twist, A Christmas Carol')
}); 
app.get('/authors/4/books', (req, res) => {
    res.send('The Picture of Dorian Gray, The Importance of Being Earnes')
}); 
// Indice - Bonus 2
app.get('/bboks', (req, res) => {
    res.send(books)
});


// Exercice 3 : gérer les messages error
app.get('/cars', (req, res) => {
    res.send('error')
}); 
app.get('/authors/12133', (req, res) => {
    res.send('The author with the ID 12133 does not exist')
});


// Exercice 4 : res.send() et res.json() marchent
app.get('/authors', (req, res) => {
    res.json(authors)
});
app.get('/authors/id/books', (req, res) => {
    res.json(books)
});




// Run Server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
