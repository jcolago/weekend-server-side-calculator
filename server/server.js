const express = require("express");
const app = express();
const PORT = 5000;
const historyArray = require('./modules/history');



app.use(express.static('server/public'));
app.use(express.urlencoded({extended: true}));


app.get('/history', (req, res) => {
    res.send(historyArray);
    console.log(historyArray);
})

app.post ('/history', (req, res)=>{
    console.log('POST request for /history');
    res.sendStatus(200);
})



app.listen(PORT, ()=> {
    console.log('Listening on port:', PORT)
})