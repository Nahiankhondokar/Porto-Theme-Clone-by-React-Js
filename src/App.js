import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Admin from './Components/Admin/Admin';
import Crud from './Components/Admin/Crud/Crud';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Profile from './Components/Admin/Profile/Profile';
import Staff from './Components/Admin/Staff/Staff';
import Product from './Components/Admin/Product/Product';
import Student from './Components/Admin/Student/Student';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Blog from './Components/Pages/Blog/Blog';
import SingleBlog from './Components/Pages/Blog/SingleBlog/SingleBlog';
import NotFound from './Components/Pages/NotFound/NotFound';
import Shop from './Components/Pages/Shop/Shop';
import SingleProduct from './Components/Pages/Shop/SingleProduct/SingleProduct';
import Team from './Components/Pages/Team/Team';
import ToDo from './Components/Admin/ToDo/ToDo';
import Category from './Components/Admin/Category/Category';
import Brand from './Components/Admin/Brand/Brand';


function App() {


  const [progress, setProgress] = useState(100);
  


  return (
   <>
   

    <BrowserRouter>

      <LoadingBar 
        color = '#08c'
        progress = { progress }
        onLoaderFinished={ () => setProgress(0) }
        loaderSpeed={ 1000 }
        transitionTime={ 500 }
        height={ 3 }
      />


      <Header></Header> 
      <Menu></Menu>


      <Routes>
        <Route path='/' element={ <Home></Home> } />
        <Route path='/blog' element={ <Blog></Blog> } />
        <Route path='/blog/:singleBlogId' element={ <SingleBlog></SingleBlog> } />
        <Route path='/team' element={ <Team></Team> } />
        <Route path='/shop' element={ <Shop></Shop> } />
        <Route path='/shop/:singleProductId' element={ <SingleProduct></SingleProduct> } />



        <Route path='/dashboard' element={ <Admin></Admin> }>

          <Route path='/dashboard' element={ <Dashboard></Dashboard> } />
          <Route path='/dashboard/profile' element={ <Profile></Profile> } />
          <Route path='/dashboard/category' element={ <Category></Category> } />
          <Route path='/dashboard/brand' element={ <Brand></Brand> } />
          <Route path='/dashboard/allStudent' element={ <Student></Student> } />
          <Route path='/dashboard/todo' element={ <ToDo></ToDo> } />
          <Route path='/dashboard/product' element={ <Product></Product> } />
          <Route path='/dashboard/signup' element={ <Crud></Crud> } />

        </Route>

        <Route path='/*' element={ <NotFound></NotFound> } />
      </Routes>
      
      
      
      <Footer></Footer>
    
    </BrowserRouter>

    
   </>
  );
}

export default App;
