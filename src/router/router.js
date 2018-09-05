import React, {Fragment} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import CounterApp from '../page/couterApp'
import ApiPage from '../page/apiPage'
import DetailPage from '../page/detailPage'

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

const DetailPageRouter = () => {
    return (
        <DetailPage />
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
                <Route path={'/detail:id'} render={() => <DetailPageRouter />} />
            </Fragment>
        </Router>
    )
}


