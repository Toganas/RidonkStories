import axios from "axios" ;

export default {

    saveStory: function(storyData) {
        return axios.post("/api/stories", storyData);
    },

    getStory: function(id) {
        return axios.get("/api/stories/" + id);
        
    },

    deleteStory: function(id) {
        return axios.delete("/api/books/" +id);
    }

};