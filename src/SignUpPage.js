import React from "react";
import styled from "styled-components";

const SignInSignUpPage = () => {
  return (
    <Container>
      <Title>Your job search starts here</Title>
      <Button>Continue with Google</Button>
      <OrSeparator>
        <span>Or</span>
      </OrSeparator>
      <Input type="email" placeholder="Email" />
      <Button>Continue with email</Button>
      <small>
        By continuing, I agree to Talent.com's Terms of Service, Privacy Policy
        and Cookie Policy. I also agree to receive email job alerts, to which I
        can unsubscribe at any time.
      </small>
    </Container>
  );
};

const Container = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
`;

const Title = styled.h2`
  color: #333;
`;

const Button = styled.button`
  display: block;
  background-color: #db4437;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px auto;
  cursor: pointer;

  &:hover {
    background-color: #c1351d;
  }
`;

const OrSeparator = styled.div`
  margin: 20px auto;
  overflow: hidden;
  text-align: center;

  &:before,
  &:after {
    background-color: #ddd;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 40%;
  }

  &:before {
    right: 0.5em;
    margin-left: -50%;
  }

  &:after {
    left: 0.5em;
    margin-right: -50%;
  }

  span {
    font-size: 14px;
    color: #888;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

export default SignInSignUpPage;
