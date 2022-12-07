const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// root route
app.get('/', (req, res) => {
    return res.send('HOMEPAGE')
})

app.get('/dogs', function(request, response) {
    console.log('you asked for dawgzzzzz')
    return response.send('Dogs go brk brk');
});

// post request
app.get('/chickens', (req, res) => {
    res.send('bock bock bock (get request)')
})

app.post('/chickens', function createChicken(req, res) {
    return res.send('you created a new CHICKEN')
})

const greetings = {
    en: 'hello', 
    fr: 'bonjour', 
    ic: 'hallo', 
    js: 'konn'
}

app.get('/greet/:language', (req, res) => {
    console.log(req.params)
    const lang = req.params.language;
    const greeting = greetings[lang]
    if (!greeting) {
        return res.send('INVALID LANGUAGE')
    }
    res.send(greeting)
})

// query strings
app.get('/search', (req, res) => {
    // the query came from localhost:3000/search?term=---&sort=-----
    const {term, sort} = req.query;
    res.send(`Term is ${term}, and sort it ${sort}`)
})

// headers
app.get('/show-me-headers', (req, res) => {
    console.log(req.rawHeaders)
    res.send(req.headers)
})

app.get('/show-language', (req, res) => {
    const lang = req.headers['accept-language']
    res.send(`your language preference is ${lang}`);
})

// body of request 
// reference the form data on index.html
app.post('/register', (req, res) => {
    res.send(`Welcome ${req.body.username}`);
})

app.listen(3000, function() {
    console.log('App on port 3000')
});



