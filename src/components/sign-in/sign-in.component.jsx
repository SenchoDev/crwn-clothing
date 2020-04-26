import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: "",
  //     password: ""
  //   };
  // }
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // we have no longer props so we destrucure it in functional component parameters
    // const { emailSignInStart } = this.props;

    //const { email, password } = this.state;

    // NO MORE SET STATE. Redux will handle the state from here on out with sagas
    // try{
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({email: '', password: ''});
    // } catch(error) {
    //   console.log(error);
    // }
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  //render() {
  // destructure it as it comes as props
  // const { googleSignInStart } = this.props;
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={email}
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
//}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }
//   handleSubmit = async event => {
//     event.preventDefault();

//     const { email, password } = this.state;

//     try{
//       await auth.signInWithEmailAndPassword(email, password);
//       this.setState({email: '', password: ''});
//     } catch(error) {
//       console.log(error);
//     }
//   };

//   handleChange = event => {
//     const { value, name } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div className="sign-in">
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>

//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             name="email"
//             type="email"
//             label="Email"
//             handleChange={this.handleChange}
//             value={this.state.email}
//             required
//           />

//           <FormInput
//             name="password"
//             type="password"
//             value={this.state.password}
//             handleChange={this.handleChange}
//             label="Password"
//             required
//           />

//           <div className="buttons">
//             <CustomButton type="submit">Sign in</CustomButton>
//             <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
//               Sign in with google
//             </CustomButton>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SignIn;
