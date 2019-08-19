const mongoose = require("mongoose");


const StorySchema = new mongoose.Schema({
    userId: {
        type: String,
        // required: true
    },
    title: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    lol: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "users"
            }
        }
    ],
    // Future Development - make it so users can favorite a story for later
    // favorites: [
    //     {
    //         user: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: "users"
    //         }
    //     }
    // ],
    category: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Story = mongoose.model("story", StorySchema)

module.exports = Story