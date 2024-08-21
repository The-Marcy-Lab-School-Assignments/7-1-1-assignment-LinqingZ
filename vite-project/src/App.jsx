// /* eslint-disable no-unused-vars */
// import BotSpecsPage from './pages/BotSpecsPage'
// import NotFoundPage from './pages/NotFoundPage'
// import BotPage from './pages/BotsPage'

// // TODO: import Routes and Route
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// // import { Route, Routes } from 'react-router-dom';
// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/" element={<BotPage />} />
//           <Route path="/robots/:id" element={<BotSpecsPage />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
import BotSpecsPage from './pages/BotSpecsPage';
import NotFoundPage from './pages/NotFoundPage';
import BotPage from './pages/BotsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BotPage />} />
          <Route path="/robots/:id" element={<BotSpecsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;