import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter,Route,Routes,NavLink  } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img
            src="https://th.bing.com/th/id/OIP.r0HtX7FMJKolxOsVnkW3CQHaGw?rs=1&pid=ImgDetMain"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
        </a>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/clientes" className="nav-link">Clientes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/proveedor" className="nav-link">Proveedor</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/usuarios" className="nav-link">Usuarios</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/logout" className="nav-link">Logout</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container" style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/clientes" element={<h1>Clientes</h1>} />
          <Route path="/proveedor" element={<h1>Proveedor</h1>} />
          <Route path="/usuarios" element={<h1>Usuarios</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
