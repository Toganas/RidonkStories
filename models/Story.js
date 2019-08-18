const mongoose = require("mongoose");


const StorySchema = new mongoose.Schema({
<<<<<<< HEAD
    userId: {
        type: String,
        required: true
    },
=======


userId: {
    type: String,
    required: true
},
>>>>>>> cfbb1d01154e64c75747e83737943895e0daad58
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
    category: [
        {
            type: String,
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})
const Story = mongoose.model("story", StorySchema)

module.exports = Story