import '../tailwind.output.css';
import Nav from '../components/layout/nav/Nav'
import Header from '../components/layout/header/Header'
import Shorten from '../components/layout/shorten/Shorten'
import Statistics from '../components/layout/statistics/Statistics'
import Boost from '../components/layout/boost/Boost'
import Footer from '../components/layout/footer/Footer'

function App() {
  return (
    <div className="mx-auto h-screen overflow-x-hidden">
      <Nav />
      <Header />
      <Shorten />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
