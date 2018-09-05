import React, {Fragment} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import CounterApp from '../page/couterApp'
import ApiPage from '../page/apiPage'

const CounterRouter = () => {
    return (
        <CounterApp/>
    )
}

const ApiPageRouter = () => {
    return (
        <ApiPage />
    )
}

const Home = () => {
    return (
        <Fragment>
            <Link to={'/counter'} style={{marginRight: '5px'}}>counter</Link>
            <Link to={'/apiPage'}>apiPage</Link>
        </Fragment>
    )
}

export const AppWithRouter = () => {
    return (
        <Router>
            <Fragment>
                <Route path={'/'} exact render={() => <Home />} />
                <Route path={'/counter'} render={() => <CounterRouter />} />
                <Route path={'/apiPage'} render={() => <ApiPageRouter />} />
            </Fragment>
        </Router>
    )
}


