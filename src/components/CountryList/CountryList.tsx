import React from "react";
import { gql, useQuery } from "@apollo/client";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryList.module.css";
import { useSelector } from "react-redux";

interface Language {
  code: string;
  name: string;
}

interface Country {
  name: string;
  capital: string;
  languages: Language[];
  code: string;
  phone: string;
  currency: string;
}

interface CountriesResponse {
  countries: Country[];
}

const GET_COUNTRIES = gql`
  {
    countries {
      name
      capital
      languages {
        code
        name
      }
      code
      phone
      currency
    }
  }
`;

const CountryList: React.FC = () => {
  const { loading, error, data } = useQuery<CountriesResponse>(GET_COUNTRIES);
  const search = useSelector(
    (state: { search: { value: string } }) => state.search.value
  );
  const filteredCountry = data?.countries.filter((country) =>
    country.code.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h1 className={styles.loader}>Загрузка...</h1>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <>
      {filteredCountry?.map((country) => (
        <CountryCard country={country} key={country.name} />
      ))}
      {filteredCountry?.length === 0 && (
        <h1 className={styles.loader}>Ничего не нашлось...</h1>
      )}
    </>
  );
};

export default CountryList;
