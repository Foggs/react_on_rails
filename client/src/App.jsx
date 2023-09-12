import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PostDetails from "./components/PostDetails";
import PostsList from "./components/PostsList";
import EditPostDetails from "./components/EditPostDetails";
import NewPost from "./components/NewPost";

  export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/details/:id" element={<PostDetails />} />
            <Route path="/details/:id/edit" element={<EditPostDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<PostsList />} />
            <Route path="/newpost" element={<NewPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
