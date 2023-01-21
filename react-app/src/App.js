import './App.css';
import MainLayout from './components/Home/Header/MainLayout';
import HomePage from "./pages/HomePage";
function App() {
  return (
    <MainLayout>
    <div className="App">
        <HomePage />
    </div>
    </MainLayout>
  );
}

export default App;
