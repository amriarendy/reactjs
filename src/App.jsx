import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/panel/Dashboard";
import Blog from "./pages/panel/blog/Blog";
import Setting from "./pages/panel/Setting";
import Profile from "./pages/panel/Profile";
import Blank from "./pages/panel/Blank";
import AddBlog from "./pages/panel/blog/AddBlog";
import EditBlog from "./pages/panel/blog/EditBlog";
import Test from "./pages/panel/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/add" element={<AddBlog />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
