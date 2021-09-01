const msk = new URL("../images/msk.jpg", import.meta.url);
const piter = new URL("../images/piter.jpg", import.meta.url);
const vlg = new URL("../images/vlg.jpg", import.meta.url);
const ptrzvdsk = new URL("../images/ptrzvdsk.jpg", import.meta.url);
const kandalaksha = new URL("../images/kandalaksha.jpg", import.meta.url);
const oneghzskaya = new URL("../images/oneghzskaya.jpg", import.meta.url);

//Массив с начальными карточками
export const initialCards = [
  {
    name: "Москва",
    link: msk,
  },
  {
    name: "Санкт-Петербург",
    link: piter,
  },
  {
    name: "Волгоград",
    link: vlg,
  },
  {
    name: "Петрозаводск",
    link: ptrzvdsk,
  },
  {
    name: "Кандалакша",
    link: kandalaksha,
  },
  {
    name: "Республика Карелия",
    link: oneghzskaya,
  },
];
