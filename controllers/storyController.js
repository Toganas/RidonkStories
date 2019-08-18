<<<<<<< HEAD
const Story = require("../models/Story");

=======

const db = require("../models");

>>>>>>> cfbb1d01154e64c75747e83737943895e0daad58
module.exports = {
    findAll: function (req, res) {
        Story
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        Story
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        Story
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
<<<<<<< HEAD
=======

>>>>>>> cfbb1d01154e64c75747e83737943895e0daad58
    }
}