import p1 from './assets/Images/objImgs/p1.jpg';
import p1_2 from './assets/Images/objImgs/p1-2.jpg';
import p2 from './assets/Images/objImgs/p2.jpg';
import p2_2 from './assets/Images/objImgs/p2-2.jpg';
import p3 from './assets/Images/objImgs/p3.jpg';
import p3_2 from './assets/Images/objImgs/p3-2.jpg';
import p4 from './assets/Images/objImgs/p4.jpg';
import p4_2 from './assets/Images/objImgs/p4-2.jpg';
import p5 from './assets/Images/objImgs/p5.jpg';
import p5_2 from './assets/Images/objImgs/p5-2.jpg';
import p6 from './assets/Images/objImgs/p6.jpg';
import p6_2 from './assets/Images/objImgs/p6-2.jpg';
import p7 from './assets/Images/objImgs/p7.jpg';
import p7_2 from './assets/Images/objImgs/p7-2.jpg';
import p8 from './assets/Images/objImgs/p8.jpg';
import p8_2 from './assets/Images/objImgs/p8-2.jpg';
import p9 from './assets/Images/objImgs/p9.jpg';
import p9_2 from './assets/Images/objImgs/p9-2.jpg';
import p10 from './assets/Images/objImgs/p10.jpg';
import p10_2 from './assets/Images/objImgs/p10-2.jpg';
import p11 from './assets/Images/objImgs/p11.jpg';
import p11_2 from './assets/Images/objImgs/p11-2.jpg';
import p11_3 from './assets/Images/objImgs/p11-3.jpg';
import p11_4 from './assets/Images/objImgs/p11-4.jpg';
import p12 from './assets/Images/objImgs/p12.jpg';
import p12_2 from './assets/Images/objImgs/p12-2.jpg';
import p13 from './assets/Images/objImgs/p13.jpg';
import p13_2 from './assets/Images/objImgs/p13-2.jpg';
import p14 from './assets/Images/objImgs/p14.jpg';
import p14_2 from './assets/Images/objImgs/p14-2.jpg';
import p15 from './assets/Images/objImgs/p15.jpg';
import p16 from './assets/Images/objImgs/p16.jpg';
import p16_2 from './assets/Images/objImgs/p16-2.jpg';
import p17 from './assets/Images/objImgs/p17.jpg';
import p17_2 from './assets/Images/objImgs/p17-2.jpg';
import p18 from './assets/Images/objImgs/p18.jpg';
import p18_2 from './assets/Images/objImgs/p18-2.jpg';
import p19 from './assets/Images/objImgs/p19.jpg';
import p19_2 from './assets/Images/objImgs/p19-2.jpg';
import p20 from './assets/Images/objImgs/p20.jpg';
import p20_2 from './assets/Images/objImgs/p20-2.jpg';
import p21 from './assets/Images/objImgs/p21.jpg';
import p21_2 from './assets/Images/objImgs/p21-2.jpg';
import p22_3 from './assets/Images/objImgs/p21-3.jpg';
import p22 from './assets/Images/objImgs/p22.jpg';
import p22_2 from './assets/Images/objImgs/p22-2.jpg';
import p23 from './assets/Images/objImgs/p23.jpg';
import p23_2 from './assets/Images/objImgs/p23-2.jpg';
import p24 from './assets/Images/objImgs/p24.jpg';
import p24_2 from './assets/Images/objImgs/p24-2.jpg';
import p24_3 from './assets/Images/objImgs/p24-3.jpg';
import p24_4 from './assets/Images/objImgs/p24-4.jpg';
import p25 from './assets/Images/objImgs/p25.jpg';
import p25_2 from './assets/Images/objImgs/p25-2.jpg';
import p25_3 from './assets/Images/objImgs/p25-3.jpg';
import p26 from './assets/Images/objImgs/p26.jpg';
import p26_2 from './assets/Images/objImgs/p26-2.jpg';
import p27 from './assets/Images/objImgs/p27.jpg';
import p27_2 from './assets/Images/objImgs/p27-2.jpg';
import p28 from './assets/Images/objImgs/p28.jpg';
import p28_2 from './assets/Images/objImgs/p28-2.jpg';
import p29 from './assets/Images/objImgs/p29.jpg';
import p29_2 from './assets/Images/objImgs/p29-2.jpg';
import p30 from './assets/Images/objImgs/p30.jpg';
import p30_2 from './assets/Images/objImgs/p30-2.jpg';
import p31 from './assets/Images/objImgs/p31.jpg';
import p32 from './assets/Images/objImgs/p32.jpg';
import p32_2 from './assets/Images/objImgs/p32-2.jpg';
import p33 from './assets/Images/objImgs/p33.jpg';
import p33_2 from './assets/Images/objImgs/p33-2.jpg';

import weight1 from './assets/Images/1kg.jpg'
import weight2 from './assets/Images/500g.jpg'
import weight3 from './assets/Images/250g.jpg'

const productObj = [
  {
    id: 1,
    name: 'Cherry Tomatoes',
    weight: [weight3, weight2, weight1],
    price: [5, 9, 12],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    soldPrice: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['Vegetables', 'seaFood'],
    stock: '99 in stock',
    sold: '8 sold in last 9 hours',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p1, p1_2],
  },
  {
    id: 2,
    name: 'Violet Cauliflower',
    price: [10],
    weight: [],
    residue: 40,
    discount: 15,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['seaFood'],
    sold: '7 sold in last 5 hours',
    stock: 'Only 40 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p2, p2_2],
  },
  {
    id: 3,
    name: 'Red Onion',
    price: [6, 10],
    weight: [weight3, weight2],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['vegetables', 'seaFood'],
    sold: '14 sold in last 3 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p3, p3_2],
  },
  {
    id: 4,
    name: 'Red Cabbage',
    price: [9, 15],
    weight: [weight2, weight1],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['vegetables', 'seaFood'],
    sold: '19 sold in last 3 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p4, p4_2],
  },
  {
    id: 5,
    name: 'Organic Lemon',
    price: [20],
    weight: [],
    residue: 80,
    discount: 25,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['banana', 'seaFood'],
    sold: '17 sold in last 10 hours',
    stock: 'Only 80 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p5, p5_2],
  },
  {
    id: 6,
    name: 'Organic Almaverde',
    price: [11, 18],
    weight: [weight2, weight1],
    residue: 0,
    discount: 25,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['vegetables', 'seaFood'],
    sold: '10 sold in last 18 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p6, p6_2],
  },
  {
    id: 7,
    name: 'Orange Cauliflower',
    price: [10],
    weight: [],
    residue: 0,
    discount: 25,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['vegetables', 'banana', 'seaFood'],
    sold: '7 sold in last 10 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p7, p7_2],
  },
  {
    id: 8,
    name: 'Plum Tomato',
    price: [8, 11, 15],
    weight: [weight3, weight2, weight1],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['vegetables', 'seaFood'],
    sold: '14 sold in last 5 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p8, p8_2],
  },
  {
    id: 9,
    name: 'Fresh Bergamot',
    price: [4, 7, 10],
    weight: [weight3, weight2, weight1],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['banana', 'seaFood'],
    sold: '14 sold in last 10 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p9, p9_2],
  },
  {
    id: 10,
    name: 'Chili Pepper',
    price: [7, 10],
    weight: [weight2, weight1],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['vegetables'],
    sold: '2 sold in last 16 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p10, p10_2],
  },
  {
    id: 11,
    name: 'Sorbet Ice Cream',
    price: [12],
    weight: [],
    residue: 0,
    discount: 15,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['milik&cream'],
    sold: '4 sold in last 11 hours',
    stock: 'Only 58 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p11, p11_2, p11_3, p11_4],
  },
  {
    id: 12,
    name: 'Ratto Milk',
    price: [20],
    weight: [],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['milik&cream'],
    sold: '15 sold in last 13 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p12, p12_2],
  },
  {
    id: 13,
    name: 'Purea Lime',
    price: [12],
    weight: [],
    residue: 0,
    discount: 18,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['milik&cream'],
    sold: '9 sold in last 6 hours',
    stock: 'Only 34 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p13, p13_2],
  },
  {
    id: 14,
    name: 'Pineapple Slices',
    price: [20],
    weight: [],
    residue: 0,
    discount: 25,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['milik&cream'],
    sold: '17 sold in last 18 hours',
    stock: 'Only 60 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p14, p14_2],
  },
  {
    id: 15,
    name: 'Lagrana Milk',
    price: [12],
    weight: [],
    residue: 0,
    discount: 18,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['milik&cream'],
    sold: '10 sold in last 17 hours',
    stock: 'Only 83 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p15],
  },
  {
    id: 16,
    name: 'Shiso Leaves',
    price: [15],
    weight: [],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['seaFood'],
    sold: '10 sold in last 20 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p16, p16_2],
  },
  {
    id: 17,
    name: 'Aclla Cress',
    price: [12],
    weight: [],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['seaFood'],
    sold: '1 sold in last 8 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p17, p17_2],
  },
  {
    id: 18,
    name: 'Aloe Arborescens',
    price: [8],
    weight: [],
    residue: 0,
    discount: 12,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['seaFood'],
    sold: '15 sold in last 6 hours',
    stock: 'Only 84 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p18, p18_2],
  },
  {
    id: 19,
    name: 'Yellow Potatoes',
    price: [2, 3, 5],
    weight: [weight3, weight2, weight1],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['vegetables'],
    sold: '10 sold in last 3 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p19, p19_2],
  },
  {
    id: 20,
    name: 'White Grape',
    price: [15],
    weight: [],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['fruit',],
    sold: '19 sold in last 4 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p20, p20_2],
  },
  {
    id: 21,
    name: 'Pomegranate Juice',
    price: [16],
    weight: [],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['milik&cream'],
    sold: '16 sold in last 11 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p21, p21_2],
  },
  {
    id: 22,
    name: 'Pomegranate',
    price: [3, 5, 8],
    weight: [weight3, weight2, weight1],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['fruit', 'banana'],
    sold: '11 sold in last 11 hours',
    stock: 'Only 50 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p22, p22_2, p22_3],
  },
  {
    id: 23,
    name: 'Navel Orange',
    price: [16],
    weight: [],
    residue: 0,
    discount: 20,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['fruit',],
    sold: '14 sold in last 6 hours',
    stock: 'Only 87 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p23, p23_2],
  },
  {
    id: 24,
    name: 'Fresh Strawberries',
    price: [10],
    weight: [],
    residue: 0,
    discount: 20,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['fruit',],
    sold: '3 sold in last 15 hours',
    stock: 'Only 84 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p24, p24_2, p24_3, p24_4],
  },
  {
    id: 25,
    name: 'Apples Granny',
    price: [14],
    weight: [],
    residue: 0,
    discount: 20,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['fruit', 'milik&cream'],
    sold: '9 sold in last 17 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p25, p25_2, p25_3],
  },
  {
    id: 26,
    name: 'Annurca Apples',
    price: [18],
    weight: [],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['fruit'],
    sold: '6 sold in last 9 hours',
    stock: 'Only 88 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p26, p26_2],
  },
  {
    id: 27,
    name: 'Red Pithaya',
    price: [15],
    weight: [],
    residue: 0,
    discount: 20,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['fruit'],
    sold: '6 sold in last 19 hours',
    stock: 'Only 88 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p27, p27_2],
  },
  {
    id: 28,
    name: 'Pinkerton Avocado',
    price: [3, 5],
    weight: [weight2, weight1],
    residue: 0,
    discount: 20,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['banana'],
    sold: '17 sold in last 16 hours',
    stock: 'Only 88 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p28, p28_2],
  },
  {
    id: 29,
    name: 'Bananas',
    price: [18],
    weight: [],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: false,
    shopCartActive: false,
    categor: ['fruit', 'banana'],
    sold: '9 sold in last 9 hours',
    stock: 'Only 88 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p29, p29_2],
  },
  {
    id: 30,
    name: 'Peanut Butter',
    price: [10],
    weight: [],
    residue: 0,
    discount: 12,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['milik&cream'],
    sold: '6 sold in last 13 hours',
    stock: 'Only 87 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p30, p30_2],
  },
  {
    id: 31,
    name: 'Butter Pista',
    price: [12],
    weight: [],
    residue: 0,
    discount: 18,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['banana'],
    sold: '3 sold in last 11 hours',
    stock: 'Only 98 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p31, p13_2],
  },
  {
    id: 32,
    name: 'Basil Pesto',
    price: [8],
    weight: [],
    residue: 0,
    discount: 10,
    saleDays: 173,
    saleHours: 5,
    saleMinut: 37,
    saleSecound: 40,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['banana'],
    sold: '20 sold in last 5 hours',
    stock: 'Only 67 item(s) left in stock.',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p32, p32_2],
  },
  {
    id: 33,
    name: 'Black Eggplants',
    price: [9, 12],
    weight: [weight2, weight1],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    startAct: true,
    shopCartActive: false,
    categor: ['vegetables'],
    sold: '13 sold in last 10 hours',
    stock: '',
    desc: 'Lorem Ipsum has been the industry???s standard dummy text ever since the 1500s.',
    productImg: [p33, p33_2],
  },
]

export default productObj