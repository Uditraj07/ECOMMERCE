const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    
    MongoClient.connect('mongodb+srv://rohitrajrouth:2vDUERouxtYhCt6w@cluster0.bvmqxb7.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0')
        .then((client) => {
            console.log('Connected to MongoDB');
            _db = client.db();
            callback(client);
        })
        .catch((error) => {
            console.error('Failed to connect to MongoDB:', error);
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw new Error('No database found');
};

module.exports = {
    mongoConnect,
    getDb
};