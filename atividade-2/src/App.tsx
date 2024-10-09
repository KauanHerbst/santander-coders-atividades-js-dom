import './App.css'
import { toggle } from './service/service'

export default function App() {
  return (
    <>
        <section>
          <h1>Atividade 2 - Santander Coders</h1>
          <div>
            <img id="lampadaImage" src="/src/assets/lampadaDesligada.jpg" />
          </div>
          <button id='btn-toggle' value={0} onClick={toggle}>Ligar/Desligar</button>
        </section>
    </>
  )
}


