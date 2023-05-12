import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
    console.log('hellor from express');
    res.status(200);
    res.json({ message: 'yo' });
})

export default app;