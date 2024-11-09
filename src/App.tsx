// Import required modules and components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoWhats from './components/gowhats-landing-page';
import Contact from './components/contact';
import Price from'./components/priceing';
import Blog from'./components/blog'
function App() {
  return (
    <Router>
      <Routes>
        {/* Define the default route for GoWhats component */}
        <Route path="/" element={<GoWhats />} />
        
        {/* Define the route for the Contact component */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/price" element={<Price/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
