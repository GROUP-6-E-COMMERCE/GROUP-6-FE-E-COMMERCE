import "./styles/App.css";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Layout>
      <Homepage></Homepage>
    </Layout>
  );
};

export default App;
