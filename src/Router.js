import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Detail } from "./pages/Detail/Detail";
import { NotFound } from "./pages/NotFound";
import { routeUrl } from "./routes";
import { Company } from "./pages/Home/Company";
import { TitleItems } from "./pages/Home/TitleItems";
import { Header } from "./components/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routeUrl.home} element={<Home />}></Route>
        <Route path={routeUrl.detail} element={<Detail />}></Route>
        <Route path={routeUrl.compan} element={<Company />}></Route>
        <Route path={routeUrl.titleitems} element={<TitleItems />}></Route>
        <Route path={routeUrl.notfound} element={<NotFound />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
