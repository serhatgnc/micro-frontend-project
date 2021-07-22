import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../constants/Routes'
import { Navbar as Navigation, NavbarRoute } from '../styles/styles'

const Navbar = () => {
    const [pageRoute, setPageRoute] = useState<string | undefined>(undefined)
    const history = useHistory()

    useEffect(() => {
        setPageRoute(history.location.pathname)
    }, [history.location])
    return (
        <Navigation responsiveWidth={['80%', '90%']}>
            <NavbarRoute
                data-testid='navbar-episodes-route'
                background={pageRoute === ROUTES.EPISODES ? '#FFDC85' : '#eee'}
                href={ROUTES.EPISODES}
            >
                By Episodes
            </NavbarRoute>
            <NavbarRoute
                data-testid='navbar-locations-route'
                background={pageRoute === ROUTES.LOCATIONS ? '#FFDC85' : '#eee'}
                href={ROUTES.LOCATIONS}
            >
                By Locations
            </NavbarRoute>
        </Navigation>
    )
}

export default Navbar
