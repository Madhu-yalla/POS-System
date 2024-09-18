import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import ProductItem from "../components/ProductItem";
import ClipLoader from "react-spinners/ClipLoader";

const Products = () => {
  const { loading, products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  const styles = {
    productContent: {
      display: "flex",
      flexWrap: "wrap",
    },
    infoDetails: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    info: {
      marginTop: "50px",
      padding: "25px 50px",
      border: "1px solid rgb(214, 214, 214)",
      borderRadius: "15px",
      backgroundColor: "rgb(242, 242, 242)",
      fontSize: "28px",
      fontWeight: "500",
      color: "#df3c5b",
      fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    },
  };

  if (loading) {
    return <ClipLoader size={60} color="#ecc20e" cssOverride={override} />;
  }

  if (products.length === 0) {
    return (
      <div style={styles.infoDetails}>
        <div style={styles.info}>No products found...</div>
      </div>
    );
  }

  return (
    <div style={styles.productContent}>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
