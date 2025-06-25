const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {PORT} = require('./config/serverConfig');
const { SendBasicEmail, sendBasicEmail } = require('./services/email-services');
// const cron = require('node-cron');
const SetupAndStartServer = () => { 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, () => {
        console.log(`server started on port __${PORT}__`);

        sendBasicEmail(
            'support@admin.com',
            'kumarsinharakesh572@gmail.com',
            'This is an email',
            'Hey, How are ou, I hope you are good',
        );
        // cron.schedule('*/2 * * * *', () => {
        //     console.log('Running  a task every 2min');
        // });
    });
}

SetupAndStartServer();