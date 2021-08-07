import { Route } from "react-router-dom"
import Landing from './landing/landing';
import About from './about/about'

const Routes = () => {

    return (
        <>
            <Route
                exact
                path="/"
                render={() => <Landing />}
            />
            <Route
                exact
                path="/about"
                render={() => <About />}
            />
        </>
    )
}

export default Routes;