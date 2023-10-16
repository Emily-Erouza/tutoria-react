
// import './App.css';
// import Navbar from './Navbar';
// import Home from './Home';

// function App() {
//   // 1.Dynamic values in templates
// //   const title ='welcome to the new blog';
// //   const likes = 50;
// // const link = "http://www.google.com"
//   return (

//     <div className="App">
//       <Navbar/>
//       <div className='content'>
//         <Home/>
//         {/* <h1>{title}</h1>
//       <p> liked { likes} times</p>
       
//        <p>{10}</p>
//        <p>{'hello melly'}</p>
//        <p>{[1,2,3,4]}</p>
//        <p>{Math.random() * 10}</p>
//        <a href={link}>Google site</a> */}
//       </div>
//     </div>
//   );
// }

// export default App;


// 14.react route
// import './App.css';
// import Navbar from './Navbar';
// import Home from './Home';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// function App() {
//   return (
// <Router>

//     <div className="App">
//       <Navbar/>
//       <div className='content'>
//      <Switch>
//       <Route path='/'>
//        <Home/>
//       </Route>
//      </Switch>
     
//       </div>
//     </div>
// </Router>
//   );
// }
// export default App;

// 15.execat match the routes
// import './App.css';
// import Navbar from './Navbar';
// import Home from './Home';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Create from './Create';

// function App() {
//   return (
// <Router>

//     <div className="App">
//       <Navbar/>
//       <div className='content'>
//      <Switch>
//       <Route  exact path='/'>
//        <Home/>
//       </Route>

//       <Route path='/create'>
//        <Create/>
//       </Route>
//      </Switch>
     
//       </div>
//     </div>
// </Router>
//   );
// }
// export default App;

// 18.route parameters
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
<Router>

    <div className="App">
      <Navbar/>
      <div className='content'>
     <Switch>
      <Route  exact path='/'>
       <Home/>
      </Route>

      <Route path='/create'>
       <Create/>
      </Route>

      <Route path='/blogs/:id'>
       <BlogDetails/>
      </Route>

      <Route path='*'>
        {/* * means catch any other routes */}
       <NotFound/>
      </Route>
     </Switch>
     
      </div>
    </div>
</Router>
  );
}
export default App;