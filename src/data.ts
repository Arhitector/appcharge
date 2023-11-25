import { IBundle } from './types/bundle';

export const bundles =  [
  {
    bgImage: 'https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg',
    timeLeftMs: 3600000,
    maxAvailable: 10,
    available: 5,
    price: {
      amount: 99,
      currencySymbol: "$"
    },
    products: [
      {
        productImage: `./assets/icons/icon_${Math.floor(Math.random() * 55) + 1}.png`,
        amount: '6,000',
        productTextColor: 'teal'
      },
      {
        productImage: `./assets/icons/icon_${Math.floor(Math.random() * 55) + 1}.png`,
        amount: "30M",
        productTextColor: 'gold'
      },
      {
        productImage: `./assets/icons/icon_${Math.floor(Math.random() * 55) + 1}.png`,
        amount: '20',
        productTextColor: 'purple'
      }
    ]
  },
  {
    bgImage: 'https://media.istockphoto.com/id/1341408852/video/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke.jpg?s=640x640&k=20&c=v2DQUY8IVbli_6FH_9KAs6YWRXlDdYiBJHfp7JFh7NY=',
    timeLeftMs: 7200000,
    maxAvailable: 20,
    available: 15,
    price: {
      amount: 149,
      currencySymbol: "$"
    },
    products: [
      {
        productImage: `./assets/icons/icon_${Math.floor(Math.random() * 55) + 1}.png`,
        amount: "12,000",
        productTextColor: "blue"
      },
      {
        productImage: `./assets/icons/icon_${Math.floor(Math.random() * 55) + 1}.png`,
        amount: "60M",
        productTextColor: "gold"
      },
      {
        productImage: `./assets/icons/icon_${Math.floor(Math.random() * 55) + 1}.png`,
        amount: "40",
        productTextColor: "pink"
      }
    ]
  },
  {
    bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALEi0vkQXAnGt3nT_gQV06rZFO6mKdil7VQ&usqp=CAU',
    timeLeftMs: 10800000,
    maxAvailable: 5,
    available: 2,
    price: {
      amount: 199,
      currencySymbol: "$"
    },
    products: [
      {
        productImage: `./assets/icons/icon_${Math.floor(Math.random() * 55) + 1}.png`,
        amount: "18,000",
        productTextColor: "green"
      },
      {
        productImage: `./assets/icons/icon_${Math.floor(Math.random() * 55) + 1}.png`,
        amount: "100M",
        productTextColor: "gold"
      },
      {
        productImage: `./assets/icons/icon_${Math.floor(Math.random() * 55) + 1}.png`,
        amount: "60",
        productTextColor: "red"
      }
    ]
  }
]

const colors = ['teal', 'green', 'gold', 'red', 'yellow', 'pink', 'blue']

export const data: IBundle[] = new Array(30).fill('').map((e,i) => {
  return {
    id: `id${i}`,
    productImage: `./assets/icons/icon_${Math.floor(Math.random() * 55) + 1}.png`,
    amount: `${Math.floor(Math.random() * 100000)}`,
    productTextColor: colors[Math.floor(Math.random() * colors.length)],
    item: bundles[Math.floor(Math.random() * 3)],
  }
});
