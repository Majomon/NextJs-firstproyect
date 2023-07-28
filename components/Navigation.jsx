import Link from "next/link"; // Con esto evito que cada ves que navegue tenga que recargar la página

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">
          NextJs - First proyect
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" href="/about">
              About
            </Link>
            <Link className="nav-link" href="/services">
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
