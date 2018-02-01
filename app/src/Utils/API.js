import axios from "axios";

export default {
  getGifs: function() {
    return axios.get(queryURL + searchQuery + apiKey);
  }
};
