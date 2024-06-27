const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.get('/create', (req, res) => {
    const currentDate = new Date();
    const fileName = `${currentDate.toISOString().replace(/:/g, '_').replace(/-/g, '_')}.txt`;

    fs.writeFileSync(`./createdfiles/` + fileName,fileName )
    res.send('file created')
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