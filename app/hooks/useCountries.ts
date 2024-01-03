import countries from 'world-countries';
import {City} from "country-state-city"
const formattedCities = City.getCitiesOfCountry("PK")?.map((country)=>({
  value:country.name,
  name:country.name,
  label:country.name,
  latlng:[country.latitude,country.longitude],
  region:country.stateCode,
}));

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => formattedCities;

  const getByValue = (value: string) => {
    return formattedCities?.find((item) => item.name === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;
