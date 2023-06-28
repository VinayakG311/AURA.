import React from 'react'
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes,
    Link
} from "react-router-dom";
import { useNavigate } from "react-router";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  width: 200px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
export default function Admin() {
    const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const currentUser = user && JSON.parse(user).currentUser;
    const admin = currentUser;
    console.log(user);
    console.log("22222")
    console.log(admin)
    const nav = useNavigate();
    admin && nav("/");
    useEffect(() => {
        console.log(admin);
        if (admin) {
            console.log("object111");
            nav("/");
            nav(0);
        }

    }, [admin])
    return (
        <Container>
            <Link to={"/login"}>
                <Button>
                    Log in
                </Button>
            </Link>
            <Link to={"/register"}>
                <Button>
                    Sign up
                </Button>
            </Link>
        </Container>
    )
}
