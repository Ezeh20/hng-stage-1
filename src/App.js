import { Routes, Route } from "react-router-dom";
import Page from "./Components/Page/page.component";
import Contact from "./Routes/Contact/contact.route";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route index  element={<Page/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
};

export default App;
