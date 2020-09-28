import Product from '../models/product';
// import {Image} from 'react-native';
// import exampleimage from '../assets/images/m1.jpg';
// const exampleImageUri = Image.resolveAssetSource(exampleimage).uri;

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Black Floral Design Shirt',
    "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg",
    "Men's Black Floral Polo Shirt with Contrast Collar.",
    29.99
  ),
  new Product(
    'p2',
    'u1',
    'Dark Blue Suit',
    "https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg",
    'High Quality high wool content not cheap chemical fiber men suit.',
    175.37
  ),
  // new Product(
  //   'p3',
  //   'u2',
  //   'Yellow Shirt',
  //   require("../assets/images/m3.jpg"),
  //   "Women's long sleeve shirt.",
  //   76.00
  // ),
  // new Product(
  //   'p4',
  //   'u3',
  //   'Jewellery',
  //   require("../assets/images/m5.jpg"),
  //   "designed necklaces and pendants, bracelets, rings and more.beautifully.",
  //   5130
  // ),
  // new Product(
  //   'p5',
  //   'u3',
  //   "Men's Watches",
  //   require("../assets/images/m4.jpg"),
  //   "Mens Watches Ultra-Thin Minimalist Waterproof-Fashion Wrist Watch for Men.",
  //   28.965
  // ),
  
  
  // new Product(
  //   'p6',
  //   'u1',
  //   'Embroidered White Bag',
  //   require("../assets/images/m6.png"),
  //   "For the always on-trend Fashionista, this bag will be the highlight of your handbag collection!",
  //   1299.99
  // )
];

export default PRODUCTS;