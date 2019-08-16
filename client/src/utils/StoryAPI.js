import axios from "axios" ;

export default {

    saveStory: function(storyData) {
        return axios.post("/api/", storyData);
    },

    getStory: function(id) {
        return axios.get("/api/stories/");
        
    },

    deleteStory: function(id) {
        return axios.delete("/api/books/" +id);
    }

};