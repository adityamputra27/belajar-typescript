/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

// type inference
let product = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};

// inline interface
let product1: {
    id: string;
    productName: string;
    price: number;
    note: string;
};

product1 = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};

// interface
interface Product {
    id: string;
    produtName: string;
    price: number;
    note: string;
}

let product2: Product;
let product3: Product;

/**
 * 2. Nested Object
 */

interface Item {
    id: string;
    productName: string;
    price: number;
    productDetail: ItemDetail;
}

interface ItemDetail {
    year: number;
    storage: number;
}

let product4: Item;
product4 = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    productDetail: {
        year: 2020,
        storage: 256,
    },
};

/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

interface User {
    id: string;
    name: string;
    address: Array<Address>;
}

interface Address {
    street: string;
    city: string;
}

let user: User;
user = {
    id: '1',
    name: 'KangAdit',
    address: [
        {
            street: 'Cianjur',
            city: 'Cianjur',
        },
    ],
};

/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

interface CartItem {
    id: string;
    name: string;
    qty: number;
}

interface Cart {
    idCart: string;
    dateOrdered: Date;
    items: {
        [key: string]: CartItem;
    };
}

let keyboard: Cart;
keyboard = {
    idCart: 'C1',
    dateOrdered: new Date('2020-05-20'),
    items: {
        p1: {
            id: 'P-1',
            name: 'Mechanical Keyboard',
            qty: 2,
        },
        p2: {
            id: 'P-2',
            name: 'USB Hub',
            qty: 1,
        },
    },
};

/**
 * 5. Object Destructuring
 */

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
*/

// type inference
let fullName = {
    firstName: 'Sastra',
    lastName: 'Nababan',
};
// let { firstName, lastName } = fullName;

// inline interface
let { firstName, lastName }: { firstName: string; lastName: string } = fullName;
