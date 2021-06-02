import IconCart from './CartWidget.js'


function NavBar () {
  return <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><IconCart /></a>
    
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