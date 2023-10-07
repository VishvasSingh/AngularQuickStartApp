export interface Product {
    name: string,
    id: number,
    img: string,
    price: number,
    availability?: string
}

export let products : Product[] = [{
    name: 'iphone',
    price: 12500,
    availability: 'limited',
    id: 1,
    img: ''
  },
  {
    name: 'ipad',
    price: 125000,
    availability: 'available',
    id: 2,
    img: ''
  },
  {
    name: 'macbook',
    price: 1250000,
    availability: 'out of stock',
    id: 3,
    img: ''
  },
  {
    name: 'ipod',
    price: 12500000,
    id: 4,
    availability: 'out of stock',
    img: ''
  }
]