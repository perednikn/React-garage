/* function NavBar () {
    return <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
    <a ClassName="navbar-brand" href="#">ALLANAMIENTO</a>
    <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon"></span>
    </button>
  
    <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul ClassName="navbar-nav mr-auto">
        <li ClassName="nav-item active">
          <a ClassName="nav-link" href="#">Inicio <span ClassName="sr-only">(current)</span></a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link" href="#">Cómo comprar</a>
        </li>
        <li ClassName="nav-item dropdown">
          <a ClassName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div ClassName="dropdown-menu" aria-labelledby="navbarDropdown">
            <a ClassName="dropdown-item" href="#">Action</a>
            <a ClassName="dropdown-item" href="#">Another action</a>
            <div ClassName="dropdown-divider"></div>
            <a ClassName="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form ClassName="form-inline my-2 my-lg-0">
        <input ClassName="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button ClassName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
        </form>
        </div>
        </nav>
} */


function NavBar () {
  return <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Venta de Garage</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link disableds" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Electrónicos</a></li>
            <li><a class="dropdown-item" href="#">Deco</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Ofertas</a></li>
            <li><a class="dropdown-item" href="#">Gemas</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Dónde estamos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Estacioná</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Cuánto queres gastar?" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Randomize</button>
      </form>
    </div>
  </div>
</nav>
}
export default NavBar;