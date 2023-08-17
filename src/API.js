import axios from 'axios';

const API_KEY = '20403084-138caa44d9b5066c1dd91e458';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchImages = async (query, page) => {
  const separated = query.split('/');
  const exstractedQuery = separated[1];
  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        q: exstractedQuery,
        page: page,
        per_page: 30,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
