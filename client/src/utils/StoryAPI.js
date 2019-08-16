import axios from "axios" ;

export default {

    saveStory: function() {
        return axios.post("/api/stories");
    },

    getStory: function(id) {
        return axios.get("/api/stories/");
        
    },

    deleteStory: function(id) {
        return axios.delete("/api/books/" +id);
    }

};