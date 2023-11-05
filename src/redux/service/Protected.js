import { Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
    const islogin = useSelector((state) => state.auth.isLogin)
    
    if (!islogin) {
        return <Navigate replace to="/login" />;
    } else {
        return children;
    }
}

export default Protected;
