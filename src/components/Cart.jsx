import { useState } from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../utils/formatPrice';

/**
 * Componente Cart
 * Muestra el carrito de compras con funcionalidad de gestión de cantidades
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.onClose - Función para cerrar el carrito
 */
const Cart = ({ onClose }) => {
  // Estado para los items del carrito
  const [cart, setCart] = useState([
    { id: 1, name: "Napolitana", price: 5950, quantity: 1 },
    { id: 2, name: "Española", price: 7250, quantity: 2 }
  ]);

  /**
   * Aumenta la cantidad de un item en el carrito
   * @param {number} id - ID del item
   */
  const increaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    ));
  };

  /**
   * Disminuye la cantidad de un item en el carrito
   * @param {number} id - ID del item
   */
  const decreaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  /**
   * Elimina un item del carrito
   * @param {number} id - ID del item a eliminar
   */
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  /**
   * Calcula el total del carrito
   * @returns {number} Total calculado
   */
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  /**
   * Finaliza la compra
   */
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    
    alert(`🎉 ¡Gracias por tu compra!\n\nTotal: ${formatPrice(calculateTotal())}\n\nTu pedido ha sido enviado a la cocina.`);
    setCart([]);
  };

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header d-flex justify-content-between align-items-center p-3 border-bottom">
          <h4 className="mb-0">🛒 Carrito de Compras</h4>
          <button 
            className="btn btn-close" 
            onClick={onClose}
            aria-label="Cerrar"
          ></button>
        </div>
        
        <div className="cart-body p-3">
          {cart.length > 0 ? (
            <div>
              <ul className="list-group mb-3">
                {cart.map((item) => (
                  <li 
                    key={item.id} 
                    className="list-group-item d-flex justify-content-between align-items-center cart-item"
                  >
                    <div className="d-flex align-items-center">
                      <span className="me-3 fw-bold">{item.name}</span>
                      <span className="text-muted">
                        {formatPrice(item.price)} c/u
                      </span>
                    </div>
                    
                    <div className="d-flex align-items-center">
                      <button 
                        className="btn btn-outline-danger btn-sm me-2" 
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2 fw-bold">{item.quantity}</span>
                      <button 
                        className="btn btn-outline-success btn-sm me-3" 
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                      <button 
                        className="btn btn-outline-dark btn-sm" 
                        onClick={() => removeItem(item.id)}
                        title="Eliminar"
                      >
                        🗑️
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="cart-total border-top pt-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fs-5 fw-bold">Total:</span>
                  <span className="fs-4 fw-bold text-primary">
                    {formatPrice(calculateTotal())}
                  </span>
                </div>
                
                <div className="d-grid gap-2">
                  <button 
                    className="btn btn-primary btn-lg" 
                    onClick={handleCheckout}
                  >
                    🛵 Realizar Pedido
                  </button>
                  <button 
                    className="btn btn-outline-secondary" 
                    onClick={onClose}
                  >
                    Continuar Comprando
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-5">
              <p className="text-muted fs-4 mb-3">🛒</p>
              <p className="text-muted mb-3">El carrito está vacío</p>
              <button 
                className="btn btn-primary" 
                onClick={onClose}
              >
                Ver Menú
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Definición de PropTypes para validación de propiedades
 */
Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Cart;
