import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
// import Spinner from 'react-bootstrap/Spinner';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="signin-container text-center">
        <form className="form-signin" onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <div className="mb-4">
              <img src="https://picsum.photos/72" alt="brand-icon" width="72" height="72" />
            </div>
            <div className="mb-4">
              <h1 className="h3 font-weight-normal">Please sign in</h1>
            </div>
            <label
              htmlFor="inputEmail"
              className="sr-only"
              style={{ display: 'block', marginTop: '.5rem' }}
            >
              Email address
            </label>
            <input
              id="inputEmail"
              placeholder="Email address"
              type="email"
              value={this.props.values.inputEmail}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
              className="form-control"
              required
              autoFocus
            />
            {this.props.errors.inputEmail && this.props.touched.inputEmail && (
              <div style={{ color: 'red', marginTop: '.5rem' }}>{this.props.errors.inputEmail}</div>
            )}
          </div>
          <div className="form-group">
            <label
              htmlFor="inputPassword"
              className="sr-only"
              style={{ display: 'block', marginTop: '.5rem' }}
            >
              Password
            </label>
            <input
              id="inputPassword"
              placeholder="Password"
              type="password"
              value={this.props.values.inputPassword}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
              className="form-control"
              required
            />

            {this.props.errors.inputPassword && this.props.touched.inputPassword && (
              <div style={{ color: 'red', marginTop: '.5rem' }}>
                {this.props.errors.inputPassword}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label>
              {' '}
              <input type="checkbox" value="remember-me" /> Remember me{' '}
            </label>
          </div>
          <button
            type="button"
            className="outline btn btn-default"
            onClick={this.props.handleReset}
            disabled={!this.props.dirty || this.props.isSubmitting}
          >
            Reset
          </button>
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={!(this.props.isValid && this.props.dirty)}
          >
            Sign in
          </button>
        </form>
      </main>
    );
  }
}

const MyLoginForm = withFormik({
  mapPropsToValues: props => ({
    inputEmail: '',
    inputPassword: ''
  }),
  validationSchema: Yup.object().shape({
    inputEmail: Yup.string()
      .email('Invalid email')
      .required('Required'),
    inputPassword: Yup.string()
      .required('No password provided.')
      .min(4, 'Password is too short - should be 4 characters minimum.')
      .max(20, 'Password should not be longer than 20 characters')
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    const inputEmail = values.inputEmail;
    console.log(inputEmail);
    const inputPassword = values.inputPassword;
    console.log(inputPassword);
    const history = props.history;

    localStorage.setItem('inputEmail', inputEmail);
    localStorage.setItem('inputPassword', inputPassword);
    console.log(localStorage.getItem('inputEmail'));
    console.log(localStorage.getItem('inputPassword'));

    if (localStorage.getItem('inputEmail') && localStorage.getItem('inputPassword')) {
      history.push('/');
    } else {
      history.push('/signIn');
    }

    console.log('done');
    //const history = props.history;
    console.log(props);
    // let isLoading = props.isLoading;
    setTimeout(() => {
      console.log('here');
      setSubmitting(false);
      history.push('/');
    }, 2000);
  },

  displayName: 'LoginForm'
})(MyForm);

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isloading: true };
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <MyLoginForm {...this.props} />
      </div>
    );
  }
}

export default SignIn;
