import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../pizzas';

/**
 * Componente Home
 * Página principal que muestra el catálogo de pizzas
 */
const Home = () => {
  return (
    <div className="container fade-in">
      <Header />
      
      <section className="mb-5">
        <h2 className="text-center mb-4 fw-bold text-uppercase">
          Nuestra Carta de Pizzas
        </h2>
        <p className="text-center text-muted mb-4">
          Elaboradas con los mejores ingredientes y amor 💚
        </p>
        
        <div className="row">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
