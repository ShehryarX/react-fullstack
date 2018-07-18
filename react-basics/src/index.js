import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// components
import Header from './components/Header';
import NewsList from './components/NewsList';

class App extends Component {
    state = {
        news: JSON,
        filtered: [],
    }

    getKeyword = (event) => {
        let keyword = event.target.value;

        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1;
        })

        this.setState({
            filtered
        })
    }

    render() {
        console.log(this.state.filtered);

        return (
            <div>
                <Header keywords={this.getKeyword} />
                <NewsList news={this.state.filtered.length === 0 
                    ? this.state.news : this.state.filtered} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));