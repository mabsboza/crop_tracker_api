const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', function (req, res) {
res.send('Express application working ...');
});
// Start server
app.listen(8080, () => console.log('server running ...'))
module.exports = app;