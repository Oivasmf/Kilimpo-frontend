# Kilimpo

Este documento foi escrito considerando que o servidor back-end já está instalado e configurado. Caso contrário, acesse https://github.com/Oivasmf/Kilimpo-frontend.git, abra o README e siga o passo-a-passo.

1 Instalar o utilitário create-react-app
	sudo npm install -g create-react-app
2 Criar o projeto do front-end no diretório compartilhado utilizando o create-react-app
	cd ~/Kilimpo
	npx create-react-app Kilimpo-frontend
3 Instalar pacotes JavaScript que serão utilizados no front-end
	cd ~/KiLimpo/Kilimpo-frontend
	npm install react-router-dom express-validator axios
4 Clonar o projeto e permitir overwrite dos arquivos necessários.
5 Acesse o diretório components, localizado com
	cd ~/KiLimpo/Kilimpo-frontend/src/components
6 O arquivo form-kilimpo.js contém, na 13ª linha, o IP de conexão com o back-end, bem como a porta utilizada por ele. Configure de acordo com o IP utilizado por sua máquina e a porta que foi liberada para o back-end. (ATENÇÃO: modifique o IP e porta, mas mantenha /kilimpo ao final, assim como veio como padrão).
7 O servidor front-end utiliza por padrão a porta 3000, que também deve ser liberada.
8 A partir de qualquer diretório, instale o React-bootstrap
	npm install react-bootstrap bootstrap
9 Para execução correta do programa, execute simultaneamente o servidor do front-end (configurado acima) e o servidor do back-end. 

EXECUÇÃO DO FRONT-END:
	cd ~/KiLimpo/Kilimpo-frontend
	yarn start

EXECUÇÃO DO BACK-END
	cd ~/KiLimpo/Kilimpo-backend
	node server.js