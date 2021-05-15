const dotenv = require("dotenv").config();
const admin = require("firebase-admin");
const serviceAccount = require(`../${process.env.SERVICE_ACCOUNT_FILENAME}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
});

module.exports = admin.auth();
