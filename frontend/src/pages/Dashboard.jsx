import React from "react";
import SidebarLeft from "../components/SidebarLeft";
import ShoppingCart from "../pages/ShoppingCart";
import Content from "./Content";

const Dashboard = () => {
  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100%",
      padding: "10px",
    },
    sidebarLeft: {
      flexBasis: "5%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "rgb(249, 247, 247)",
      padding: "15px 0 5px 0",
      border: "1px solid rgb(201, 201, 201)",
      borderRadius: "30px 0 0 30px",
    },
    mainContent: {
      flexBasis: "75%",
      backgroundColor: "rgb(237, 235, 235)",
      padding: "50px",
      height: "100%",
      overflow: "auto",
      borderTop: "1px solid rgb(216, 216, 216)",
      borderBottom: "1px solid rgb(216, 216, 216)",
      borderRight: "1px solid rgb(222, 219, 219)",
    },
    sidebarRight: {
      flexBasis: "20%",
      backgroundColor: "rgb(249, 247, 247)",
      borderRadius: "0 30px 30px 0",
      position: "fixed", // Fixed position to keep it on the right corner
      right: "0",
      top: "0",
      height: "100%",
      padding: "15px",
      zIndex: 1,
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.sidebarLeft}>
          <SidebarLeft />
        </div>

        <div style={styles.mainContent}>
          <Content />
        </div>

        <div style={styles.sidebarRight}>
          <ShoppingCart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
