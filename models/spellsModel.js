const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpellSchema = new Schema({
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
    spellDamage: {
        type: Number,
        required: false,
        trim: true
    },
    secondaryAbility: [{
        type: String,
        required: false,
        trim: true
    }]
})

const Spell = mongoose.model("Spell", SpellSchema);

module.exports = Spell;