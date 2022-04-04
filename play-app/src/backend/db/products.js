import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Assasins Creed",
    previousPrice: 6000,
    newPrice : 3000,
    categoryName: "Game ",
    discount : 50,
    rating : 4,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649011352/Images/apps.52808.69748098540497451.a03a4b64-603b-49b8-8644-4924ac7f3076_co0mlx.jpg",
  },
  {
    _id: uuid(),
    title: "PULSE wireless headset",
    previousPrice: 6000,
    newPrice: 3000,
    categoryName: "Accessories",
    discount: 50,
    rating : 4,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649015585/Images/headset-collection-homepage-image-block-01-en-13oct21_tv5quo.jpg"
  },
  {
    _id: uuid(),
    title: "Oculus VR",
    previousPrice: 8000,
    newPrice: 5600,
    categoryName: "VR",
    discount : 30,
    rating : 4,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649016013/Images/oculus_301_00351_02_quest_2_advanced_all_in_one_1657091_kazntb.jpg"

  },
  {
    _id: uuid(),
    title: "PlayStation 5",
    previousPrice: 9000,
    newPrice: 8100,
    categoryName: "Console",
    discount : 10,
    rating : 4,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649016035/Images/playstation-5-horizontal-product-shot-01-ps5-en-23nov20_x9ovud.png"
  },
  {
    _id: uuid(),
    title: "WatchDog+AssasinCreed",
    previousPrice: 5000,
    newPrice: 2000,
    categoryName: "Game",
    discount : 60,
    rating : 3,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649017459/Images/apps.9125.14565512611479485.f9af9404-89c4-40fa-81d2-8409d2b5b95e_v2mbhx.jpg"
  },
  {
    _id: uuid(),
    title: "Xbox wireLess Controller",
    previousPrice: 7000,
    newPrice: 6300,
    categoryName: "Accessories",
    discount : 10,
    rating : 3,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649018236/Images/30bfe703-4500-496e-a7ab-37dff52408b7_dqsndn.jpg"
  },
  {
    _id: uuid(),
    title: " Irusu Play VR ",
    previousPrice: 3000,
    newPrice: 2100,
    categoryName: "VR",
    discount : 30,
    rating : 3,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649020993/Images/51NenGAJ90S._SY450__szymy2.jpg"
  },
  {
    _id: uuid(),
    title: "Xbox",
    previousPrice: 9500 ,
    newPrice: 8550,
    categoryName: "Console",
    discount : 10,
    rating : 3,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649019950/Images/038bfc7b-2ebf-4e7f-bd41-c76c8e6d2b8b_bntkje.jpg"
  },
  {
    _id: uuid(),
    title: "Battle field",
    previousPrice: 4000,
    newPrice: 2000,
    categoryName: "Game",
    discount : 50,
    rating : 2,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649020075/Images/apps.32637.13807660946329883.77877793-8980-45d0-97e3-645639c08903_jxtxfd.jpg"
  },
  {
    _id: uuid(),
    title: "Xbox Stereo Headset",
    previousPrice: 6000,
    newPrice: 600,
    categoryName: "Accessories",
    discount : 90,
    rating : 2,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649020522/Images/6784e5e5-49f8-4785-bf38-3bf5db0a5b29_rx2f49.jpg"
  },
  {
    _id: uuid(),
    title: "VR Box",
    previousPrice: 2000,
    newPrice: 400,
    categoryName: "VR",
    discount : 80,
    rating : 1,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649019515/Images/3d-virtual-reality-glasses-vrbox-original-imaejvhrhprzysuc_c3ibow.webp"
  },
  {
    _id: uuid(),
    title: "SONYPLAYSTATION SLIM",
    previousPrice: 4000,
    newPrice:2800,
    categoryName: "Console",
    discount : 30,
    rating : 1,
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1649021221/Images/sony-playstation-4-slim_oaknkd.webp"
  },
];
