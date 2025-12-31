/**
 * Componente Footer
 * Pie de página de la aplicación
 * Muestra información de copyright y datos de la empresa
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <h5 className="fw-bold">🍕 Pizzería Mamma Mia!</h5>
            <p className="mb-0 text-muted">
              Las mejores pizzas de la ciudad desde 2020
            </p>
          </div>
          
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <p className="mb-0">
              © {currentYear} - Pizzería Mamma Mia! - Todos los derechos reservados
            </p>
            <small className="text-muted">
              Desarrollado con ❤️ y React
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;