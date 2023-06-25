import { Outlet } from "react-router-dom"
import EventsNavagation from '../components/EventsNavigation'

function EventsRootLayout() {
    return (
        <>
            <EventsNavagation />
            <Outlet />
        </>
    )
}

export default EventsRootLayout