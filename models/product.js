const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const productSchema = new mongoose.Schema({
    category: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    warehouses: [{
        location: { type: String },
        quantity: { type: Number }
    }],
    specifications: { type: String }
}, {
    collection: 'products',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

productSchema.plugin(mongoosePaginate);

const STModel = mongoose.model('Product', productSchema);
module.exports = STModel;