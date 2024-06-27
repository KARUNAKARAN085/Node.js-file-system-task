const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

//generate file name as created date and time
let date = new Date();
let filename = date.getFullYear() + '-' + (date.getMonth() + 1) + '-'+ date.getDate() + ' - ' + date.getHours() + '.' + date.getMinutes() + '.'+ date.getSeconds() + `.txt`;
function generatefile(filename){
    return filename;
}

app.get( '/date/', (req, res) => {
    const code = req.body.code;
    
    fs.writeFile(`./createdfiles/` + generatefile(filename),code,(err)=>{
        if(!err){
            res.send('File created');
        } else{
            res.send(err.message);
        }
    })
})

//reading the files from folder
app.get('/files', (req, res) => {
    fs.readdir('./createdfiles/', (err, files) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(files);
        }
    })
})

// starts a simple http server locally on port 3000
app.listen(3000, () => {
  console.log('Listening on 127.0.0.1:3000');
});