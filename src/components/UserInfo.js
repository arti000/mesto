export default class UserInfo {
  constructor({ profileName, profileJob, avatar }) {
    this._nameSelector = document.querySelector(profileName);
    this._jobSelector = document.querySelector(profileJob);
    this._avatarSelector = document.querySelector(avatar)
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      about: this._jobSelector.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._nameSelector.textContent = name;
    this._jobSelector.textContent = about;
  }
  
  setAvatar({ avatar }) {
    this._avatarSelector.src = avatar;
  }
}
