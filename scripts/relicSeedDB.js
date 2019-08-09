const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/graveholdsInnDB"
);

const relicSeed = [
    {
        Name: "Flexing Dagger",
        Category: "Relic",
        Cost: 2,
        ability: "The next time you focus a or open a breach this turn, it costs 3 Aether less.",
        secondaryAbility: "Destroy this.  Deal 1 damage."
    },
    {
        Name: "Bottled Vortex",
        Category: "Relic",
        Cost: 3,
        ability: "Destroy this.  Destroy up to two cards in your hand or discard pile.  Draw a card.",
        secondaryAbility: ""
    },
    {
        Name: "Unstable Prism",
        Category: "Relic",
        Cost: 3,
        ability: "Play a gem in your hand twice and destroy it.",
        secondaryAbility: "Gain 2 aether"
    },
    {
        Name: "Blasting Staff",
        Category: "Relic",
        Cost: 4,
        ability: "You may discard a spell in hand.  If you do, deal 2 damage.  Deal additional damage equal to the cost of the discarded spell.",
        secondaryAbility: ""
    },
    {
        Name: "Focusing Orb",
        Category: "Relic",
        Cost: 4,
        ability: "Focus any player's breach.",
        secondaryAbility: "Destroy this.  Gravehold gains 3 life."
    }
]