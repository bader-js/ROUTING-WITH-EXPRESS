const express = require ('express')
// const hbs = require ('hbs')
const app = express()

// app.set('view engine', hbs)

// app.get('/connected_user', (req, res) => {

//     res.render('user.hbs', {name : "bader"})
// })


app.use(date = (req, res, next)=> {
    var hour = new Date().getHours();
     hour > 17  || hour <= 11
    ? res.send(' <h1>ouvert de 8h à 17h</h1>')
  : next()
});

app.use (express.static(__dirname+'/public'))




app.listen(3000, (err)=>{
    if (err) console.log("server is not running")
    else console.log ("server is running on port 3000")
})