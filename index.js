var express = require('express');
var app = express();
const ecstatic = require('ecstatic');


app.use(ecstatic({
    root: `${__dirname}/public`,
    showdir: true,
}));
app.listen(8080);
console.log('Listening on port 8080');

