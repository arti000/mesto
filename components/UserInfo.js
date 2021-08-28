import { nameInput, jobInput, profileInfo } from "../utils/constants.js";
export default class UserInfo {
  constructur(profileName, profileJob) {
    this._nameSelector = profileName;
    this._jobSelector = profileJob;
  }

  _getContent() {
    const profileElement = document
    .querySelector(".profile__content")
    .content
    .querySelector(".profile__info")
    .cloneNode(true);
    console.log(1);
    return profileElement;
  }

  getUserInfo() {
    this._element = this._getContent();
    const userInfo = {
      name: this._element.querySelector(this._nameSelector).textContent,
      job: this._element.querySelector(this._jobSelector).textContent
    };
    return userInfo;
  }

  setUserInfo() {

  }
}
