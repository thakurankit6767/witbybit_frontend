import AllUsers from "./AllUsers";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RemoveUser from "./RemoveUser";

function AllRoutes() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/remove" element={<RemoveUser />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
