import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/panel/Dashboard";
import Blog from "./pages/panel/Blog";
import Setting from "./pages/panel/Setting";
import Profile from "./pages/panel/Profile";
import Blank from "./pages/panel/Blank";
import AddBlog from "./pages/panel/blog/AddBlog";
import EditBlog from "./pages/panel/blog/EditBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/add" element={<AddBlog />} />
          <Route path="/blog/edit" element={<EditBlog />} />
          <Route path="/blog/add" element={<AddBlog />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/blank" element={<Blank />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
