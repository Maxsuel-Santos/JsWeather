/* eslint-disable linebreak-style */
/* eslint-disable semi */

const KEY = 'b6b9f4229fa34a40bff151436220706';

const fetchData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
};

export default fetchData;
