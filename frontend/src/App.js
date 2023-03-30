import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyKitchen from './screens/MyKitchen/MyKitchen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
const App = () => (
    <BrowserRouter>
        <Header />
        <main>
            <Route path='/' component={LandingPage} exact />
            <Route path='/login' component={LoginScreen} exact />
            <Route path='/register' component={RegisterScreen} exact />
            <Route path='/MyKitchen' component={()=><MyKitchen/>}/>
        </main>
        <Footer />
    </BrowserRouter>
);

export default App;
