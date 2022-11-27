import Home from "./views/home/Home";
import MainLayout from "./components/MainLayout";
import WorksParent from "./views/works/Works";
import Details from "./components/WorkDetails";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './i18n';
import { LangProvider } from "./context/languageContext"
import { DataProvider } from "./context/searchContext"
import "./assets/styles/styles.scss"
function App() {

  return (
    <LangProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/works" element={<WorksParent />}>
                <Route path="/works/:id" element={<Details />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </LangProvider>
  );
}
export default App;
