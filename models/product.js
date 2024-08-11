const { getDb } = require('../util/database');

class Product{
    constructor(title, price, description, imageUrl,stocks) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl; 
        this.stocks = stocks;
    }
    save() {
        const db = getDb();
        return db.collection('products').insertOne(this).then(result => {
            return true;
        }).catch(error => {
            return false;
        })
    }
    static getAllProducts() {
    const db = getDb();
        return db.collection('products').find().toArray().then((products) => {
        return products
        }).catch((error) => {
            return error;
    });
    }
    static deleteById(prodId) {
        const db = getDb(); 
        return db.collection('products').deleteOne({ _id: new mongodb.ObjectId(prodId) }).then((res) => {
            return res;
        }).catch(err => {
            return err;
        })
    }
}


module.exports = Product;