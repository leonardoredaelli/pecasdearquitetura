var express = require('express');
var app = express();
app.use('/', express.static('public'));
var port = 3000;
app.listen(port, function() {
    console.log(`Server running on http://localhost:${port}`);
    return "this request didn't reach the public folder"
});
