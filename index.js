const express = require('express');
const app = express();

app.get('/',function(req, res) {
    res.send('CICD Pipelines Home Page');
});

app.listen(3000, function() {
    console.log('CICD Pipelines app listening on port 3000!');
}
);  