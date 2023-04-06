import React, { useEffect } from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useDispatch, useSelector } from "react-redux";
import { fetchDashBoardData } from "../../Redux/Action/Action";

const DashBoard = () => {
  const { Data, isloading } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashBoardData());
  }, [dispatch]);

  if (isloading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  const dashBoardInfo = Data.map((dashBoardData) => {
    return (
      <div>
        <div>id :{dashBoardData.id}</div>
        <div>name :{dashBoardData.name}</div>
        <div>username :{dashBoardData.username}</div>
        <div>email : {dashBoardData.email}</div>
        <div>address :{dashBoardData.address.city}</div>
        <div>phone :{dashBoardData.phone}</div>
        <div>website :{dashBoardData.website}</div>
        <br />
      </div>
    );
  });

  return <div>{dashBoardInfo}</div>;
};

export default DashBoard;
