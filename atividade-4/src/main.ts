import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Atividade 4 - Santander Coders</h1>
    <div>
      <label htmlFor='nome'>Nome:</label>
      <input type='text' id='nome'></input>
    </div>
    <div>
      <label htmlFor='email'>Email:</label>
      <input type='email' id='email'></input>
    </div>
    <div>
      <label htmlFor='nascimento'>Data de Nascimento:</label>
      <input type='date' id='nascimento'></input>
    </div>
    <div>
      <label htmlFor='cep'>CEP:</label>
      <input type='text' id='cep'></input>
    </div>
     <div>
      <label htmlFor='rua'>Rua:</label>
      <input type='text' id='rua'></input>
    </div>
     <div>
      <label htmlFor='cidade'>Cidade:</label>
      <input type='text' id='cidade'></input>
    </div>
    <div>
      <label htmlFor='estado'>Estado:</label>
      <input type='text' id='estado'></input>
    </div>
     <div>
      <label htmlFor='numero'>Numero:</label>
      <input type='text' id='numero'></input>
    </div>
    <div>
      <button id="btn" onClick={}>Enviar</button>
    </div>
  </div>
`
