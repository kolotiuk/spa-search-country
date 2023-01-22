import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v2/';

export const fetchAllCountries = async () => {
  try {
    const { data } = await axios.get(
      'all?fields=name,capital,flags,population,region'
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
