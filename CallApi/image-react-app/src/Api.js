import axios from "axios";

const SearchImage = async (x) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID MZpbqA15haqLH9gVM8HFRZRbUc3RZoF3q8XzhFVHFWU",
    },
    params: {
      query: x,
    },
  });
  return response.data.results;
};

export default SearchImage;
