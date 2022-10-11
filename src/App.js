import './App.scss';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import NavBar from './components/NavBar';
import Page from './components/page';
import Home from './components/home';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import ItemListContainerCategory from './components/ItemListContainerCategory';
import Error404 from './components/Error404';
function App() {
  return (
    <div className="App">
       <Router>
        <NavBar></NavBar>
    <Routes>
                <Route exact path="/" element={<Home/>} >
                </Route>
                <Route path="/products" element={<Page/>} >
                </Route>
                
            <Route path={'/products/:category/:id'} element={<ItemDetail/>} />
            <Route path={'/products/:category'} element={<ItemListContainerCategory/>} />
            <Route path={'/products'} element={<ItemListContainer/>} />
            <Route path={'*'} element={<Error404/>} />
            </Routes>
    </Router>
    </div>
  );
}

export default App;
