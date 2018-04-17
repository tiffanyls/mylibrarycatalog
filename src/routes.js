import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Searchbar from './components/Search/Searchbar';
import Bookshelf from './components/bookshelf/bookshelf';

export default(
    <Switch>
    <Route exact path='/' component={Searchbar} />
    <Route path ='/bookshelf' component={Bookshelf}/>
    </Switch>
)