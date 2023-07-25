import { useEffect, useState } from "react";
import { getDogImages } from "../api/getData";
import Main from "../components/Main";

const Home = () => {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const images = await getDogImages();
        const dogDataWithBreeds = images.map(imageUrl => {
          const breed = extractBreedFromUrl(imageUrl);
          return { imageUrl, breed };
        });
        setDogData(dogDataWithBreeds);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const extractBreedFromUrl = (url) => {
    const breedStartIndex = url.indexOf("/breeds/") + 8;
    const breedEndIndex = url.lastIndexOf("/");
    return url.substring(breedStartIndex, breedEndIndex);
  };

  return (
    <section>
      <Main dogData={dogData} />
    </section>
  );
};

export default Home;
