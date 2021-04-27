import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.get('/', function (req, res) {
    res.send('Express application working ...');
});
// Start server
app.listen(8080, () => console.log('server running ...'))
export default app;