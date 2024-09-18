import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../features/order/orderSlice";
import { allUsers } from "../features/auth/authSlice";

const Statistics = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);
  const { orders } = useSelector((state) => state.order);
  const { users } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getOrders());
    dispatch(allUsers());
  }, [dispatch]);

  const styles = {
    statisticLayout: {
      display: "flex",
      flexWrap: "wrap",
    },
    statistics: {
      width: "15%",
      backgroundColor: "white",
      borderRadius: "30px",
      padding: "20px 35px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginRight: "40px",
    },
    statisticTitle: {
      color: "rgb(43, 43, 43)",
      fontSize: "26px",
      fontWeight: "600",
      fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      marginBottom: "15px",
    },
    statisticCount: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    image: {
      width: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      marginRight: "30px",
    },
    imageImg: {
      width: "50px",
    },
    countText: {
      color: "rgb(75, 74, 74)",
      fontSize: "35px",
      fontWeight: "600",
      fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    },
  };

  return (
    <>
      <div style={styles.statisticLayout}>
        <div style={styles.statistics}>
          <span style={styles.statisticTitle}>Orders</span>
          <div style={styles.statisticCount}>
            <div style={styles.image}>
              <img style={styles.imageImg} src={require("../images/order.png")} alt="Orders" />
            </div>
            <span style={styles.countText}>{orders.length}</span>
          </div>
        </div>

        <div style={styles.statistics}>
          <span style={styles.statisticTitle}>Users</span>
          <div style={styles.statisticCount}>
            <div style={styles.image}>
              <img style={styles.imageImg} src={require("../images/users.png")} alt="Users" />
            </div>
            <span style={styles.countText}>{users.length}</span>
          </div>
        </div>

        <div style={styles.statistics}>
          <span style={styles.statisticTitle}>Products</span>
          <div style={styles.statisticCount}>
            <div style={styles.image}>
              <img style={styles.imageImg} src={require("../images/products.png")} alt="Products" />
            </div>
            <span style={styles.countText}>{products.length}</span>
          </div>
        </div>

        <div style={styles.statistics}>
          <span style={styles.statisticTitle}>Categories</span>
          <div style={styles.statisticCount}>
            <div style={styles.image}>
              <img style={styles.imageImg} src={require("../images/category.png")} alt="Categories" />
            </div>
            <span style={styles.countText}>{categories.length}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
