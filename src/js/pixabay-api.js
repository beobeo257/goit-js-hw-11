import axios from 'axios';

const API_KEY = '57635798-c4932ba894df776d1b1444d77';
const BASE_URL =
  'https://pixabay.com/api/?key=57635798-c4932ba894df776d1b1444d77&q=yellow+flowers&image_type=photo';

/**
 * Виконує HTTP-запит до Pixabay API за ключовим словом.
 * @param {string} query - Пошукове слово
 * @returns {Promise<object>} Об'єкт з даними відповіді (data)
 */
export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
