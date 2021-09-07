export default class Api {
  headers = {
    authorization: "6554ca45-9ec7-4afa-bc65-05491936dde3",
    'Content-type': "application/json",
  };

  constructor(options) {
    this.url = options.url;
  }

  getInitialCards() {
    return fetch(`${this.url}`+'cards', {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => console.log(err));
    //this.url
    //GET
    //return data
  }

  getUserInfo() {
    return fetch(`${this.url}`+'users/me', {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => console.log(err));
    //this.url
    //GET
    //return data
  }
  // createCard(data) {
  //   return fetch(this.url, {
  //     headers: this.headers,
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       return Promise.reject(`Ошибка: ${res.status}`);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // deleteCard(id) {
  //   return fetch(`${this.url}/${id}`, {
  //     method: "DELETE",
  //     headers: this.headers,
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       return Promise.reject(`Ошибка: ${res.status}`);
  //     })
  //     .catch((err) => console.log(err));
  // }
}
