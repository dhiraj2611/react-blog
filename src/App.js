import { useState,useRef,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Article from './Components/Cards';
import { BlogProvider } from './Components/BlogContext';
import CategoryPage from './Components/Category';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
 // eslint-disable-next-line
const [height,setHeight]=useState(null);
 // eslint-disable-next-line
const [width,setWidth]=useState(null);
const confettiRef=useRef(null);

useEffect(() => {
 setHeight(confettiRef.current.clientHeight)
 setWidth(confettiRef.current.clientWidth)
}, [])



  return (
<div ref={confettiRef}>
    <BlogProvider>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Navigate to={'/home'} />} />
          <Route path='/home' element={<Home />} />
          <Route
            path='/article/:articleTitle/:articleCategory'
            element={<Article />}
          />
          <Route
            path='/categoryPage/:categoryName'
            element={<CategoryPage />}
          />
         
        </Routes>
      </Router>
    </BlogProvider>
 
    </div>
  );
}

export default App;

