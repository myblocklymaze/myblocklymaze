# MyBlocklyMaze

Este projeto é uma ferramenta para construir cenários e labirintos personalizados para o jogo Maze (Blockly Games).

## Começando

Baixe os arquivos deste repositório e execute o arquivo `mapper.html`. Nesta página você pode criar o seus próprios labirintos executando os seguintes passos:

* Selecione uma imagem de fundo (`jpg/png`) para o seu cenário no painel da direita e clique em `Atualizar`. A página mostrará a imagem escolhida sobreposta por uma grade.
* Ao clicar com o botão esquerdo nos espaços entre a grade você pode desenhar caminhos para o labirinto. Clicando em um espaço com um caminho já desenhado você escolhe o ponto de partida do seu labirinto e clicando em cima de um ponto de partida você escolhe o ponto de chegada. Por último, clicando no ponto de chegada você apaga o caminho deste espaço. Clicar com o botão direito executa o caminho inverso do que acabou de ser descrito.

```
Não esqueça de escolher 1 ponto de partida e 1 ponto de chegada para os seus labirintos!
```

* Você também pode criar vários labirintos o mesmo jogo clicando nos botões da barra de ferramentas no topo da página. No botão `+` você adiciona um novo labirinto para o jogo e no botão `-` você remove um labirinto. Os botões numerados funcionam como páginas e por eles você pode acessar cada um dos labirintos criados até o momento.

Ainda na barra de ferramentas, existe o botão `Salvar`. Ao clicá-lo, a ferramenta criará um arquivo ZIP contendo o jogo gerado (que inclui todos os labirintos) e você será questionado se deseja baixá-lo.

## Executando o jogo gerado.

Para executar o jogo que você gerou, coloque o arquivo ZIP baixado na pasta `blocklygames` e extraia o conteúdo na mesma pasta. Após substituir os arquivos necessários, é só executar o arquivo `index.html` presente nessa pasta e clicar no ícone com o título `Maze`.

## Construído com

* [Blockly Games](https://blockly-games.appspot.com/) - Jogos educacionais que incluem o jogo `Maze`, utilizado como base para este projeto.
* [Blockly](https://developers.google.com/blockly/) - Dependência do Blockly Games.
* [JSZip](https://stuk.github.io/jszip/) - Usado para gerar o arquivo ZIP.
* [FileSaver](https://github.com/eligrey/FileSaver.js/) - Usado para salvar os arquivos.

## Autor

**Guilherme Pompeu Bastos** - orientado pela profª Andrea Schwertner Charão.