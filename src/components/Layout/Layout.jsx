import { AppNavBar } from "components/AppBar/AppBar"
import Loader from "components/Loader/Loader"
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"
// import TsparticlesLayout from "components/TsparticlesLayout/TsparticlesLayout";


export const Layout = () => {
    return (
        <>
            {/* <TsparticlesLayout /> */}
            <AppNavBar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}