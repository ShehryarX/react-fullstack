import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profile';
import PostItem from './components/PostItem';
import Lifecycles from './components/Lifecycles'
import Conditional from './components/Conditional';
import User from './components/User';

const App = () => {
    return (
        <MemoryRouter>
            <div>
                <header>
                    <NavLink to='/'>Home</NavLink><br />
                    <NavLink to='/posts' activeStyle={{color: 'red'}}>Posts</NavLink><br />
                    <NavLink to={{
                        pathname: '/profile',
                        hash: '#shehryar',
                        search: '?profile=true',
                    }}>Profile</NavLink><br />
                    <NavLink to='/lifecycles'>Lifecycles</NavLink><br />
                    <NavLink to='/conditional'>Conditional</NavLink><br />
                    <NavLink to='/user'>User</NavLink><br />
                </header>

                <Switch>
                    <Route path='/posts/:id/' component={PostItem} />
                    <Route path='/posts' component={Posts} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/lifecycles' component={Lifecycles} />
                    <Route path='/conditional' component={Conditional} />
                    <Route path='/user' component={User} />
                    <Route path='/' exact component={Home} />
                    <Route render={() => <h3>Ooops. 404.</h3>}/>
                </Switch>
            </div>
        </MemoryRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));