import './App.css';
import ServiceList from './components/ServiceList/ServiceList';
import ServiceAdd from './components/ServiceAdd/ServiceAdd';
import ServiceSearch from './components/SearchService/ServiceSearch';

export default function App() {
  return (
    <div className="App">
      <ServiceSearch />
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}
