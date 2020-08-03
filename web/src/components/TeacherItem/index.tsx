import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
					alt="Diego Fernandes"
				/>
				<div>
					<strong>Diego Fernandes</strong>
					<span>Química</span>
				</div>
			</header>

			<p>
				Entusiasta das melhores tecnologias de química avançada
				<br />
				<br />
				Apaixonado por explodir coisas em laboratório e por mudar a vida de
				pessoas através de experiência. Mais de 200.000 pessoas já passaram por
				uma das minhas explosões
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$ 80,00</strong>
				</p>
				<button>
					<img src={whatsAppIcon} alt="Whatsapp" />
					Entrar em contanto
				</button>
			</footer>
		</article>
	);
};

export default TeacherItem;
