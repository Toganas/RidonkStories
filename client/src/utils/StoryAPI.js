import axios from "axios";

export default {

    saveStory: function () {
        return axios.post("/api/story");
    },

    getStory: function (id) {
        return axios.get("/api/story/");

    },

    // deleteStory: function(id) {
    //     return axios.delete("/api/books/" +id);
    // }

};