import 'package:validaquero/models/template_model.dart';

List<Template> templatesList = [
  Template(
    id: 127,
    titulo: "Arquivos de produto",
    descricao: "Asperiores nobis facere quae ad blanditiis iusto. Vel praesentium excepturi qui laudantium. Ducimus dicta enim ut nobis possimus. Repellat explicabo velit recusandae ex expedita rerum. Quasi voluptatibus sed quisquam minima. Atque fuga molestiae necessitatibus culpa. Optio blanditiis iste. Autem eum vel officia fugit. Dolorum magnam provident excepturi ullam facilis id. Beatae cum adipisci magni debitis. In iure sequi distinctio animi aliquid. Unde aliquam facere fugit debitis et repudiandae enim. Ipsam dicta at quisquam consequatur. Nesciunt pariatur culpa atque nemo quo. Sit nam nesciunt porro enim consequatur quam. Delectus asperiores a minima totam reprehenderit. Exercitationem unde modi earum enim omnis culpa. Rerum animi tempora voluptatem tenetur sit nam. Sed accusantium distinctio quam atque a non. Nulla excepturi amet ipsa. Accusantium sit omnis illo voluptates. Velit reiciendis omnis esse atque deserunt. Tenetur maxime assumenda adipisci voluptates alias. Eveniet nulla quo repellat eaque. Blanditiis ex consequuntur quis blanditiis. Quos quaerat quisquam fugit dolorem quia. Natus unde officia sit veniam omnis. Aperiam id unde sed at ut nihil voluptates.",
    dataCriacao: "2023-11-19T18:21:57.960Z",
    quantidadeCampos: 2,
    campos: [
      Campo(
        nome: " item_descricao",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " descricao_valor",
        nulo: true,
        tipo: "int64"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Melissa da Paz",
      matricula: "40040",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 1,
        titulo: "concorrência negócios",
        dataCriacao: "2023-11-13T18:10:47.714Z",
        linhas: 54,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 607,
        titulo: "fusão cliente",
        dataCriacao: "2023-11-13T18:10:49.505Z",
        linhas: 47,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 780,
        titulo: "tendência qualidade",
        dataCriacao: "2023-11-13T18:10:49.976Z",
        linhas: 38,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 803,
        titulo: "Relatório de outubro",
        dataCriacao: "2023-11-14T20:23:41.324Z",
        linhas: 1000,
        aprovado: true,
        url: "https://storage.googleapis.com/projetovalidaquero/arquivos/principal/user-980192/127/1699993421.106657.xlsx",
        publico: true
      ),
      Arquivo(
        id: 804,
        titulo: "teste de erro",
        dataCriacao: "2023-11-14T20:24:58.412Z",
        linhas: 1000,
        aprovado: true,
        url: "https://storage.googleapis.com/projetovalidaquero/arquivos/temporario/user-980192/127/1699993498.219828.xlsx",
        publico: true
      ),
      Arquivo(
        id: 805,
        titulo: "inserindo float",
        dataCriacao: "2023-11-14T20:25:51.884Z",
        linhas: 1000,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 33,
    titulo: "Arquivos de liquidação",
    descricao: "Modi facere adipisci suscipit. Adipisci odio cum voluptate sunt rerum debitis. Reiciendis deleniti assumenda fugiat facere. Accusamus incidunt quasi ipsa. Reprehenderit corrupti commodi saepe amet maxime nam. Reiciendis eum eos. Laborum dignissimos error in. Asperiores nam optio earum quisquam. Atque velit dolorem tenetur hic aliquid commodi. Quia rem eligendi culpa corporis. Ullam facere corporis. Cum omnis laudantium. Nulla tempora autem. Impedit reprehenderit aut. Voluptatem in aspernatur autem. Laborum itaque placeat quis omnis. Dignissimos doloribus deserunt ad dignissimos. Sunt sunt corporis sed sapiente. Ipsa repudiandae minima voluptatem vel. Esse vero error sed vitae. Dolorem optio dolorem facere sequi. Accusantium doloribus perspiciatis. Quam dicta corporis iusto laboriosam sapiente. Nostrum totam inventore ipsam. Numquam sunt repellendus reprehenderit voluptates blanditiis. Quod in voluptates deserunt ex expedita. Corporis quasi enim neque beatae consectetur. Consequatur tempora alias sunt. Voluptate explicabo vitae voluptate atque voluptas nemo. Accusantium officiis quo quo. Non cumque sunt adipisci ex occaecati.",
    dataCriacao: "2023-09-19T18:21:54.091Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " descricao_custo",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " descricao_titulo",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " produto_titulo",
        nulo: true,
        tipo: "bool"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Bianca Cardoso",
      matricula: "48048",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 2,
        titulo: "gerenciamento fusão",
        dataCriacao: "2023-11-13T18:10:47.732Z",
        linhas: 55,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 188,
        titulo: "varejo estudo",
        dataCriacao: "2023-11-13T18:10:48.325Z",
        linhas: 95,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 317,
        titulo: "atendimento cliente",
        dataCriacao: "2023-11-13T18:10:48.708Z",
        linhas: 71,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 381,
        titulo: "varejo fornecimento",
        dataCriacao: "2023-11-13T18:10:48.896Z",
        linhas: 20,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 414,
        titulo: "receita lucro",
        dataCriacao: "2023-11-13T18:10:48.986Z",
        linhas: 10,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 397,
        titulo: "gerenciamento promoção",
        dataCriacao: "2023-11-13T18:10:48.941Z",
        linhas: 35,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 400,
        titulo: "lucratividade inovação",
        dataCriacao: "2023-11-13T18:10:48.950Z",
        linhas: 34,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 522,
        titulo: "receita crescimento",
        dataCriacao: "2023-11-13T18:10:49.274Z",
        linhas: 20,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 574,
        titulo: "liderança parceria",
        dataCriacao: "2023-11-13T18:10:49.412Z",
        linhas: 77,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
    ],
  ),
  Template(
    id: 64,
    titulo: "Template de risco",
    descricao: "Earum dicta voluptatibus. Ratione ipsum quaerat. Dolore deserunt neque facere vel. Quisquam debitis occaecati necessitatibus libero. Dignissimos sit nisi pariatur iusto. Eius ex magni. Repudiandae ex aliquid voluptatum molestiae ratione. Aliquid quae asperiores voluptate nostrum est corrupti. Perspiciatis unde eius eaque sapiente provident pariatur. Quibusdam delectus voluptatum nobis esse dicta porro dolores. Eligendi cumque quo tempore eum quidem sed. Ipsa illo rem esse quia eaque reiciendis. Blanditiis soluta tenetur minus alias et consequatur. Eveniet aliquid officiis reprehenderit magni adipisci fuga. Perferendis commodi est dignissimos perferendis excepturi. Repudiandae amet dolorem aperiam reiciendis nesciunt. Praesentium iste assumenda iusto voluptatem dolor. Accusamus vero non esse facilis ad. Corrupti expedita in ad accusamus eaque. Magni sit sapiente accusamus sunt quibusdam. Laudantium veniam dolor est. Eligendi hic sed odio sed eaque. Voluptates adipisci distinctio veritatis dolore ipsa quae. Quas temporibus blanditiis repellendus. Atque magni quos. Adipisci optio ipsam laudantium.",
    dataCriacao: "2023-10-19T18:22:00.283Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: " servico_preco",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " titulo",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: "preco",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: "empresa",
        nulo: true,
        tipo: "int64"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "João Miguel Duarte",
      matricula: "7007",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 3,
        titulo: "concorrência gerenciamento",
        dataCriacao: "2023-11-13T18:10:47.742Z",
        linhas: 95,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 5,
        titulo: "procedimento estrutura",
        dataCriacao: "2023-11-13T18:10:47.759Z",
        linhas: 31,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 374,
        titulo: "mercado procedimento",
        dataCriacao: "2023-11-13T18:10:48.873Z",
        linhas: 93,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 796,
        titulo: "finanças liderança",
        dataCriacao: "2023-11-13T18:10:50.017Z",
        linhas: 100,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 169,
    titulo: "Template de publicidade",
    descricao: "Illum minima facere ratione alias. Dolorum nemo ipsa magnam cumque praesentium culpa. Cupiditate alias eum ad quos. Neque sunt earum corrupti numquam totam. Laudantium repellat consequuntur qui voluptates. Eligendi sed voluptates facilis atque sed magnam cupiditate. Quisquam iste quos porro. Reprehenderit inventore culpa perspiciatis. Vel cumque possimus esse. Harum nesciunt enim soluta aut beatae ut. Quas in ex optio. Molestias esse ut quidem magni. Qui perferendis error nostrum placeat culpa consectetur dolorum. Quaerat excepturi eius eos. Saepe voluptatem earum est laboriosam. Numquam ratione atque qui debitis modi alias. Facere dicta explicabo voluptate. Amet deserunt blanditiis ipsum. Aliquid mollitia molestiae deleniti dolorum. Quibusdam quidem suscipit impedit ipsum quas earum. Modi ex delectus ullam debitis. Iste corporis rerum nihil. Impedit nulla facilis molestias inventore ut tempore eum. Necessitatibus quae ratione inventore. Quaerat commodi recusandae perferendis rerum. Laboriosam odio blanditiis illo labore tenetur distinctio veritatis. Fuga dolor fugit officiis eos nihil ipsum odio. Praesentium temporibus odio amet.",
    dataCriacao: "2023-10-19T18:21:59.800Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " item_titulo",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " produto_valor",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " valor_do_item",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Thomas Carvalho",
      matricula: "31031",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 4,
        titulo: "mercado crescimento",
        dataCriacao: "2023-11-13T18:10:47.751Z",
        linhas: 99,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 17,
        titulo: "estrutura fornecimento",
        dataCriacao: "2023-11-13T18:10:47.835Z",
        linhas: 38,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 161,
        titulo: "atendimento competição",
        dataCriacao: "2023-11-13T18:10:48.235Z",
        linhas: 49,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 221,
        titulo: "e-commerce análise",
        dataCriacao: "2023-11-13T18:10:48.425Z",
        linhas: 25,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 309,
        titulo: "despesas preço",
        dataCriacao: "2023-11-13T18:10:48.685Z",
        linhas: 67,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 259,
        titulo: "pagamento comércio",
        dataCriacao: "2023-11-13T18:10:48.534Z",
        linhas: 66,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 363,
        titulo: "capital e-commerce",
        dataCriacao: "2023-11-13T18:10:48.838Z",
        linhas: 46,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 764,
        titulo: "crescimento gerenciamento",
        dataCriacao: "2023-11-13T18:10:49.936Z",
        linhas: 40,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 779,
        titulo: "expansão atendimento",
        dataCriacao: "2023-11-13T18:10:49.973Z",
        linhas: 24,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 755,
        titulo: "empregados competição",
        dataCriacao: "2023-11-13T18:10:49.914Z",
        linhas: 39,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 13,
    titulo: "Arquivos de estoque",
    descricao: "Adipisci impedit ratione earum neque ipsa. Pariatur a quos iusto ex occaecati quas. Aut quas aliquid harum est aliquam. Doloremque quibusdam quibusdam. Ipsum amet molestias vel iusto inventore sit. Corrupti quia corporis aliquid consequuntur architecto. Quia itaque natus porro. Eos quidem laboriosam consectetur corporis nisi debitis. Ex nobis aperiam. Officiis esse labore iusto non provident commodi nostrum. Atque excepturi possimus numquam. Itaque fugiat ea corrupti illo expedita animi. Pariatur impedit tenetur cumque facere aliquam ducimus neque. Quo ipsam natus. Totam rerum reiciendis eaque minus nulla. Eligendi accusantium vero pariatur neque tempore necessitatibus aut. Hic excepturi quae ex. Consequuntur quam cum necessitatibus pariatur ratione. Tempora minima suscipit qui a necessitatibus. Amet corporis hic illum labore ut. Ab in occaecati molestias nisi quis. Itaque ipsam quia quo. Sint minima quos. Quae cumque placeat cumque nulla sunt iure. Sapiente ipsum sunt cumque explicabo minima quia. Sit iusto aliquam nisi officiis. Ab ratione voluptatem tempora vel recusandae. Consectetur dolorum aut quo. Ducimus nemo sapiente fuga modi eos.",
    dataCriacao: "2023-09-19T18:21:54.091Z",
    quantidadeCampos: 2,
    campos: [
      Campo(
        nome: " mercadoria_empresa",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " produto_titulo",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Sr. Luiz Fernando Rezende",
      matricula: "16016",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 6,
        titulo: "visão visão",
        dataCriacao: "2023-11-13T18:10:47.771Z",
        linhas: 17,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 57,
        titulo: "logística benchmark",
        dataCriacao: "2023-11-13T18:10:47.949Z",
        linhas: 18,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 85,
        titulo: "lucro demografia",
        dataCriacao: "2023-11-13T18:10:48.024Z",
        linhas: 13,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 620,
        titulo: "franquia análise",
        dataCriacao: "2023-11-13T18:10:49.539Z",
        linhas: 57,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 534,
        titulo: "visibilidade pesquisa",
        dataCriacao: "2023-11-13T18:10:49.308Z",
        linhas: 70,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 701,
        titulo: "exportar investimento",
        dataCriacao: "2023-11-13T18:10:49.762Z",
        linhas: 81,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 117,
    titulo: "Relatório de feedback",
    descricao: "Possimus quis labore numquam. Quam explicabo qui aliquid accusamus alias dolores. Vero officiis est officiis ipsa. Nemo corporis facere magni. Nostrum blanditiis ex harum culpa numquam. Eius blanditiis asperiores eos quo tempora. Provident fugit minus perspiciatis. Eaque sapiente iure sed nesciunt fugiat necessitatibus. Possimus pariatur nostrum. Cumque ipsum nesciunt dolore. Enim officiis illo tempora. Veritatis occaecati necessitatibus ab neque suscipit. Corrupti quis delectus facilis nostrum fuga dolor. Magni odio ullam. Ex recusandae voluptates. Sint eius ut facilis necessitatibus iste. Veniam ex repellendus ipsum eius nemo necessitatibus qui. Nisi at inventore dolores neque. Aut neque quod provident nihil est rem quas. Maxime quam sapiente excepturi vitae temporibus omnis. Nostrum vitae fuga et asperiores. Inventore rem adipisci eius voluptate nostrum libero distinctio. Maxime quam beatae. Impedit voluptas culpa rem nesciunt voluptate. Doloremque occaecati deserunt vitae perferendis ex. Eaque quibusdam explicabo harum id. Veritatis autem et quasi voluptates. Ipsum aspernatur quam architecto incidunt et repudiandae.",
    dataCriacao: "2023-11-19T18:21:57.602Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " descricao_custo",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " produto_organizacao",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " item_nome",
        nulo: true,
        tipo: "bool"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Juan Lima",
      matricula: "24024",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 7,
        titulo: "empreendedor estrutura",
        dataCriacao: "2023-11-13T18:10:47.776Z",
        linhas: 13,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 70,
        titulo: "preço mercado",
        dataCriacao: "2023-11-13T18:10:47.985Z",
        linhas: 28,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 128,
        titulo: "estoque exportar",
        dataCriacao: "2023-11-13T18:10:48.136Z",
        linhas: 33,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 468,
        titulo: "negócios competição",
        dataCriacao: "2023-11-13T18:10:49.134Z",
        linhas: 23,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 484,
        titulo: "demografia estoque",
        dataCriacao: "2023-11-13T18:10:49.174Z",
        linhas: 22,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 806,
        titulo: "relatório de novembro",
        dataCriacao: "2023-11-17T18:19:05.543Z",
        linhas: 2,
        aprovado: true,
        url: "https://storage.googleapis.com/projetovalidaquero/arquivos/secundario/user-980192/117/1700245144.727018.csv",
        publico: true
      ),
      Arquivo(
        id: 807,
        titulo: "relatório de novembro",
        dataCriacao: "2023-11-17T18:20:31.027Z",
        linhas: 2,
        aprovado: true,
        url: "https://storage.googleapis.com/projetovalidaquero/arquivos/temporario/user-980192/117/1700245230.841324.csv",
        publico: true
      ),
      Arquivo(
        id: 808,
        titulo: "antigo formulário",
        dataCriacao: "2023-11-17T18:22:50.164Z",
        linhas: 2,
        aprovado: true,
        url: "https://storage.googleapis.com/projetovalidaquero/arquivos/temporario/user-980192/117/1700245369.354738.csv",
        publico: true
      ),
      Arquivo(
        id: 809,
        titulo: "feedback RH",
        dataCriacao: "2023-11-17T18:26:49.049Z",
        linhas: 2,
        aprovado: true,
        url: "https://storage.googleapis.com/projetovalidaquero/arquivos/secundario/user-980192/117/1700245608.858653.csv",
        publico: true
      )
    ]
  ),
  Template(
    id: 107,
    titulo: "Relatório de parceria",
    descricao: "Esse inventore quis aspernatur perspiciatis. Autem voluptatum similique nisi. Distinctio dolore aspernatur esse distinctio vero. Nesciunt vel vero. Dignissimos aspernatur nesciunt quis numquam excepturi ratione. Deserunt fuga est architecto. Suscipit necessitatibus cupiditate assumenda veritatis sit. Nulla laboriosam aperiam quisquam. Ad provident dolor pariatur. Cupiditate maiores illum. Eum eligendi impedit ullam ut dolorem nulla. Dolores consequatur sequi minima. Sunt repudiandae at quibusdam dicta. Eius repudiandae sed. Voluptatibus ducimus maxime veritatis molestias iure illo. Pariatur ipsam dolor distinctio expedita doloribus dolor. Cupiditate debitis eligendi dignissimos eius. Deleniti dicta harum. Deleniti optio nam culpa. Omnis at repellat. Veritatis voluptatibus repudiandae aliquam distinctio porro odio. Ducimus facere dolor molestias saepe. Voluptates voluptate quisquam soluta beatae. Dolor magni similique expedita quaerat eius est culpa. Ullam consequuntur id ducimus dolor quibusdam consequatur. Quo voluptatem possimus voluptas. Iure possimus eum iure.",
    dataCriacao: "2023-11-19T18:21:57.244Z",
    quantidadeCampos: 2,
    campos: [
      Campo(
        nome: " item_firma",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " descricao_empresa",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Levi da Mata",
      matricula: "13013",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 8,
        titulo: "exportar estratégia",
        dataCriacao: "2023-11-13T18:10:47.782Z",
        linhas: 66,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 134,
        titulo: "feedback cliente",
        dataCriacao: "2023-11-13T18:10:48.153Z",
        linhas: 19,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 410,
        titulo: "logística franquia",
        dataCriacao: "2023-11-13T18:10:48.976Z",
        linhas: 57,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 622,
        titulo: "atendimento expansão",
        dataCriacao: "2023-11-13T18:10:49.545Z",
        linhas: 19,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 652,
        titulo: "qualidade procedimento",
        dataCriacao: "2023-11-13T18:10:49.628Z",
        linhas: 57,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 659,
        titulo: "mercado estoques",
        dataCriacao: "2023-11-13T18:10:49.646Z",
        linhas: 73,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 474,
        titulo: "estratégia procedimento",
        dataCriacao: "2023-11-13T18:10:49.149Z",
        linhas: 96,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 477,
        titulo: "estratégia mercado",
        dataCriacao: "2023-11-13T18:10:49.157Z",
        linhas: 63,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 632,
        titulo: "varejo segmentação",
        dataCriacao: "2023-11-13T18:10:49.571Z",
        linhas: 66,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 711,
        titulo: "qualidade negócios",
        dataCriacao: "2023-11-13T18:10:49.789Z",
        linhas: 73,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 801,
        titulo: "Relatório do mês de novembro",
        dataCriacao: "2023-11-14T20:20:31.314Z",
        linhas: 2,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 802,
        titulo: "Relatório do mês de novembro",
        dataCriacao: "2023-11-14T20:20:49.017Z",
        linhas: 2,
        aprovado: true,
        url: "https://storage.googleapis.com/projetovalidaquero/arquivos/secundario/user-980192/107/1699993248.287976.csv",
        publico: true
      )
    ]
  ),
  Template(
    id: 17,
    titulo: "Relatório de pagamento",
    descricao: "Et ratione illo id cum provident. Dolorum ex exercitationem quam aperiam rerum. Aspernatur ea suscipit error occaecati. Id quod doloribus optio consequuntur nostrum accusantium. Tempora labore accusantium perferendis ad consectetur. Mollitia iste natus recusandae ut repudiandae. Error ad voluptas pariatur totam. Molestias possimus aliquam. Numquam nostrum soluta earum explicabo aliquam. Dolores doloremque hic corrupti sint atque. Eveniet at praesentium quibusdam error corrupti. Nulla iste temporibus vero. Illum possimus voluptate ex quis. Ipsam facere enim autem iusto reiciendis perspiciatis porro. Aut optio culpa. Praesentium eum velit sed at reiciendis. Delectus quos maxime cumque. Ipsam error ratione distinctio corporis omnis. Reprehenderit quasi aspernatur rerum in. Molestias molestias corrupti sint omnis. Beatae sunt reiciendis officiis tempore. Quos nostrum quisquam modi. Illum repellendus neque. Ex fuga veritatis natus exercitationem. Ipsa perferendis magnam at voluptas voluptatum temporibus. Nostrum molestias voluptate maxime. Nobis ex voluptates vero magni nulla. Quis facilis tempore aliquam labore. Qui corrupti perferendis repellendus velit.",
    dataCriacao: "2023-09-19T18:21:54.091Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " descricao_nome",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " item_descricao",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " empresa_do_produto",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Davi Lucca Pires",
      matricula: "4004",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 9,
        titulo: "atendimento concorrência",
        dataCriacao: "2023-11-13T18:10:47.787Z",
        linhas: 87,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 28,
        titulo: "estratégia varejo",
        dataCriacao: "2023-11-13T18:10:47.871Z",
        linhas: 88,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 62,
        titulo: "liquidação cliente",
        dataCriacao: "2023-11-13T18:10:47.961Z",
        linhas: 92,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 114,
        titulo: "logística parceria",
        dataCriacao: "2023-11-13T18:10:48.101Z",
        linhas: 78,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 213,
        titulo: "conciliação operação",
        dataCriacao: "2023-11-13T18:10:48.402Z",
        linhas: 13,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 352,
        titulo: "operação gerenciamento",
        dataCriacao: "2023-11-13T18:10:48.807Z",
        linhas: 78,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 402,
        titulo: "inovação competição",
        dataCriacao: "2023-11-13T18:10:48.955Z",
        linhas: 63,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 424,
        titulo: "comércio estrutura",
        dataCriacao: "2023-11-13T18:10:49.013Z",
        linhas: 61,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 583,
        titulo: "segmentação demografia",
        dataCriacao: "2023-11-13T18:10:49.438Z",
        linhas: 60,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 648,
        titulo: "risco comércio",
        dataCriacao: "2023-11-13T18:10:49.614Z",
        linhas: 23,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 694,
        titulo: "promoção pesquisa",
        dataCriacao: "2023-11-13T18:10:49.744Z",
        linhas: 49,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 794,
        titulo: "liquidação conciliação",
        dataCriacao: "2023-11-13T18:10:50.012Z",
        linhas: 77,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 24,
    titulo: "Relatório de demografia",
    descricao: "Labore quibusdam perspiciatis qui animi alias explicabo. Quae consectetur cupiditate temporibus. Possimus maxime officia suscipit sequi modi. Delectus inventore nemo cum reprehenderit minus similique aperiam. Debitis maiores autem illo rerum repellendus maiores. Odio voluptate ratione iste quo iure ad. Corrupti voluptate dolores eius. Numquam delectus voluptatum debitis dicta ducimus. Natus repellat unde optio labore magnam. Temporibus sunt blanditiis voluptatibus praesentium aut omnis. Fugiat perferendis iure. Asperiores aut praesentium numquam hic tempore ullam saepe. Nihil delectus minus architecto est provident sapiente. Fugit omnis dicta labore eligendi similique. In veniam quia corporis aperiam nobis magni. Nesciunt iusto ratione quia occaecati repellat rerum. Ducimus accusamus pariatur cum corrupti eveniet. Exercitationem sit similique adipisci. Officia provident ratione rem voluptates vitae. Minima harum inventore odit dicta odio. Nisi accusamus vitae consequatur eligendi perferendis voluptatem. Qui sint eaque iste voluptatibus molestias. Porro sed ducimus a praesentium a. Dicta enim mollitia quisquam error ea earum.",
    dataCriacao: "2023-10-19T18:21:54.056Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: " descricao_valor",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " produto_companhia",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " produto_empresa",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " nome_produto",
        nulo: true,
        tipo: "bool"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Maria Fernanda da Cruz",
      matricula: "18018",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 10,
        titulo: "competição concorrência",
        dataCriacao: "2023-11-13T18:10:47.798Z",
        linhas: 72,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 35,
        titulo: "inovação loja",
        dataCriacao: "2023-11-13T18:10:47.895Z",
        linhas: 93,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 93,
        titulo: "treinamento preço",
        dataCriacao: "2023-11-13T18:10:48.044Z",
        linhas: 32,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 298,
        titulo: "promoção visibilidade",
        dataCriacao: "2023-11-13T18:10:48.650Z",
        linhas: 74,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 365,
        titulo: "negócios fidelização",
        dataCriacao: "2023-11-13T18:10:48.844Z",
        linhas: 27,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 442,
        titulo: "segmentação produção",
        dataCriacao: "2023-11-13T18:10:49.061Z",
        linhas: 52,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 528,
        titulo: "promoção treinamento",
        dataCriacao: "2023-11-13T18:10:49.291Z",
        linhas: 12,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 776,
        titulo: "cliente atendimento",
        dataCriacao: "2023-11-13T18:10:49.966Z",
        linhas: 69,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 95,
    titulo: "Arquivos de receita",
    descricao: "Accusantium debitis optio laudantium odio laborum. Quas blanditiis hic sit sit dolor. Fuga autem sed officiis. Dolore nam porro ex dolorum quis. Nihil repellendus ullam vero. Enim totam quae iste ut. Cupiditate neque ipsa accusamus. Voluptas esse voluptate velit quas. Veniam temporibus eos ipsam illum. Aliquam asperiores corrupti quis laborum ratione illo magnam. Sequi nisi magnam veniam sint. Omnis tempora labore tenetur. Quae in incidunt cum minima voluptate impedit error. Accusamus dolor explicabo sed ipsam doloremque numquam. Amet at labore nam adipisci error. Molestias quisquam ex eos tempora laudantium. Ex natus totam minima. Debitis quas sunt quibusdam impedit soluta. Nisi alias ex rerum nulla aut. Beatae quis magnam earum magnam quod. Repudiandae quisquam quo reiciendis est. Incidunt non deserunt fugit eveniet voluptatum ipsa. Aspernatur est eum. Tempora doloribus aspernatur asperiores fugit ad. Impedit illo accusamus consequuntur. Rem laudantium quod nulla non mollitia. Ducimus minus ab cum laudantium suscipit. Delectus quasi at mollitia voluptatibus. Accusantium sed impedit omnis animi. Est optio iusto veritatis saepe molestias.",
    dataCriacao: "2023-10-19T18:21:54.056Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: "preco",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " organizacao",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " descricao_preco",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Beatriz Rocha",
      matricula: "14014",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 11,
        titulo: "valor logística",
        dataCriacao: "2023-11-13T18:10:47.808Z",
        linhas: 21,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 190,
        titulo: "retorno satisfação",
        dataCriacao: "2023-11-13T18:10:48.334Z",
        linhas: 63,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 785,
        titulo: "retorno compras",
        dataCriacao: "2023-11-13T18:10:49.988Z",
        linhas: 78,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 77,
    titulo: "Template de franquia",
    descricao: "Libero in consequuntur error maiores ratione. Praesentium sed laudantium a ad. Eum provident impedit suscipit. Dolorum asperiores vero nesciunt doloremque ipsam rem quasi. Perferendis tempore magnam quidem atque. Quos voluptate magni harum iusto. Optio sequi error voluptatibus a tempora. Inventore officia deleniti porro fugiat quis ab totam. Vel voluptates numquam distinctio molestiae laboriosam non. Accusamus ab minus. Fugiat architecto similique ratione perferendis. Animi similique eligendi saepe aut laborum vitae rem. Vitae debitis necessitatibus voluptates quidem cupiditate sunt. A ratione iure fugit ullam alias in. Nesciunt quas eos. Tempora adipisci ipsum error itaque. Accusantium nostrum tenetur optio ipsam magnam similique. Consequuntur vitae ex velit totam quod incidunt mollitia. Dolorem optio vitae. Quia inventore officia pariatur quae maxime nobis repellendus. Voluptates autem aliquam hic. Sapiente facilis veniam. Quis fugiat esse reiciendis accusantium voluptatibus. Id quam nostrum soluta. Vel fuga modi fugiat. Sunt rem natus omnis ducimus nemo sed. Sapiente dicta illo provident animi animi.",
    dataCriacao: "2023-10-19T18:22:00.283Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: "data",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " item_firma",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " mercadoria_nome",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " preco_produto",
        nulo: false,
        tipo: "bool"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Levi da Mata",
      matricula: "13013",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 12,
        titulo: "feedback estratégia",
        dataCriacao: "2023-11-13T18:10:47.808Z",
        linhas: 55,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 47,
        titulo: "benchmark serviço",
        dataCriacao: "2023-11-13T18:10:47.923Z",
        linhas: 47,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 119,
        titulo: "produto planejamento",
        dataCriacao: "2023-11-13T18:10:48.113Z",
        linhas: 45,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 194,
        titulo: "regulamentação logística",
        dataCriacao: "2023-11-13T18:10:48.346Z",
        linhas: 86,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 359,
        titulo: "gerenciamento segmentação",
        dataCriacao: "2023-11-13T18:10:48.826Z",
        linhas: 60,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 434,
        titulo: "gerenciamento loja",
        dataCriacao: "2023-11-13T18:10:49.041Z",
        linhas: 80,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 653,
        titulo: "estoques estrutura",
        dataCriacao: "2023-11-13T18:10:49.630Z",
        linhas: 64,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 26,
    titulo: "Relatório de tendência",
    descricao: "A ex ipsam minus ratione amet rerum. Excepturi eligendi harum porro atque perferendis. Eos harum dignissimos eveniet neque quaerat nesciunt eligendi. Explicabo maxime distinctio nostrum nesciunt soluta. Est dolores accusamus tempore. Magnam placeat alias distinctio numquam. Ipsam architecto eum possimus cum voluptas enim. Voluptas consequatur perferendis cupiditate magnam. Dolores blanditiis ipsam similique voluptatem minima. Natus doloribus a quia error dolorem aspernatur. Reprehenderit animi ab magnam deleniti dicta sit. Nisi temporibus eaque eius ex eum. Aliquid incidunt nihil. Tempora occaecati quidem. Esse porro omnis sunt exercitationem esse voluptate. Ducimus soluta eligendi voluptatum corporis. Veritatis ipsam earum sed nobis eum dolores. Odit praesentium dolorem officiis. Quae libero neque sunt. Eveniet dignissimos excepturi eum culpa magni. Illum quaerat expedita. Omnis omnis sint eum at. Pariatur dolorum sint maxime. Deleniti accusamus aut odit modi. Quisquam quae quos dignissimos temporibus. Delectus rerum delectus eius laborum itaque. Magnam aperiam ipsum mollitia sit repellendus. Distinctio alias assumenda at cumque ipsum sunt. Repellendus explicabo natus quia.",
    dataCriacao: "2023-09-19T18:21:54.091Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " servico_empresa",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " item_titulo",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: "data",
        nulo: false,
        tipo: "bool"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Levi da Mata",
      matricula: "13013",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 13,
        titulo: "empregados mercado",
        dataCriacao: "2023-11-13T18:10:47.820Z",
        linhas: 85,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 192,
        titulo: "retorno tendência",
        dataCriacao: "2023-11-13T18:10:48.341Z",
        linhas: 44,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 419,
        titulo: "capital logística",
        dataCriacao: "2023-11-13T18:10:49.000Z",
        linhas: 72,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 611,
        titulo: "feedback marketing",
        dataCriacao: "2023-11-13T18:10:49.515Z",
        linhas: 10,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 502,
        titulo: "produção conciliação",
        dataCriacao: "2023-11-13T18:10:49.224Z",
        linhas: 63,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 787,
        titulo: "benchmark comércio",
        dataCriacao: "2023-11-13T18:10:49.993Z",
        linhas: 99,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 42,
    titulo: "Arquivos de publicidade",
    descricao: "Modi nobis nesciunt. Distinctio saepe quasi ea molestiae fugit accusamus. Labore magnam neque eligendi. Excepturi nobis excepturi voluptates enim deserunt omnis. Culpa accusantium voluptatem alias possimus. Aliquam repellat reprehenderit facilis illum sint. Optio ullam odit nulla esse veniam labore. Facilis repellendus ullam repellat ut mollitia itaque. Quaerat magnam nemo maxime necessitatibus. Debitis assumenda alias odio. Animi doloremque facilis. Minima quae assumenda ex vitae. Quaerat cum dolores quas enim. Quaerat facilis dignissimos nesciunt consequatur. Recusandae odio unde praesentium qui ipsam porro. Deserunt amet accusantium tempore hic. At deleniti nam quibusdam iure soluta. Iusto saepe modi autem mollitia. Perferendis culpa reiciendis quaerat impedit. Earum quidem ullam libero eaque vitae. Aspernatur iste pariatur tempore adipisci occaecati aspernatur exercitationem. Repellat suscipit ab fuga velit quaerat placeat. Nostrum perspiciatis itaque quas doloremque laborum. Exercitationem modi ut ipsa voluptatem facilis. Repellendus pariatur quia. Distinctio aliquid iste sint ullam praesentium.",
    dataCriacao: "2023-11-19T18:21:54.875Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: " titulo",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: "preco",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " titulo_do_item",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " titulo_item",
        nulo: false,
        tipo: "bool"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Melissa da Paz",
      matricula: "40040",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 14,
        titulo: "exportar",
        dataCriacao: "2023-11-13T18:10:47.825Z",
        linhas: 92,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 95,
        titulo: "qualidade fusão",
        dataCriacao: "2023-11-13T18:10:48.049Z",
        linhas: 48,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 512,
        titulo: "loja varejo",
        dataCriacao: "2023-11-13T18:10:49.248Z",
        linhas: 51,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 775,
        titulo: "lucratividade concorrência",
        dataCriacao: "2023-11-13T18:10:49.963Z",
        linhas: 52,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 715,
        titulo: "satisfação fusão",
        dataCriacao: "2023-11-13T18:10:49.804Z",
        linhas: 32,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 94,
    titulo: "Relatório de empregados",
    descricao: "Dolore esse in occaecati. Velit iste consectetur omnis quasi odit esse. Voluptatibus earum doloremque provident ad beatae aliquam accusantium. Cumque illum consectetur reiciendis ipsam odio maxime. Fugiat eius possimus dolores dolor dolores quod. Voluptatibus quasi dolores ipsa debitis. Provident alias nihil aut quibusdam deleniti quo. Ex esse doloremque quae veritatis. Numquam expedita hic libero ducimus impedit officiis ullam. Corrupti error ducimus alias beatae commodi. Natus quas quo temporibus nulla itaque. Minus sit error doloribus. Cum a nulla laborum amet voluptates. Id tempore nulla earum eligendi. Nulla fugiat impedit distinctio. Labore deleniti molestiae voluptatem. Dolorem sed eveniet illum. Quae ut architecto quos. Ipsum aliquid totam quis nulla ducimus. Dolorem incidunt laborum quia mollitia vero. Illum sed eum aliquam. Eius ab est odio. Fugit inventore aut dignissimos. Eligendi esse architecto cum accusantium quidem. Quia quam repellat possimus distinctio porro et accusamus. Assumenda fuga necessitatibus dolor. At dolorem accusamus corrupti debitis soluta. Tempora vel aspernatur ut eos.",
    dataCriacao: "2023-10-19T18:21:54.056Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: " mercadoria_preco",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " titulo_do_item",
        nulo: true,
        tipo: "bool"
      ),
      Campo(
        nome: " valor_item",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " nome_produto",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Dr. Luiz Henrique Barbosa",
      matricula: "25025",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 15,
        titulo: "fornecimento marketing",
        dataCriacao: "2023-11-13T18:10:47.828Z",
        linhas: 71,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 56,
        titulo: "liquidação",
        dataCriacao: "2023-11-13T18:10:47.946Z",
        linhas: 34,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 334,
        titulo: "crescimento valor",
        dataCriacao: "2023-11-13T18:10:48.756Z",
        linhas: 35,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 412,
        titulo: "visibilidade receita",
        dataCriacao: "2023-11-13T18:10:48.981Z",
        linhas: 59,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 447,
        titulo: "operação procedimento",
        dataCriacao: "2023-11-13T18:10:49.074Z",
        linhas: 61,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 18,
    titulo: "Relatório de franquia",
    descricao: "Porro atque rem illo. Architecto atque est dolorum nesciunt. Deleniti odio commodi voluptate. In magni nostrum impedit repudiandae animi voluptas. Aut at doloremque consectetur quia quaerat tempore. Corrupti enim quos quod possimus. Saepe perferendis eum laboriosam. Accusamus repellendus libero reiciendis aliquam reiciendis. Reiciendis ducimus quidem cum. Illum excepturi nisi nemo placeat tempore ex. Eveniet blanditiis quas adipisci numquam voluptas. Inventore molestiae ea vero fuga doloribus. Provident magnam quod suscipit nobis eum. Voluptatum pariatur sint laudantium ducimus voluptate quasi. Fugiat ipsam ipsa consequatur. Cupiditate incidunt laboriosam consequatur aperiam illum magni. Velit reiciendis necessitatibus impedit expedita. Ipsum exercitationem nisi nesciunt. Consequatur pariatur fugiat itaque. Assumenda officia sed dolorum libero voluptatem veritatis. Illo voluptatum eveniet. Quae quo culpa voluptatum nihil. Labore aliquam animi eos tenetur. Quisquam saepe illum impedit dolorum atque iure voluptate. Dolores aliquid laboriosam omnis commodi dolorum laudantium blanditiis. Reiciendis est fuga dolor autem. Ipsum alias ea repellat corrupti.",
    dataCriacao: "2023-11-19T18:21:54.017Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: "data",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: "produto_nome",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " descricao_custo",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " valor_item",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " descricao_valor",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Sr. Juan Oliveira",
      matricula: "20020",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 16,
        titulo: "negócios logística",
        dataCriacao: "2023-11-13T18:10:47.830Z",
        linhas: 45,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 174,
        titulo: "regulamentação produção",
        dataCriacao: "2023-11-13T18:10:48.274Z",
        linhas: 37,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 149,
        titulo: "franquia competição",
        dataCriacao: "2023-11-13T18:10:48.201Z",
        linhas: 55,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 238,
        titulo: "atendimento visibilidade",
        dataCriacao: "2023-11-13T18:10:48.473Z",
        linhas: 17,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 427,
        titulo: "risco serviço",
        dataCriacao: "2023-11-13T18:10:49.022Z",
        linhas: 46,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 355,
        titulo: "gerenciamento parceria",
        dataCriacao: "2023-11-13T18:10:48.814Z",
        linhas: 68,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 504,
        titulo: "estrutura lucro",
        dataCriacao: "2023-11-13T18:10:49.229Z",
        linhas: 55,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 704,
        titulo: "operação estoques",
        dataCriacao: "2023-11-13T18:10:49.771Z",
        linhas: 38,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 28,
    titulo: "Template de gerenciamento",
    descricao: "Illo quod sunt fugiat tenetur qui. Earum delectus nobis in. Itaque tempore et recusandae in sapiente similique repellat. Iure dolorum blanditiis dolorem optio dolorem. Nobis blanditiis dolorem eius. Impedit totam enim at numquam animi commodi. Facilis culpa nulla nisi voluptatibus in officiis. Earum voluptate voluptatibus a velit. Temporibus fugit nemo. Impedit ullam rerum aspernatur deleniti. Molestiae exercitationem voluptates delectus. Ratione modi rem minima amet consequuntur. Qui numquam iure rerum error debitis accusantium. Dolorum modi dolore recusandae molestiae quod. Doloribus esse deleniti impedit. Doloribus voluptatem error debitis quod. Perferendis perspiciatis debitis labore. Deserunt occaecati sequi consectetur. Iusto voluptatibus placeat alias exercitationem fuga. Distinctio nostrum voluptatibus inventore fuga voluptate. Error ipsam accusantium exercitationem rem earum. Molestiae repudiandae mollitia possimus ipsam ipsum. Mollitia eligendi rerum ut voluptate. Ratione minima facilis eius in molestiae itaque beatae. Esse doloribus dolorum eveniet. Quae laboriosam expedita inventore dicta. Temporibus itaque neque beatae reprehenderit labore similique.",
    dataCriacao: "2023-09-19T18:21:54.091Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: " produto_empresa",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: "empresa",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " item_titulo",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " preco_produto",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Vicente Farias",
      matricula: "15015",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 18,
        titulo: "mercado varejo",
        dataCriacao: "2023-11-13T18:10:47.840Z",
        linhas: 87,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 141,
        titulo: "empreendedor produto",
        dataCriacao: "2023-11-13T18:10:48.178Z",
        linhas: 46,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 282,
        titulo: "compras estratégia",
        dataCriacao: "2023-11-13T18:10:48.598Z",
        linhas: 84,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 252,
        titulo: "despesas capital",
        dataCriacao: "2023-11-13T18:10:48.515Z",
        linhas: 94,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 401,
        titulo: "estoque despesas",
        dataCriacao: "2023-11-13T18:10:48.952Z",
        linhas: 53,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 617,
        titulo: "loja análise",
        dataCriacao: "2023-11-13T18:10:49.531Z",
        linhas: 40,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 533,
        titulo: "estratégia análise",
        dataCriacao: "2023-11-13T18:10:49.305Z",
        linhas: 13,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 784,
        titulo: "estudo despesas",
        dataCriacao: "2023-11-13T18:10:49.986Z",
        linhas: 88,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 798,
        titulo: "despesas pesquisa",
        dataCriacao: "2023-11-13T18:10:50.022Z",
        linhas: 57,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 38,
    titulo: "Relatório de satisfação",
    descricao: "Similique veritatis dolorum illum. Sed repellat adipisci pariatur delectus quisquam delectus magni. Iure accusantium dolorem hic. Qui tempora aliquam tempora porro. Alias perspiciatis quos repellat magni debitis dignissimos. Illo adipisci voluptatem laudantium officia veniam ea. Labore architecto voluptates eveniet praesentium hic cum. Repudiandae sint cupiditate magni. Earum iste consectetur harum. Perspiciatis asperiores quidem unde corrupti necessitatibus. Odio alias officia eligendi voluptas nihil. Temporibus alias impedit exercitationem nobis soluta laboriosam. Ut saepe quibusdam saepe. Corrupti cum corporis iure aut totam architecto accusantium. Quae est fugit ipsa rem doloremque. Esse laboriosam maxime qui ab fugit. Culpa reprehenderit at repellendus voluptatem. Assumenda officia nam a numquam eos. Ipsam ullam esse. In alias in optio. Consequatur in deserunt ad quos qui accusantium. Delectus libero fugiat recusandae distinctio doloribus. Est natus beatae laudantium tempora. Et consequuntur quidem nesciunt nisi. Dolores ea officia temporibus.",
    dataCriacao: "2023-09-19T18:21:54.091Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: " mercadoria_preco",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " descricao_empresa",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " descricao_organizacao",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " servico_nome",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " item_descricao",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Davi Lucas da Rocha",
      matricula: "8008",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 19,
        titulo: "competição fusão",
        dataCriacao: "2023-11-13T18:10:47.844Z",
        linhas: 86,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 111,
        titulo: "atendimento estratégia",
        dataCriacao: "2023-11-13T18:10:48.093Z",
        linhas: 82,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 184,
        titulo: "logística serviço",
        dataCriacao: "2023-11-13T18:10:48.313Z",
        linhas: 29,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 207,
        titulo: "serviço estrutura",
        dataCriacao: "2023-11-13T18:10:48.385Z",
        linhas: 18,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 209,
        titulo: "franquia atendimento",
        dataCriacao: "2023-11-13T18:10:48.391Z",
        linhas: 12,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 307,
        titulo: "inovação conciliação",
        dataCriacao: "2023-11-13T18:10:48.680Z",
        linhas: 63,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 675,
        titulo: "competição varejo",
        dataCriacao: "2023-11-13T18:10:49.689Z",
        linhas: 21,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 728,
        titulo: "e-commerce gerenciamento",
        dataCriacao: "2023-11-13T18:10:49.840Z",
        linhas: 28,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 739,
        titulo: "benchmark operação",
        dataCriacao: "2023-11-13T18:10:49.871Z",
        linhas: 79,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 100,
    titulo: "Arquivos de serviço",
    descricao: "Sit reiciendis quibusdam eveniet unde facere porro. Debitis quod ex voluptatibus porro nobis laboriosam ipsum. Facere quis veniam quae. Dolores quo sunt veritatis hic cupiditate. Cumque itaque dolore et perferendis. Ipsum animi eos cum minima. Voluptates doloremque error libero deleniti amet laudantium necessitatibus. Libero ducimus officia corporis non fugiat tenetur. Ad ipsa dolor amet illum repellendus. Velit provident modi magni iure deleniti. Quae vero excepturi. Aut alias nemo ducimus corrupti. Enim exercitationem molestias illo impedit quasi. Qui mollitia suscipit nihil consectetur. Error consectetur quas iure accusamus tempore. Fuga quaerat maiores placeat fugit minima laborum. Numquam dignissimos blanditiis repellendus laboriosam facere mollitia. Ab nemo sed commodi. Tempora repellendus perspiciatis. Similique quibusdam saepe dolore officia accusantium similique. Atque quidem omnis voluptatum quia voluptatum eum. Nemo ipsum laudantium officia. Debitis veniam sunt nemo sit officiis. Pariatur dolor atque est. Sapiente nulla officiis pariatur occaecati. Aperiam aut nihil.",
    dataCriacao: "2023-11-19T18:21:56.995Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " mercadoria_nome",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " item_nome",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " preco_produto",
        nulo: false,
        tipo: "object"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Eloah Farias",
      matricula: "1001",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 20,
        titulo: "lucratividade conciliação",
        dataCriacao: "2023-11-13T18:10:47.845Z",
        linhas: 88,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 55,
        titulo: "publicidade gerenciamento",
        dataCriacao: "2023-11-13T18:10:47.944Z",
        linhas: 64,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 193,
        titulo: "gerenciamento visão",
        dataCriacao: "2023-11-13T18:10:48.343Z",
        linhas: 88,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 437,
        titulo: "capital concorrência",
        dataCriacao: "2023-11-13T18:10:49.049Z",
        linhas: 80,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 646,
        titulo: "procedimento estratégia",
        dataCriacao: "2023-11-13T18:10:49.609Z",
        linhas: 12,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 71,
    titulo: "Relatório de produto",
    descricao: "Quasi quis nam. Et repellendus cum quas alias architecto dolore. Vero tempora odio dolorum nihil. Earum accusamus iusto placeat minima. Odio sed iure culpa tempora nulla. Unde beatae dolore dolorum. Tenetur eum mollitia voluptatum maxime quod porro. Iure quidem quos molestias id enim. Aperiam vero cupiditate est. At dolor quas harum ex iusto. Ex neque aliquid soluta nisi. Molestias maiores delectus iure rerum. Doloremque rem aliquid consectetur dolores eligendi nemo sapiente. Quas sed delectus quod. Minus id sit consequatur dolore. Molestias ad cum possimus perspiciatis dolore. Nihil neque nesciunt error autem. Sit sapiente alias. Vel dolorum itaque dignissimos officiis. Deserunt explicabo fugiat sit hic. Laudantium voluptatum nam similique vel commodi. Recusandae sint omnis reiciendis repudiandae debitis. Amet ullam laborum nulla at quis. Soluta corporis sit adipisci porro. Veniam ex possimus. Doloribus possimus similique animi fugiat repellendus optio. Odio laudantium veritatis odit tempora cupiditate commodi iste. Aut accusamus quasi distinctio perferendis hic porro.",
    dataCriacao: "2023-11-19T18:21:55.947Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: " servico_nome",
        nulo: true,
        tipo: "bool"
      ),
      Campo(
        nome: " valor_item",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " valor_do_item",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " empresa_do_produto",
        nulo: true,
        tipo: "bool"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Bianca Cardoso",
      matricula: "48048",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 21,
        titulo: "valor empregados",
        dataCriacao: "2023-11-13T18:10:47.850Z",
        linhas: 96,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 198,
        titulo: "parceria finanças",
        dataCriacao: "2023-11-13T18:10:48.358Z",
        linhas: 57,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 457,
        titulo: "negócios capital",
        dataCriacao: "2023-11-13T18:10:49.103Z",
        linhas: 52,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 371,
        titulo: "demografia estratégia",
        dataCriacao: "2023-11-13T18:10:48.864Z",
        linhas: 14,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 406,
        titulo: "valor valor",
        dataCriacao: "2023-11-13T18:10:48.965Z",
        linhas: 30,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 630,
        titulo: "conciliação operação",
        dataCriacao: "2023-11-13T18:10:49.565Z",
        linhas: 31,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 597,
        titulo: "valor loja",
        dataCriacao: "2023-11-13T18:10:49.476Z",
        linhas: 42,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 750,
        titulo: "operação liquidação",
        dataCriacao: "2023-11-13T18:10:49.898Z",
        linhas: 59,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 114,
    titulo: "Arquivos de qualidade",
    descricao: "At necessitatibus rerum quo at sint fugit. Non doloribus omnis doloremque tenetur iste voluptatum. Deserunt sint dolorum aliquam. Inventore dolor iure officia. Perspiciatis consequatur quisquam voluptatum nemo praesentium. Laborum laudantium explicabo molestiae enim architecto officiis. Non vel incidunt eaque libero esse. Hic tempore quos iure sapiente beatae autem. Nihil vero aliquid voluptate. Libero similique asperiores soluta occaecati unde omnis cupiditate. Dolorem atque minima numquam laborum delectus. Reprehenderit culpa iste deserunt architecto. Fuga aliquam officiis ratione maxime totam praesentium doloribus. Perferendis fuga soluta ipsa tempore. Nisi fugiat dicta porro doloremque vel dolores commodi. Est quo ipsam doloremque. Assumenda quam maxime dolor quaerat saepe. Error in laudantium iusto qui cupiditate magnam dolorum. Quas corrupti sapiente eum rerum officiis. Nam impedit nihil quos officia repellat. Harum nihil officia eum. Dolores ipsa cupiditate. Optio dolorum dolores a sunt et. Expedita debitis soluta unde quae inventore. Eveniet quibusdam fuga molestiae corrupti adipisci. Optio repellendus explicabo. In itaque accusantium.",
    dataCriacao: "2023-11-19T18:21:57.495Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: " item_organizacao",
        nulo: true,
        tipo: "bool"
      ),
      Campo(
        nome: " item_titulo",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " item_descricao",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: "data",
        nulo: false,
        tipo: "float"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Heitor da Conceição",
      matricula: "34034",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 22,
        titulo: "fidelização compras",
        dataCriacao: "2023-11-13T18:10:47.855Z",
        linhas: 67,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 175,
        titulo: "estudo marketing",
        dataCriacao: "2023-11-13T18:10:48.279Z",
        linhas: 80,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 678,
        titulo: "comércio concorrência",
        dataCriacao: "2023-11-13T18:10:49.696Z",
        linhas: 11,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 679,
        titulo: "vendas valor",
        dataCriacao: "2023-11-13T18:10:49.700Z",
        linhas: 35,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 155,
    titulo: "Arquivos de logística",
    descricao: "Occaecati error temporibus molestias. Doloremque magni ullam ducimus pariatur eos ex. Vel consequuntur necessitatibus ullam provident nostrum nostrum. Qui occaecati earum consequuntur. Et consectetur neque deserunt eaque nesciunt. Ut qui quae suscipit libero est. Voluptatem eligendi dolore tempore perspiciatis beatae perferendis. Quidem nam architecto maxime aut error perferendis modi. Hic suscipit nulla expedita qui id ducimus. Quas blanditiis quas veniam modi maiores tempora. Architecto distinctio minima cum. Fugiat aperiam non molestias repudiandae id dolorum. Perspiciatis vitae possimus. Consectetur delectus facere placeat. Rem necessitatibus sit. Explicabo accusantium culpa magni. Eos ut beatae dicta illum atque. Assumenda quisquam itaque. Possimus ipsam temporibus. Molestias ex amet deleniti. Unde nulla expedita facere laudantium. Eius nihil architecto libero corrupti. Quo amet doloribus. Cupiditate sequi tempore magni itaque culpa. Earum aliquid nostrum ullam ratione eveniet minima. Tempore facere voluptate dolores eum. Non iusto soluta eum exercitationem reiciendis accusamus neque.",
    dataCriacao: "2023-09-19T18:21:59.076Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: " empresa_produto",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " item_nome",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " empresa_item",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " produto_companhia",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " item_nome",
        nulo: false,
        tipo: "object"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Maria Fernanda da Cruz",
      matricula: "18018",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 23,
        titulo: "competição orçamento",
        dataCriacao: "2023-11-13T18:10:47.855Z",
        linhas: 56,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 27,
        titulo: "cliente orçamento",
        dataCriacao: "2023-11-13T18:10:47.868Z",
        linhas: 14,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 38,
        titulo: "vendas gerenciamento",
        dataCriacao: "2023-11-13T18:10:47.901Z",
        linhas: 75,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 472,
        titulo: "logística promoção",
        dataCriacao: "2023-11-13T18:10:49.144Z",
        linhas: 100,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 573,
        titulo: "e-commerce expansão",
        dataCriacao: "2023-11-13T18:10:49.410Z",
        linhas: 68,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 1,
    titulo: "Template de liderança",
    descricao: "Libero ut explicabo magnam. Voluptatibus molestiae deserunt fugit commodi consectetur. Quia autem quibusdam. Quas iure et sit temporibus deleniti voluptates. Minima veritatis ut tempora qui ea officia similique. Optio delectus nostrum minima aut corporis. Maiores commodi labore omnis facilis. Commodi voluptate odit nisi maxime. Fugiat eligendi repudiandae quisquam assumenda ipsa alias. Labore vel recusandae velit. Nisi voluptates impedit optio tempora optio. Reprehenderit eum commodi labore quia facilis. Accusantium nostrum ea aspernatur quo quasi. Sit nesciunt voluptatem tempore soluta totam quod. Non esse dolore perspiciatis at fuga incidunt. Doloribus similique fugit dolore. Consequatur ea nesciunt maiores. Aut quasi neque pariatur. Doloremque minus nemo dolore perspiciatis. Doloremque voluptates id ducimus. Repellat amet amet excepturi hic ab. Sit architecto sunt necessitatibus maiores magnam. Itaque modi laudantium natus. Sapiente dolor quas omnis explicabo quis natus. Inventore consectetur tempora cum eum eveniet veniam. Autem quo deserunt iste. Nobis aspernatur quia quis esse perspiciatis laborum. Sed ipsam sed natus quaerat ad. A quae officiis. Natus animi similique at.",
    dataCriacao: "2023-10-19T18:21:54.056Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " produto_preco",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " servico_descricao",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " descricao_empresa",
        nulo: true,
        tipo: "bool"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Yago Ramos",
      matricula: "26026",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 24,
        titulo: "gerenciamento capital",
        dataCriacao: "2023-11-13T18:10:47.860Z",
        linhas: 59,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 83,
        titulo: "retorno retorno",
        dataCriacao: "2023-11-13T18:10:48.019Z",
        linhas: 34,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 125,
        titulo: "liquidação pesquisa",
        dataCriacao: "2023-11-13T18:10:48.128Z",
        linhas: 98,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 182,
        titulo: "fusão parceria",
        dataCriacao: "2023-11-13T18:10:48.307Z",
        linhas: 15,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 155,
        titulo: "compras benchmark",
        dataCriacao: "2023-11-13T18:10:48.217Z",
        linhas: 21,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 220,
        titulo: "mercado franquia",
        dataCriacao: "2023-11-13T18:10:48.423Z",
        linhas: 44,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 330,
        titulo: "demografia fusão",
        dataCriacao: "2023-11-13T18:10:48.745Z",
        linhas: 31,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 488,
        titulo: "serviço expansão",
        dataCriacao: "2023-11-13T18:10:49.184Z",
        linhas: 49,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 572,
        titulo: "segmentação comércio",
        dataCriacao: "2023-11-13T18:10:49.407Z",
        linhas: 48,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 769,
        titulo: "despesas loja",
        dataCriacao: "2023-11-13T18:10:49.948Z",
        linhas: 51,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 695,
        titulo: "qualidade promoção",
        dataCriacao: "2023-11-13T18:10:49.747Z",
        linhas: 17,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 191,
    titulo: "Arquivos de marketing",
    descricao: "Autem ipsa eaque praesentium eos fugiat. Nihil earum possimus impedit voluptatum. Nisi sit dolores velit nam commodi. Nisi alias sapiente beatae expedita est a. Dignissimos odit illum libero. Dicta aspernatur quasi. Maxime eum inventore. Alias reprehenderit libero quas id tempora voluptate vero. Iure rerum quidem esse a. Non voluptates facere error hic minus quis. Incidunt perspiciatis unde aliquid. Praesentium eos aliquam ea. Excepturi inventore ex dolorem labore error aperiam. Harum a hic nihil nemo ratione repellendus. Natus pariatur quia eos et repellat. Facere vel culpa possimus consectetur aperiam. Possimus asperiores optio. Id ut cupiditate sed debitis. Eius dolore quam labore. Blanditiis aspernatur debitis placeat totam aspernatur sapiente. Quibusdam optio exercitationem aliquid hic. Facilis nostrum quae suscipit. Molestias id dicta nihil expedita sed consequatur omnis. Saepe ullam totam placeat aperiam. Voluptatum quas at voluptatem facilis autem magni numquam. Qui doloribus repellat impedit error. Minus provident vel odio possimus unde. Ratione totam non praesentium doloremque. Eligendi quam error. Libero nam eos doloribus cupiditate.",
    dataCriacao: "2023-08-19T18:21:59.457Z",
    quantidadeCampos: 2,
    campos: [
      Campo(
        nome: " descricao_empresa",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " titulo_item",
        nulo: false,
        tipo: "object"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Heitor da Conceição",
      matricula: "34034",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 25,
        titulo: "crescimento estudo",
        dataCriacao: "2023-11-13T18:10:47.864Z",
        linhas: 95,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 120,
        titulo: "exportar liquidação",
        dataCriacao: "2023-11-13T18:10:48.115Z",
        linhas: 55,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 233,
        titulo: "estoque logística",
        dataCriacao: "2023-11-13T18:10:48.458Z",
        linhas: 80,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 245,
        titulo: "fidelização parceria",
        dataCriacao: "2023-11-13T18:10:48.494Z",
        linhas: 51,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 373,
        titulo: "visão preço",
        dataCriacao: "2023-11-13T18:10:48.870Z",
        linhas: 56,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 159,
    titulo: "Arquivos de planejamento",
    descricao: "Saepe facere similique voluptas architecto recusandae quidem impedit. Magnam dolore quis harum. Nisi maxime voluptatibus ea. Eaque nesciunt ducimus reprehenderit. Eaque vitae consectetur ad tenetur reiciendis. Ipsum officiis ad nam recusandae earum. Numquam aperiam odio soluta. Sequi nam distinctio veritatis eius. Tenetur ad perferendis. Quasi blanditiis ut occaecati. Eligendi error consectetur reprehenderit exercitationem repellat quam. Corporis sapiente rerum corrupti unde. Esse esse voluptas pariatur quasi autem est. Asperiores dolorem quam mollitia repudiandae fugiat. Voluptate recusandae autem. Magnam architecto quaerat ea earum corporis. Minima iste corrupti debitis pariatur voluptatem. Quaerat modi ipsam aliquam voluptate exercitationem harum. Aut explicabo doloribus tenetur. Beatae expedita voluptates eius optio qui. Aut ut tempora. Dicta ipsum ratione blanditiis possimus iste reiciendis. Necessitatibus magnam rerum. Molestiae unde magni modi reiciendis saepe quos. Placeat ducimus assumenda labore consequatur laborum blanditiis. Incidunt tempore sapiente aperiam distinctio. Voluptate veritatis sapiente placeat cumque aspernatur cupiditate.",
    dataCriacao: "2023-10-19T18:21:59.800Z",
    quantidadeCampos: 2,
    campos: [
      Campo(
        nome: " produto_titulo",
        nulo: true,
        tipo: "bool"
      ),
      Campo(
        nome: " servico_nome",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Vicente Farias",
      matricula: "15015",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 26,
        titulo: "investimento finanças",
        dataCriacao: "2023-11-13T18:10:47.868Z",
        linhas: 49,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 34,
        titulo: "fusão receita",
        dataCriacao: "2023-11-13T18:10:47.891Z",
        linhas: 55,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 172,
        titulo: "fusão análise",
        dataCriacao: "2023-11-13T18:10:48.269Z",
        linhas: 47,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 300,
        titulo: "regulamentação empreendedor",
        dataCriacao: "2023-11-13T18:10:48.656Z",
        linhas: 43,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 322,
        titulo: "liquidação varejo",
        dataCriacao: "2023-11-13T18:10:48.723Z",
        linhas: 19,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 258,
        titulo: "estoque empregados",
        dataCriacao: "2023-11-13T18:10:48.532Z",
        linhas: 65,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 261,
        titulo: "treinamento produção",
        dataCriacao: "2023-11-13T18:10:48.540Z",
        linhas: 93,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 626,
        titulo: "estratégia operação",
        dataCriacao: "2023-11-13T18:10:49.554Z",
        linhas: 62,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 603,
        titulo: "análise estudo",
        dataCriacao: "2023-11-13T18:10:49.492Z",
        linhas: 70,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 767,
        titulo: "liderança benchmark",
        dataCriacao: "2023-11-13T18:10:49.943Z",
        linhas: 70,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 144,
    titulo: "Arquivos de atendimento",
    descricao: "Maiores corrupti numquam. Sint rerum quas ab rem corporis fuga totam. Vel alias voluptates iure. Esse quam modi veniam quaerat quia. Eos ea voluptas temporibus labore animi. Ex perspiciatis ab dicta earum similique praesentium. Eos facere occaecati officiis error harum. Iure nobis illo officia dicta corporis vero. Voluptate quibusdam quisquam doloremque suscipit in debitis. Praesentium inventore laudantium omnis iure in inventore. Saepe laudantium nihil repellendus totam. Ipsum sequi officiis. Explicabo explicabo fuga a minima reprehenderit sunt. Velit explicabo saepe neque sit sint. Ex minus aut quo aliquid molestiae unde rem. Quidem est minus similique minima. Aliquam ullam asperiores labore corporis repellendus. Voluptatem praesentium necessitatibus nemo. Distinctio facilis aut. Quisquam itaque explicabo nemo necessitatibus doloribus. Rem aperiam animi assumenda. Porro mollitia sapiente magnam provident sit. Fugit eius commodi excepturi ab at corrupti. Deserunt eaque hic assumenda illo eum debitis. Voluptatum velit in consectetur quo. Delectus doloribus sequi. Eius inventore quis excepturi ducimus natus repellat. Nisi praesentium dignissimos minima non.",
    dataCriacao: "2023-09-19T18:21:59.076Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: "empresa",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: "produto_nome",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " empresa_do_item",
        nulo: true,
        tipo: "bool"
      ),
      Campo(
        nome: " titulo",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " item_organizacao",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Bruna Pereira",
      matricula: "17017",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 29,
        titulo: "inovação capital",
        dataCriacao: "2023-11-13T18:10:47.875Z",
        linhas: 73,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 197,
        titulo: "estratégia logística",
        dataCriacao: "2023-11-13T18:10:48.355Z",
        linhas: 31,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 332,
        titulo: "receita planejamento",
        dataCriacao: "2023-11-13T18:10:48.751Z",
        linhas: 69,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 251,
        titulo: "crescimento competição",
        dataCriacao: "2023-11-13T18:10:48.512Z",
        linhas: 12,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 366,
        titulo: "valor estoque",
        dataCriacao: "2023-11-13T18:10:48.846Z",
        linhas: 50,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 723,
        titulo: "compras feedback",
        dataCriacao: "2023-11-13T18:10:49.826Z",
        linhas: 86,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 790,
        titulo: "finanças comércio",
        dataCriacao: "2023-11-13T18:10:50.002Z",
        linhas: 74,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 795,
        titulo: "competição serviço",
        dataCriacao: "2023-11-13T18:10:50.014Z",
        linhas: 60,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 141,
    titulo: "Arquivos de empregados",
    descricao: "Explicabo soluta voluptate unde. Magnam doloremque adipisci accusamus maxime esse iste. Deleniti qui debitis deserunt consectetur consectetur odio. Mollitia ut consectetur tenetur debitis dolorem quas. Alias necessitatibus sed veniam nam cum ratione. Minima nam consectetur adipisci et eveniet eaque. Quibusdam doloremque doloribus deleniti officia explicabo. Nemo ea tenetur quo voluptatem nihil inventore. Ducimus mollitia iure. Earum cum sed minima pariatur blanditiis. Et recusandae facere aperiam doloribus. Eaque omnis pariatur aliquid non. Ipsum harum tempora doloremque alias voluptatem. Consequatur adipisci harum debitis ut. Porro maiores suscipit odio temporibus. Suscipit veniam adipisci deserunt. Reiciendis omnis ipsa ex. Inventore cumque pariatur praesentium. Sunt expedita commodi odit. Necessitatibus quas ullam enim. Magnam cupiditate perferendis nam quod numquam. Vel libero officia iusto repudiandae doloremque. Atque vero eum vitae consequuntur ea. Labore beatae doloribus quibusdam totam iusto. Aperiam odio sunt sit. Facere incidunt impedit. Dolores vero minima molestias illum voluptatum fugiat. Voluptatem doloribus quis delectus accusamus repellendus sit.",
    dataCriacao: "2023-09-19T18:21:59.076Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " descricao_firma",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " empresa_do_produto",
        nulo: true,
        tipo: "bool"
      ),
      Campo(
        nome: " produto_companhia",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Laís Moura",
      matricula: "38038",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 30,
        titulo: "visão atendimento",
        dataCriacao: "2023-11-13T18:10:47.879Z",
        linhas: 39,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 267,
        titulo: "logística feedback",
        dataCriacao: "2023-11-13T18:10:48.556Z",
        linhas: 36,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 407,
        titulo: "despesas competição",
        dataCriacao: "2023-11-13T18:10:48.968Z",
        linhas: 24,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 511,
        titulo: "receita franquia",
        dataCriacao: "2023-11-13T18:10:49.246Z",
        linhas: 59,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 128,
    titulo: "Arquivos de qualidade",
    descricao: "Totam modi odit iure eius delectus. Impedit possimus deserunt assumenda voluptas libero. Delectus eius dicta temporibus dolores occaecati. Doloremque maiores numquam aspernatur excepturi unde voluptatem laborum. Atque maiores nobis placeat quaerat ea. Consectetur a praesentium esse eaque incidunt. Aperiam ea expedita delectus odio. Quis debitis eius odio iure ex sed reprehenderit. Aliquam deserunt aliquid eos modi. Natus non porro enim. Vitae consequuntur eaque. Nulla quia quae tenetur sequi quis. Cupiditate minus facere voluptatum facilis est. Velit pariatur deserunt minima. Iusto repellat maiores repudiandae laboriosam. Ipsa consectetur suscipit voluptatibus aperiam officiis. Reprehenderit optio sapiente rerum ipsa saepe magni. Neque deleniti ratione nam fuga sunt facilis. Est voluptatem amet esse dolores commodi. Nemo natus nesciunt. Eum delectus praesentium nihil itaque architecto eligendi quibusdam. Eos voluptatibus corporis error nisi. Alias ad quidem similique cupiditate. Delectus a consequuntur doloremque mollitia occaecati. Aperiam debitis sint commodi iusto. Accusantium fuga veritatis ipsa laboriosam necessitatibus. Quaerat in alias asperiores. Eum error omnis a in.",
    dataCriacao: "2023-11-19T18:21:57.995Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " item_firma",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " servico_nome",
        nulo: true,
        tipo: "bool"
      ),
      Campo(
        nome: " empresa_do_item",
        nulo: true,
        tipo: "bool"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Sr. Luiz Fernando Rezende",
      matricula: "16016",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 31,
        titulo: "estoques tendência",
        dataCriacao: "2023-11-13T18:10:47.883Z",
        linhas: 59,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 223,
        titulo: "conciliação marketing",
        dataCriacao: "2023-11-13T18:10:48.432Z",
        linhas: 56,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 240,
        titulo: "planejamento compras",
        dataCriacao: "2023-11-13T18:10:48.478Z",
        linhas: 54,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 216,
        titulo: "empreendedor regulamentação",
        dataCriacao: "2023-11-13T18:10:48.412Z",
        linhas: 42,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 338,
        titulo: "estrutura parceria",
        dataCriacao: "2023-11-13T18:10:48.767Z",
        linhas: 17,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 485,
        titulo: "estratégia retorno",
        dataCriacao: "2023-11-13T18:10:49.177Z",
        linhas: 58,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 627,
        titulo: "qualidade vendas",
        dataCriacao: "2023-11-13T18:10:49.557Z",
        linhas: 18,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 151,
    titulo: "Template de planejamento",
    descricao: "Aut iste perferendis. Nostrum neque vero necessitatibus quidem. Similique delectus sequi doloremque adipisci voluptas. Libero error excepturi accusamus quos ullam. Quidem itaque quo ducimus. Illum nesciunt libero repudiandae eius quos. Suscipit eveniet iusto ipsam cupiditate pariatur repellat eaque. Quos numquam saepe commodi. Inventore veniam ipsa unde non dolorem. Ipsa eligendi cumque quasi. Temporibus maxime facilis. Aperiam laborum minima repudiandae nobis suscipit. Similique quas omnis assumenda eum fugit dolor. Dolores quidem dolores delectus blanditiis possimus. Nemo commodi neque hic iste earum. Distinctio laborum voluptates beatae fuga consequuntur culpa quas. Possimus illo assumenda cum. Ducimus distinctio occaecati mollitia odit ratione. Omnis ut incidunt dicta architecto iste quae inventore. Veniam dicta aliquam molestias pariatur eius possimus. Nisi voluptatum ab repellat nam aliquid exercitationem. Ipsa possimus delectus excepturi ut neque perspiciatis expedita. Consectetur blanditiis quasi dignissimos nihil nam. Maiores doloribus tempora. Ut assumenda nostrum neque facere fuga expedita ab. Suscipit quae vel totam.",
    dataCriacao: "2023-09-19T18:21:59.076Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: " titulo_item",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " empresa_item",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " servico_companhia",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " produto_valor",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " produto_valor",
        nulo: false,
        tipo: "object"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Srta. Sabrina Viana",
      matricula: "27027",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 32,
        titulo: "parceria operação",
        dataCriacao: "2023-11-13T18:10:47.884Z",
        linhas: 38,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 181,
        titulo: "parceria regulamentação",
        dataCriacao: "2023-11-13T18:10:48.303Z",
        linhas: 42,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 246,
        titulo: "empreendedor fusão",
        dataCriacao: "2023-11-13T18:10:48.497Z",
        linhas: 48,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 289,
        titulo: "logística e-commerce",
        dataCriacao: "2023-11-13T18:10:48.619Z",
        linhas: 29,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 650,
        titulo: "estratégia compras",
        dataCriacao: "2023-11-13T18:10:49.619Z",
        linhas: 74,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 52,
    titulo: "Arquivos de empreendedor",
    descricao: "Expedita porro eum saepe doloremque. Reprehenderit distinctio perspiciatis facilis. Possimus accusantium voluptates cum doloremque dicta in. Dolorum earum dolor eaque veritatis iste. Fugiat natus nihil omnis labore. Nam ducimus quasi. Totam vitae eos vero cumque minima quam. Animi eos totam illo maxime mollitia. Vero voluptates aspernatur dignissimos aspernatur optio. Commodi laboriosam praesentium aliquid sint aliquid. Doloremque repudiandae tempora nisi fuga illo. Totam quo aliquid iure minus quaerat. Ex occaecati voluptatibus alias soluta adipisci blanditiis quam. Veritatis minima pariatur voluptatem. Excepturi beatae nesciunt doloremque. Aspernatur odit fugit harum facere quaerat. Occaecati doloribus ipsum est error eveniet. Harum aut voluptatibus autem eligendi. Fuga ratione doloribus deleniti perspiciatis earum. Laudantium delectus cumque corrupti adipisci. Illo perferendis eos exercitationem tempora. At pariatur fugiat in ab ipsum. Accusamus totam dolore perspiciatis. Corrupti recusandae quam aut id iusto optio. Quas deserunt tenetur. Magni vel laudantium consequatur magnam adipisci officia.",
    dataCriacao: "2023-11-19T18:21:55.256Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: " descricao_organizacao",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " descricao_custo",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " item_titulo",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " servico_preco",
        nulo: false,
        tipo: "bool"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "João Miguel Duarte",
      matricula: "7007",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 33,
        titulo: "lucratividade estratégia",
        dataCriacao: "2023-11-13T18:10:47.887Z",
        linhas: 35,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 178,
        titulo: "valor vendas",
        dataCriacao: "2023-11-13T18:10:48.292Z",
        linhas: 26,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 133,
        titulo: "estratégia estoques",
        dataCriacao: "2023-11-13T18:10:48.149Z",
        linhas: 59,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 450,
        titulo: "visibilidade negócios",
        dataCriacao: "2023-11-13T18:10:49.082Z",
        linhas: 66,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 552,
        titulo: "empreendedor estoques",
        dataCriacao: "2023-11-13T18:10:49.353Z",
        linhas: 89,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 61,
    titulo: "Relatório de competição",
    descricao: "Quam sint et quidem distinctio modi. Aspernatur minima odit eos. Fuga perspiciatis velit. Nisi maxime officia excepturi consequuntur. Esse omnis autem magni. Doloremque dolorem suscipit perferendis dicta culpa. Ullam quis odio optio dolores odit alias. Rem accusamus placeat eligendi aspernatur quis. Quia in perspiciatis harum. Dolor nam iste aliquam non. Eligendi esse id tenetur. Soluta at officia pariatur voluptate iusto occaecati. Fugit architecto sed eos quo eos. Nisi ut natus quaerat fugiat. Consectetur aliquid quidem incidunt illo. Quisquam quidem sunt iure recusandae quas. Illo cum natus excepturi totam impedit quia sit. Ipsam recusandae pariatur fugit quo quisquam. Ratione ratione eligendi esse odio dolor. Eum officiis natus aliquid similique ea laudantium. Repellat libero temporibus aut ut voluptatem. Ipsam nihil pariatur quasi accusantium ad necessitatibus. Animi nam ut neque officia totam perferendis. Est error voluptate possimus. Laborum odit ratione explicabo accusantium ad architecto voluptatibus. Illum fugit aliquam recusandae excepturi soluta itaque. Tenetur voluptatibus eaque.",
    dataCriacao: "2023-10-19T18:22:00.283Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " nome_produto",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " nome_produto",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " descricao_nome",
        nulo: true,
        tipo: "bool"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Juan Lima",
      matricula: "24024",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 36,
        titulo: "fusão estratégia",
        dataCriacao: "2023-11-13T18:10:47.895Z",
        linhas: 48,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 170,
        titulo: "retorno serviço",
        dataCriacao: "2023-11-13T18:10:48.262Z",
        linhas: 29,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 150,
        titulo: "parceria parceria",
        dataCriacao: "2023-11-13T18:10:48.204Z",
        linhas: 68,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 331,
        titulo: "visão promoção",
        dataCriacao: "2023-11-13T18:10:48.748Z",
        linhas: 86,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 392,
        titulo: "fornecedores pagamento",
        dataCriacao: "2023-11-13T18:10:48.928Z",
        linhas: 76,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 669,
        titulo: "tendência comércio",
        dataCriacao: "2023-11-13T18:10:49.671Z",
        linhas: 89,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 526,
        titulo: "fornecedores crescimento",
        dataCriacao: "2023-11-13T18:10:49.286Z",
        linhas: 44,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 771,
        titulo: "tendência pesquisa",
        dataCriacao: "2023-11-13T18:10:49.953Z",
        linhas: 90,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 693,
        titulo: "parceria conciliação",
        dataCriacao: "2023-11-13T18:10:49.741Z",
        linhas: 81,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 697,
        titulo: "qualidade desempenho",
        dataCriacao: "2023-11-13T18:10:49.752Z",
        linhas: 34,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 737,
        titulo: "crescimento feedback",
        dataCriacao: "2023-11-13T18:10:49.865Z",
        linhas: 29,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 54,
    titulo: "Arquivos de fornecedores",
    descricao: "Saepe voluptatem iure iure nam numquam. Recusandae tempora hic quaerat odit rerum. Sapiente dolor impedit quisquam cumque. Qui magnam voluptas porro minima quasi at. Aliquid vitae fugit cupiditate quos natus assumenda soluta. Exercitationem quisquam architecto temporibus reiciendis corporis. Iure commodi saepe facere suscipit minus quaerat dolor. Itaque facilis vero. Corrupti impedit a accusantium nisi doloribus amet reprehenderit. Maiores accusamus blanditiis delectus. Temporibus earum sunt ipsa animi odit hic provident. Voluptatibus minima corporis quas occaecati blanditiis. Sed sequi maiores saepe. Tempora molestias inventore repellendus tempora aliquam quibusdam quisquam. Qui aspernatur repudiandae odio aliquam. Quae ullam reiciendis aut. Possimus facilis optio possimus occaecati. Est excepturi aut cupiditate esse eveniet. Iure optio magni illum vitae dolor unde repellendus. Praesentium numquam ratione accusantium ut iure accusamus. Modi dolor placeat voluptas. Nisi consequatur omnis suscipit explicabo. Aspernatur dolorem similique. Molestiae quisquam explicabo repudiandae dolorum veritatis temporibus. Consectetur reprehenderit facere aspernatur repellat corrupti sapiente.",
    dataCriacao: "2023-11-19T18:21:55.328Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " produto_custo",
        nulo: true,
        tipo: "bool"
      ),
      Campo(
        nome: " servico_valor",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " mercadoria_nome",
        nulo: true,
        tipo: "int64"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "João Miguel Duarte",
      matricula: "7007",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 37,
        titulo: "promoção pagamento",
        dataCriacao: "2023-11-13T18:10:47.898Z",
        linhas: 29,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 117,
        titulo: "lucratividade marketing",
        dataCriacao: "2023-11-13T18:10:48.108Z",
        linhas: 79,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 131,
        titulo: "estudo logística",
        dataCriacao: "2023-11-13T18:10:48.143Z",
        linhas: 72,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 166,
        titulo: "produção inovação",
        dataCriacao: "2023-11-13T18:10:48.249Z",
        linhas: 41,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 361,
        titulo: "planejamento finanças",
        dataCriacao: "2023-11-13T18:10:48.832Z",
        linhas: 46,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 380,
        titulo: "pesquisa benchmark",
        dataCriacao: "2023-11-13T18:10:48.893Z",
        linhas: 33,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 639,
        titulo: "parceria loja",
        dataCriacao: "2023-11-13T18:10:49.590Z",
        linhas: 18,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 759,
        titulo: "franquia cliente",
        dataCriacao: "2023-11-13T18:10:49.924Z",
        linhas: 48,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 766,
        titulo: "tendência fusão",
        dataCriacao: "2023-11-13T18:10:49.941Z",
        linhas: 58,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 125,
    titulo: "Arquivos de parceria",
    descricao: "Laboriosam libero perspiciatis voluptate quam laudantium doloremque. Veniam accusamus porro voluptatem numquam. Velit deleniti ad eius vel modi fugit. Rerum culpa accusamus alias. Sapiente nisi quaerat aliquid voluptates quam. Id totam repellendus ut corrupti. Praesentium ad delectus architecto quod animi. Corrupti ex quibusdam. Quasi blanditiis quidem repellendus. Accusantium unde excepturi doloribus expedita blanditiis debitis. Voluptates odit inventore dignissimos. Sapiente aut saepe quisquam itaque dignissimos. Veniam non optio deleniti perspiciatis recusandae. Facere cumque dolore ipsum possimus odio. Itaque dolorum vero repellat consectetur temporibus iure atque. Architecto accusamus debitis dolor laboriosam occaecati commodi. Voluptas dolor nostrum a facilis eius. Quae accusantium facilis delectus. Suscipit soluta blanditiis numquam. Enim cupiditate temporibus officiis consectetur voluptates cupiditate. Aspernatur accusantium perspiciatis cum sapiente maxime. Accusantium expedita dolores ut facilis ab ullam odio. Consequuntur corporis vel itaque. Quis necessitatibus tempore necessitatibus eos. Fugit tempore esse hic molestias deleniti. Harum suscipit vero ut iusto quos.",
    dataCriacao: "2023-11-19T18:21:57.888Z",
    quantidadeCampos: 2,
    campos: [
      Campo(
        nome: " titulo",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " preco_do_produto",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Vicente Farias",
      matricula: "15015",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 39,
        titulo: "atendimento crescimento",
        dataCriacao: "2023-11-13T18:10:47.904Z",
        linhas: 88,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 98,
        titulo: "liquidação liderança",
        dataCriacao: "2023-11-13T18:10:48.057Z",
        linhas: 57,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 151,
        titulo: "qualidade lucro",
        dataCriacao: "2023-11-13T18:10:48.206Z",
        linhas: 42,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 793,
        titulo: "estrutura expansão",
        dataCriacao: "2023-11-13T18:10:50.009Z",
        linhas: 73,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 93,
    titulo: "Arquivos de desempenho",
    descricao: "Cum similique dignissimos quos doloremque eveniet natus cupiditate. Nobis cum perspiciatis tenetur id. Doloribus sint velit blanditiis deserunt esse alias. Dolor neque id a nulla illo harum. Similique commodi expedita quae necessitatibus eligendi id. Error delectus aperiam. Optio eum tempore voluptas labore. Pariatur nemo exercitationem odio enim ipsa omnis natus. Tenetur velit provident. Quod repellat aspernatur neque a. Animi delectus corrupti commodi. Accusamus expedita sunt. Laborum enim saepe dolor laborum neque minus. Magnam ea sint aut pariatur. Ad assumenda architecto esse rerum beatae. Consectetur mollitia repellendus. Corporis culpa distinctio at aliquid. Deserunt laboriosam reprehenderit. Repudiandae harum beatae modi quasi quia sit iure. Neque vel delectus eum. Repellendus officia sapiente maiores. Maxime ipsa dolorem. Ratione enim tempora neque quae. Ducimus temporibus rerum repellat eum laudantium. Quos facilis corrupti unde illo. Aperiam necessitatibus ad impedit incidunt. Praesentium dignissimos aperiam eius earum. Magni molestiae sit vero quidem voluptate quasi. Quam voluptate soluta soluta occaecati consectetur.",
    dataCriacao: "2023-10-19T18:21:54.056Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: " servico_preco",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " item_titulo",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " servico_empresa",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " titulo_item",
        nulo: true,
        tipo: "int64"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Diogo Martins",
      matricula: "11011",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 40,
        titulo: "fidelização estudo",
        dataCriacao: "2023-11-13T18:10:47.905Z",
        linhas: 70,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 42,
        titulo: "concilia despesas",
        dataCriacao: "2023-11-13T18:10:47.910Z",
        linhas: 54,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 72,
        titulo: "estratégia logística",
        dataCriacao: "2023-11-13T18:10:47.991Z",
        linhas: 37,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 113,
        titulo: "qualidade conciliação",
        dataCriacao: "2023-11-13T18:10:48.098Z",
        linhas: 93,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 555,
        titulo: "fornecimento valor",
        dataCriacao: "2023-11-13T18:10:49.361Z",
        linhas: 22,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 729,
        titulo: "estudo capital",
        dataCriacao: "2023-11-13T18:10:49.843Z",
        linhas: 50,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 190,
    titulo: "Template de preço",
    descricao: "Reiciendis dolore laborum consequuntur minus quae nulla. Commodi est voluptatum quisquam ipsam iste maxime voluptates. Nobis veniam repellendus. Rerum nulla a iure deserunt. Doloribus distinctio fuga consectetur nisi suscipit. Numquam possimus sunt nesciunt magnam similique distinctio. Molestias quisquam illo commodi perspiciatis placeat tempora unde. Sit ut et quasi consectetur. Eum iure quis asperiores. Perferendis iusto nisi quasi quae quis excepturi fugit. Optio temporibus id quibusdam doloremque omnis distinctio. Libero pariatur dolore numquam. Occaecati corporis reprehenderit accusamus. Fugit dolor reiciendis corrupti nostrum. Pariatur earum omnis. Quia sunt illum quo. Officia aspernatur animi laborum ipsum est ullam. Quisquam aperiam ex dolorum eaque labore officia. Provident at veritatis veritatis nulla eius pariatur aliquam. Incidunt delectus asperiores consequuntur voluptates. Omnis quo quidem officia. Asperiores deleniti unde itaque repudiandae. Eveniet a cupiditate. Possimus cum nemo dolorem fugit dolore. Fugit pariatur reiciendis ad. Libero perferendis numquam doloremque provident vitae.",
    dataCriacao: "2023-08-19T18:21:59.457Z",
    quantidadeCampos: 2,
    campos: [
      Campo(
        nome: " servico_organizacao",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " empresa_do_item",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Anthony Costela",
      matricula: "9009",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 41,
        titulo: "despesas preço",
        dataCriacao: "2023-11-13T18:10:47.908Z",
        linhas: 83,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 236,
        titulo: "pagamento desempenho",
        dataCriacao: "2023-11-13T18:10:48.468Z",
        linhas: 75,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 249,
        titulo: "estrutura concorrência",
        dataCriacao: "2023-11-13T18:10:48.507Z",
        linhas: 78,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 218,
        titulo: "marketing concorrência",
        dataCriacao: "2023-11-13T18:10:48.417Z",
        linhas: 19,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 455,
        titulo: "mercado estoques",
        dataCriacao: "2023-11-13T18:10:49.097Z",
        linhas: 63,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 163,
    titulo: "Relatório de desempenho",
    descricao: "Tempora nihil ipsum iure optio cum. Eum tempora esse illo blanditiis voluptatum earum. Animi recusandae nulla asperiores ratione beatae numquam. Alias ullam accusantium temporibus. Vero consectetur quam consequatur modi. Molestias culpa nam pariatur hic. Officia natus saepe. Asperiores sint perferendis reprehenderit facilis non. Praesentium voluptatibus aliquam aspernatur rerum. Maiores assumenda veritatis enim modi deserunt omnis. Officiis neque consequatur ea voluptate pariatur. Quasi fuga aliquid doloribus. Iure numquam facere dicta asperiores ullam. Praesentium hic facilis unde. Magnam praesentium eaque. Veniam ipsa quod asperiores quibusdam beatae. Aspernatur eaque delectus non. Sit sed hic molestiae. Error repellendus consequatur excepturi alias eveniet. Nesciunt hic quos. Eum natus dignissimos voluptates. Saepe molestias accusamus eligendi. Sint laborum fuga rem ipsa distinctio atque. Eveniet eos impedit ipsam hic voluptates deleniti. Nulla optio libero praesentium. Architecto numquam optio aliquam repudiandae veritatis rem autem. Magnam tempora illum eligendi. Quidem beatae iusto accusantium earum.",
    dataCriacao: "2023-10-19T18:21:59.800Z",
    quantidadeCampos: 2,
    campos: [
      Campo(
        nome: " empresa_produto",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " produto_companhia",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Davi Lucas da Rocha",
      matricula: "8008",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 43,
        titulo: "lucro investimento",
        dataCriacao: "2023-11-13T18:10:47.913Z",
        linhas: 40,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 234,
        titulo: "análise visibilidade",
        dataCriacao: "2023-11-13T18:10:48.462Z",
        linhas: 93,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 266,
        titulo: "fusão franquia",
        dataCriacao: "2023-11-13T18:10:48.553Z",
        linhas: 22,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 726,
        titulo: "estoque produto",
        dataCriacao: "2023-11-13T18:10:49.834Z",
        linhas: 18,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 44,
    titulo: "Template de concorrência",
    descricao: "Quasi sequi laboriosam facilis doloremque fugiat. Quos porro vitae vel ab ipsam impedit. Delectus temporibus pariatur accusantium quia dolores natus. Itaque soluta vel quaerat quasi eum. Illum labore debitis repellat. A blanditiis amet recusandae impedit. Quos quos veritatis sequi a. Occaecati quas neque nostrum velit. Odit iusto laboriosam. Fugiat voluptatem molestiae non eius fugiat quaerat. Et eligendi maxime asperiores quos laboriosam. Cum impedit et illum quas autem. Odit reprehenderit accusamus deserunt officiis iusto. Fugiat quas voluptates provident assumenda. Alias nostrum sequi quis provident. Quasi harum rerum quisquam nisi vitae occaecati. Illo natus ipsa. Maiores harum aperiam harum dolor. Quos tempore soluta enim quia fugit consequatur. Debitis voluptate fugiat aperiam tempore necessitatibus nihil. Animi temporibus distinctio sapiente laudantium. Corporis nisi deserunt consectetur. Nesciunt odit deserunt odit explicabo cum. Optio provident fugiat qui repellat. Neque minus necessitatibus. Sed eveniet laborum sunt odit reiciendis quisquam. Voluptatibus ipsum voluptas temporibus dolores aspernatur quos. Sapiente corrupti fugiat quas.",
    dataCriacao: "2023-11-19T18:21:54.971Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: "preco",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " servico_preco",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " servico_organizacao",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: "data",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Eloah Farias",
      matricula: "1001",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 44,
        titulo: "promoção visibilidade",
        dataCriacao: "2023-11-13T18:10:47.915Z",
        linhas: 88,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 50,
        titulo: "promoção loja",
        dataCriacao: "2023-11-13T18:10:47.931Z",
        linhas: 70,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 66,
        titulo: "marketing satisfação",
        dataCriacao: "2023-11-13T18:10:47.975Z",
        linhas: 79,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 283,
        titulo: "franquia concorrência",
        dataCriacao: "2023-11-13T18:10:48.601Z",
        linhas: 51,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 348,
        titulo: "logística concorrência",
        dataCriacao: "2023-11-13T18:10:48.796Z",
        linhas: 69,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 362,
        titulo: "fornecedores comércio",
        dataCriacao: "2023-11-13T18:10:48.835Z",
        linhas: 29,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 452,
        titulo: "estratégia finanças",
        dataCriacao: "2023-11-13T18:10:49.087Z",
        linhas: 39,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 613,
        titulo: "conciliação compras",
        dataCriacao: "2023-11-13T18:10:49.521Z",
        linhas: 59,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 671,
        titulo: "qualidade treinamento",
        dataCriacao: "2023-11-13T18:10:49.678Z",
        linhas: 56,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 683,
        titulo: "gerenciamento estoque",
        dataCriacao: "2023-11-13T18:10:49.714Z",
        linhas: 20,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 113,
    titulo: "Arquivos de valor",
    descricao: "Architecto reprehenderit nostrum possimus numquam. Non voluptatum ad in inventore ex consequatur. Perspiciatis unde commodi. Provident omnis maiores at ab. Sapiente sequi id quis illum aliquid itaque quibusdam. Harum tempora laudantium placeat itaque ipsa alias rem. Fugiat harum alias ad esse ea similique sapiente. Praesentium quos nesciunt at rem. Enim reprehenderit quia quisquam ea quod expedita. In suscipit sequi quibusdam quidem. Beatae voluptas possimus hic hic consequuntur. Voluptate atque at dignissimos autem quibusdam at. Possimus magni autem sequi non. Est voluptatibus reiciendis autem. Eum asperiores adipisci inventore quos temporibus ab voluptas. Vitae dolor ea blanditiis architecto suscipit. Laborum consequuntur architecto repellat possimus voluptatibus. Nihil provident repellat soluta. Ullam quasi facilis id labore explicabo perspiciatis sed. Alias veniam molestias dignissimos quo fugit corporis. Doloremque saepe illo doloribus aliquam facere vero. Iusto soluta perferendis reprehenderit harum cupiditate. Dolore provident voluptatibus velit ex velit ratione. Asperiores itaque nobis quam.",
    dataCriacao: "2023-11-19T18:21:57.458Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " preco_do_produto",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " item_preco",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " servico_empresa",
        nulo: true,
        tipo: "bool"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Gustavo Lima",
      matricula: "32032",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 45,
        titulo: "finanças valor",
        dataCriacao: "2023-11-13T18:10:47.918Z",
        linhas: 34,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 68,
        titulo: "desempenho fornecimento",
        dataCriacao: "2023-11-13T18:10:47.980Z",
        linhas: 35,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 87,
        titulo: "capital estoques",
        dataCriacao: "2023-11-13T18:10:48.029Z",
        linhas: 35,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 310,
        titulo: "concorrência análise",
        dataCriacao: "2023-11-13T18:10:48.688Z",
        linhas: 100,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 327,
        titulo: "estrutura lucratividade",
        dataCriacao: "2023-11-13T18:10:48.737Z",
        linhas: 59,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 587,
        titulo: "lucro estrutura",
        dataCriacao: "2023-11-13T18:10:49.450Z",
        linhas: 31,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 538,
        titulo: "compras estoques",
        dataCriacao: "2023-11-13T18:10:49.319Z",
        linhas: 18,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 568,
        titulo: "estoque parceria",
        dataCriacao: "2023-11-13T18:10:49.397Z",
        linhas: 15,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 590,
        titulo: "benchmark regulamentação",
        dataCriacao: "2023-11-13T18:10:49.458Z",
        linhas: 53,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 797,
        titulo: "concorrência visibilidade",
        dataCriacao: "2023-11-13T18:10:50.019Z",
        linhas: 71,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 43,
    titulo: "Template de procedimento",
    descricao: "A dolorem neque ipsa quisquam exercitationem. Dolorem voluptates dignissimos blanditiis eveniet atque adipisci. Provident id sed ipsa itaque dolor ipsam. Deserunt reiciendis mollitia. Illum occaecati nisi quod optio reiciendis. Fuga eligendi deleniti dolor eius omnis. Praesentium et vel quibusdam. Aliquid minus quam sit. Ex nihil natus eveniet laboriosam eius totam. Dolorem minus doloribus fugit consectetur adipisci. Hic sunt placeat id molestias vero aut. Nemo esse nulla molestiae tenetur debitis quod. Enim minus nesciunt est. Nesciunt laudantium dolorum quidem voluptates. Nesciunt consequatur explicabo impedit ducimus dicta. Natus itaque dolore est corporis. Libero ratione consequatur esse. Quae tempore ab fugiat iure ad. Perspiciatis pariatur itaque incidunt aliquam nisi exercitationem. At ipsam voluptatem eos. In reprehenderit neque ea. Vel corporis quidem. Facilis illum perspiciatis velit animi. Accusamus blanditiis nam doloremque debitis sequi quisquam. Eum ea nesciunt odit nemo eius consequuntur. Impedit commodi ad mollitia praesentium ullam praesentium eveniet. Rerum labore dolores iusto vitae. Delectus corporis iure delectus laudantium vel.",
    dataCriacao: "2023-11-19T18:21:54.910Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " item_valor",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " titulo_do_item",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " descricao_custo",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Melissa da Paz",
      matricula: "40040",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 46,
        titulo: "mercado investimento",
        dataCriacao: "2023-11-13T18:10:47.920Z",
        linhas: 91,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 109,
        titulo: "benchmark logística",
        dataCriacao: "2023-11-13T18:10:48.087Z",
        linhas: 43,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 211,
        titulo: "benchmark qualidade",
        dataCriacao: "2023-11-13T18:10:48.396Z",
        linhas: 16,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 225,
        titulo: "estoque expansão",
        dataCriacao: "2023-11-13T18:10:48.437Z",
        linhas: 15,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 329,
        titulo: "tendência fusão",
        dataCriacao: "2023-11-13T18:10:48.743Z",
        linhas: 88,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 612,
        titulo: "fidelização exportar",
        dataCriacao: "2023-11-13T18:10:49.518Z",
        linhas: 78,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 670,
        titulo: "feedback lucratividade",
        dataCriacao: "2023-11-13T18:10:49.676Z",
        linhas: 18,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 707,
        titulo: "estrutura produto",
        dataCriacao: "2023-11-13T18:10:49.779Z",
        linhas: 94,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 12,
    titulo: "Relatório de franquia",
    descricao: "Asperiores vitae suscipit eius exercitationem natus nam. Provident aut voluptates facere eos dolore ullam voluptate. Ex quia corporis iste ullam at. Nesciunt pariatur optio voluptatum cumque. Repellat ipsa itaque aperiam occaecati fugiat vitae. Tenetur quidem id necessitatibus doloribus debitis soluta. Laboriosam alias sapiente vero culpa. Vel illo quia aliquam autem laborum adipisci ullam. Repellat minus eum animi ex. Illo rerum in ad modi nostrum provident. Officia quis aspernatur vero esse accusantium. Voluptatum unde excepturi esse. Natus unde aperiam amet laborum consequuntur aperiam minus. Aut minus corporis illum consequatur atque distinctio. Aliquam accusamus expedita fuga nemo. Assumenda ex reprehenderit eius facere blanditiis repudiandae culpa. Exercitationem vero libero ut ex. Sit repudiandae voluptatem magnam facilis dicta. Iusto eum sed commodi ipsa iste minima perferendis. Repellendus reprehenderit natus laudantium a a sapiente laudantium. Non inventore porro pariatur. Earum ad blanditiis possimus aut tempora ipsam nobis. Officia beatae quam dicta laudantium.",
    dataCriacao: "2023-09-19T18:21:54.091Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: "data",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: "nome_do_produto",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " produto_empresa",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " item_descricao",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: "produto_nome",
        nulo: false,
        tipo: "int64"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Beatriz Rocha",
      matricula: "14014",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 48,
        titulo: "fornecimento lucro",
        dataCriacao: "2023-11-13T18:10:47.926Z",
        linhas: 100,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 210,
        titulo: "promoção gerenciamento",
        dataCriacao: "2023-11-13T18:10:48.394Z",
        linhas: 17,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 443,
        titulo: "lucro estratégia",
        dataCriacao: "2023-11-13T18:10:49.064Z",
        linhas: 70,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 143,
    titulo: "Relatório de valor",
    descricao: "At aliquid rerum odio saepe. Pariatur repellat quisquam provident et eos libero cupiditate. Quis suscipit corrupti ullam vero inventore illo. Ad iusto sed minus. Velit praesentium facilis nostrum consequatur iusto illum. Possimus assumenda cumque nemo cum iure eveniet. Non aspernatur ab perspiciatis quas neque. Sunt asperiores alias consectetur earum earum. Aliquid pariatur illum quidem temporibus minima facilis. Magni animi nihil vero. Rem pariatur exercitationem nihil. Numquam quia esse ut. Quod molestiae vero deserunt dolor. Dolorum ratione laborum nam pariatur modi nam. Inventore fuga dolores libero. Consequuntur fugit tempora beatae dolorum a pariatur. Aut soluta adipisci veritatis dolores. Delectus repellendus laudantium quia distinctio officiis laborum. Deserunt modi iure mollitia sed perspiciatis. Ullam ea est exercitationem placeat minus tempora sapiente. Dolorem officia beatae a debitis. Optio maxime perferendis aliquid delectus. Atque eaque sed voluptatum ab. Cum rerum doloribus illo tempora. Nemo magnam excepturi magni accusamus non optio ipsam. Illo modi eius distinctio.",
    dataCriacao: "2023-09-19T18:21:59.076Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: "produto_nome",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " produto_organizacao",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " empresa_do_produto",
        nulo: false,
        tipo: "bool"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Eloah Farias",
      matricula: "1001",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 49,
        titulo: "investimento competição",
        dataCriacao: "2023-11-13T18:10:47.928Z",
        linhas: 87,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 124,
        titulo: "visão fornecedores",
        dataCriacao: "2023-11-13T18:10:48.126Z",
        linhas: 52,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 513,
        titulo: "empregados despesas",
        dataCriacao: "2023-11-13T18:10:49.251Z",
        linhas: 11,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 637,
        titulo: "e-commerce estrutura",
        dataCriacao: "2023-11-13T18:10:49.585Z",
        linhas: 90,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 690,
        titulo: "demografia estratégia",
        dataCriacao: "2023-11-13T18:10:49.734Z",
        linhas: 27,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 183,
    titulo: "Arquivos de lucratividade",
    descricao: "Excepturi fugit reiciendis asperiores eius molestiae. Error deserunt explicabo consequatur in aspernatur. Commodi perspiciatis debitis assumenda. Officiis laborum asperiores ex vero adipisci. Est animi quis voluptate nostrum. Sapiente ea aliquam delectus quibusdam. Natus magnam non. Expedita tenetur expedita voluptatibus sapiente. Commodi iure veritatis qui quo velit reiciendis doloribus. Maxime enim eaque magni porro possimus iusto. Similique est cumque laudantium aliquid. Quae quam voluptate ratione. Perferendis id maiores minima nostrum repellat enim. Adipisci consequuntur animi modi similique. Architecto adipisci molestiae. Maxime cupiditate ab expedita saepe perspiciatis. Itaque quo tempora rem velit ipsum. Voluptas distinctio itaque iusto laborum incidunt molestias. Voluptates quos animi tempore quibusdam. Dolor ut inventore qui impedit cum. Dicta officia nihil magnam magnam eaque odit. Tempora non aliquid dolorem esse aspernatur culpa. Nesciunt commodi voluptates eaque facere nulla beatae. Perspiciatis atque dolor a eveniet enim vero. Illo temporibus tempore voluptas error. Rerum dolor soluta reiciendis dolore deleniti facilis. Dolor maxime earum saepe numquam fugiat.",
    dataCriacao: "2023-08-19T18:21:59.457Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " servico_organizacao",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " descricao_firma",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " descricao_organizacao",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Melissa da Paz",
      matricula: "40040",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 51,
        titulo: "segmentação franquia",
        dataCriacao: "2023-11-13T18:10:47.933Z",
        linhas: 55,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 81,
        titulo: "satisfação mercado",
        dataCriacao: "2023-11-13T18:10:48.013Z",
        linhas: 14,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 255,
        titulo: "satisfação logística",
        dataCriacao: "2023-11-13T18:10:48.524Z",
        linhas: 34,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 349,
        titulo: "franquia exportar",
        dataCriacao: "2023-11-13T18:10:48.799Z",
        linhas: 34,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 444,
        titulo: "estratégia liderança",
        dataCriacao: "2023-11-13T18:10:49.066Z",
        linhas: 26,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 479,
        titulo: "cliente orçamento",
        dataCriacao: "2023-11-13T18:10:49.162Z",
        linhas: 60,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 596,
        titulo: "inovação concorrência",
        dataCriacao: "2023-11-13T18:10:49.474Z",
        linhas: 59,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 605,
        titulo: "estratégia investimento",
        dataCriacao: "2023-11-13T18:10:49.497Z",
        linhas: 46,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 97,
    titulo: "Template de inovação",
    descricao: "Repellendus ratione asperiores expedita. Quasi expedita occaecati nihil magnam quia possimus. Ut sunt occaecati id doloribus quas laborum. Tenetur harum ducimus quod id explicabo sint inventore. Nulla ab quibusdam voluptatibus earum architecto hic deserunt. Sit quaerat beatae possimus ipsam earum molestias. Velit ipsa pariatur debitis alias accusamus tempora dicta. Quo occaecati tempore nesciunt molestiae. Eum maxime ab ea vero quaerat. Veritatis omnis voluptatibus sequi. Tempore consectetur consequuntur officiis eum placeat. Possimus molestias temporibus dolores totam est. Eos voluptatem omnis quibusdam non cumque. Eum dolore cumque incidunt voluptas itaque placeat. Odio numquam amet quasi amet. Veniam assumenda facere doloremque non id soluta. Iure labore earum possimus autem vel. Accusamus reiciendis eius quam. Amet delectus iure. Labore minus enim doloremque necessitatibus modi tempore. Reiciendis facilis illum dolorum. Fuga recusandae aliquam dolore quam at aut. Asperiores omnis eius officia error molestias doloremque. Possimus laborum sint dolorum. Adipisci amet repellat tempore velit libero corrupti. Accusamus enim vitae nihil.",
    dataCriacao: "2023-10-19T18:21:54.056Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: "preco",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " item_nome",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " item_organizacao",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " mercadoria_preco",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " item_preco",
        nulo: false,
        tipo: "int64"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Carolina Araújo",
      matricula: "39039",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 52,
        titulo: "parceria fornecimento",
        dataCriacao: "2023-11-13T18:10:47.936Z",
        linhas: 86,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 54,
        titulo: "expansão lucratividade",
        dataCriacao: "2023-11-13T18:10:47.941Z",
        linhas: 77,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 308,
        titulo: "produto serviço",
        dataCriacao: "2023-11-13T18:10:48.682Z",
        linhas: 28,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 311,
        titulo: "risco risco",
        dataCriacao: "2023-11-13T18:10:48.691Z",
        linhas: 57,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 486,
        titulo: "comércio preço",
        dataCriacao: "2023-11-13T18:10:49.179Z",
        linhas: 25,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 156,
    titulo: "Arquivos de procedimento",
    descricao: "Pariatur tempore error velit repellat perferendis. Hic quis neque rem beatae dicta corporis. Illo ab ullam dolorum. Libero nemo unde adipisci. Molestias aperiam facilis eveniet dolore odit atque. Beatae quaerat eius totam repellendus culpa quia. Cupiditate aperiam illo dolores ex. In sint molestias consequatur. Corrupti laboriosam cumque quas voluptatum modi blanditiis laboriosam. Nam exercitationem laudantium debitis consequuntur quas optio et. Dolor molestiae similique molestias nisi commodi sunt. Reprehenderit at accusamus quis. Ipsa minus numquam adipisci adipisci excepturi natus. Vitae cum non iusto consequuntur. Aperiam autem blanditiis omnis asperiores adipisci nulla. Quia ratione consequatur quis. Tempora veritatis expedita ab. Facilis quas alias sit nesciunt. Beatae provident dolorem. Deleniti quo quia autem deleniti minima velit. Ducimus quis vero. Necessitatibus cumque nihil ratione laudantium est. Nihil explicabo deserunt quis rerum ducimus fugiat. Sequi doloremque officia neque hic. Fuga vero ab alias maiores eaque vel aperiam. Nesciunt possimus nihil et nesciunt quod voluptas ipsam.",
    dataCriacao: "2023-09-19T18:21:59.076Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: " produto_descricao",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " produto_preco",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " empresa_item",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " descricao_preco",
        nulo: true,
        tipo: "bool"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Vicente Farias",
      matricula: "15015",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 53,
        titulo: "fusão crescimento",
        dataCriacao: "2023-11-13T18:10:47.938Z",
        linhas: 51,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 159,
        titulo: "pagamento visibilidade",
        dataCriacao: "2023-11-13T18:10:48.228Z",
        linhas: 48,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 305,
        titulo: "logística logística",
        dataCriacao: "2023-11-13T18:10:48.674Z",
        linhas: 43,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 655,
        titulo: "análise estratégia",
        dataCriacao: "2023-11-13T18:10:49.635Z",
        linhas: 31,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 481,
        titulo: "lucro procedimento",
        dataCriacao: "2023-11-13T18:10:49.167Z",
        linhas: 65,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 503,
        titulo: "mercado concorrência",
        dataCriacao: "2023-11-13T18:10:49.226Z",
        linhas: 54,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 564,
        titulo: "satisfação vendas",
        dataCriacao: "2023-11-13T18:10:49.385Z",
        linhas: 26,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 702,
        titulo: "produto segmentação",
        dataCriacao: "2023-11-13T18:10:49.764Z",
        linhas: 91,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 713,
        titulo: "fidelização regulamentação",
        dataCriacao: "2023-11-13T18:10:49.799Z",
        linhas: 35,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 751,
        titulo: "estoques mercado",
        dataCriacao: "2023-11-13T18:10:49.901Z",
        linhas: 89,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 96,
    titulo: "Template de qualidade",
    descricao: "Fugiat reiciendis exercitationem tempora. Enim perferendis suscipit facere placeat atque minus. Mollitia ex maiores quae. Cum molestiae perspiciatis. Consectetur laborum tempore quia culpa. Impedit ab provident error recusandae cumque sit. Dolorum consequatur velit neque inventore dolores sint. Ad numquam officia amet placeat nisi. Tenetur totam nisi. Expedita incidunt nisi delectus. Possimus nam culpa dolorum inventore quas cumque. Quam consequuntur nemo dolore animi dicta. Saepe quod ullam laboriosam culpa fugiat numquam. Quasi inventore cum possimus vel quas provident. Vel doloremque adipisci neque at. Optio sed hic illum distinctio odit. Id alias mollitia commodi necessitatibus voluptate illum quidem. Iure consequatur molestias reiciendis at adipisci asperiores. Dignissimos culpa ad nam ex natus libero omnis. Non enim voluptas aliquam facere. Nemo qui aperiam totam assumenda totam. Rem explicabo numquam quod minus. Voluptatem sunt quia deserunt corporis quos aspernatur. Praesentium ullam eum hic pariatur reiciendis libero. Rerum error voluptatem quis reiciendis dolores sapiente. Hic aliquam mollitia. Magnam ea est odit. Fugit quo sit quae. Porro in quam error nam.",
    dataCriacao: "2023-10-19T18:21:54.056Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " produto_valor",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: "preco",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " item_preco",
        nulo: true,
        tipo: "bool"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Sr. Luiz Fernando Rezende",
      matricula: "16016",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 58,
        titulo: "empregados investimento",
        dataCriacao: "2023-11-13T18:10:47.951Z",
        linhas: 31,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 546,
        titulo: "risco capital",
        dataCriacao: "2023-11-13T18:10:49.338Z",
        linhas: 85,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 752,
        titulo: "regulamentação liderança",
        dataCriacao: "2023-11-13T18:10:49.903Z",
        linhas: 98,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 45,
    titulo: "Template de qualidade",
    descricao: "Similique dolorum modi. Quisquam esse possimus perspiciatis error odio sunt minus. Adipisci occaecati dolorem laborum. Quibusdam eligendi minima in incidunt doloribus quisquam. Sed velit harum perferendis corporis commodi. Id magnam ratione doloremque magnam eveniet. Nulla magni illo amet. Quae omnis illum eveniet voluptates modi similique accusamus. Quas ipsum saepe at similique. Cum culpa incidunt nam culpa corporis quibusdam doloremque. Eaque consequatur voluptatum. Quasi doloribus reiciendis perferendis. Amet eaque nobis sed occaecati exercitationem facilis aspernatur. A expedita corporis eius odit placeat. Magnam doloribus adipisci placeat possimus odio. Maiores esse rerum velit dolores. Enim excepturi dignissimos illo quibusdam. Nemo omnis molestias dolores aspernatur explicabo. Vel consequatur hic neque ipsum. Ratione aliquam sit alias. Adipisci optio possimus animi minima tenetur similique. Vero laborum dicta eos excepturi quam. Atque architecto quisquam aperiam. Necessitatibus labore optio eaque mollitia excepturi. Aut expedita ratione officiis occaecati praesentium numquam. Maxime maxime alias culpa itaque veritatis. Omnis sed voluptate rem recusandae rem.",
    dataCriacao: "2023-11-19T18:21:55.006Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: "data",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " descricao_organizacao",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " mercadoria_preco",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: "nome",
        nulo: false,
        tipo: "object"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "João Miguel Duarte",
      matricula: "7007",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 59,
        titulo: "regulamentação demografia",
        dataCriacao: "2023-11-13T18:10:47.954Z",
        linhas: 50,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 121,
        titulo: "estratégia estoque",
        dataCriacao: "2023-11-13T18:10:48.118Z",
        linhas: 16,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 187,
        titulo: "parceria desempenho",
        dataCriacao: "2023-11-13T18:10:48.322Z",
        linhas: 22,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 154,
        titulo: "estoques benchmark",
        dataCriacao: "2023-11-13T18:10:48.214Z",
        linhas: 39,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 347,
        titulo: "despesas tendência",
        dataCriacao: "2023-11-13T18:10:48.793Z",
        linhas: 36,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 448,
        titulo: "despesas logística",
        dataCriacao: "2023-11-13T18:10:49.077Z",
        linhas: 87,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 451,
        titulo: "loja inovação",
        dataCriacao: "2023-11-13T18:10:49.084Z",
        linhas: 57,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 582,
        titulo: "loja visão",
        dataCriacao: "2023-11-13T18:10:49.435Z",
        linhas: 41,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 487,
        titulo: "planejamento gerenciamento",
        dataCriacao: "2023-11-13T18:10:49.182Z",
        linhas: 52,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 166,
    titulo: "Template de liderança",
    descricao: "Accusamus vel ea dolorum excepturi. Modi blanditiis nulla placeat. Ab inventore odio vitae quas. Eius dolor corporis possimus. Quae a tenetur exercitationem maxime excepturi quos asperiores. Facere adipisci ipsa repellat. Itaque fugiat dolor veniam sapiente reprehenderit nostrum ipsum. Consectetur minima iusto harum eum. Quisquam in dolorem maxime explicabo error perspiciatis molestias. Tenetur eum nesciunt eius hic magni aliquam illo. Quod magnam qui labore facilis fugiat qui. Repudiandae aspernatur doloremque illo occaecati rem. Dolorem soluta libero. Doloribus quisquam aperiam reprehenderit alias recusandae sint itaque. Blanditiis est praesentium sapiente mollitia. Officia reprehenderit unde ad tempora labore. Facilis nostrum at. Nobis quam sapiente quibusdam consectetur veniam. Excepturi autem libero facere doloremque similique. Quis consequuntur eligendi beatae. Quo soluta voluptate voluptate sint repellat earum ipsam. Aliquid sequi modi necessitatibus quasi sint. Asperiores sint magni nemo harum. Fugiat expedita consequuntur esse quasi quos. Labore pariatur sed sapiente voluptatum quae. Quos atque quod at esse.",
    dataCriacao: "2023-10-19T18:21:59.800Z",
    quantidadeCampos: 2,
    campos: [
      Campo(
        nome: " custo",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " produto_custo",
        nulo: false,
        tipo: "bool"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Carolina Araújo",
      matricula: "39039",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 60,
        titulo: "logística loja",
        dataCriacao: "2023-11-13T18:10:47.956Z",
        linhas: 67,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 69,
        titulo: "liquidação orçamento",
        dataCriacao: "2023-11-13T18:10:47.982Z",
        linhas: 83,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 137,
        titulo: "expansão gerenciamento",
        dataCriacao: "2023-11-13T18:10:48.165Z",
        linhas: 68,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 288,
        titulo: "estrutura retorno",
        dataCriacao: "2023-11-13T18:10:48.616Z",
        linhas: 31,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 609,
        titulo: "fusão satisfação",
        dataCriacao: "2023-11-13T18:10:49.510Z",
        linhas: 10,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 476,
        titulo: "despesas atendimento",
        dataCriacao: "2023-11-13T18:10:49.154Z",
        linhas: 32,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 518,
        titulo: "atendimento liderança",
        dataCriacao: "2023-11-13T18:10:49.264Z",
        linhas: 76,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 712,
        titulo: "estratégia logística",
        dataCriacao: "2023-11-13T18:10:49.792Z",
        linhas: 62,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 72,
    titulo: "Arquivos de fornecedores",
    descricao: "Necessitatibus nostrum necessitatibus id hic. Ex quasi excepturi hic. Harum reprehenderit asperiores architecto laborum deserunt. Voluptatum hic accusantium. Aut earum eos unde corrupti vitae. At sequi doloribus soluta necessitatibus. Et fugiat molestias itaque enim laboriosam nulla. Cupiditate enim magni assumenda. Exercitationem quam consequuntur quia consectetur aut facere harum. Excepturi sequi earum dolor. Nostrum eum illum explicabo architecto ducimus expedita voluptas. Quos accusamus dolore repellendus modi animi. Et a unde reiciendis ad nesciunt numquam. Necessitatibus repudiandae unde possimus facilis doloremque ut numquam. Harum vel expedita rem repudiandae. Nostrum quisquam quaerat eum. Sequi perferendis corrupti tenetur sed. Maxime inventore voluptates. Dolorem atque dolore velit rem. Fuga eum distinctio quas labore sint enim eligendi. Culpa illum nostrum esse cum dolorem. Aliquid ratione quae. Nisi maxime possimus nobis quasi deserunt. Asperiores assumenda facere labore iste excepturi vero ut. Ex odit ad quod aut voluptatem. Rem sit pariatur eaque id iste at. Quisquam eaque voluptate deleniti a. Molestias illum consectetur itaque.",
    dataCriacao: "2023-11-19T18:21:55.982Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: " servico_valor",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " valor_item",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " produto_organizacao",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " servico_descricao",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " empresa_produto",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Vicente Farias",
      matricula: "15015",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 61,
        titulo: "empreendedor produção",
        dataCriacao: "2023-11-13T18:10:47.959Z",
        linhas: 51,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 73,
        titulo: "produto feedback",
        dataCriacao: "2023-11-13T18:10:47.993Z",
        linhas: 27,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 75,
        titulo: "orçamento crescimento",
        dataCriacao: "2023-11-13T18:10:47.998Z",
        linhas: 19,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 179,
        titulo: "atendimento negócios",
        dataCriacao: "2023-11-13T18:10:48.297Z",
        linhas: 32,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 277,
        titulo: "e-commerce treinamento",
        dataCriacao: "2023-11-13T18:10:48.584Z",
        linhas: 10,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 304,
        titulo: "segmentação demografia",
        dataCriacao: "2023-11-13T18:10:48.670Z",
        linhas: 66,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 269,
        titulo: "estratégia procedimento",
        dataCriacao: "2023-11-13T18:10:48.561Z",
        linhas: 85,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 550,
        titulo: "varejo mercado",
        dataCriacao: "2023-11-13T18:10:49.348Z",
        linhas: 98,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 762,
        titulo: "logística estoque",
        dataCriacao: "2023-11-13T18:10:49.931Z",
        linhas: 50,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 116,
    titulo: "Arquivos de despesas",
    descricao: "Aspernatur occaecati quaerat consequuntur expedita. Autem vel delectus aliquid temporibus voluptate voluptatum culpa. Assumenda autem iusto. Pariatur quidem eius sed sed vel hic labore. Nesciunt perferendis consequatur fugit. Temporibus eum atque sequi. Delectus illum hic quasi dolorem enim mollitia. Nisi vero delectus voluptates cupiditate exercitationem adipisci aut. Natus quas sapiente repellat. Doloremque repudiandae provident sequi veniam quos. Molestiae culpa sed. Distinctio aperiam deleniti molestiae. Laudantium perferendis possimus quae iure facere voluptas. Expedita velit quia amet quae repellendus. Alias magnam sint explicabo nam. Odio expedita asperiores dolor eveniet consequatur alias. Officiis similique qui officia. Unde dolorem mollitia. Dolores in vitae odio molestiae aliquam. At accusantium maiores deleniti dignissimos ea nisi. Consequuntur corporis sit unde voluptates est. Voluptate quasi modi dolorum esse dicta. Quam qui necessitatibus veniam nostrum nobis blanditiis. Reiciendis magni rem vitae laboriosam repudiandae laudantium. At eligendi odit nisi quam ducimus laborum. Possimus provident vitae maxime.",
    dataCriacao: "2023-11-19T18:21:57.566Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: " preco_produto",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " item_descricao",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " preco_do_produto",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " produto_companhia",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " servico_preco",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Arthur da Cunha",
      matricula: "120",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 63,
        titulo: "mercado franquia",
        dataCriacao: "2023-11-13T18:10:47.963Z",
        linhas: 43,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 78,
        titulo: "operação serviço",
        dataCriacao: "2023-11-13T18:10:48.006Z",
        linhas: 71,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 224,
        titulo: "demografia inovação",
        dataCriacao: "2023-11-13T18:10:48.435Z",
        linhas: 65,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 291,
        titulo: "compras lucro",
        dataCriacao: "2023-11-13T18:10:48.625Z",
        linhas: 93,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 335,
        titulo: "despesas marketing",
        dataCriacao: "2023-11-13T18:10:48.758Z",
        linhas: 98,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 521,
        titulo: "expansão inovação",
        dataCriacao: "2023-11-13T18:10:49.272Z",
        linhas: 99,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 524,
        titulo: "estrutura comércio",
        dataCriacao: "2023-11-13T18:10:49.279Z",
        linhas: 22,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 104,
    titulo: "Arquivos de risco",
    descricao: "Fugiat quaerat sapiente nobis ab non quo. Dolore quos esse error. Ducimus voluptate unde nam ullam laborum. Soluta commodi labore inventore ex consequatur. Ullam harum soluta tempora veniam a. Doloribus hic minus sit eligendi. Temporibus recusandae distinctio sunt. Odio non cupiditate. Rerum voluptate dolore illo. Earum velit distinctio dolores vitae. Rerum magnam eligendi natus. Facere quo inventore ut aperiam. Vel totam placeat facere. Molestiae neque placeat quod quod quo voluptatum. Nobis inventore aut facilis labore nisi. Eius nulla provident dicta. Ut dolores magnam facilis. Aliquid cum ipsa accusamus repellendus hic. Delectus architecto earum veniam blanditiis fugiat quasi. Natus sunt excepturi eos. Omnis animi neque quo officia sapiente. Qui dolore accusamus. Commodi eligendi inventore explicabo quo hic autem doloribus. Maxime nobis quam doloribus. Deserunt necessitatibus esse. Earum sint saepe optio quasi sequi repudiandae ullam. Ea rerum sit expedita. Eaque occaecati odio animi laborum. Sunt autem iure fugiat deserunt. Atque autem magni. Odit nam minima maxime fuga. Praesentium nesciunt similique. Inventore saepe architecto id illo sed.",
    dataCriacao: "2023-11-19T18:21:57.138Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " preco_do_produto",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " preco_produto",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " descricao_titulo",
        nulo: false,
        tipo: "bool"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Juan Lima",
      matricula: "24024",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 64,
        titulo: "competição concorrência",
        dataCriacao: "2023-11-13T18:10:47.968Z",
        linhas: 18,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 135,
        titulo: "lucratividade comércio",
        dataCriacao: "2023-11-13T18:10:48.158Z",
        linhas: 45,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 168,
        titulo: "exportar fornecimento",
        dataCriacao: "2023-11-13T18:10:48.254Z",
        linhas: 46,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 278,
        titulo: "fusão logística",
        dataCriacao: "2023-11-13T18:10:48.587Z",
        linhas: 72,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 560,
        titulo: "estratégia publicidade",
        dataCriacao: "2023-11-13T18:10:49.374Z",
        linhas: 66,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 654,
        titulo: "vendas fusão",
        dataCriacao: "2023-11-13T18:10:49.633Z",
        linhas: 58,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 667,
        titulo: "operação estrutura",
        dataCriacao: "2023-11-13T18:10:49.667Z",
        linhas: 70,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 606,
        titulo: "expansão fusão",
        dataCriacao: "2023-11-13T18:10:49.500Z",
        linhas: 12,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 724,
        titulo: "negócios concorrência",
        dataCriacao: "2023-11-13T18:10:49.828Z",
        linhas: 35,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 164,
    titulo: "Arquivos de competição",
    descricao: "Odit tenetur laudantium minus ducimus. Aliquam vero veritatis. Excepturi vel et cupiditate ea beatae. Dolorem rem architecto expedita fuga illum eaque officiis. Eveniet atque ab error iste molestiae autem. Accusantium quis sed non reprehenderit esse. Vitae sint deserunt explicabo alias nesciunt. Molestias eius facilis natus voluptates fugiat. Veritatis sint velit tempora occaecati sed pariatur. Amet ad ut id atque veniam porro eos. Optio incidunt corporis quisquam. Repellat quod ullam veniam. Voluptas quos rerum pariatur voluptas maiores. Expedita ad eum repellendus repellendus esse. Reprehenderit facere fugit ipsam aspernatur. Porro labore accusantium magnam. Voluptatum labore totam animi ut. Necessitatibus quae dolorum accusantium dolore distinctio dignissimos delectus. Nihil rerum aliquid numquam accusamus. Commodi reiciendis dicta qui ullam occaecati minus. Aut nulla cupiditate ea asperiores incidunt fugiat. Quam doloremque nobis architecto. Eum dolorum natus blanditiis. Explicabo vitae ea tempore. Iure cumque architecto ex ab aspernatur nulla. Dolor exercitationem iure illo dicta. Quae iusto ipsam mollitia blanditiis.",
    dataCriacao: "2023-10-19T18:21:59.800Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: " organizacao",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " descricao_valor",
        nulo: true,
        tipo: "bool"
      ),
      Campo(
        nome: " empresa_do_item",
        nulo: true,
        tipo: "bool"
      ),
      Campo(
        nome: " servico_descricao",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: "nome",
        nulo: true,
        tipo: "int64"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Levi da Mata",
      matricula: "13013",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 65,
        titulo: "compras varejo",
        dataCriacao: "2023-11-13T18:10:47.971Z",
        linhas: 93,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 677,
        titulo: "gerenciamento orçamento",
        dataCriacao: "2023-11-13T18:10:49.694Z",
        linhas: 17,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 743,
        titulo: "parceria investimento",
        dataCriacao: "2023-11-13T18:10:49.881Z",
        linhas: 94,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 129,
    titulo: "Template de fusão",
    descricao: "Atque debitis commodi libero tempore. Aliquam aperiam doloribus sit laborum quod repellat. Natus dolores reprehenderit similique. Eius fuga suscipit aspernatur laudantium alias possimus. Odio delectus amet. Voluptatibus saepe labore quae dolores. Dolor mollitia nisi adipisci exercitationem. Deleniti id dolore reiciendis. Rerum ut sed deleniti quis et expedita. Quam voluptatem aperiam mollitia asperiores. Atque nihil alias occaecati suscipit velit. Odio consectetur molestias illum aut. Laborum asperiores dolor maxime quam cumque dolores. Cumque aut culpa consequatur id. Eaque ea doloribus nesciunt. Deleniti facilis eum repudiandae tenetur aliquam. Id error aut corrupti deserunt. Libero ab voluptas dolore odio pariatur itaque. Quas illum omnis accusamus ab. Repudiandae natus exercitationem ab necessitatibus officia rerum eaque. Magnam sunt quae aperiam. Fuga tenetur voluptatum ex. Necessitatibus corporis ratione dignissimos. Vitae sit eius est mollitia sint. Culpa dicta numquam voluptate eum. Rerum mollitia similique ducimus cumque enim nihil nisi.",
    dataCriacao: "2023-11-19T18:21:58.030Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " mercadoria_preco",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " item_preco",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " produto_empresa",
        nulo: false,
        tipo: "float"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Bianca Cardoso",
      matricula: "48048",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 67,
        titulo: "franquia estratégia",
        dataCriacao: "2023-11-13T18:10:47.978Z",
        linhas: 86,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 312,
        titulo: "mercado liderança",
        dataCriacao: "2023-11-13T18:10:48.693Z",
        linhas: 28,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 367,
        titulo: "produto risco",
        dataCriacao: "2023-11-13T18:10:48.849Z",
        linhas: 28,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 480,
        titulo: "lucro demografia",
        dataCriacao: "2023-11-13T18:10:49.164Z",
        linhas: 36,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 197,
    titulo: "Template de procedimento",
    descricao: "Autem nam animi libero quibusdam. Quia aliquam praesentium odio consectetur consectetur autem. Ut ut necessitatibus placeat. Ex quasi consequatur neque. Corrupti labore laboriosam quis. Ipsa molestiae cumque veniam incidunt assumenda cupiditate. Ipsa eos reiciendis quam eos quam dolorum. Magnam excepturi cum natus distinctio. Voluptatum placeat facilis esse architecto. Vitae nulla molestiae. Dicta aspernatur debitis ipsam. Dicta nulla beatae necessitatibus consectetur aut. Animi accusamus pariatur ullam esse a autem odio. Animi aut qui reprehenderit nulla porro sapiente debitis. Ea incidunt distinctio fuga ullam. At sit magnam quos. Quae placeat cupiditate impedit. At porro modi harum doloribus repudiandae tempora voluptatum. Non tempora possimus repellendus. Natus fugiat sunt saepe praesentium nisi. Est occaecati nisi vitae cupiditate. Modi in odio quia. Provident magnam provident veritatis cupiditate qui vero. Deserunt quidem impedit provident. Fuga commodi beatae harum libero exercitationem. Perspiciatis hic minus mollitia consectetur voluptate nobis. Itaque harum sint. Consectetur cum magni sed minima quae. Quibusdam delectus iusto.",
    dataCriacao: "2023-10-19T18:22:00.283Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: " titulo_do_item",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " item_firma",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " descricao_valor",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: "produto_nome",
        nulo: false,
        tipo: "int64"
      ),
      Campo(
        nome: " produto_valor",
        nulo: false,
        tipo: "object"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Arthur da Cunha",
      matricula: "120",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 71,
        titulo: "estratégia estrutura",
        dataCriacao: "2023-11-13T18:10:47.988Z",
        linhas: 47,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 132,
        titulo: "planejamento treinamento",
        dataCriacao: "2023-11-13T18:10:48.146Z",
        linhas: 88,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 666,
        titulo: "produção retorno",
        dataCriacao: "2023-11-13T18:10:49.664Z",
        linhas: 22,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 742,
        titulo: "comércio compras",
        dataCriacao: "2023-11-13T18:10:49.879Z",
        linhas: 61,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 57,
    titulo: "Arquivos de vendas",
    descricao: "Aspernatur quos harum dolores quisquam nam facere. Aperiam quas at fugiat tenetur. Sapiente sapiente officia voluptatibus assumenda eum illum. Nemo sed ratione nisi. Nihil saepe maiores velit commodi. Tempora excepturi perspiciatis accusantium quos. Voluptatum minus asperiores eveniet ex quas. Saepe error tenetur inventore nam quasi reprehenderit. Commodi repellendus natus aliquid ipsa quam. Accusamus totam et soluta odit ex iure. Unde culpa eligendi aliquid veniam rerum reprehenderit. Cum voluptatum ad aperiam. Reprehenderit eveniet voluptatem eaque eaque id. Suscipit voluptatem provident error amet ea veritatis. Animi perspiciatis aut voluptatibus aut. Est laudantium at occaecati inventore unde odio pariatur. Dolorem delectus perferendis inventore quia. Minus cum iure dolor doloremque quas nostrum praesentium. Velit ex nam sed ullam unde sequi. Harum minima ipsum. Impedit quia at ratione aut ea deserunt atque. Ipsa qui sapiente. Doloremque illum omnis impedit nemo quas illo. Optio magnam mollitia earum. Totam cum maiores totam veniam odit. Blanditiis aspernatur corporis veniam magni ipsa eius. Alias officiis praesentium dicta magni voluptatibus. Et possimus sunt quam delectus.",
    dataCriacao: "2023-11-19T18:21:55.447Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: " preco_do_produto",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " produto_titulo",
        nulo: true,
        tipo: "bool"
      ),
      Campo(
        nome: " descricao_firma",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " descricao_custo",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " produto_organizacao",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Anthony Costela",
      matricula: "9009",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 74,
        titulo: "expansão benchmark",
        dataCriacao: "2023-11-13T18:10:47.996Z",
        linhas: 18,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 86,
        titulo: "inovação qualidade",
        dataCriacao: "2023-11-13T18:10:48.026Z",
        linhas: 45,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 177,
        titulo: "gerenciamento compras",
        dataCriacao: "2023-11-13T18:10:48.289Z",
        linhas: 62,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 396,
        titulo: "publicidade serviço",
        dataCriacao: "2023-11-13T18:10:48.939Z",
        linhas: 76,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 676,
        titulo: "operação estrutura",
        dataCriacao: "2023-11-13T18:10:49.691Z",
        linhas: 48,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 532,
        titulo: "logística empregados",
        dataCriacao: "2023-11-13T18:10:49.302Z",
        linhas: 20,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 575,
        titulo: "varejo estudo",
        dataCriacao: "2023-11-13T18:10:49.416Z",
        linhas: 76,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 145,
    titulo: "Arquivos de compras",
    descricao: "Excepturi nulla incidunt debitis et commodi. Quasi ut cum eveniet fuga fugiat laborum aliquid. Aliquam accusamus cupiditate tempore iure dolores earum. Dignissimos illo repellendus officia. Eum eum soluta quis blanditiis. Dolorum molestias id quaerat. Odio suscipit dolore voluptatum non facilis unde. Vero nisi dolor. Et perspiciatis numquam error fuga ratione aperiam. Nostrum ratione fugit perferendis porro consequuntur sed. Repellat fugit fugiat occaecati ipsa rem rem. Blanditiis quod ab repellendus. Fugit sapiente eaque nesciunt adipisci omnis assumenda explicabo. Mollitia repellendus molestias quia consequuntur illo accusantium. Neque omnis quia mollitia consectetur. Ratione sint tempora temporibus. Nemo tenetur tempora. Nam facilis quo ea in consequatur voluptatibus. Maxime fugiat saepe. Perspiciatis officia dolorem earum fugit ipsum quo. Minus similique quae. Rerum facilis pariatur corporis eius. Aspernatur autem at in enim repellat. Iusto atque nisi alias culpa. Quos dolorum impedit sequi numquam porro. Libero deleniti quis qui. Labore nisi quibusdam magnam numquam facilis natus.",
    dataCriacao: "2023-09-19T18:21:59.076Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " empresa_item",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " descricao_organizacao",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " item_titulo",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Sr. Luiz Fernando Rezende",
      matricula: "16016",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 76,
        titulo: "análise orçamento",
        dataCriacao: "2023-11-13T18:10:48.001Z",
        linhas: 25,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 285,
        titulo: "gerenciamento e-commerce",
        dataCriacao: "2023-11-13T18:10:48.607Z",
        linhas: 17,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 320,
        titulo: "gerenciamento operação",
        dataCriacao: "2023-11-13T18:10:48.717Z",
        linhas: 11,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 428,
        titulo: "logística orçamento",
        dataCriacao: "2023-11-13T18:10:49.025Z",
        linhas: 66,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 462,
        titulo: "expansão preço",
        dataCriacao: "2023-11-13T18:10:49.118Z",
        linhas: 92,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 420,
        titulo: "procedimento logística",
        dataCriacao: "2023-11-13T18:10:49.003Z",
        linhas: 29,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 598,
        titulo: "logística estrutura",
        dataCriacao: "2023-11-13T18:10:49.478Z",
        linhas: 10,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 717,
        titulo: "visibilidade logística",
        dataCriacao: "2023-11-13T18:10:49.809Z",
        linhas: 17,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 74,
    titulo: "Arquivos de crescimento",
    descricao: "Quaerat quis reprehenderit veniam necessitatibus. Tempora ipsam atque reiciendis error beatae. Corporis voluptatibus corporis architecto. Omnis ex debitis necessitatibus quis doloribus mollitia. Odit eos dolorum. Eaque voluptatem ex distinctio. Facere quis dolorem qui unde. Deserunt temporibus molestiae ipsam consectetur. Adipisci autem vel quasi cum quod qui. Totam ea doloribus eos quidem. Cumque doloribus rem sed. Ipsam blanditiis harum quam corporis expedita ea. Earum quibusdam qui saepe quas. Maxime harum alias rerum consequatur nam. Dolore et error perspiciatis doloribus aperiam ratione. At adipisci laboriosam cupiditate deserunt itaque soluta. Enim dolores quo quam ex corrupti amet. Officia quasi ea. Consectetur iure repellendus ducimus iure maiores velit. Saepe suscipit voluptatem ad. Magnam rerum suscipit doloribus doloribus rem beatae. Alias soluta id molestiae ex. Voluptatum cum suscipit autem. Voluptatem dignissimos ab nemo earum eveniet quidem rem. Illum aspernatur minima pariatur ad delectus beatae. Quis fuga nesciunt cupiditate amet unde porro. Itaque sapiente delectus sed. Ullam aliquid porro.",
    dataCriacao: "2023-10-19T18:22:00.283Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " nome_produto",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " titulo",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " servico_empresa",
        nulo: false,
        tipo: "float"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Sr. Juan Oliveira",
      matricula: "20020",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 77,
        titulo: "fornecimento orçamento",
        dataCriacao: "2023-11-13T18:10:48.003Z",
        linhas: 25,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 115,
        titulo: "receita e-commerce",
        dataCriacao: "2023-11-13T18:10:48.103Z",
        linhas: 44,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 152,
        titulo: "cliente vendas",
        dataCriacao: "2023-11-13T18:10:48.209Z",
        linhas: 26,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 319,
        titulo: "empreendedor liderança",
        dataCriacao: "2023-11-13T18:10:48.714Z",
        linhas: 98,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 375,
        titulo: "estoque estratégia",
        dataCriacao: "2023-11-13T18:10:48.877Z",
        linhas: 54,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 394,
        titulo: "expansão e-commerce",
        dataCriacao: "2023-11-13T18:10:48.934Z",
        linhas: 89,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 591,
        titulo: "logística vendas",
        dataCriacao: "2023-11-13T18:10:49.460Z",
        linhas: 75,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 691,
        titulo: "loja conciliação",
        dataCriacao: "2023-11-13T18:10:49.736Z",
        linhas: 35,
        aprovado: true,
        url: "http://google.com",
        publico: false
      )
    ]
  ),
  Template(
    id: 180,
    titulo: "Template de segmentação",
    descricao: "Laudantium amet deleniti voluptate. Iste similique soluta magnam consectetur nemo. Rerum totam quae. Voluptate minus fugiat laboriosam expedita aspernatur. Laudantium quibusdam nobis doloribus dicta itaque voluptate aliquid. Ut laboriosam suscipit quas quisquam commodi. Animi repudiandae perspiciatis iusto aliquam molestiae. Cumque nihil minus. Atque facilis animi ipsam nihil. Fugit id quasi dolorem ab in. Rem mollitia eaque adipisci. Quidem quas laborum eum odit saepe. Pariatur vero error accusamus eligendi placeat. Esse ipsum consequatur nihil. Similique aliquid pariatur. Hic deserunt quo odit assumenda facilis animi. Et ipsa assumenda eos. Minima tempore aperiam maxime corporis. Occaecati accusamus quae commodi aperiam praesentium omnis blanditiis. Sed at non repellendus perferendis. Quas aut aliquid ducimus voluptatibus praesentium. Corporis temporibus earum voluptates magni. Laudantium dicta vitae quidem quibusdam. Voluptatum dicta in. Corporis reprehenderit provident alias recusandae nam et. Accusamus atque reprehenderit aliquam voluptatibus impedit. Quis delectus recusandae minus quasi maxime adipisci.",
    dataCriacao: "2023-08-19T18:21:59.457Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " descricao_empresa",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " servico_descricao",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: " item_nome",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Dr. Luiz Henrique Barbosa",
      matricula: "25025",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 79,
        titulo: "lucro estoques",
        dataCriacao: "2023-11-13T18:10:48.008Z",
        linhas: 23,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 296,
        titulo: "planejamento estoques",
        dataCriacao: "2023-11-13T18:10:48.640Z",
        linhas: 19,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 498,
        titulo: "risco loja",
        dataCriacao: "2023-11-13T18:10:49.210Z",
        linhas: 70,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 537,
        titulo: "estrutura franquia",
        dataCriacao: "2023-11-13T18:10:49.316Z",
        linhas: 58,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 56,
    titulo: "Relatório de demografia",
    descricao: "Delectus voluptatum voluptates itaque. Omnis ea eius. Aliquam voluptate veniam fugit debitis eligendi rerum. Voluptatem unde debitis quisquam. Necessitatibus nostrum in ab nisi. Illum facilis saepe fuga. Et nostrum corrupti quo voluptate. Molestiae eum velit temporibus nulla. Reiciendis quidem sit corrupti consectetur impedit ipsum. Quam numquam pariatur in suscipit eligendi sit voluptatum. Dolorem nam ipsam quod. Dicta esse quae quisquam. Quod suscipit porro ratione molestias minima reiciendis ratione. Accusamus animi dolor eum consequatur laborum sed et. Animi placeat quibusdam magnam in earum sequi. Deleniti velit iure non. Atque mollitia dolorem quasi. Laborum fuga similique rerum est laboriosam numquam. Fugiat rerum vero placeat. Quo excepturi odio temporibus ab amet. Minima deleniti distinctio magni. Corporis dignissimos laudantium asperiores dolore totam. Ipsa quisquam sunt quam quidem commodi vero iure. Maiores illo ullam dolorum odio a. Sequi unde corrupti doloribus aliquam quos. Illo maxime odio. Iure porro in repellendus consequatur veritatis.",
    dataCriacao: "2023-11-19T18:21:55.412Z",
    quantidadeCampos: 2,
    campos: [
      Campo(
        nome: " servico_descricao",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " empresa_do_item",
        nulo: true,
        tipo: "bool"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Yago Ramos",
      matricula: "26026",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 80,
        titulo: "regulamentação e-commerce",
        dataCriacao: "2023-11-13T18:10:48.011Z",
        linhas: 87,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 241,
        titulo: "pagamento tendência",
        dataCriacao: "2023-11-13T18:10:48.482Z",
        linhas: 96,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 293,
        titulo: "risco exportar",
        dataCriacao: "2023-11-13T18:10:48.630Z",
        linhas: 43,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 253,
        titulo: "orçamento fusão",
        dataCriacao: "2023-11-13T18:10:48.517Z",
        linhas: 93,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 388,
        titulo: "fornecimento gerenciamento",
        dataCriacao: "2023-11-13T18:10:48.918Z",
        linhas: 39,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 556,
        titulo: "franquia publicidade",
        dataCriacao: "2023-11-13T18:10:49.363Z",
        linhas: 56,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 778,
        titulo: "logística treinamento",
        dataCriacao: "2023-11-13T18:10:49.971Z",
        linhas: 22,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 788,
        titulo: "logística operação",
        dataCriacao: "2023-11-13T18:10:49.995Z",
        linhas: 30,
        aprovado: false,
        url: "",
        publico: true
      )
    ]
  ),
  Template(
    id: 184,
    titulo: "Arquivos de treinamento",
    descricao: "Accusamus alias iste expedita. Debitis nisi quis sequi quia itaque delectus. Atque quam accusamus dolores suscipit. Vitae labore officiis asperiores. Perspiciatis tempore necessitatibus id cumque provident. Rerum at dolorem dolorum assumenda facere. Officiis impedit maxime in hic. Ad aliquid et illum aut sint. Praesentium perferendis dolorum mollitia quam quasi commodi. Expedita sapiente quas. Vero blanditiis laboriosam eum. Quis ducimus repellat earum rem possimus. Distinctio recusandae et quisquam modi cum. Sapiente beatae repellendus sed dignissimos ratione. Ullam soluta possimus libero. Unde saepe possimus voluptatum unde eaque voluptates nisi. Libero occaecati libero quas vitae odio labore repudiandae. Iure reiciendis nostrum quis exercitationem nulla. Tenetur eveniet voluptate iure. Itaque nulla facere distinctio. Et reprehenderit nesciunt. Accusantium similique cum labore eos similique. Cum maxime laborum nulla totam. Aspernatur nulla recusandae quidem impedit vel iste ducimus. Velit eos in illo fugit quas error. Expedita dicta porro suscipit aspernatur et quasi quis. Pariatur cum enim ipsa delectus praesentium animi ex.",
    dataCriacao: "2023-10-19T18:22:00.283Z",
    quantidadeCampos: 4,
    campos: [
      Campo(
        nome: " descricao_custo",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " produto_valor",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " produto_preco",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " custo",
        nulo: false,
        tipo: "int64"
    ),
    ],
    status: "Desativado",
    usuario: Usuario(
      nome: "Maria Fernanda da Cruz",
      matricula: "18018",
      verificado: true,
      perfil: "Gerente",
    ),
    formato: "CSV",
    arquivos: [
      Arquivo(
        id: 82,
        titulo: "promoção logística",
        dataCriacao: "2023-11-13T18:10:48.016Z",
        linhas: 43,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 287,
        titulo: "conciliação serviço",
        dataCriacao: "2023-11-13T18:10:48.613Z",
        linhas: 98,
        aprovado: true,
        url: "http://google.com",
        publico: true
      )
    ]
  ),
  Template(
    id: 81,
    titulo: "Template de internacionalização",
    descricao: "Explicabo illum aliquam voluptatem placeat tempore. Porro accusamus voluptatum placeat assumenda sed odio. Ad rerum tempora soluta. Possimus vitae inventore repellendus. Dolorem unde inventore animi laudantium. Recusandae reiciendis reprehenderit vel libero nesciunt sequi. Rerum expedita ut asperiores dolor recusandae. Velit iusto exercitationem adipisci. Sint numquam recusandae dicta molestias est. Inventore deleniti aperiam tempore. Voluptatum maxime iste iure quasi error optio. Iure reprehenderit suscipit asperiores unde accusamus quia odit. Nihil dignissimos aperiam voluptates veniam. Voluptatibus commodi optio quia incidunt minus doloribus dolorem. Necessitatibus quaerat beatae aspernatur maxime mollitia voluptas. Cupiditate iste quisquam tempore magni deserunt. Atque autem impedit illo quaerat consequuntur laboriosam. Cupiditate velit placeat inventore totam. Voluptas laudantium illum ut unde incidunt sapiente. Nihil atque doloremque sunt. Reiciendis voluptatem distinctio odit molestiae. Quia blanditiis illum dignissimos nostrum libero deleniti. Ut ipsa officiis soluta beatae modi. Quae nemo commodi.",
    dataCriacao: "2023-10-19T18:22:00.283Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: " empresa_do_produto",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " empresa_produto",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " descricao_empresa",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " descricao_firma",
        nulo: true,
        tipo: "object"
      ),
      Campo(
        nome: " produto_empresa",
        nulo: true,
        tipo: "object"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "João Miguel Duarte",
      matricula: "7007",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 84,
        titulo: "concorrência investimento",
        dataCriacao: "2023-11-13T18:10:48.021Z",
        linhas: 40,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 219,
        titulo: "franquia finanças",
        dataCriacao: "2023-11-13T18:10:48.420Z",
        linhas: 78,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 257,
        titulo: "segmentação empregados",
        dataCriacao: "2023-11-13T18:10:48.529Z",
        linhas: 91,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 453,
        titulo: "promoção planejamento",
        dataCriacao: "2023-11-13T18:10:49.089Z",
        linhas: 74,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 584,
        titulo: "despesas empreendedor",
        dataCriacao: "2023-11-13T18:10:49.440Z",
        linhas: 91,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 721,
        titulo: "investimento conciliação",
        dataCriacao: "2023-11-13T18:10:49.820Z",
        linhas: 97,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 725,
        titulo: "inovação receita",
        dataCriacao: "2023-11-13T18:10:49.831Z",
        linhas: 91,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 748,
        titulo: "preço crescimento",
        dataCriacao: "2023-11-13T18:10:49.893Z",
        linhas: 56,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 168,
    titulo: "Relatório de estudo",
    descricao: "Facilis vel sit perspiciatis. Modi sunt quod repudiandae. Aperiam quisquam at ullam. Ad aut suscipit veniam numquam quia quaerat. Rerum possimus labore eius nam reprehenderit suscipit. Cupiditate ab id nam laborum fugiat omnis. Tempora voluptate quibusdam sit ab veniam reiciendis. Unde accusamus repudiandae similique sint eveniet magni eum. Dolores delectus dolores voluptatum. Veritatis cumque architecto ad distinctio minus. Dicta veniam veritatis adipisci quasi necessitatibus. Hic minima occaecati sapiente. Blanditiis natus incidunt ex quo ipsum. Possimus saepe dolores quia eius. Labore enim maiores mollitia accusamus animi cum. Vitae maiores a adipisci quisquam laboriosam error. Quaerat at officiis nulla repellendus. Iure praesentium fuga iure. Dicta vero officia occaecati occaecati. Ab aperiam dignissimos voluptatibus repudiandae et ab. Esse ratione tempora sunt quia esse accusantium. Itaque ipsam dicta maiores aperiam necessitatibus. Praesentium animi suscipit aliquam quis harum praesentium. Temporibus corporis aspernatur pariatur ad. Ducimus saepe temporibus voluptas expedita voluptates voluptatibus. Iure explicabo laborum facere soluta nobis.",
    dataCriacao: "2023-10-19T18:21:59.800Z",
    quantidadeCampos: 3,
    campos: [
      Campo(
        nome: " descricao_preco",
        nulo: true,
        tipo: "float"
      ),
      Campo(
        nome: " descricao_firma",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " servico_descricao",
        nulo: false,
        tipo: "int64"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Laís Moura",
      matricula: "38038",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLSX",
    arquivos: [
      Arquivo(
        id: 88,
        titulo: "procedimento inovação",
        dataCriacao: "2023-11-13T18:10:48.031Z",
        linhas: 87,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 321,
        titulo: "expansão mercado",
        dataCriacao: "2023-11-13T18:10:48.720Z",
        linhas: 96,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 339,
        titulo: "atendimento mercado",
        dataCriacao: "2023-11-13T18:10:48.769Z",
        linhas: 40,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 341,
        titulo: "cliente estratégia",
        dataCriacao: "2023-11-13T18:10:48.775Z",
        linhas: 97,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 379,
        titulo: "fornecedores estoques",
        dataCriacao: "2023-11-13T18:10:48.890Z",
        linhas: 58,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 490,
        titulo: "tendência regulamentação",
        dataCriacao: "2023-11-13T18:10:49.189Z",
        linhas: 71,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 706,
        titulo: "preço preço",
        dataCriacao: "2023-11-13T18:10:49.776Z",
        linhas: 12,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 786,
        titulo: "atendimento fornecedores",
        dataCriacao: "2023-11-13T18:10:49.990Z",
        linhas: 60,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
      Arquivo(
        id: 792,
        titulo: "expansão fidelização",
        dataCriacao: "2023-11-13T18:10:50.007Z",
        linhas: 72,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 799,
        titulo: "vendas parceria",
        dataCriacao: "2023-11-13T18:10:50.024Z",
        linhas: 49,
        aprovado: false,
        url: "",
        publico: false
      )
    ]
  ),
  Template(
    id: 25,
    titulo: "Template de comércio",
    descricao: "Necessitatibus expedita architecto neque assumenda. Iure dolores impedit consectetur reprehenderit. Sit qui voluptate odio cum alias tempora. Odio earum laudantium architecto ullam dolores alias. Ipsam iste recusandae reprehenderit minus cumque. Maxime esse aut beatae quaerat praesentium aspernatur. Sint necessitatibus voluptatem in. Fugit molestias deleniti molestias dicta repellendus. Ut suscipit incidunt. Laudantium qui facere laboriosam. Maiores expedita occaecati voluptatibus aliquam voluptatem suscipit. Rem deserunt iste ratione perspiciatis repudiandae laborum. Blanditiis cum quae maiores natus. Asperiores sunt quidem eum. Perferendis odio saepe animi rem vero iusto. Sapiente illo deserunt totam. Officiis quos sed eligendi facere. Dolores laborum sed atque. Earum inventore iusto. Dolorem nisi nihil dolorum. Consectetur harum quia architecto eligendi dolorum aliquam. Sit dolor maxime aut molestias. Officia iure iusto saepe mollitia cupiditate. Aliquam ratione quibusdam. Doloremque repellat provident molestiae veritatis necessitatibus. Repellat aspernatur quas accusantium sint sequi molestiae. Aperiam amet tenetur commodi accusamus suscipit.",
    dataCriacao: "2023-10-19T18:21:54.056Z",
    quantidadeCampos: 5,
    campos: [
      Campo(
        nome: " mercadoria_nome",
        nulo: false,
        tipo: "float"
      ),
      Campo(
        nome: " empresa_do_produto",
        nulo: false,
        tipo: "bool"
      ),
      Campo(
        nome: " mercadoria_nome",
        nulo: false,
        tipo: "object"
      ),
      Campo(
        nome: " descricao_firma",
        nulo: true,
        tipo: "int64"
      ),
      Campo(
        nome: "nome",
        nulo: true,
        tipo: "float"
    ),
    ],
    status: "Ativo",
    usuario: Usuario(
      nome: "Arthur da Cunha",
      matricula: "120",
      verificado: true,
      perfil: "Gestor",
    ),
    formato: "XLS",
    arquivos: [
      Arquivo(
        id: 89,
        titulo: "risco promoção",
        dataCriacao: "2023-11-13T18:10:48.034Z",
        linhas: 24,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 107,
        titulo: "vendas negócios",
        dataCriacao: "2023-11-13T18:10:48.082Z",
        linhas: 71,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 215,
        titulo: "empregados estudo",
        dataCriacao: "2023-11-13T18:10:48.409Z",
        linhas: 61,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 429,
        titulo: "desempenho investimento",
        dataCriacao: "2023-11-13T18:10:49.028Z",
        linhas: 24,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 398,
        titulo: "tendência logística",
        dataCriacao: "2023-11-13T18:10:48.944Z",
        linhas: 58,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 436,
        titulo: "estrutura risco",
        dataCriacao: "2023-11-13T18:10:49.046Z",
        linhas: 54,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 615,
        titulo: "estoque franquia",
        dataCriacao: "2023-11-13T18:10:49.526Z",
        linhas: 88,
        aprovado: false,
        url: "",
        publico: false
      ),
      Arquivo(
        id: 618,
        titulo: "concorrência concorrência",
        dataCriacao: "2023-11-13T18:10:49.534Z",
        linhas: 24,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 530,
        titulo: "despesas expansão",
        dataCriacao: "2023-11-13T18:10:49.296Z",
        linhas: 15,
        aprovado: false,
        url: "",
        publico: true
      ),
      Arquivo(
        id: 692,
        titulo: "análise marketing",
        dataCriacao: "2023-11-13T18:10:49.739Z",
        linhas: 47,
        aprovado: true,
        url: "http://google.com",
        publico: true
      ),
      Arquivo(
        id: 745,
        titulo: "satisfação liquidação",
        dataCriacao: "2023-11-13T18:10:49.886Z",
        linhas: 62,
        aprovado: true,
        url: "http://google.com",
        publico: false
      ),
    ],
  ),
];