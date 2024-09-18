import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../features/category/categorySlice";
import CategoryItem from "../components/CategoryItem";
import ScaleLoader from "react-spinners/ScaleLoader";

const Categories = () => {
  const { loading, categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  const styles = {
    categoryMenu: {
      padding: "10px",
      marginTop: "20px",
    },
    ul: {
      display: "flex",
      width: "100%",
      overflowY: "hidden",
      padding: "5px 10px 10px 5px",
      whiteSpace: "nowrap",
    },
  };

  if (loading) {
    return <ScaleLoader color="#ecc20e" cssOverride={override} />;
  }

  return (
    <div style={styles.categoryMenu}>
      <ul style={styles.ul}>
        {categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
