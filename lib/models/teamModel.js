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


teamSchema.statics = {
	createTeam: function ({ name = null}) {

        let newTeam = new this();
            newTeam.name = name;

        return newTeam.save();
	}
};


export default mongoose.model('team', teamSchema);
