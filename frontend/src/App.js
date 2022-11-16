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
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/listing" element={<Listings />} />
        <Route path="/agent/:id" element={<Agentt />} />
        <Route path="/property/:id" element={<Listing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/change-password" element={<Password />} />
        <Route path="/add-listing/:id?" element={<AddLisiting />} />
        <Route path="/all-listing" element={<AdminListingList />} />
        <Route path="/all-agents" element={<AdminAgentsList />} />
        <Route path="/mylisting" element={<AgentListing />} />
      </Routes>
    </Router>
  );
};

export default App;
