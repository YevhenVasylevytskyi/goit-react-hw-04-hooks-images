const API_KEY = '23013902-f53df9bcd1cd3c8e660b93280';
const BASE_URL = 'https://pixabay.com/api/';

export default function ApiService(searchQuery, page) {
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`;

  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(result => {
      return result;
    })
    .catch(error => console.warn(error));
}
