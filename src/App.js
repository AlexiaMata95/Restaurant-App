import './App.css';
import logo from './logo-dried.png'
import nosotros from './nosotros.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='center-header'>
          <a href='#'className='link'>
            Menú
          </a>
          <img src={logo} alt='Logo' className='logo'></img>
          <a href={'/reservaciones'}className='link'>
            Reservaciones
            </a>
        </div>
      </header>
      <section className='jumbotron'>
        <div className='nosotros '>
          <img src={nosotros}></img>
          {/* <h1>Nosotros</h1>
          <p>Nos enorgullece ofrecer la experiencia culinaria más exquisita y refinada que pueda imaginar. Nuestra cecina es cuidadosamente seleccionada y curada por expertos en el arte de la carne, y cada bocado es una explosión de sabor y textura que deleitará sus sentidos.</p>
         */}</div>
      </section>
      <section className='informacion'>
        <h1>Cecina de Yecapixtla con sabor a hogar</h1>
        <p>Nuestro restaurante ha sido diseñado para crear un ambiente elegante y acogedor, donde cada detalle ha sido cuidadosamente pensado para ofrecerle una experiencia única y memorable. Desde el servicio excepcional hasta los ingredientes más frescos y de la más alta calidad, todo en nuestro restaurante ha sido diseñado para ofrecerle lo mejor de lo mejor.
        </p>
      </section>
    </div>
  );
}

export default App;
