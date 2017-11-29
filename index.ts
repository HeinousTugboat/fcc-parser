import * as express from 'express';

const app = express();
const port = process.argv[2] || 58808;

app.get('/*', (req, res) => {
    let re = /^Mozilla\/5\.0 \((.*)\).*\(?.*\).*$/g;
    res.send({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: (req.headers['user-agent'] as string).split(re)[1] || req.headers['user-agent']
    });
});

app.listen(port, () => {
    console.log('Listening on '+port+'!');
});
