

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
  }

  getFullList () {
    return axios.get(this.BASE_URL);
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/${id}`);
  }

  createOneRegister ({name, occupation, weapon, cartoon}) {
    return axios.post(this.BASE_URL, {name, occupation, weapon, cartoon});
  }

  updateOneRegister (id, object) {
    return axios.put(`${this.BASE_URL}/${id}`, object);
  }
  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/${id}`);
  }
}

