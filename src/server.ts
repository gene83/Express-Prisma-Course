import express from 'express';
import router from './router'

const app = express();

app.get('/', (req, res) => {
    console.log('hellor from express');
    res.status(200);
    res.json({ message: 'yo' });
})

app.use('/api', router);

export default app;