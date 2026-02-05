import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<HomePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


