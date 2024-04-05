import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const categoriesData= [
  {
    key: 1,
    img: "public/furniture/img1.webp",
    Title: "Wood Finish Table",
    category: "furniture",
    desc: "",
    price: 150,
  },
  {
    key: 2,
    img: "public/plants/img1.jpg",
    Title: "Areca Palm Plant",
    category: "plants",
    desc: "",
    price: 70
  },
  {
    key: 3,
    img: "public/softToys/img1.jpg",
    Title: "Reversible Plushie Octopus ",
    category: "soft toys",
    desc: "",
    price: 25
  },
  {
    key: 4,
    img: "public/lamps/img1.avif",
    Title: "Table lamp",
    category: "lamps",
    desc: "",
    price: 45
  },
  {
    key: 5,
    img: "public/furniture/img2.jpg",
    Title: "Wall Shelve",
    category: "furniture",
    desc: "",
    price: 90
  },
  {
    key: 6,
    img: "public/plants/img2.jpg",
    Title: "Bambino Natural",
    category: "plants",
    desc: "",
    price: 60
  },
  {
    key: 7,
    img: "public/softToys/img2.webp",
    Title: "Unicorn",
    category: "soft toys",
    desc: "",
    price: 35
  },
  {
    key: 8,
    img: "public/lamps/img2.avif",
    Title: "reading lamp",
    category: "lamps",
    desc: "",
    price: 55
  },
  {
    key: 9,
    img: "public/furniture/img3.avif",
    Title: "Mirror",
    category: "furniture",
    desc: "",
    price: 120
  },
  {
    key: 10,
    img: "public/plants/img3.jpg",
    Title: "Artificial Sunflower Plant",
    category: "plants",
    desc: "",
    price: 80
  },
  {
    key: 11,
    img: "public/softToys/img3.jpg",
    Title: "Teddy bear",
    category: "soft toys",
    desc: "",
    price: 30
  },
  {
    key: 12,
    img: "public/lamps/img3.jpg",
    Title: "Night Lamp",
    category: "lamps",
    desc: "",
    price: 65
  },
  {
    key: 13,
    img: "public/furniture/img4.avif",
    Title: "Wardrobe",
    category: "furniture",
    desc: "",
    price: 180
  },
  {
    key: 15,
    img: "public/softToys/img4.jpg",
    Title: "Teddy bear",
    category: "soft toys",
    desc: "",
    price: 40
  },
  {
    key: 16,
    img: "public/lamps/img4.jpg",
    Title: "Night Lamp",
    category: "lamps",
    desc: "",
    price: 75
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoryTitle: "All",
    data:categoriesData
  },
  reducers: {
    setCategoryTitle(state, action) {
      state.categoryTitle = action.payload;
      state.data=(action.payload.toLowerCase()!=='all')?categoriesData.filter(item=>item.category===action.payload.toLowerCase()):categoriesData
    }
  }
})

export const { setCategoryTitle } = categoriesSlice.actions;
export default categoriesSlice;