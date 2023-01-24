import { AppBar } from "components/AppBar/AppBar"
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"
import { Container } from "./Layout.styled"
// import { ToastContainer } from "react-toastify"


export const Layout = () => {
    return (
        <Container>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="bottom-right" reverseOrder={false} />
            {/* <ToastContainer /> */}
        </Container>
    )
}