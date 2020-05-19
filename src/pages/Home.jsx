import React from 'react';
import '../App.css';
import '../styles/Home.css';
import Card from '../components/Card';
import Search from '../components/Search';
import apiGithub from './../services/apiGithub';

class Home extends React.Component {
  state = {
    inputValue: String,
    thisPage: Number,
    searchResult: {},
    hideNav: String,
    hideResearch: String,
    resultsPage: Number
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      thisPage: 1,
      searchResult: { query: '', items: [] },
      hideNav: 'none',
      hideResearch: 'flex',
      resultsPage: 12
    };
  }

  componentDidMount() {
    document.title = 'Home - Search GitHub Repositories';
  }

  async loadSearchResult(querySearch, thisPage) {
    const response = await apiGithub.get(
      `repositories?q=${querySearch}&page=${thisPage}&per_page=${this.state.resultsPage}`
    );
    this.setState({
      searchResult: {
        query: querySearch,
        items: response.data.items
      }
    });
  }

  handleChangeInput = e => {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async e => {
    const previousButton = document.getElementById('previousButton');
    e.preventDefault();
    await this.loadSearchResult(this.state.inputValue, 1);
    previousButton.disabled = true;
    this.setState({ hideResearch: 'none', hideNav: 'flex' });
  };

  handlePreviousPage = e => {
    e.preventDefault();
    const previousButton = document.getElementById('previousButton');
    const previousPage = parseInt(this.state.thisPage) - 1;
    if (previousPage === 1) {
      previousButton.disabled = true;
    }
    this.setState({ thisPage: previousPage });
    this.loadSearchResult(this.state.inputValue, previousPage);
  };

  handleNextPage = e => {
    e.preventDefault();
    const previousButton = document.getElementById('previousButton');
    if (previousButton.disabled === true) {
      previousButton.disabled = false;
    }
    const nextPage = parseInt(this.state.thisPage) + 1;
    this.setState({ thisPage: nextPage });
    this.loadSearchResult(this.state.inputValue, nextPage);
  };

  handleLogOut = e => {
    const history = this.props.history;
    e.preventDefault();
    localStorage.clear();
    history.push('/signIn');
  };

  handleReset = e => {
    e.preventDefault();
    this.setState({ inputValue: '' });
    this.setState({
      searchResult: { query: '', items: [] }
    });
    this.setState({ hideNav: 'none' });
  };

  render() {
    const inputEmail = localStorage.getItem('inputEmail');
    const inputPassword = localStorage.getItem('inputPassword');
    const history = this.props.history;

    if (!inputEmail || !inputPassword) {
      history.push('/signIn');
    }
    return (
      <div>
        <nav className="navbar navbar-dark bg-light shadow-sm fixed-top">
          <div className="nav-link-color">
            <a className="navbar-brand" href="/">
              <img
                src="data:image/png;base64,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"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              ></img>
            </a>
            React@GitHub Search Repositories
          </div>

          <div className="nav-link nav-link-color" onClick={this.handleLogOut}>
            <button type="button" className="btn btn-outline-info">
              Logout
            </button>
          </div>
        </nav>
        <main role="main">
          <section className="jumbotron text-center">
            <div className="container">
              <h1>Search GitHub Repos</h1>
              <p className="lead text-muted">Search for GitHub repos using the following form</p>
              <form
                id="search-form"
                className="form-inline justify-content-center"
                onSubmit={this.handleSubmit}
              >
                <label htmlFor="inputSearch" className="sr-only">
                  Search by
                </label>
                <input
                  type="text"
                  id="inputSearch"
                  className="form-control"
                  placeholder="Search Repo"
                  value={this.state.inputValue}
                  onChange={this.handleChangeInput}
                  required
                  autoFocus
                />

                <button className="btn btn-primary" type="submit">
                  Search
                </button>
                <button className="btn btn-secondary" type="reset" onClick={this.handleReset}>
                  Clear
                </button>
              </form>
            </div>
          </section>

          <div>
            <div className="home-repository-results-container" id="results">
              <Search visibility={this.state.hideResearch} />
              {this.state.searchResult.items.length === 0 &&
              this.state.searchResult.query.length > 0 ? (
                <div className="home-repository-search-query">Search query not found...</div>
              ) : (
                this.state.searchResult.items.map(returnResult => (
                  <Card
                    key={returnResult.id}
                    name={returnResult.name}
                    username={returnResult.owner.login}
                    description={returnResult.description}
                    url_avatar={returnResult.owner.avatar_url}
                    url_repo={returnResult.html_url}
                    forks={returnResult.forks_count}
                    watchers={returnResult.watchers_count}
                    stars={returnResult.stargazers_count}
                  />
                ))
              )}
              <div className="result-buttons-nav" style={{ display: this.state.hideNav }}>
                <button
                  onClick={this.handlePreviousPage}
                  className="btn btn-primary"
                  id="previousButton"
                >
                  Previous
                </button>
                <button onClick={this.handleNextPage} className="btn btn-primary" id="nextButton">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-muted">
          <div className="container nav-link-color">
            <p className="float-right">
              <button type="button" className="btn btn-outline-light">
                <a href="#top">Back to top</a>
              </button>
            </p>
            <p>React App to search repositories on Github</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
