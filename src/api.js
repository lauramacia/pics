import axios from "axios";

const searchImages = async (term) => { 
    const response = await axios.get("https://api.unsplash.com/search/photos", {
          headers: {
            Authorization: `Client-ID 3aERXMWhWxYQQaMtVu7KUn5ohJ_LDFXsIMJnM40L0s4`,
          },
          params: {
            query: term
        }
      });
      console.log(response.data.results);
      return response.data.results;
};

export default searchImages;