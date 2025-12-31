import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

/**
 * Componente Principal App
 * Maneja el enrutamiento y estado global de la aplicación
 */
function App() {
  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState('home');
  
  // Estado para el carrito (simulado)
  const [cart, setCart] = useState([]);
  
  // Estado para autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Estado para el modal del carrito
  const [showCart, setShowCart] = useState(false);

  /**
   * Efecto para persistir el carrito en localStorage
   */
  useEffect(() => {
    const savedCart = localStorage.getItem('pizzeria_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error al parsear el carrito:', error);
      }
    }
  }, []);

  /**
   * Efecto para guardar el carrito cuando cambia
   */
  useEffect(() => {
    localStorage.setItem('pizzeria_cart', JSON.stringify(cart));
  }, [cart]);

  /**
   * Añade una pizza al carrito
   * @param {Object} pizza - Objeto de pizza
   */
  const addToCart = (pizza) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === pizza.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
    
    // Mostrar confirmación
    setShowCart(true);
  };

  /**
   * Maneja el inicio de sesión
   * @param {Object} userData - Datos del usuario
   */
  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setCurrentPage('home');
  };

  /**
   * Maneja el cierre de sesión
   */
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
  };

  /**
   * Maneja el registro
   * @param {Object} userData - Datos del nuevo usuario
   */
  const handleRegister = (userData) => {
    setIsAuthenticated(true);
    setCurrentPage('home');
  };

  /**
   * Renderiza el contenido según la página actual
   */
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'cart':
        return (
          <div className="container mt-4">
            <Cart onClose={() => setCurrentPage('home')} />
          </div>
        );
      case 'login':
        return (
          <LoginPage 
            onLogin={handleLogin}
            onSwitchToRegister={() => setCurrentPage('register')}
          />
        );
      case 'register':
        return (
          <RegisterPage 
            onRegister={handleRegister}
            onSwitchToLogin={() => setCurrentPage('login')}
          />
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar 
        setCurrentPage={setCurrentPage} 
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <main className="flex-grow-1">
        {renderPage()}
      </main>

      <Footer />

      {/* Modal del carrito (opcional, mostrar cuando se añade un item) */}
      {showCart && (
        <div className="cart-modal-backdrop" onClick={() => setShowCart(false)}>
          <div className="cart-modal" onClick={e => e.stopPropagation()}>
            <Cart onClose={() => setShowCart(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;