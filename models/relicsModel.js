const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RelicSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    // gem, relic, or spell
    category: {
        type: String,
        required: true,
        trim: true
    },
    // price to acqure card
    cost: {
        type: Number,
        required: true,
        trim: true
    },
    ability: {
        type: String,
        required: true,
        trim: true
    },
    secondaryAbility: [{
        type: String,
        required: false,
        trim: true
    }]
})

const Relic = mongoose.model("Relic", RelicSchema);

module.exports = Relic;