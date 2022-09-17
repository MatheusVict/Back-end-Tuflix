"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
const filmes = [
    {
        photo: 'https://cineclick-static.flixmedia.cloud/1280/69/1080x1620_1604410351.jpg',
        title: 'Coraline e o Mundo Secreto',
        description: 'Enquanto explora sua nova casa à noite, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Todos têm botões no lugar dos olhos, os pais são carinhosos e os sonhos de Coraline viram realidade por lá. Ela se encanta com essa descoberta, mas logo percebe que segredos estranhos estão em ação: uma outra mãe e o resto de sua família tentam mantê-la eternamente nesse mundo paralelo.',
        aprove: 9.1,
        year: 2009,
        alt: 'Cartaz coraline o mundo secreto',
        bilheteria: 5,
        duracao: 100,
        lucro: 3
    },
    {
        photo: 'https://jpimg.com.br/uploads/2017/06/1457191292-guardioes-da-galaxia-vol-2-ganha-cartaz-oitentista-para-imax.jpg',
        title: 'Guardiões da Galáxia 2',
        alt: 'Cartaz guardiões 2',
        aprove: 8.7,
        description: 'O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia.',
        year: 2014,
        bilheteria: 772.8,
        duracao: 137,
        lucro: 783
    },
    {
        photo: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/08/73/20128777.jpg',
        title: 'Speed Racer',
        alt: 'Capa speed racer',
        description: 'Nascido em um família de pilotos de carros, Speed Racer é uma estrelas das corridas. Ao negar uma oferta lucrativa do empresário da Royalton Indústrias, Speed o deixa furioso e acaba descobrindo a corrupção dos patrocinadores em corridas. Para salvar os negócios da família, Speed participa do mesmo rally que matou seu irmão para desafiar um magnata corrupto.',
        aprove: 7.3,
        year: 2008,
        bilheteria: 93.9,
        duracao: 175,
        lucro: 20
    },
    {
        photo: 'https://br.web.img3.acsta.net/pictures/20/02/03/15/22/4954456.jpg',
        alt: 'Cartaz minions 2 a origem de Gru',
        aprove: 9,
        description: 'Nos anos 1970, o jovem Gru tenta entrar para um time de supervilões, mas a entrevista é desastrosa e ele e seus minions acabam fugindo do grupo de mal-feitores.',
        title: 'Minions 2: A Origem de Gru',
        year: 2022,
        bilheteria: 216.9,
        duracao: 90,
        lucro: 100
    },
    {
        photo: 'https://images-na.ssl-images-amazon.com/images/I/81qCIC-v0lL.jpg',
        alt: 'Cartaz lightyear',
        title: 'Lightyear',
        description: 'Nesta aventura de ficção científica cheia de ação, conhecemos a origem definitiva de Buzz Lightyear (voz de Chris Evans), o herói que inspirou o brinquedo. “Lightyear” segue o lendário Space Ranger em uma aventura intergaláctica ao lado de um grupo de recrutas ambiciosos (vozes de Keke Palmer, Dale Soules e Taika Waititi), e seu companheiro robô Sox (voz de Peter Sohn). Também se juntam ao elenco Uzo Aduba, James Brolin, Mary McDonald-Lewis, Efren Ramirez e Isiah Whitlock Jr. Dirigido por Angus MacLane (co-diretor de “Procurando Dory”) e produzido por Galyn Susman, “Lightyear” estreia em 16 de junho de 2022, exclusivamente nos cinemas',
        aprove: 5.5,
        year: 2022,
        bilheteria: 226.2,
        duracao: 105,
        lucro: 26.2
    },
    {
        photo: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/18cf905dbf24a2179a168a0fd44c7c6535e7adf0aeef77699c078ab986eeaadb._RI_V_TTW_.jpg',
        alt: 'Cartaz Velozes e Furiosos: Desafio em Tóquio',
        title: 'Velozes e Furiosos: Desafio em Tóquio',
        description: 'Sean Boswell é um piloto de rua que desafia seu rival e bate o carro no fim da corrida. Então, Sean decide se mudar para o Japão em companhia de seu pai para evitar a prisão nos Estados Unidos, já que os rachas não são nada populares com as autoridades. Em Tóquio, ele começa a aprender um excitante e perigoso estilo novo de competir nas ruas. Só que os riscos ficam ainda mais altos quando Sean decide competir com o campeão local e acaba se apaixonando pela namorada dele.',
        aprove: 8.6,
        year: 2006,
        bilheteria: 159,
        duracao: 104,
        lucro: 84
    },
    {
        photo: 'https://poltronanerd.com.br/wp-content/uploads/2022/03/poltrona-the-batman-poster.jpg',
        alt: 'Cartaz The batman',
        title: 'The Batman',
        description: 'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.',
        aprove: 8.3,
        year: 2022,
        bilheteria: 770.8,
        duracao: 176,
        lucro: 250
    },
    {
        photo: 'https://cinegarimpo.com.br/wp/content/uploads/2011/08/cinegarimpo_planeta-dos-macacos-a-origem.jpg',
        alt: 'Cartaz Planeta dos macacos: A origem',
        title: 'Planeta dos macacos: A origem',
        description: 'Um chimpanzé de laboratório desenvolve inteligência e emoções humanas e uma batalha épica surge para determinar qual espécie será dominante no planeta Terra.',
        aprove: 8.4,
        year: 2011,
        bilheteria: 481.8,
        duracao: 105,
        lucro: 300
    },
    {
        photo: 'https://images-na.ssl-images-amazon.com/images/I/71Jh+sQHEaL.jpg',
        alt: 'Cartaz O Diabo Veste Prada',
        title: 'O Diabo Veste Prada',
        description: 'Andy, uma moça recém-formada e com grandes sonhos, vai trabalhar na conceituada revista de moda Runway; sua função é ser assistente da diabólica Miranda Priestly. Andy, que não se sente bem no ambiente tenso de trabalho, questiona sua habilidade em continuar como assistente de Miranda.',
        aprove: 9.1,
        year: 2006,
        bilheteria: 326.7,
        duracao: 109,
        lucro: 50
    },
    {
        photo: 'https://br.web.img3.acsta.net/medias/nmedia/18/97/52/82/20534159.jpg',
        alt: 'Cartaz As Branquelas',
        title: 'As Branquelas',
        description: 'Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas. Como castigo, eles são forçados a escoltar um par de socialites nos Hamptons. Porém, quando as meninas descobrem o plano da agência, se recusam a ir. Sem opções, Marcus e Kevin decidem posar como as irmãs, transformando-se de homens afro-americanos em um par de loiras.',
        aprove: 9.2,
        year: 2004,
        bilheteria: 113.1,
        duracao: 109,
        lucro: 50
    },
    {
        photo: 'https://oretalho.com.br/wp-content/uploads/2022/02/2022-02-14-foto-cinema-red-4.jpg',
        alt: 'Cartaz red:crescer é uma fera',
        title: 'red:crescer é uma fera',
        description: 'Uma menina de 13 anos começa a se transformar em um panda vermelho gigante sempre que fica animada.',
        aprove: 7.8,
        year: 2022,
        bilheteria: 20.1,
        duracao: 100,
        lucro: 10
    },
    {
        photo: 'https://m.media-amazon.com/images/I/811lT7khIrL._AC_SL1500_.jpg',
        alt: 'Cartaz titanic',
        title: 'Titanic',
        description: 'Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica jornada do Titanic, em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.',
        aprove: 9.4,
        year: 1997,
        bilheteria: 2.20259631,
        duracao: 194,
        lucro: 2.159876328
    },
    {
        photo: 'https://br.web.img2.acsta.net/pictures/22/06/24/09/47/2430937.jpg',
        alt: 'Cartaz DC Liga dos Superpets',
        title: 'DC Liga dos Superpets',
        description: 'Krypto, o Supercão e Superman são melhores amigos e inseparáveis, compartilham os mesmos superpoderes e lutam contra o crime lado a lado em Metrópolis. No entanto, quando o Homem de Aço e o resto da Liga da Justiça são sequestrados, Krypto deve convencer um grupo desorganizado de animais a dominar seus próprios poderes recém-descobertos para uma missão de resgate.',
        aprove: 7.3,
        year: 2022,
        bilheteria: 50,
        duracao: 105,
        lucro: 20
    },
    {
        photo: 'https://sm.ign.com/ign_br/screenshot/default/pinoquio-disney-live-action_xayh.jpg',
        alt: 'Cartaz Pinóquio',
        title: 'Pinóquio',
        description: 'Pinóquio é um filme dramático de fantasia musical americano dirigido por Robert Zemeckis a partir de um roteiro de Zemeckis e Chris Weitz, e produzido pela Walt Disney Pictures',
        aprove: 6.1,
        year: 2022,
        bilheteria: 105,
        duracao: 105,
        lucro: 50
    },
    {
        photo: 'https://br.web.img3.acsta.net/pictures/22/07/26/09/26/3165581.jpg',
        alt: 'Cartaz De Férias da Família',
        title: 'De Férias da Família',
        description: 'De férias sem a família pela primeira vez em anos, um pai dedicado parte para o aniversário alucinante de um velho amigo festeiro.',
        aprove: 6.4,
        year: 2022,
        bilheteria: 10,
        duracao: 101,
        lucro: 2
    },
    {
        photo: 'https://ingresso-a.akamaihd.net/b2b/production/uploads/movie/mobile_bg/199/MovieID_Mobile.jpg',
        alt: 'Cartaz Top Gun',
        title: 'Top Gun',
        description: 'Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete "Maverick" Mitchell está de volta, rompendo os limites como um piloto de testes corajoso. No mundo contemporâneo das guerras tecnológicas, Maverick enfrenta drones e prova que o fator humano ainda é essencial',
        aprove: 8.8,
        year: 2022,
        bilheteria: 1.45402369323,
        duracao: 5,
        lucro: 5
    },
    {
        photo: 'https://s2.glbimg.com/PpDmZjL1nlvg7CWwPmAisgC5HLo=/0x0:648x1152/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/N/F/BSl0iaS8OB7QHAbKkPxQ/nope.jpeg',
        alt: 'Cartaz Não! Não Olhe!',
        title: 'Não Não olher',
        description: '"O que é um mau milagre?" O vencedor de um Óscar, Jordan Peele causou disrupção e redefiniu o género do terror moderno com "Foge" e "Nós". Agora, Peele reimagina o filme de verão com um novo pesadelo pop: o épico expansivo de terror "Nope".O filme volta a reunir Peele e o vencedor de um Óscar Daniel Kaluuya ("Foge", "Judas e o Messias Negro"), juntando Keke Palmer ("Ousadas e Golpistas") e Steven Yeun ("Minari", "Okja"), ator já nomeado para um Óscar , no papel de residentes de uma localidade solitária no interior da Califórnia, que testemunham uma espantosa e arrepiante descoberta.',
        aprove: 7.5,
        year: 2022,
        bilheteria: 100,
        duracao: 135,
        lucro: 5
    },
    {
        photo: 'https://metagalaxia.com.br/wp-content/uploads/2018/09/A-Freira-The-Nun-2018-Resenha-Poster-1.jpg',
        alt: 'Cartaz a freira',
        title: 'A Freira',
        description: 'Presa em um convento na Romênia, uma freira comete suicídio. Para investigar o caso, o Vaticano envia um padre assombrado e uma noviça prestes a se tornar freira. Arriscando suas vidas, a fé e até suas almas, os dois descobrem um segredo profano e se confrontam com uma força do mal que toma a forma de uma freira demoníaca e transforma o convento em um campo de batalha.',
        aprove: 7.8,
        year: 2018,
        bilheteria: 365.6,
        duracao: 96,
        lucro: 343
    },
    {
        photo: 'https://br.web.img3.acsta.net/pictures/14/06/03/21/11/122582.jpg',
        alt: 'Cartaz Guardiões Da Galáxia',
        title: 'Guardiões Da Galáxia',
        description: 'O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia.',
        aprove: 8.8,
        year: 2014,
        bilheteria: 772.8,
        duracao: 122,
        lucro: 500
    },
    {
        photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg',
        alt: 'Cartaz Blade Runner 2049',
        title: 'Blade Runner 2049',
        description: 'Após descobrir um segredo que ameaça o que resta da sociedade, um novo policial parte em busca de Rick Deckard, que está desaparecido há 30 anos.',
        aprove: 8.3,
        year: 2017,
        bilheteria: 259.3,
        duracao: 163,
        lucro: 153
    },
    {
        photo: 'https://br.web.img3.acsta.net/pictures/210/235/21023527_20130730205450537.jpg',
        alt: 'Cartaz Rush no Limite da Emoção',
        title: 'Rush No Limite Da Emoção',
        description: 'O mundo sexy e glamouroso da Fórmula 1 é mobilizado principalmente pela rivalidade existente entre os pilotos Niki Lauda e James Hunt nos anos 1970. Eles possuíam características bem distintas: enquanto Lauda era metódico e brilhante, Hunt adotava um estilo mais despojado, típico de um playboy.',
        aprove: 8.9,
        year: 2013,
        bilheteria: 98.2,
        duracao: 123,
        lucro: 30
    }
];
/* {
        photo: '',
        alt: '',
        title: '',
        description: '',
        aprove: 5,
        year: 5,
        bilheteria: 5,
        duracao: 5,
        lucro: 5
    }
    */
route.get('/filmes/:title', (req, res) => {
    const { title } = req.params;
    const filmeAchado = filmes.find((filmeAchado) => filmeAchado.title === title);
    res.json(filmeAchado);
});
route.get('/filmes', (req, res) => {
    res.json(filmes);
});
exports.default = route;
