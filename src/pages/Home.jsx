import React from 'react';
import '../App.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const inputEmail = localStorage.getItem('inputEmail');
    const inputPassword = localStorage.getItem('inputPassword');
    const history = this.props.history;
    if (!inputEmail || !inputPassword) {
      history.push('/signIn');
    }
    return (
      <div>
        <h1>Home Search Repositories</h1>
      </div>
    );
  }
}
