import React from 'react';
import '../App.css';
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
      resultsPage: 10
    };
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
    const prevButton = document.getElementById('prevButton');
    e.preventDefault();
    await this.loadSearchResult(this.state.inputValue, 1);
    prevButton.disabled = true;
    this.setState({ hideResearch: 'none', hideNav: 'flex' });
  };

  handlePreviousPage = e => {
    e.preventDefault();
    const prevButton = document.getElementById('prevButton');
    const prevPage = parseInt(this.state.thisPage) - 1;
    if (prevPage === 1) {
      prevButton.disabled = true;
    }
    this.setState({ thisPage: prevPage });
    this.loadSearchResult(this.state.inputValue, prevPage);
  };

  handleNextPage = e => {
    e.preventDefault();
    const prevButton = document.getElementById('prevButton');
    if (prevButton.disabled === true) {
      prevButton.disabled = false;
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

  render() {
    const inputEmail = localStorage.getItem('inputEmail');
    const inputPassword = localStorage.getItem('inputPassword');
    const history = this.props.history;

    if (!inputEmail || !inputPassword) {
      history.push('/signIn');
    }
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark shadow-sm fixed-top">
          <div>
            <a class="navbar-brand" href="#">
              <img
                src="https://picsum.photos/30"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
              ></img>
              React@GitHub Search Repositories
            </a>
          </div>
          <ul class="navbar">
            <li class="nav-item active">
              <div class="nav-link" onClick={this.handleLogOut}>
                Logout
              </div>
            </li>
          </ul>
        </nav>
        <main role="main">
          <section class="jumbotron text-center">
            <h1>Search GitHub Repos</h1>
            <p class="lead text-muted">Search for GitHub repos using the following form</p>
            <form
              id="search-form"
              class="form-inline justify-content-center"
              onSubmit={this.handleSubmit}
            >
              <label for="inputSearch" class="sr-only">
                Search by
              </label>
              <input
                type="text"
                id="inputSearch"
                class="form-control"
                placeholder="Search Repo"
                value={this.state.inputValue}
                onChange={this.handleChangeInput}
                required
                autofocus
              />
              <button class="btn btn-primary" type="submit">
                Search
              </button>
              <button class="btn btn-secondary" type="reset">
                Clear
              </button>
            </form>
          </section>

          <div class="album py-5 bg-light">
            <div className="my-content-list" id="my-list">
              <Search visibility={this.state.hideResearch} />

              {this.state.searchResult.items.map(returnResult => (
                <Card
                  key={returnResult.id}
                  username={returnResult.owner.login}
                  description={returnResult.description}
                  url_avatar={returnResult.owner.avatar_url}
                  url_repo={returnResult.html_url}
                  stars={returnResult.stargazers_count}
                />
              ))}
              <div class="row">
                <div class="col-md-4">
                  <ul class="pagination">
                    <li class="page-item">
                      <button
                        onClick={this.handlePreviousPage}
                        class="btn btn-primary"
                        id="prevButton"
                      >
                        {' '}
                        Previous
                      </button>
                    </li>
                    <li class="page-item">
                      <button class="page-link">1</button>
                    </li>
                    <li class="page-item">
                      <button class="page-link">2</button>
                    </li>
                    <li class="page-item">
                      <button class="page-link">3</button>
                    </li>
                    <li class="page-item">
                      <button onClick={this.handleNextPage} class="btn btn-primary" id="nextButton">
                        Next
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="text-muted">
          <div class="container">
            <p class="float-right">
              <a href="#">Back to top</a>
            </p>
            <p>React App to search repositories on Github</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
