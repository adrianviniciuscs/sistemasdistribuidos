import React from 'react';

// --- Ícones das Peças de Xadrez em SVG ---
// Para manter tudo em um único arquivo, os ícones são componentes React.

const KingIcon = () => (
	<svg width="60" height="60" viewBox="0 0 45 45" className="fill-current text-gray-200">
		<g fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M22.5 11.63V6M20 8h5" fill="none" strokeLinejoin="miter" />
			<path d="M22.5 25s4.5-7.5 3-10.5c0 0-1.5-3-3-3s-3 3-3 3c-1.5 3 3 10.5 3 10.5" strokeLinecap="butt" strokeLinejoin="miter" />
			<path d="M12.5 37c5.5-3 14.5-3 20 0v-7s-4.5-4-10-4-10 4-10 4v7z" />
			<path d="M12.5 30c5.5-3 14.5-3 20 0" fill="none" />
			<path d="M12.5 33.5c5.5-3 14.5-3 20 0" fill="none" />
			<path d="M12.5 37c5.5-3 14.5-3 20 0" fill="none" />
		</g>
	</svg>
);

const QueenIcon = () => (
	<svg width="60" height="60" viewBox="0 0 45 45" className="fill-current text-gray-200">
		<g fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm11.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm11.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm11.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM22.5 11.5L6 13l3.5 13.5h20L34 13l-11.5-1.5z" />
			<path d="M6 13s2 1.5 16.5 1.5S39 13 39 13" fill="none" />
			<path d="M11 39h23" fill="none" strokeLinecap="butt" />
			<path d="M12.5 32c5.5-3 14.5-3 20 0v7s-4.5-4-10-4-10 4-10 4v-7z" />
		</g>
	</svg>
);

const RookIcon = () => (
	<svg width="60" height="60" viewBox="0 0 45 45" className="fill-current text-gray-200">
		<g fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" strokeLinecap="butt" />
			<path d="M34 14l-3 3H14l-3-3" />
			<path d="M31 17v12.5H14V17" />
			<path d="M31 29.5l1.5 2.5h-20l1.5-2.5" />
			<path d="M14 17h17" fill="none" />
		</g>
	</svg>
);

const BishopIcon = () => (
	<svg width="60" height="60" viewBox="0 0 45 45" className="fill-current text-gray-200">
		<g fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M9 36c3.39-.96 10.11-2.49 27 0" fill="none" />
			<path d="M15 32c2.5 2.5 12.5 2.5 15 0" />
			<path d="M22.5 32.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
			<path d="M22.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
			<path d="M17.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" transform="matrix(.7071 .7071 -.7071 .7071 18.5 -2.27)" />
			<path d="M22.5 15c-1.5-1.5-2.5-3-2.5-3-1-1.5-1-3.5 0-5l-4-4-5 5c0 2 2.5 7 2.5 7s2.5 2.5 5 2.5 5-2.5 5-2.5z" />
			<path d="M22.5 15c1.5-1.5 2.5-3 2.5-3 1-1.5 1-3.5 0-5l4-4 5 5c0 2-2.5 7-2.5 7s-2.5 2.5-5 2.5-5-2.5-5-2.5z" />
		</g>
	</svg>
);

const KnightIcon = () => (
	<svg width="60" height="60" viewBox="0 0 45 45" className="fill-current text-gray-200">
		<g fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M22 10c10.5 1 11.5 8 11.5 10.5-2 1.5-10.5 1.5-11.5 0-1 3.5-4 10.5-4 10.5-1.5 2-3 2-3 2h-1.5s-1.5-1-1.5-2.5c0-2 1.5-2.5 1.5-2.5-2-1-2.5-4.5-2.5-4.5s-3-1.5-4-3.5c-1-2-1.5-4 0-6 .5-1 2.5-3 2.5-3S18 8 22 10z" />
			<path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12z" />
			<path d="M11 29s1-1 3-1 3 1 3 1" fill="none" />
		</g>
	</svg>
);

const PawnIcon = () => (
	<svg width="60" height="60" viewBox="0 0 45 45" className="fill-current text-gray-200">
		<g fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M22.5 9.5c2.21 0 4 1.79 4 4 0 2.21-1.79 4-4 4-2.21 0-4-1.79-4-4 0-2.21 1.79-4 4-4z" />
			<path d="M22.5 39.5c5.25 0 9.5-4.25 9.5-9.5V25H13v5c0 5.25 4.25 9.5 9.5 9.5z" />
			<path d="M20.5 25h4" fill="none" strokeLinejoin="miter" />
		</g>
	</svg>
);


// --- Componente Principal ---
export default function App() {
	const pieces = [
		{ name: 'Rei', icon: <KingIcon />, move: 'Move uma casa em qualquer direção.' },
		{ name: 'Dama', icon: <QueenIcon />, move: 'A mais poderosa. Move na vertical, horizontal e diagonal.' },
		{ name: 'Torre', icon: <RookIcon />, move: 'Move-se na vertical ou horizontal, quantas casas quiser.' },
		{ name: 'Bispo', icon: <BishopIcon />, move: 'Move-se na diagonal, sem limite de casas.' },
		{ name: 'Cavalo', icon: <KnightIcon />, move: 'Move-se em "L". É a única que pode pular sobre outras peças.' },
		{ name: 'Peão', icon: <PawnIcon />, move: 'Move uma casa para frente. Captura na diagonal.' },
	];

	return (
		<div className="bg-gray-900 text-gray-200 min-h-screen min-w-full flex flex-col font-sans p-6 md:p-8 select-none">
			{/* Cabeçalho */}
			<header className="text-center mb-6">
				<h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wider">Guia Rápido de Xadrez</h1>
				<p className="text-gray-400">Os fundamentos do jogo em um só lugar.</p>
			</header>

			{/* Conteúdo Principal */}
			<main className="flex-grow grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-5xl mx-auto w-full">
				{/* Sobre o Xadrez */}
				<div className="bg-gray-800/70 rounded-xl p-6 flex flex-col justify-center shadow-lg border border-gray-700">
					<h2 className="text-2xl font-bold text-white mb-3">O que é Xadrez?</h2>
					<p className="text-gray-300">
						O xadrez é um jogo de tabuleiro estratégico para dois jogadores. Considerado um esporte da mente, o objetivo é dar 'xeque-mate' no rei adversário, uma situação em que o rei está sob ataque e não tem movimentos legais para escapar.
					</p>
				</div>

				{/* Peças */}
				<div className="md:col-span-2 md:row-span-2 bg-gray-800/70 rounded-xl p-6 shadow-lg border border-gray-700">
					<h2 className="text-2xl font-bold text-white mb-4 text-center">As Peças e Seus Movimentos</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-full content-center">
						{pieces.map((piece) => (
							<div key={piece.name} className="bg-gray-900/60 rounded-lg p-4 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 hover:bg-gray-700/80 border border-gray-700 cursor-pointer">
								{piece.icon}
								<h3 className="font-semibold text-lg text-white mt-2">{piece.name}</h3>
								<p className="text-xs text-gray-400 leading-tight">{piece.move}</p>
							</div>
						))}
					</div>
				</div>

				{/* Regras Básicas */}
				<div className="bg-gray-800/70 rounded-xl p-6 flex flex-col justify-center shadow-lg border border-gray-700">
					<h2 className="text-2xl font-bold text-white mb-3">Conceitos Essenciais</h2>
					<ul className="space-y-3 text-gray-300">
						<li><strong className="text-yellow-400">Xeque-mate:</strong> O rei está ameaçado e não pode escapar. Fim de jogo.</li>
						<li><strong className="text-yellow-400">Afogamento:</strong> O jogador a mover não tem lances legais e seu rei não está em xeque. Resulta em empate.</li>
						<li><strong className="text-yellow-400">Roque:</strong> Movimento especial para proteger o rei e ativar a torre.</li>
						<li><strong className="text-yellow-400">Promoção:</strong> Quando um peão alcança a última fileira, ele pode ser promovido a qualquer outra peça (exceto rei).</li>
					</ul>
				</div>
			</main>
		</div>
	);
}