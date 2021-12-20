const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const ecstatic = require('ecstatic');

app.use(fileUpload());

app.use(ecstatic({
    root: `${__dirname}/public`,
    showdir: true,
}));

app.post('/upload', function (req, res) {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    sampleFile = req.files.file;
    uploadPath = __dirname + '/public/' + sampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
}) 
app.listen(8080);
console.log('Listening on port 8080');

