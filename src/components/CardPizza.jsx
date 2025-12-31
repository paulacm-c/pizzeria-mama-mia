import PropTypes from 'prop-types';
import formatPrice from '../utils/formatPrice';

/**
 * Componente CardPizza
 * Tarjeta individual para mostrar cada pizza en el catálogo
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.id - Identificador único de la pizza
 * @param {string} props.name - Nombre de la pizza
 * @param {number} props.price - Precio de la pizza
 * @param {string[]} props.ingredients - Array de ingredientes
 * @param {string} props.img - URL de la imagen
 */
const CardPizza = ({ id, name, price, ingredients, img }) => {
  
  /**
   * Manejador para ver detalles de la pizza
   * @returns {void}
   */
  const handleViewMore = () => {
    alert(`🍕 Mostrando detalles de: ${name}\n\nIngredientes: ${ingredients.join(', ')}`);
  };

  /**
   * Manejador para añadir al carrito
   * @returns {void}
   */
  const handleAddToCart = () => {
    alert(`✅ ${name} añadida al carrito!\n\nPrecio: ${formatPrice(price)}`);
  };

  return (
    <div className="col-md-4 mb-4 fade-in">
      <div className="card h-100 shadow-sm">
        <img 
          src={img} 
          className="card-img-top" 
          alt={`Pizza ${name}`}
        />
        <div className="card-body text-center d-flex flex-column">
          <h5 className="card-title fw-bold text-uppercase">{name}</h5>
          
          <p className="card-text flex-grow-1">
            <strong>Ingredientes:</strong>
            <br />
            <span className="text-muted">
              {ingredients.map((ingredient, index) => (
                <span key={index} className="badge bg-light text-dark me-1 mb-1 ingredient-badge">
                  {ingredient}
                </span>
              ))}
            </span>
          </p>
          
          <p className="card-text fw-bold fs-5 text-primary">
            {formatPrice(price)}
          </p>
          
          <div className="d-flex justify-content-center gap-2 mt-auto">
            <button 
              className="btn btn-outline-primary" 
              onClick={handleViewMore}
            >
              Ver más
            </button>
            <button 
              className="btn btn-primary" 
              onClick={handleAddToCart}
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Definición de PropTypes para validación de propiedades
 */
CardPizza.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPizza;
