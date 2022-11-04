import { Routes, Route } from "react-router-dom";
import Page from "./Components/Page/page.component";
import Contact from "./Routes/Contact/contact.route";
import Nav from "./Routes/Nav/nav.component";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Page />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
