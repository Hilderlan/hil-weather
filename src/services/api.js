import axios from 'axios';

const Api = {
  // `https://cors-anywhere.herokuapp.com/https://api.hgbrasil.com/weather?key=e9e2c86c&city_name=${city},${state}`
  index: (city, state) => axios.get('https://cors-anywhere.herokuapp.com/https://api.hgbrasil.com/weather')
}

export default Api;