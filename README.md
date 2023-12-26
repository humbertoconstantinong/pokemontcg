# Desafio técnico Pokémon TCG - (Angular)

Olá, bem vindo ao repositório deste projeto que simula uma parte de um jogo de cartas "TCG" - "**trading card games**" baseado no animê Pokémon.


# Requisitos para compilar o projeto
O projeto atualizado se encontra na branch **main**, voce pode realizar o download através do
``git clone https://github.com/humbertoconstantinong/pokemontcg.git``.
Assim que baixar o projeto, abra um terminal na pasta do mesmo e envie o seguinte comando:
``npm install`` e logo após que concluir, digite o comando ``npm install -g json-server.``
Este último, é responsável por armazenar localmente os decks gravados pelo usuário, simulando uma API.
Para iniciar o projeto angular, se dirija até a raiz do projeto e  rode ``npm start`` ou ``ng serve``, fica a sua preferencia e ambos tem o mesmo resultado.
Para finalizar as configurações, entre no diretório  ``/apifake``pelo terminal e digite ``json-server --watch db.json``.
Nossa API-FAKE estará ligada e  rodando na porta 3000.


## Criar Deck

Ao acessar a página inicial ``localhost:4200/`` você vai se deparar com a seguinte tela:![Tela Inicial](https://i.imgur.com/PtUTDFd.png)
1- Ao clicar em "Criar Deck", o sistema vai carregar uma nova página e também 250 cards do Jogo, aguarde alguns segundos.
![Escolher cartas](https://i.imgur.com/V8qHXv5.png)
2 - Escolha as suas cartas para montar o seu deck, será necessário no mínimo 24 cartas e no máximo 60 para conseguir salvar, não esqueça de dá um nome ao deck.
3 - Navegue entre as setas para paginar as cartas, e sugir mais 250 cartas novas.
4 - Se necessário, utilize o filtro para pesquisar o nome de alguma carta.
5 - Não é possível adicionar mais de 4 cartas com o mesmo nome, seguindo as regras do jogo.

**Sei que as cartas estão quadruplicadas, deixei assim propositalmente, pois a [API Oficial](https://docs.pokemontcg.io/) do Pokémon, não trás os dados separados por colunas. e sim uma única coluna com todos os dados. tentei por muito tempo corrigir pelo frontend, mas não foi possível por questão de tempo. E se eu deixasse somente uma coluna da tabela, a experiência do usuário não iria ficar tão agradável, peço desculpas desde já. Em breve corrigirei.
![Alerta de deck criado](https://i.imgur.com/hgE9JjK.png)
Depois que escolher as melhores cartas e clicar em salvar deck, o alerta confirmando a criação será exibido, e te levará para a página onde estão todos os seus decks.
![Seus decks](https://i.imgur.com/3re0M84.png)
