import React from "react";
import Splash from "./pages/Splash/splash";
import Welcome from "./pages/Welcome/welcome";
import SignUp from "./pages/SignUp/signUp";
import SignUpOtp from "./pages/SignUpOtp/signUpOtp";
import SignIn from "./pages/SignIn/signIn";
import HomePage from "./pages/Homepage/homePage";
import Account from "./pages/Account/account";
import Profile from "./pages/Profile/profile";
import AccountDetails from "./pages/AccountDetails/accountDetails";
import AddNew from "./pages/AddNew/addNew";
import ManageCards from "./pages/ManageCards/manageCards";
import NewAgain from "./pages/NewAgain/newAgain";
import Setting from "./pages/Setting/setting";
import WalletPin from "./pages/WalletPin/walletPin";
import History from "./pages/History/history";
import Filter from "./pages/Filter/filter";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUpOtp" element={<SignUpOtp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accountDetails" element={<AccountDetails />} />
        <Route path="/addNew" element={<AddNew />} />
        <Route path="/manageCards" element={<ManageCards />} />
        <Route path="/newAgain" element={<NewAgain />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/walletPin" element={<WalletPin />} />
        <Route path="/history" element={<History />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </div>
  );
};

export default App;
