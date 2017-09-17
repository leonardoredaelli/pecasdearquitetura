var express = require('express');
var app = express();
app.use('/', express.static('public'));
var fixedPort = 3000;
app.set('port', (process.env.PORT || fixedPort));
app.listen(app.get('port'), function() {
    console.log(`Server running on http://localhost:${app.get('port')}`);
    return "this request didn't reach the public folder"
});
