import { MainLayout } from "./layout/MainLayout";
import { Home } from "./components/pages/home";
import { Aboutme } from "./components/pages/aboutme";
import { Projects } from "./components/pages/projects";
import { Skills } from "./components/pages/skills";
import { Contact } from "./components/pages/contact";

import { 
    BrowserRouter,
    Routes,
    Route
 } from "react-router-dom"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< MainLayout />}>
                    <Route path='/' element={< Home />} />
                    <Route path='/aboutme' element={< Aboutme />} />
                    <Route path='/projects' element={< Projects />} />
                    <Route path='/skills' element={< Skills />} />
                    <Route path='/contact' element={< Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}