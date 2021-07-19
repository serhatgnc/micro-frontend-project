//@ts-ignore
import Header from 'app2/Header'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import ReturnToTopButton from './components/ReturnToTopButton'
import { ROUTES } from './constants/Routes'
import { GlobalStyles } from './styles/global'
import { MainContainer } from './styles/styles'

const Episodes = lazy(() => import('./pages/Episodes'))
const Locations = lazy(() => import('./pages/Locations'))

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <MainContainer data-testid='main-container'>
                    <Header />
                    <GlobalStyles />
                    <Navbar />
                    <Switch>
                        <Route exact path={ROUTES.EPISODES} component={Episodes} />
                        <Route path={ROUTES.LOCATIONS} component={Locations} />
                    </Switch>
                    <ReturnToTopButton />
                </MainContainer>
            </Suspense>
        </Router>
    )
}

export default App
