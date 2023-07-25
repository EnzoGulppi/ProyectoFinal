import axios from 'axios';

export const getDogImages = async () => {
  const base_url = 'https://dog.ceo/api/breeds/image/random/12'; // Puedes cambiar el número "10" para obtener más o menos imágenes
  try {
    const response = await axios.get(base_url);
    return response.data.message;
  } catch (error) {
    console.log(error);
    return [];
  }
};

