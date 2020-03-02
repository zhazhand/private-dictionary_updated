const app = require('./app');
const port = process.env.POPT || 5000;

app.listen(port, () => console.log(`hello from server on ${port}`));