const express = require('express') //require the package

const app = express()  //assing to a variable and assign the function to it


app.use('/', (req,res)=>{
  res.json({
    working: 'yes'
  })
})


//listen to request
app.listen(4000, ()=>{
  console.log('server is listening on port 4000')
})