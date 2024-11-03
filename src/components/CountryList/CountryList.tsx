import React from "react";
import { gql, useQuery } from "@apollo/client";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryList.module.css";
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
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <h1 className={styles.loader}>Загрузка...</h1>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <>
      {data.countries.map((country: any) => {
        console.log(country);
        return <CountryCard country={country} key={country.name} />;
      })}
    </>
  );
};

export default CountryList;
