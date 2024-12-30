const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }, 
    type: { 
        type: String, 
        enum: ['game', 'spin', 'deposit', 'credit', 'referral'], 
        required: true 
    }, 
    amount: { 
        type: Number, 
        required: true 
    },
    currentbalance :{
        type: Number, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['pending', 'success', 'failed'], 
        default: 'success' 
    }, 
    details: { 
        type: Object, 
        default: {} 
    }, 
    createdAt: { 
        type: Date, 
        default: Date.now 
    } ,
    note:{
        type:String,
        default :""
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
