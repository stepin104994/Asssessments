"use strict";

var mobiles = [{
  Mobile: 'Oppo F15',
  Brand: 'OPPO',
  price: 20000,
  features: {
    'Version': 'Android10',
    'Memory': '128GB',
    'Camera': '48MP'
  },
  accessories: ['bluetooth', 'Earphone', 'Headphone']
}, {
  Mobile: 'Vivi Y12',
  Brand: 'VIVO',
  price: 12000,
  features: {
    'Version': 'Android9',
    'Memory': '64GB',
    'Camera': '16MP'
  },
  accessories: ['bluetooth', 'Earphone']
}, {
  Mobile: 'Honor Bee 4G',
  Brand: 'HONOR',
  price: 7000,
  features: {
    'Version': 'Android8',
    'Memory': '8GB',
    'Camera': '8MP'
  },
  accessories: ['Earphone']
}];

for (i = 0; i < mobiles.length; i++) {
  console.log(mobiles[i].Mobile, mobiles[i].Brand, mobiles[i].price, mobiles[i].features, mobiles[i].accessories);
}