# reclame-aqui-ufcg
Plataforma web para que alunos e funcionários da UFCG possam expressar suas reclamações sobre a instituição. O intuito é: prover informações que podem ser úteis para os gestores, na solução de problemas da instituição.

### Usuários
- Teremos usuários comuns (funcionários, alunos e alunas), estes poderão entrar na plataforma e fazer suas reclamações. 
- Teremos o usuário gestor, ele poderá entrar na plaforma, em uma visão diferente, e ver de forma resumida as reclamações. Ter visualizações que ajudem ele a entender melhor as reclamações e poder gerenciar as reclamações. 

### Funcionalidades

- Cadastrar reclamação
- Vizualizar reclamações
- Filtrar reclamações de acordo com categorias
- Dar like/dislike em reclamações
- Reportar reclamação
- Apagar reclamação (usuário gestor) 
- Visualizar resumos (gráficos) sobre reclamações (usuário gestor)

### Telas

- Principal: aparecem as últimas reclamações feitas além de ter um espaço para o fazer novas reclamações
- Top Reclamações: mostrar as reclamações com maior relevância (mais likes)
- Admin: é possível fazer ações sobre reclamações como apagar, mediante a login
- Login: login do usuário admin
- Sobre: Resumo sobre a aplicação


### Como rodar?
* É necessário ter o node instalado

#### Back-end
Para executar o back-end você deve entrar no diretório  ** ./server ** e executar os comandos:
	``` 
	$ npm install
	$ DEBUG=reclame-aqui-ufcg:* npm start
	```
#### Front-end
Para executar o front-end você deve entrar no diretório  ** ./client ** e executar os comandos:
	```
	$ npm install
	$ npm start
    ``` 
