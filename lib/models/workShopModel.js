import mongoose from 'mongoose';

const workShopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
    }
});
