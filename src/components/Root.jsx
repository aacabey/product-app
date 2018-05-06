import * as React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import { History } from 'history'
import { StoreBuilder } from 'redux-ts'

import { reducers, StoreState } from "../reducers"

import { Layout } from './Layout'
import { ProductDetail } from './ProductDetail'
import { NotFound } from './error/notFound'

export class Root extends React.Component {

    constructor() {
        super();

        this.store = new StoreBuilder()
            .withDevTools()
            .withMiddleware(routerMiddleware(hashHistory))
            .withReducer("routing", routerReducer)
            .withReducersMap(reducers)
            .build();

        this.history = syncHistoryWithStore(hashHistory, this.store);
    }

    render() {
        return (
            <Provider store={this.store}>
                <Router key={Math.random()} history={this.history} onUpdate={() => window.scrollTo(0, 0)} >
                        <Route path="/" component={Layout}>
                            <IndexRoute component={ProductDetail} />
                            <Route path="not-found" component={ProductDetail} />
                            <Route path="not-found" component={NotFound} />
                        </Route>
                        <Redirect from="*" to='not-found' />
                </Router>
            </Provider>
        )
    }
}