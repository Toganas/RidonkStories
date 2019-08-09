const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/graveholdsInnDB"
);

const gemSeed = [
    {
        Name: "Jade",
        Category: "Gem",
        Cost: 2,
        buyingPower: 2,
        secondaryAbility: ""
    },
    {
        Name: "Leeching Agate",
        Category: "Gem",
        Cost: 3,
        buyingPower: 2,
        secondaryAbility: "When you gain this, gain a charge."
    },
    {
        Name: "Sifter's Pearl",
        Category: "Gem",
        Cost: 3,
        buyingPower: 2,
        secondaryAbility: "Each player reveals the top card of their deck and either discards it or returns it to the top of their deck."
    },
    {
        Name: "V'riswood Amber",
        Category: "Gem",
        Cost: 2,
        buyingPower: 2,
        secondaryAbility: "When you gain this, you may place it on top of your deck."
    },
    {
        Name: "Diamond cluster",
        Category: "Gem",
        Cost: 4,
        buyingPower: 2,
        secondaryAbility: "If this is the second Diamond Cluster played this turn, gain 4 aether instead."
    }
]