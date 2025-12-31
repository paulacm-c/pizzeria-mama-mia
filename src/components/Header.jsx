/**
 * Componente Header
 * Encabezado principal de la página de inicio
 * Muestra el título y descripción de la pizzería
 */
const Header = () => {
  return (
    <header className="text-center my-5 py-4 bg-light rounded-3 mb-4">
      <div className="container">
        <h1 className="display-4 fw-bold text-uppercase mb-3">
          🍕 Bienvenido a Pizzería Mamma Mia!
        </h1>
        <p className="lead text-muted mb-0">
          Las mejores pizzas artesanales, hechas con amor y los ingredientes más frescos.
          <br />
          <span className="text-primary fw-bold">
            ¡Ordena ahora y disfruta de auténtico sabor italiano!
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
  