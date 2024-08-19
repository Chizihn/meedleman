import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Landing/Home";
import Features from "./pages/Landing/Features";
import HowItWorks from "./pages/Landing/HowItWorks";
import Legal from "./pages/Landing/Legal";
import About from "./pages/Landing/About";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import ForgotPassword from "./pages/Auth/forgotPassword";
import ForgotPasswordOTP from "./pages/Auth/forgotPasswordOtp";
import ForgotPasswordNew from "./pages/Auth/forgotPaswordNew";
import ConfirmAccount from "./pages/Auth/confirmAccount";
import Welcome from "./pages/Auth/welcome";
import Dashboard from "./pages/Account/dashboard";
import Transactions from "./pages/Account/Transactions/transactions";
import Disputes from "./pages/Account/Dispute/disputes";
import Blog from "./pages/Account/Blog/blogs";
import Support from "./pages/Account/Support/Support";
import Settings from "./pages/Account/Settings/settings";
import AccountSummary from "./pages/Account/Settings/summary";
import EditProfile from "./pages/Account/Settings/updateProfile";
import BankInformation from "./pages/Account/Settings/bankInformation";
import Help from "./pages/Account/Settings/help";
import TermsOfUse from "./pages/Account/Settings/termsOfUse";
import SuggestAFeature from "./pages/Account/Settings/suggestAFeature";
import NewTransaction from "./pages/Account/New Transaction/newTransaction";
import TransactionAgreement from "./pages/Account/New Transaction/transactionAgreement";
import InviteUser from "./pages/Account/New Transaction/inviteUser";
import TransactionCreated from "./pages/Account/New Transaction/transactionCreated";
import ViewTransaction from "./pages/Account/Transactions/ViewTransaction";
import TransactionInfo from "./pages/Account/Transactions/transactionInfo";
import Fundtransaction from "./pages/Account/Fund Transaction/Fundtransaction";
import ViewBlog from "./pages/Account/Blog/ViewBlog";
import ViewDispute from "./pages/Account/Dispute/viewDispute";
import Milestone from "./pages/Account/Transactions/milestone";
import ContractAgreement from "./pages/Account/Transactions/contractAgreement";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/otp" element={<ForgotPasswordOTP />} />
        <Route
          path="/forgot-password/new-password"
          element={<ForgotPasswordNew />}
        />
        <Route path="/confirm-account" element={<ConfirmAccount />} />
        <Route path="/welcome" element={<Welcome />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Transactions />} />

          <Route path="transactions" element={<Transactions />}>
            <Route path="new-transaction" element={<NewTransaction />} />
            <Route
              path="transaction-agreement"
              element={<TransactionAgreement />}
            />
            <Route path="invite-user" element={<InviteUser />} />
            <Route
              path="transaction-created"
              element={<TransactionCreated />}
            />
            <Route path=":id" element={<ViewTransaction />}>
              <Route path="info" element={<TransactionInfo />} />
              <Route path="fund-transaction" element={<Fundtransaction />} />
              <Route path="milestone" element={<Milestone />} />
              <Route path="agreement" element={<ContractAgreement />} />
            </Route>
          </Route>

          <Route path="disputes" element={<Disputes />}>
            <Route path=":id" element={<ViewDispute />} />
          </Route>

          <Route path="blogs" element={<Blog />}>
            <Route path=":id" element={<ViewBlog />} />
          </Route>

          <Route path="support" element={<Support />} />

          <Route path="settings" element={<Settings />}>
            <Route path="update-profile" element={<EditProfile />} />
            <Route path="account-summary" element={<AccountSummary />} />
            <Route path="bank-information" element={<BankInformation />} />
            <Route path="help" element={<Help />} />
            <Route path="terms" element={<TermsOfUse />} />
            <Route path="suggest-feature" element={<SuggestAFeature />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
