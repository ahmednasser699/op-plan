const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

const notificationCreate = (notification) => {
  return admin.firestore().collection('notifications').add(notification)
  .then(doc=>console.log('creted one notifi', doc))
}

exports.createdproject = functions.firestore.document('projects/{projectId}').onCreate(doc => {
  const project = doc.data()
  const notification = {
    content: 'new project was added',
    user: `${project.authfirstname} ${project.authlastname}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  }
   return console.log(notification)
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
