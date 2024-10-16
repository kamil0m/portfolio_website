import { MainLayout } from "./layout/MainLayout";
import { Home } from "./components/pages/Home";
import { Aboutme } from "./components/pages/Aboutme";

import { 
    BrowserRouter,
    Routes,
    Route
 } from "react-router-dom"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutme' element={<Aboutme />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}