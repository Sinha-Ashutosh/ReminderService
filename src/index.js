const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {PORT} = require('./config/serverConfig');
const TIcketController = require('./controllers/ticket-controller');
// const { SendBasicEmail, sendBasicEmail } = require('./services/email-services');
// const cron = require('node-cron');

const jobs = require('./utils/jobs');

const SetupAndStartServer = () => { 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets', TIcketController.create);

    app.listen(PORT, () => {
        console.log(`server started on port __${PORT}__`);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'kumarsinharakesh572@gmail.com',
        //     'This is an email',
        //     'Hey, How are ou, I hope you are good',
        // );
    });
}

SetupAndStartServer();