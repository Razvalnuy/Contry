import { Card, Input } from "@mui/material";
import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <Card className={styles.wrapper}>
      <Input fullWidth placeholder="Search by contry code" />
    </Card>
  );
};

export default Search;
