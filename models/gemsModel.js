const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GemSchema = new Schema({
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
    buyingPower: {
        type: Number,
        required: true,
        trim: true
    },
    secondaryAbility: [{
        type: String,
        required: false,
        trim: true
    }]
})

const Gem = mongoose.model("Gem", GemSchema);

module.exports = Gem;