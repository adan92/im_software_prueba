/**
 * Componente que se encarga de representar la cabezera de la página
 */
const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="http://localhost:5173" className="navbar-brand">
              Aplicación de Manejo de personas
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
