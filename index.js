const app = require('./app');
const port = process.env.POPT || 5000;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'hi'
    });
});
app.listen(port, () => console.log(`hello from server on ${port}`));