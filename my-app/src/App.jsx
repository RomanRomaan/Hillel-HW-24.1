import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import ResourceTabs from './components/ResourceTabs.jsx';
import CardList from './components/CardList.jsx';
import DetailsModal from './components/DetailsModal.jsx';

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <ResourceTabs />
      <CardList />
      <DetailsModal />
    </>
  );
}

export default App;
