import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getRepos } from './redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './App.css'

import { 
  Header,
  RepoList
} 
from './styles'

// App.js
export class App extends Component {
  state = { username: 'richardmachado'
  // ,
  // value: '',
  // copied: false,
 };

 

  componentDidMount() {
    this.updateRepoList(this.state.username);
  }

  updateRepoList = username => this.props.getRepos(username);

  render() {
    return (
      <div className = "App" >
        <Header>Github repos </Header>
        <strong>Github username: </strong>
        <input
          type="text"
          value={this.state.username}
          onChange={ev => this.setState({ username: ev.target.value })}
          placeholder="Github username..."
        />
        <button onClick={() => this.updateRepoList(this.state.username)}>
          Get Lastest Repos
        </button>
        <ul>
          {this.props.repos.map((repo, index) => (

            <RepoList key={index}>
              <a href={repo.html_url} >
                {repo.name} <br></br>
                {repo.description}<br></br>

                Clone this: {repo.clone_url}
                
                  {/* <div>
        <input value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />
 
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>
 
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>
 
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div> */}
              </a>
            </RepoList>
          ))}
        </ul>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({ repos: state.repos });
const mapDispatchToProps = { getRepos };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;