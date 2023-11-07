// import * as React from "react";
// import { useState } from "react";
// import Navbar from "../../components/navbar/Navbar";
// import SelectCustomer from "../../components/mainpage/selectCustomer/SelectCustomer";
// import { useEffect } from "react";
// import { UserContext } from "../../context/UserIdContext";
// import { useContext } from "react";
// import { SnackbarProvider, useSnackbar } from "notistack";
// import AddSales from "../../components/sales/addSales/addSales";
// const Sales = () => {
//   const { enqueueSnackbar } = useSnackbar();
//   const [active, setActive] = useState(false);
//   const { userId, change } = useContext(UserContext);
//   const checkActive = () => {
//     userId === 0 ? setActive(false) : setActive(true);
//   };
//   useEffect(() => {
//     checkActive();
//   }, [userId, change]);
//   return (
//     <React.Fragment>

//       <div className="mainpage">
//         <Navbar />
//         <div className="content flex">
//             <AddSales/>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };
//export default Sales;

import * as React from "react";
import Navbar from "../../components/navbar/Navbar";
import SelectCustomer from "../../components/mainpage/selectCustomer/SelectCustomer";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Edit from "../../components/mainpage/edit/Edit";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserIdContext";
import { SnackbarProvider, useSnackbar } from "notistack";
import SaleLeft from "../../components/sales/saleLeft/SaleLeft";
import SaleRight from "../../components/sales/saleRight/SaleRight";
import SalesInvoice from "../../components/sales/salesInvoice/SalesInvoice";
const MyApp = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    pdf: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const toggleDrawer1 = (anchor, open) => {
    setState({ ...state, [anchor]: open });
  };
  const handleClickVariant = (variant, anchor1, msg) => {
    // variant could be success, error, warning, info, or default
    toggleDrawer1(anchor1, false);
    enqueueSnackbar(msg, { variant });
  };
  const list = (anchor) => (
    <Box sx={{ width: 950 }} role="presentation">
      {anchor === "pdf" ? <SalesInvoice /> : ""}
    </Box>
  );
  const [active, setActive] = useState(false);
  const { saleId, change } = useContext(UserContext);
  const checkActive = () => {
    saleId === 0 ? setActive(false) : setActive(true);
  };
  useEffect(() => {
    checkActive();
  }, [saleId, change]);
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={state["pdf"]}
        onClose={toggleDrawer("pdf", false)}
      >
        {list("pdf")}
      </Drawer>

      <div className="mainpage">
        <Navbar />
        <div className="content flex">
          <SaleLeft />

          {active ? (
            <SaleRight pdf={toggleDrawer("pdf", true)} />
          ) : (
            <SelectCustomer />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

const Sales = () => {
  return (
    <SnackbarProvider maxSnack={1}>
      <MyApp />
    </SnackbarProvider>
  );
};

export default Sales;
