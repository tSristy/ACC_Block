import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import RouterConfig from './Route/RouterConfig';
import { AuthProvider } from './Route/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterConfig />
      </AuthProvider>
    </div>
  );
}

export default App;
