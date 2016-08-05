import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt: Date
});

teamSchema.pre('save', (next) => {
    this.updatedAt = Date.now();
    next();
});

teamSchema.statics = {
	createTeam: function ({ name = null}) {

        console.log(this);

		return this.insert({
            name: name
        }).exec()
	}
};


export default mongoose.model('team', teamSchema);
