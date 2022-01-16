import React, {useState} from "react";
import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdbreact';
import Link from "next/link";
import useAuth from "../auth/context";
import { useRouter } from "next/router";

export const Header = () =>{
    const {logout, user, isAuthenticated} = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
      
    const toggleCollapse = () => {
        if(isOpen === false){
            setIsOpen(true);
        }else{
            setIsOpen(false)
        }
    }

    return (
        <MDBNavbar style={{ backgroundColor: '#1c2331' }} expand="md" dark>
            <MDBNavbarToggler onClick={toggleCollapse}/>
            <MDBCollapse id="navbarCollapse" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <Link href="/"  active={router.pathname === "/"}>
                            <a className="nav-link text-white"><i className="fas fa-home mr-1"></i>Home</a>
                        </Link>
                    </MDBNavItem>
                    { isAuthenticated && user.role === "admin" && (
                        <MDBNavItem>
                            <Link href="/property/list">
                                <a className="nav-link text-white">Dashboard</a>
                            </Link>
                        </MDBNavItem>
                    )}
                    <MDBNavItem  active={router.pathname === "/properties"}>
                        <Link href="/properties">
                            <a className="nav-link text-white">Liste des biens</a>
                        </Link>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem active={router.pathname === "/contact"}>
                        <Link href="/contact">                       
                            <a className="nav-link text-white"><MDBIcon icon="address-book" className="mr-1"/>Contact</a>
                        </Link>
                    </MDBNavItem>
                    {!isAuthenticated && (
                        <MDBNavItem active={router.pathname === "/login"}>
                            <Link href="/login">                       
                                <a className="nav-link text-white"><MDBIcon icon="user-alt" className="mr-1"/>Connexion</a>
                            </Link>
                        </MDBNavItem>
                    )}
                    {isAuthenticated && (
                        <MDBNavItem>
                            <div className="nav-link" onClick={logout}>
                                <MDBIcon icon="power-off" className="mr-1"/>
                                Déconnexion ({user.username})
                            </div>
                        </MDBNavItem>
                    )}
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
}