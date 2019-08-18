import axios from "axios";

export default {
    saveStory: function (storyData) {
        return axios.post("/api/story/", storyData);
    },

    getStory: function () {
        return axios.get("/api/story/");
    },

    deleteStory: function (id) {
        return axios.delete("/api/books/" + id);
    }
};