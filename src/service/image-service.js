import axios from 'axios';

const KEY = '35800613-7b32faaa33505b6c7b58566c2';
const BASE_URL = 'https://pixabay.com/api/';

export const findImage = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
