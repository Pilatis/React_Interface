import './App.scss';
import { ArrowIcon } from './components/arrow-icon';
import { Logo } from './components/logo';



function App() {
  return (
    <main>
      <header className="header-container">
        <img className="logo-img" src="pilatis.PNG"  />
          <nav className="menu-options">
             <a>Oque nós oferecemos</a>
             <a>Como funciona</a>
             <a>Portifólio</a>
          </nav>
           <button>
           
            Contate-nos
           <ArrowIcon />
          
           </button>
           
      </header>
      <div className="content-container">
         <div className="heading-container">
           <h2>Vamos crescer </h2>
           <h2>sua presença social.</h2>
         </div>
           <div className="buble target">🎯</div>
           <div className="buble shopp">🛍️</div>
           <div className='buble rocket'>🚀</div>
           <div className='buble fire'>🔥</div>
      </div>
    </main>
  )
}

export default App;
