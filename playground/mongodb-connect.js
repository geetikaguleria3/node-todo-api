const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');
  db.collection('Todos').insertOne({
    text: 'Hello Geetika',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert Todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Geetika',
    age: 25,
    location: 'New Delhi'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert User',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  })
  client.close();
});
