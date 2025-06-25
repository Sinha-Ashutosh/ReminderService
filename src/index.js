const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {PORT} = require('./config/serverConfig');
const { SendBasicEmail, sendBasicEmail } = require('./services/email-services');
const SetupAndStartServer = () => { 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, () => {
        console.log(`server started on port __${PORT}__`);

        sendBasicEmail(
            'support@admin.com',
            'sinhaashutosh2004@gmail.com',
            'This is an email',
            'Hey, How are ou, I hope you are good',
        );
    });
}

SetupAndStartServer();