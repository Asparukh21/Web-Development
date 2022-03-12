export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: string;
  image: string;
  links: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 7 a1660 32GB Silver Verizon Unlocked (Renewed)',
    price: 123,
    description:
      'Model Name IPhone 7 Wireless Carrier Verizon Brand Apple Form Factor Smartphone Memory Storage Capacity 32 GB Operating System IOS 10 Cellular Technology 4G, 2G Screen Size 4.7 Inches Manufacturer Apple Computer Other camera features',
    rating: '4.2',
    image: 'https://m.media-amazon.com/images/I/81+2yUpsSvL._AC_SX679_.jpg',
    links: 'https://www.amazon.com/Apple-iPhone-Verizon-Unlocked-Renewed/dp/B01N5SCQ2A/ref=sr_1_1?crid=L64H69T8UL4A&keywords=iphone+7&qid=1646859183&sprefix=iphone+12%2Caps%2C451&sr=8-1',
  },
  {
    id: 2,
    name: 'Apple iPhone 8, US Version, 64GB, Space Gray - Unlocked',
    price: 182,
    description:
      'Model Name IPhone 8 Wireless Carrier Unlocked Brand Apple Form Factor Smartphone Memory Storage Capacity 64 GB Operating System Ios Color Space Gray Cellular Technology 4G SIM card slot count Single SIM Year 2018',
    rating: '4.4',
    image: 'https://m.media-amazon.com/images/I/71aOr1CuM1L._AC_SX679_.jpg',
    links: 'https://www.amazon.com/Apple-iPhone-GSM-Unlocked-64GB/dp/B0775MV9K2/ref=sr_1_1?crid=3MOY1ANPI2XY4&keywords=iphone+8&qid=1646859454&sprefix=iphone+%2Caps%2C254&sr=8-1',
  },
  {
    id: 3,
    name: 'Apple iPhone 8 Plus, 64GB, Space Gray - Unlocked (Renewed)',
    price: 259,
    description:
      'Model Name IPhone 8 Plus Wireless Carrier Unlocked Brand Apple Form Factor Smartphone Memory Storage Capacity 64 GB Operating System IOS Color Space Gray Cellular Technology 3G SIM card slot count Single SIM Year 2018',
    rating: '4.4',
    image: 'https://m.media-amazon.com/images/I/61K5-sw7yDL._AC_SX679_.jpg',
    links: 'https://www.amazon.com/Apple-iPhone-Plus-64GB-Space/dp/B07YYM3HFW/ref=sr_1_1?crid=1XHM181UMSM6C&keywords=iphone+8+plus&qid=1646859489&sprefix=iphone+8+%2Caps%2C264&sr=8-1',
  },
  {
    id: 4,
    name: 'Apple iPhone X, 64GB, Silver - For T-Mobile (Renewed)',
    price: 265,
    description:
      'Model Name IPhone X Wireless Carrier T-Mobile Brand Apple Form Factor Smartphone Memory Storage Capacity 64 GB Operating System IOS Color Silver Cellular Technology 4G SIM card slot count Single SIM Year 2018',
    rating: '4.3',
    image: 'https://m.media-amazon.com/images/I/61ostgLaUcL._AC_SX679_.jpg',
    links: 'https://www.amazon.com/Apple-iPhone-64GB-Silver-T-Mobile/dp/B07RV48RR1/ref=sr_1_2?crid=1YPGLJJJL62LB&keywords=iphone+10&qid=1646859800&sprefix=iphone+1%2Caps%2C331&sr=8-2',
  },
  {
    id: 5,
    name: 'Apple iPhone XS, US Version, 256GB, Silver - Unlocked (Renewed)',
    price: 314,
    description:
      'Model Name Apple iPhone XS, 256GB, Silver - Fully Unlocked (Renewed) Wireless Carrier Unlocked Brand Apple Form Factor Smartphone Memory Storage Capacity 256 GB Operating System IOS Color Silver Cellular Technology 3G Included Components Phone, charger Screen Size 5.8 Inches',
    rating: '4.3',
    image: 'https://m.media-amazon.com/images/I/31h6rdm0GyL._AC_.jpg',
    links: 'https://www.amazon.com/Apple-iPhone-Unlocked-Silver-Renewed/dp/B07KKKH5CK/ref=sr_1_1?crid=BW72FAD6JAI1&keywords=iphone+10+max&qid=1646859901&sprefix=iphone+10+ma%2Caps%2C534&sr=8-1',
  },
  {
    id: 6,
    name: 'Apple iPhone 11 Pro, 64GB, Space Gray - Unlocked',
    price: 446,
    description:
      'Model Name IPhone 11 Pro Wireless Carrier Unlocked Brand Apple Form Factor Smartphone Memory Storage Capacity 64 GB Operating System IOS Color Space Gray Cellular Technology 4G SIM card slot count Single SIM Year 2018',
    rating: '4.4',
    image: 'https://m.media-amazon.com/images/I/81x9I9qXbmL._AC_SY879_.jpg',
    links: 'https://www.amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07ZPKZSSC/ref=sr_1_1?crid=1C43DWLII2Y5S&keywords=iphone+11+pro&qid=1646859972&sprefix=iphone+11+pr%2Caps%2C293&sr=8-1',
  },
  {
    id: 7,
    name: 'Apple iPhone 11 Pro Max, 64GB, Space Gray - Unlocked',
    price: 539,
    description:
      'Model Name IPhone 11 Pro Max Wireless Carrier Unlocked for All Carriers Brand Apple Form Factor Smartphone Memory Storage Capacity 64 GB Operating System IOS Color Space Gray Cellular Technology 4G SIM card slot count Single SIM Year 2018',
    rating: '4.4',
    image: 'https://m.media-amazon.com/images/I/81LmL94PUvS._AC_SX679_.jpg',
    links: 'https://www.amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07ZQSQSBM/ref=sr_1_1?crid=673TP8YZUZN0&keywords=iphone+11+pro+max&qid=1646860025&sprefix=iphone+11+pro+%2Caps%2C471&sr=8-1\n',
  },
  {
    id: 8,
    name: 'Apple iPhone 12, 64GB, Blue - Unlocked (Renewed Premium)',
    price: 659,
    description:
      'Model Name IPhone 12 Wireless Carrier Unlocked Brand Apple Form Factor Smartphone Memory Storage Capacity 64 GB Operating System IOS 14 Color Blue Cellular Technology 5G Included Components Charging cable and block, and sim tray removal tool Screen Size 6.1 Inches',
    rating: '5',
    image: 'https://m.media-amazon.com/images/I/7117DN7UkKL._AC_SY879_.jpg',
    links: 'https://www.amazon.com/Apple-iPhone-12-64GB-Blue/dp/B09JFTPQY1/ref=sr_1_1?crid=2D3XZXBFR756C&keywords=iphone+12&qid=1646860096&sprefix=iphone+11%2Caps%2C391&sr=8-1',
  },
  {
    id: 9,
    name: 'Apple iPhone 12 Pro, 128GB, Pacific Blue - Unlocked (Renewed Premium)',
    price: 849,
    description:
      'Model Name IPhone 12 Pro Wireless Carrier Unlocked Brand Apple Form Factor Smartphone Memory Storage Capacity 128 GB Operating System IOS 12 Color Pacific Blue Cellular Technology LTE Included Components SIM Tray Ejector, USB Cable Display Type OLED',
    rating: '3.5',
    image: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SX679_.jpg',
    links: 'https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFNMBWL/ref=sr_1_1?crid=19GP246ZYCXDV&keywords=iphone+12+pro&qid=1646860149&sprefix=iphone+12%2Caps%2C260&sr=8-1',
  },
  {
    id: 10,
    name: 'Apple iPhone 12 Pro Max, 128GB, Gold - Fully Unlocked',
    price: 925,
    description:
      'Model Name IPhone 12 Pro Max Wireless Carrier Unlocked Brand Apple Form Factor Smartphone Memory Storage Capacity 128 GB Operating System IOS Color Gold Cellular Technology 2G Included Components Adapter, USB Cable Screen Size 6.7 Inches',
    rating: '4.4',
    image: 'https://m.media-amazon.com/images/I/71u1BzjGJbL._AC_SX679_.jpg',
    links: 'https://www.amazon.com/Apple-iPhone-Pro-128GB-Gold/dp/B08PL87YMK/ref=sr_1_1?crid=29DHXX2BLMRZQ&keywords=iphone+12+pro+max&qid=1646862511&sprefix=iphone+12+pro+m%2Caps%2C266&sr=8-1',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
