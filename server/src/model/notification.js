const { Schema, model } = require("mongoose");
const Types = Schema.Types;

const _schema = new Schema({
    type: {
        type: Number, // [0: like] - [1: comment] - [2: tag] - [3: follow] - [4: accept] - [5: post]
        required: true
    },
    createdBy: {
        type: Types.ObjectId,
        required: true
    },
    actionContent: {
        type: Object,
        required: false
    },
    receiver: {
        type: [Types.ObjectId],
        require: true
    },
    postId: {
        type: Types.ObjectId,
        required: false
    }
}, { timestamps: true })

module.exports = model("notification", _schema);