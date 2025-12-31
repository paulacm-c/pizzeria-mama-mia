import PropTypes from 'prop-types';

/**
 * Componente Navbar
 * Barra de navegación principal de la aplicación
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.setCurrentPage - Función para cambiar la página actual
 * @param {boolean} props.isAuthenticated - Si el usuario está autenticado
 * @param {Function} props.onLogout - Función para cerrar sesión
 * @param {number} props.cartCount - Cantidad de items en el carrito
 */
const Navbar = ({ setCurrentPage, isAuthenticated, onLogout, cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a 
          className="navbar-brand fw-bold" 
          href="#"
          onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
        >
          🍕 Pizzería Mamma Mia!
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button 
                className="btn btn-link nav-link" 
                onClick={() => setCurrentPage('home')}
              >
                🏠 Inicio
              </button>
            </li>
          </ul>
          
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            <button 
              className="btn btn-outline-light" 
              onClick={() => setCurrentPage('home')}
            >
              🏠 Inicio
            </button>

            {isAuthenticated ? (
              <>
                <button className="btn btn-outline-secondary">
                  👤 Mi Perfil
                </button>
                <button 
                  className="btn btn-outline-danger"
                  onClick={onLogout}
                >
                  🚪 Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <button 
                  className="btn btn-outline-success" 
                  onClick={() => setCurrentPage('login')}
                >
                  🔐 Iniciar Sesión
                </button>
                <button 
                  className="btn btn-outline-warning" 
                  onClick={() => setCurrentPage('register')}
                >
                  📝 Registrarse
                </button>
              </>
            )}

            <button 
              className="btn btn-primary position-relative"
              onClick={() => setCurrentPage('cart')}
            >
              🛒 Carrito
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                  <span className="visually-hidden">items en carrito</span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

/**
 * Definición de PropTypes para validación de propiedades
 */
Navbar.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  onLogout: PropTypes.func,
  cartCount: PropTypes.number,
};

/**
 * Valores por defecto para las propiedades
 */
Navbar.defaultProps = {
  isAuthenticated: false,
  onLogout: () => {},
  cartCount: 0,
};

export default Navbar;

