const mythsTruthsList = [
  {
    id: 1,
    question: 'Existe leite fraco?',
    answer:
      'Não existe leite fraco. Até uma mãe com desnutrição leve ou moderada é capaz de produzir um bom leite. Todos têm a mesma constituição. O que acontece é que o leite materno é mais ralo que o leite de vaca. Mas, lembre-se: o leite de vaca foi feito para o bezerro! Cada espécie se alimenta com o leite produzido pela sua mãe. O leite materno tem todas as substâncias na quantidade certa de que o bebê precisa para crescer e se desenvolver sadio. O leite do início da mamada é mais “ralo”, pois contém mais água, menos gordura e grande quantidade de fatores de defesa. Contém também mais vitaminas e sais minerais. O leite do fim da mamada é mais grosso, visto que tem mais gordura e engorda o bebê. O bebê precisa do leite do começo e do fim da mamada.',
    category: 'M',
  },
  {
    id: 2,
    question: 'Só o meu leite não sustenta e o bebê chora com fome.',
    answer:
      'Nem sempre que o bebê chora é porque está com fome. Ele pode estar com cólica, frio ou calor, molhado, ou simplesmente querendo carinho (colo). Lembre-se de que o choro é a única forma de o bebê se comunicar nos primeiros meses de vida. O importante é que ele esteja crescendo bem, o que pode ser verificado pelos gráficos na Caderneta da Criança, e urinando mais do que seis vezes a cada 24 horas.',
    category: 'M',
  },
  {
    id: 3,
    question:
      'Criança que nasceu prematura (antes do tempo) ou com baixo peso (menos de 2 quilos e meio) não deve mamar no peito.',
    answer:
      'Estes bebês podem ter dificuldades de sugar no início, mas são os que mais precisam da proteção do leite materno. Conforme eles crescem, sugam com maior facilidade. Se o bebê tiver dificuldade de sugar, retire o leite, coloque-o em um recipiente limpo e ofereça com colher ou na xícara de café/copinho.',
    category: 'M',
  },
  {
    id: 4,
    question: 'Dar de mamar faz os peitos caírem.',
    answer:
      'A queda do peito depende de vários fatores: hereditários, idade, aumento de peso, musculatura de sustentação das mamas. A própria gravidez causa mudança na sua forma e posição.',
    category: 'M',
  },
  {
    id: 5,
    question: 'A amamentação imediatamente após o parto é saudável.',
    answer:
      'Alimentar os bebês imediatamente após o nascimento pode reduzir consideravelmente os riscos de mortalidade neonatal, além de contribuir para a recuperação da mulher. Quanto mais cedo acontecer a primeira mamada, maiores as chances de uma amamentação bem-sucedida, além de estimular e fortalecer o vínculo mãe e bebê.',
    category: 'T',
  },
  {
    id: 6,
    question: 'Seios pequenos produzem menos leite.',
    answer:
      'O que dá o tamanho dos seios é o tecido gorduroso e não a glândula produtora de leite, portanto, não depende do tamanho ou formato da mama. Afinal, tamanho não é documento!',
    category: 'M',
  },
  {
    id: 7,
    question:
      'Criança que arrota mamando faz o peito inflamar ou o leite secar.',
    answer: 'Não há comprovação científica desta afirmação.',
    category: 'M',
  },
  {
    id: 8,
    question:
      'Cerveja preta, canjica, água inglesa e outros alimentos aumentam a produção de leite.',
    answer:
      'É verdade que a cerveja aumenta a quantidade de leite por ser líquido, assim como a água e o suco. Mas bebidas alcoólicas não devem ser ingeridas, pois o álcool passa rapidamente para o leite e pode ser muito prejudicial ao bebê.',
    category: 'M',
  },
  {
    id: 9,
    question:
      'A mulher que estiver amamentando pode ingerir bebidas ácidas como suco de laranja ou limão.',
    answer:
      'Os alimentos ácidos não talham o leite. Não é necessário tomar mais leite de vaca para produzir mais leite. Recomenda-se que a mãe beba bastante água todos os dias. Café, chá preto e refrigerante em grande quantidade podem provocar cólicas no bebê.',
    category: 'T',
  },
  {
    id: 10,
    question: 'As mães que têm anemia podem amamentar.',
    answer:
      'Mas devem procurar um tratamento. O médico poderá receitar a medicação adequada, orientar a dieta e a mãe continuar amamentando.',
    category: 'T',
  },
  {
    id: 11,
    question: 'A amamentação ajuda a mulher a emagrecer.',
    answer:
      'O aleitamento traz vários benefícios, além da perda de peso mais rápida após o parto, a amamentação ajuda o útero a recuperar seu tamanho normal, reduz o risco de hemorragia, anemia e câncer de mama e de ovário. Durante a gestação, a mulher acumula peso para formar uma reserva energética justamente para ser gasta no período da amamentação. Saiba que parte da gordura materna é transferida para o bebê pelo leite.',
    category: 'T',
  },
  {
    id: 12,
    question: 'O leite materno pode ser congelado.',
    answer:
      'Na geladeira, o leite materno deve ser armazenado até 12 horas. No freezer, pode durar até 15 dias. Essa é uma boa notícia para as mães que precisam retornar às suas atividades profissionais, sem recorrer ao leite industrializado. Para descongelar, o leite deve ser mantido na geladeira ou em água corrente morna. Não se deve deixar em temperatura ambiente e nem esquentá-lo no fogão ou microondas.',
    category: 'T',
  },
  {
    id: 13,
    question: 'O tempo de amamentação depende de cada criança.',
    answer:
      'Alguns bebês são rápidos e levam de 5 a 10 minutos para mamar. Outros, não têm pressa e levam até 40 minutos. A mãe deve continuar amamentando até o bebê perder o interesse, pois é ele quem vai determinar o tempo suficiente. A mãe deve buscar a melhor posição, seja sentada, em pé, deitada, e oferecer o seio à criança. Deve promover uma boa pega, com a criança abocanhando a maior parte possível da aréola, para evitar fissuras.',
    category: 'T',
  },
  {
    id: 14,
    question: 'Simpatias e crendices podem alterar o leite.',
    answer:
      'A maioria das simpatias ou crendices não alteram o leite. Por exemplo: o bebê arrotar no peito, o leite pingar no chão, beber água durante a amamentação, nada disso altera a quantidade e a qualidade do leite.',
    category: 'M',
  },
  {
    id: 15,
    question: 'Amamentar deixa os seios flácidos.',
    answer:
      'Amamentar não deixa os seios flácidos, a não ser que não haja cuidados básicos. A indicação é usar um sutiã de alças largas e que sustente as mamas.',
    category: 'M',
  },
  {
    id: 16,
    question: 'Mãe que está amamentando não pode trabalhar fora.',
    answer:
      'A mãe pode dar de mamar nos períodos em que estiver em casa. Pode retirar e guardar seu leite para ser oferecido ao bebê enquanto ela estiver fora.',
    category: 'M',
  },
  {
    id: 17,
    question:
      'É preciso passar hidratantes ou pomadas medicinais para proteger o bico do peito.',
    answer:
      'O uso de hidratantes afina o tecido do bico do peito e da aréola (rodela escura do peito). A mãe deverá espremer um pouco de leite e passar ao redor da aréola e bico antes e depois de cada mamada, para eliminar bactérias, umedecer e manter a elasticidade e hidratação da pele, evitando assim a ocorrência de rachaduras (fissuras).',
    category: 'M',
  },
  {
    id: 18,
    question: 'O bebê é quem faz o horário de amamentação.',
    answer:
      'Nos primeiros meses, o bebê ainda não tem um horário para mamar. Dê o peito ao seu filho sempre que ele demonstrar fome. Com o tempo, ele vai fazer seu horário de mamadas. Antes de começar a dar de mamar, lave as mãos. Sente-se em um local confortável e o ajude a pegar corretamente o peito. Após a mamada, passe o próprio leite no complexo mamilo areolar, antes e após a mamada.',
    category: 'M',
  },
  {
    id: 19,
    question: 'Existe uma posição ideal para amamentar.',
    answer:
      'A melhor posição é aquela mais confortável para a mãe e o seu bebê.',
    category: 'M',
  },
];

export default mythsTruthsList;
