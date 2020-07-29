import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pirapora from './pages/Home';

import CadastroVideo from './pages/cadastro/Video'

/*
Switch e Route fazem o trabalho do if do navegador p verificar
se o window.location.href esta naquela url
 */
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CadastroCategoria from './pages/cadastro/Categoria';

function TesteCadastroVideo(){
	return (
		<div>
			Página de cadastro de video
		</div>
	)
}
const NotFoundVideo = () => {
	return (
		<div>
			Página de 404
		</div>
	)
}

/*
usar a opção exact p procurar por aquela rota exata
o componente NotFoundVideo será chamado caso n exista a rota 
procurada

tudo é componente no Reac e todo componente no react 
é uma função e por isso pode ser usado
o codigo component={() => (<div>Pagina teste</div>)}
*/
ReactDOM.render(
  <BrowserRouter>
		<Switch>
			<Route path="/" exact component={Pirapora} />
			<Route path="/cad/video" component={TesteCadastroVideo} />							
			<Route path="/cadastro/video" component={CadastroVideo} />							
			<Route path="/cadastro/categoria" component={CadastroCategoria} />							
			<Route path="/teste" component={() => (<div>Pagina teste</div>)} />
			<Route component={NotFoundVideo} />
		</Switch>		
  </BrowserRouter>,
  document.getElementById('root')
);