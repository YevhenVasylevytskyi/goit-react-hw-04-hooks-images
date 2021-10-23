export default class ApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.total = 0;
    this.amount = 0;
  }

  getImages() {
    const { baseURL, api_key } = {
      baseURL: 'https://pixabay.com/api/',
      api_key: '23013902-f53df9bcd1cd3c8e660b93280',
    };

    const URL = `${baseURL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${api_key}`;

    return fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(result => {
        this.page += 1;
        this.total = result.totalHits;
        this.amount += result.hits.length;

        return result;
      })
      .catch(error => console.warn(error));
  }

  resetPage() {
    this.page = 1;
  }

  resetAmount() {
    this.amount = 0;
  }

  get value() {
    return this.searchQuery;
  }

  set value(newInputValue) {
    this.searchQuery = newInputValue;
  }
}
