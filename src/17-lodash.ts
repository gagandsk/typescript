//var _ require('lodash'); //error
import _ from 'lodash';

const data = [
  {
    username: 'Goku',
    role: 'admin'
  },
  {
    username: 'Vegeta',
    role: 'seller'
  },
  {
    username: 'Bulma',
    role: 'seller'
  },
  {
    username: 'Gohan',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
