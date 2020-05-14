import React from 'react';
import '../App.css';

export default class SignIn extends React.Component {
  render() {
    return (
      <main class="signin-container text-center">
        <form class="form-signin">
          <div class="mb-4">
            <img src="https://picsum.photos/72" alt="brand-icon" width="72" height="72" />
          </div>

          <div class="mb-4">
            <h1 class="h3 font-weight-normal">Please sign in</h1>
          </div>

          <label for="inputEmail" class="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />

          <div class="mb-3">
            <label>
              {' '}
              <input type="checkbox" value="remember-me" /> Remember me{' '}
            </label>
          </div>

          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </main>
    );
  }
}
