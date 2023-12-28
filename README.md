# Desafio técnico Pokémon TCG - (Angular)

Olá, bem vindo ao repositório deste projeto que simula uma parte de um jogo de cartas "TCG" - "**trading card games**" baseado no animê Pokémon.

# Tecnologias utilizadas: 

Framework Angular 16, Angular Material(UI), Tailwindcss(CSS-inline) e Sweet Alerts(Alerts)

# Requisitos para compilar o projeto
O projeto atualizado se encontra na branch **main**, voce pode realizar o download através do
``git clone https://github.com/humbertoconstantinong/pokemontcg.git``.

Assim que baixar o projeto, abra um terminal na pasta do mesmo e envie o seguinte comando:
``npm install`` e logo após que concluir, digite o comando ``npm install -g json-server``

Este último, é responsável por armazenar localmente os decks gravados pelo usuário, simulando uma API.
Para iniciar o projeto angular, se dirija até a raiz do projeto e  rode ``npm start`` ou ``ng serve``, fica a sua preferencia e ambos tem o mesmo resultado.
Para finalizar as configurações, entre no diretório  ``/apifake``pelo terminal e digite ``json-server --watch db.json``.
Nossa API-FAKE estará ligada e  rodando na porta 3000.


## Criar Deck

Ao acessar a página inicial ``localhost:4200/`` você vai se deparar com a seguinte tela:![Tela Inicial](https://i.imgur.com/PtUTDFd.png)
1- Ao clicar em "Criar Deck", o sistema vai carregar uma nova página e também 250 cards do Jogo, aguarde alguns segundos.  

![Escolher cartas](https://i.imgur.com/hUsqgee.png)

2 - Escolha as suas cartas para montar o seu deck, será necessário no mínimo 24 cartas e no máximo 60 para conseguir salvar, não esqueça de dá um nome ao deck.
3 - Navegue entre as setas para paginar as cartas, e sugir mais 250 cartas novas.
4 - Se necessário, utilize o filtro para pesquisar o nome de alguma carta (PRESSIONE ENTER PARA EFETUAR A PESQUISA).
5 - Não é possível adicionar mais de 4 cartas com o mesmo nome, seguindo as regras do jogo.

**Para usar o filtro, pesquise por um nome do pokémon EX: "Charizard", caso queira pesquisar somente uma parte do nome, acrescente um " * " no fim da palavra EX: "Char * " é preciso fazer isso pois a [API Oficial](https://docs.pokemontcg.io/) do Pokémon, não possui um endpoint específico para uma pesquisa incompleta.

![Alerta de deck criado](https://i.imgur.com/hgE9JjK.png)

Depois que escolher as melhores cartas e clicar em salvar deck, o alerta confirmando a criação será exibido, e te levará para a página onde estão todos os seus decks.

![Seus decks](https://i.imgur.com/xjYUJh0.png)


Clique em algum deck para vizualizar seus detalhes   
![Detalhes do deck](https://i.imgur.com/tHp9u4t.png)


Scroll para baixo se quiser ver todas as cartas e apagar o deck  
![Apagar deck](https://i.imgur.com/6vMa3Dz.png)  


Vídeo demostrando o funcionamento - https://www.youtube.com/watch?v=LkWZzyc7VpA

