// src/data/plantsData.js

import aloeVera from "../assets/aloe-vera.png";
import cactus from "../assets/cactus.png";
import monstera from "../assets/monstera.png";
import ficus from "../assets/ficus.png";
import orchid from "../assets/orchid.png";
import lavender from "../assets/lavender.png";

export const plants = [
  {
    id: 1,
    name: "Monstera",
    price: 25,
    category: "Easy-care",
    image: monstera,
  },
  {
    id: 2,
    name: "Ficus",
    price: 30,
    category: "Easy-care",
    image: ficus,
  },
  {
    id: 3,
    name: "Orchid",
    price: 35,
    category: "Flowering",
    image: orchid,
  },
  {
    id: 4,
    name: "Lavender",
    price: 20,
    category: "Flowering",
    image: lavender,
  },
  {
    id: 5,
    name: "Aloe Vera",
    price: 15,
    category: "Succulents",
    image: aloeVera,
  },
  {
    id: 6,
    name: "Cactus",
    price: 10,
    category: "Succulents",
    image: cactus,
  },
];
