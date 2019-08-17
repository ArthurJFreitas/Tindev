const { Schema, model } = require('mongoose');

const DevShema = new Schema ({

    name: {
        type: String,
    },
    user: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    avatar: {
        type: String,
        required: true
    },
    likes: [{
       type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
         ref: 'Dev',
     }],
}, {
    timestamps: true,
});

//CreatedAt, UpdatedAt


module.exports = model('Dev', DevShema);