import './App.css'
import { handleCampos } from './service/Validation/Validation'

function App() {

  return (
    <>
     <main>
      <section>
        <h1>Atividade 1</h1>
        <span>Requisitos dos campos:</span>
        <p>Nome: deve possuir no minimo 5 caracteres e no maximo 20 caracteres</p>
        <p>Email: deve ser um email valido</p>
        <p>CPF: deve possuir apenas numeros com 11 digitos</p>
        <p>Idade: deve possuir uma idade entre 16 e 30 anos</p>
      </section>
      <section>
        <h2>Campos para validação:</h2>
        <div>
          <label htmlFor='nome'>Nome:</label>
          <input type='text' id='nome'></input>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email'></input>
        </div>
        <div>
          <label htmlFor='cpf'>CPF:</label>
          <input type='text' id='cpf'></input>
        </div>
        <div>
          <label htmlFor='idade'>Idade:</label>
          <input type='number' id='idade'></input>
        </div>
        <div>
          <button onClick={handleCampos}>Validar</button>
        </div>
        <div id='notify'>
        </div>
      </section>
     </main>
    </>
  )
}

export default App
