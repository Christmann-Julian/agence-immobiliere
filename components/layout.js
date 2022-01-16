import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({children}) =>(
    <>
    <Header></Header>
    {children}
    <Footer></Footer>
    </>
)

