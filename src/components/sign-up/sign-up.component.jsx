import React, { useState } from "react";
import { connect } from "react-redux";
import "./sing-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";
//import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
  });
  // constructor() {
  //   super();

  //   this.state = {
  //     displayName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   };
  // }
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    //const { signUpStart } = this.props;

    //const { displayName, email, password, confirmPassword } = this.state;
    

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });

    // this.setState({ // we dont need state to default because we sign them up
    //   displayName: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // });

    // if (password !== confirmPassword) {
    //   alert("passwords don't match");
    //   return;
    // }

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserProfileDocument(user, { displayName });

    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGNUP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
