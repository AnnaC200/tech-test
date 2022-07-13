import axios from "axios";

const getImages = (query) => {
  if (!query){
    return Promise.resolve([]);
    // this tells func to return an empty promise if the func runs without a user entering a query         
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        //   console.log(response.data.collection.items)
          const imageResults = response.data.collection.items
          const parsedImages = imageResults.filter(
              (results) => results.data[0].media_type === "image"
          );
          const images = parsedImages.map((image) => image.links[0].href)
          return images
      })
      .catch((err) => {
          console.log(err);
      });
  }
}

export default getImages;