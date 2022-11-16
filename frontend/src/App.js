import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Home,
  Agents,
  Listings,
  Login,
  Register,
  Forgot,
  Agentt,
  Listing,
  Dashboard,
  UserProfile,
  Messages,
  Password,
  AddLisiting,
  AdminListingList,
  AdminAgentsList,
  AgentListing,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/agents" element={<Agents />} />
        <Route exact path="/listing" element={<Listings />} />
        <Route exact path="/agent/:id" element={<Agentt />} />
        <Route exact path="/property/:id" element={<Listing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<Forgot />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/change-password" element={<Password />} />
        <Route exact path="/add-listing/:id?" element={<AddLisiting />} />
        <Route exact path="/all-listing" element={<AdminListingList />} />
        <Route exact path="/all-agents" element={<AdminAgentsList />} />
        <Route exact path="/mylisting" element={<AgentListing />} />
      </Routes>
    </Router>
  );
};

export default App;
