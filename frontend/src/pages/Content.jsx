import React from "react";
import Categories from "./Categories";
import Products from "./Products";
import Statistics from "../components/Statistics";

const Content = () => {
  const styles = {
    productsTitle: {
      display: 'flex',
      marginTop: '20px',
      color: 'rgb(80, 80, 87)',
      fontSize: '25px',
      fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    },
    sectionTitle: {
      fontSize: '25px',
      fontWeight: 'bold',
      color: 'rgb(80, 80, 87)',
    }
  };

  return (
    <>
      <Statistics />

      <div style={styles.productsTitle}>
        <h1 style={styles.sectionTitle}>Categories</h1>
      </div>

      <Categories />

      <div style={styles.productsTitle}>
        <h1 style={styles.sectionTitle}>All Products</h1>
      </div>

      <Products />
    </>
  );
};

export default Content;
