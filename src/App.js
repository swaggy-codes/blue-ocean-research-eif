import "./App.css";
import AppLayout from "./AppLayout/AppLayout";
import MainRouter from "./MainRouter/MainRouter";

function App() {
  return (
    <div className='App'>
      <AppLayout>
        <MainRouter />
      </AppLayout>
    </div>
  );
}

export default App;
