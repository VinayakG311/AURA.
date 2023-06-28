import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes,
    Link
} from "react-router-dom";
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
