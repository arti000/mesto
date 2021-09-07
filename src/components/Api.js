export default class Api {
  headers = {
    authorization: "6554ca45-9ec7-4afa-bc65-05491936dde3",
    "Content-type": "application/json",
  };

  constructor(options) {
    this.url = options.url;
  }

  getInitialCards() {
    return fetch(`${this.url}` + "cards", {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => console.log(err));
  }

  getUserInfo() {
    return fetch(`${this.url}` + "users/me", {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => console.log(err));
  }

  setUserInfo(data) {
    return fetch(`${this.url}` + "users/me", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => console.log(err));
  }

  setAvatar(data) {
    return fetch(`${this.url}` + "users/me/avatar", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => console.log(err));
  }

  createCard(data) {
    return fetch(`${this.url}` + "cards", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: data.cardName,
        link: data.cardLink,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => console.log(err));
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
