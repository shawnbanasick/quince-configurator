const showSectionDefaults_PT = () => {
  const obj = {
    btnHelp: "Ajuda",
    fontSizeText: "Tamanho do Texto",
    cardHeightText: "Altura do Cartão",
    btnNext: "Continuar",
    stepCompletedMessage:
      'Você concluiu esta etapa. Por favor, clique no <b>botão azul "Continuar"</b> no canto inferior direito da tela para ir para a próxima etapa.',
    screenOrientationText: "Por favor, Use a Orientação Retrato!",
    mobileTextSize: "Texto",
    mobileViewSize: "Visualização",
    mobileModalButtonCancel: "Cancelar",
    preventMobileTitle: "Título de acesso móvel restrito",
    preventMobileMessage: "Mensagem de acesso móvel restrito",
    expandViewMessage:
      'Toque no botão "+" de Visualização abaixo para expandir a área de visualização e ocultar esta mensagem.',
    consentTitleBarText: "Consentimento de Pesquisa",
    consentText:
      'Você está convidado a participar de um estudo de pesquisa conduzido por [Nome do Pesquisador Principal] na [Instituição ou Organização]. Antes de decidir participar, é importante que você entenda por que a pesquisa está sendo realizada e o que ela envolverá. Por favor, reserve um tempo para ler as seguintes informações com atenção. Sinta-se à vontade para entrar em contato com a equipe de pesquisa se tiver alguma dúvida.<br /><br /><b>Objetivo do Estudo</b><br />O objetivo deste estudo é [descrever brevemente o objetivo, por exemplo, compreender os efeitos de um novo método de ensino no desempenho dos alunos]. Esta pesquisa nos ajudará a obter insights sobre [mencionar quaisquer implicações ou objetivos mais amplos do estudo]. <br /><br /><b>Procedimentos do Estudo</b><br />Se você concordar em participar, será solicitado a [descrever os procedimentos envolvidos, incluindo o que os participantes farão, quanto tempo levará e com que frequência ocorrerá]. Por exemplo, você será solicitado a avaliar uma série de afirmações, ordená-las e depois refletir sobre a ordenação. Além disso, há um breve questionário no final. O estudo levará aproximadamente [duração, por exemplo, 45 minutos]. <br /><br /><b>Benefícios</b><br />Embora possa não haver benefícios diretos para você por participar, as informações coletadas neste estudo podem ajudar a [descrever benefícios potenciais, por exemplo, melhorar métodos educacionais, contribuir para o conhecimento científico, etc.]. Você também pode obter insights pessoais sobre [descrever quaisquer benefícios pessoais, se aplicável].<br /><br /><b>Confidencialidade</b><br />Todas as informações coletadas neste estudo serão mantidas estritamente confidenciais. Os dados serão armazenados com segurança e apenas a equipe de pesquisa terá acesso a eles. Sua identidade não será divulgada em nenhum relatório ou publicação resultante deste estudo. [Descrever como os dados serão anonimizados, criptografados ou armazenados com segurança].<br /><br /><b>Participação Voluntária</b><br />Sua participação neste estudo é totalmente voluntária. Você é livre para recusar-se a participar ou para se retirar a qualquer momento, sem penalidade ou perda de benefícios aos quais você tem direito. Se você decidir se retirar, feche a página da web e quaisquer dados coletados até esse ponto serão excluídos.<br /><br /><b>Consentimento</b><br />Ao clicar no botão "Concordo" na parte inferior desta página, você está indicando que leu e compreendeu as informações fornecidas e que concorda em participar deste estudo. Se você tiver alguma dúvida sobre este estudo, entre em contato com [Nome e Informações de Contato do Pesquisador Principal].',
    consentHelpModalHead: "Informações de Contato",
    consentHelpModalText:
      "Obrigado por participar deste Projeto de Pesquisa Universitária. Você pode entrar em contato com a equipe de pesquisa por telefone (1-555-867-5309) ou por e-mail em researchTeam@myMail.com",
    btnHelpConsent: "Informações de Contato",
    btnNextConsent: "Concordo e Continuar",
    loginWelcomeText:
      "<center></center><h3>Bem-vindo!</h3></center><br/> Obrigado por participar deste projeto de pesquisa em Metodologia Q. <br/>Por favor, <b>faça login</b> usando o formulário abaixo para iniciar o processo. ",
    loginHeaderText: "Entrar",
    loginPartIdText: "Por favor, insira seu nome ou ID de participante",
    accessCodeText: "Código de Acesso",
    accessInputText: "Por favor, insira o código de acesso para esta pesquisa.",
    partIdWarning: "Nome ou ID inválido",
    accessCodeWarning: "Código de acesso inválido",
    loginSubmitButtonText: "Enviar",
    landingHead: "Projeto de Pesquisa Universitária",
    welcomeText:
      "<h2>Projeto Demonstrativo Quince - Uso de iPad na Sala de Aula.</h2><br/><br/><p>Obrigado por ajudar com este projeto de pesquisa</p><br/>",
    landingHelpModalHead: "Bem-vindo!",
    landingHelpModalText:
      'Obrigado por participar deste Projeto de Pesquisa Universitária. Por favor, clique no botão "<b>Continuar</b>" no canto inferior direito da tela para ir para a próxima etapa.',
    btnNextLanding: "Continuar",
    btnHelpLanding: "Ajuda",
    mobileWelcomeText:
      "<h2>Projeto Demonstrativo Quince - Uso de iPad na Sala de Aula.</h2><br/><br/><p>Obrigado por ajudar com este projeto de pesquisa!</p><br/>",
    logInFirst: "Por favor, conclua o processo de login primeiro.",
    titleBarText: "Ordenação Preliminar",
    presortAgreement: "Concordo (3)",
    presortNeutral: "Sem Sentimentos Fortes (2)",
    presortDisagreement: "Discordo (1)",
    presortStatements: "Afirmações",
    presortModalHead: "Etapa 1 de 4",
    presortModalText:
      "Leia as seguintes afirmações cuidadosamente e divida-as em três pilhas: uma pilha para afirmações com as quais você tende a discordar, uma pilha para cartões com os quais você tende a concordar e uma pilha para o restante. As alterações podem ser feitas posteriormente.<br/><br/>Se você quiser ler esta instrução uma segunda vez, clique no botão de ajuda no canto inferior esquerdo.<br/>",
    presortPreventNavModalHead: "Navegação Desabilitada",
    presortPreventNavModalText:
      "Por favor, termine a ordenação preliminar antes de ir para a próxima etapa.",
    presortFinishedModalHead: "Ordenação Preliminar Concluída",
    presortFinishedModalText:
      'Você concluiu esta etapa. Por favor, clique no botão "Continuar" no canto inferior direito da página para ir para a próxima etapa.',
    presortOnPageInstructions:
      '<div style="font-size: 24px">Clique e arraste os cartões ou pressione as teclas "1", "2" ou "3" para ordenar as afirmações.</div>',
    presortImageSortInstructions:
      "Para ampliar uma imagem, posicione o ponteiro do mouse sobre ela e clique duas vezes. <br/><br/> Para comparar imagens, <u>pressione e segure</u> a tecla <b><i>Shift</i></b> no teclado e depois clique duas vezes em DUAS imagens com o mouse.",
    mobilePresortConditionsOfInstruction:
      "Avalie as Afirmações de Acordo com Sua Experiência de uso dos iPads na Aula",
    mobilePresortCompletedLabel: "Avaliações Concluídas",
    mobilePresortAssignLeft: "Diferente da Minha Perspectiva",
    mobilePresortAssignRight: "Similar à Minha Perspectiva",
    mobilePresortRedoModalHead: "Reavaliar Afirmação",
    mobilePresortRedoModalText: "Clique no ícone apropriado",
    mobilePresortRedoModalConfirmButton: "Confirmar",
    mobilePresortEvaluationsComplete:
      "<div><b>Todas as Afirmações Avaliadas.</b> <br /><br />Por favor, revise as afirmações para confirmar suas avaliações.  <br /><br /><div>",
    mobilePresortHelpModalHead: "Etapa 1 de 5<br />Avaliação de Afirmações",
    mobilePresortHelpModalText:
      'Toque no botão apropriado para atribuir um valor a cada afirmação. <br /><br /> Se você sentir que a afirmação é <b>similar à sua perspectiva</b>, toque no botão verde "+".<br /><br /> Se você sentir que a afirmação é <b>diferente da sua perspectiva</b>, toque no botão vermelho "-". <br /><br />Se você não tiver certeza, toque no botão "?". <br /><br /> Há <b>33 afirmações</b> nesta pesquisa. <br /><br /> Se você quiser <b>alterar</b> sua avaliação, toque no <b>ícone refazer</b> ao lado da afirmação.',
    mobilePresortFinishedModalHead: "Etapa 1 de 5<br />Avaliação de Afirmações",
    mobilePresortFinishedModalText:
      'O processo de avaliação está completo. <br/><br/> Por favor, <b>revise as afirmações</b> para confirmar suas avaliações.  <br /><br />Se você quiser fazer uma alteração, toque no ícone "refazer" à esquerda da afirmação.<br /><br />Quando estiver satisfeito com todas as suas avaliações, toque no <b>botão de navegação</b> no canto inferior direito.',
    mobilePresortProcessCompleteMessage:
      "O processo de avaliação está completo. <br/><br/> Por favor, clique no botão de navegação no canto inferior direito para ir para a próxima etapa.",
    mobilePresortPreventNavModalHead: "Navegação Desabilitada",
    mobilePresortPreventNavModalText:
      "Por favor, termine as avaliações antes de ir para a próxima etapa.",
    thinPageTitle: "Refine Suas Avaliações",
    thinPageSubmitButton: "Enviar",
    numStatementsToSelect: "Número de Afirmações a Selecionar",
    currentlySelectedNumber: "Número Atual de Afirmações Selecionadas",
    thinningPreventNavModalHead: "Navegação Desabilitada",
    thinningPreventNavModalText:
      "Por favor, termine o processo de refinamento antes de ir para a próxima etapa.",
    thinningHelpModalHead: "Refine Suas Avaliações",
    thinningHelpModalText:
      "Por favor, observe novamente as afirmações que você avaliou na etapa anterior. Escolha aquelas que você sente que são a melhor expressão da sua perspectiva.",
    thinningConfirmModalHead: "Seleção Incompleta",
    thinningConfirmModalText: "Por favor, selecione o número necessário de afirmações.",
    initialInstructionPart1:
      "Abaixo estão as afirmações que você avaliou positivamente na etapa anterior. Agora, escolha o número de afirmações com as quais você <b>MAIS CONCORDA</b>.<br /><br />",
    initialInstructionPart2:
      "Em seguida, continue a selecionar as afirmações que estão MAIS PRÓXIMAS da sua perspectiva",
    initialInstructionPart3:
      'Outro conjunto de afirmações aparecerá na tela depois que você clicar no botão laranja "Enviar".',
    initialInstructionPartNeg1:
      "Abaixo estão as afirmações que você avaliou positivamente na etapa anterior. Agora, escolha as afirmações que <mark><b>MAIS DIFEREM DA SUA PERSPECTIVA</b></mark>.",
    initialInstructionPartNeg2:
      "Em seguida, continue a selecionar as afirmações que <mark>MAIS DIFEREM</mark> da sua perspectiva.",
    finalInstructions:
      "Processo de refinamento concluído. Clique no botão de navegação no canto inferior direito para ir para a próxima etapa.",
    moveTopMobileHead: "Confirmar Movimento",
    moveAllTopMobileText: "Mover todas as afirmações selecionadas para o topo da lista?",
    moveTopMobileButtonOK: "Sim",
    mobileThinConditionsOfInstruction: "Refine Suas Avaliações",
    mobileThinSubmitButtonText: "Enviar",
    mobileThinSelectedText: "Selecionado",
    mobileThinHelpModalHead: "Etapa 2 de 5<br/>Processo de Refinamento",
    mobileThinHelpModalText:
      'Durante esta etapa, você será solicitado a <b>revisar as afirmações</b> que você avaliou e escolher aquelas que são mais similares ou mais diferentes da sua perspectiva.<br/><br/>Você pode precisar <b>rolar para baixo</b> para ver todas as afirmações.<br/><br/>Para <b>selecionar uma afirmação</b>, toque no contêiner da afirmação. A cor da afirmação mudará para amarelo.<br/><br/>Quando você tiver selecionado o <b>número correto</b> de afirmações, o botão "Enviar" mudará para <b>azul</b>. <br/><br/>Para facilitar a comparação das afirmações, você pode <b>reordená-las</b> tocando nas setas para cima e para baixo localizadas nos lados direito ou esquerdo da afirmação.<br/><br/>Você também pode <b>mover um grupo</b> de afirmações selecionadas para o topo da lista <b>pressionando longamente</b> (cerca de 1 segundo) nas setas à direita de uma afirmação.',
    mobileThinPreventNavModalHead: "Navegação Desabilitada",
    mobileThinPreventNavModalText:
      "Por favor, complete o processo de refinamento antes de navegar para a próxima página.",
    mobileThinProcessCompleteMessage:
      "O processo de refinamento está completo. <br/><br/> Por favor, clique no botão de navegação no canto inferior direito para ir para a próxima etapa.",
    mobileGuidanceModalRight1Header: "Etapa 2 de 5<br/> Processo de Refinamento",
    mobileGuidanceModalRight1Text:
      "Existem várias etapas nesta Fase. <br/><br/>Passo 1. Por favor, observe todas as afirmações que você avaliou <b>positivamente</b> e selecione aquelas que estão <b>mais próximas da sua perspectiva</b>.<br/><br/>Você pode precisar <b>rolar</b> para baixo para ver todas as afirmações.",
    mobileGuidanceModalRight2Header: "Etapa 2 de 5<br/> Processo de Refinamento",
    mobileGuidanceModalRight2Text:
      "Em seguida, mais uma vez observe as afirmações restantes que você avaliou <b>positivamente</b> e selecione o <b>próximo conjunto</b> de afirmações que estão <b>mais próximas da sua perspectiva</b>.",
    mobileGuidanceModalLeft1Header: "Etapa 2 de 5<br/> Processo de Refinamento",
    mobileGuidanceModalLeft1Text:
      "Passo 2. Em seguida, por favor, observe todas as afirmações que você avaliou negativamente e <b>selecione</b> aquelas que <b>diferem mais</b> da sua perspectiva.<br/><br/>Você pode precisar <b>rolar para baixo</b> para ver todas as afirmações.",
    mobileGuidanceModalLeft2Header: "Etapa 2 de 5<br/> Processo de Refinamento",
    mobileGuidanceModalLeft2Text:
      "Em seguida, mais uma vez observe as afirmações restantes que você avaliou <b>negativamente</b> e <b>selecione</b> o <b>próximo conjunto</b> de afirmações que são <b>mais diferentes da sua perspectiva</b>.",
    mobileThinScrollBottomModalHead: "Confirmação Desabilitada",
    mobileThinScrollBottomModalText:
      "Por favor, role até o final e revise todas as afirmações antes de confirmar suas seleções.",
    sortHelpModalHead: "Passo 3 de 5",
    sortHelpModalText:
      "Neste passo, por favor, clique e arraste os cartões de afirmação para a coluna apropriada com base na sua perspectiva e nas instruções do pesquisador no topo da página. <br/>",
    sortAgreement: "Concordo",
    sortDisagreement: "Discordo",
    condOfInst: "Ordene os cartões de acordo com sua experiência com os iPads neste semestre",
    sortingCompleteModalHead: "Ordenação Completa",
    sortingCompleteModalText:
      'Você completou a ordenação inicial. Por favor, reserve um momento para confirmar a colocação dos cartões.<br/><br/>Quando estiver satisfeito com a colocação deles, por favor, clique no <b>botão azul "Continuar"</b> no canto inferior direito da sua tela para ir para o próximo passo.',
    sortPreventNavModalHead: "Navegação Desabilitada",
    sortPreventNavModalText:
      "Por favor, termine a ordenação da grade antes de ir para o próximo passo.",
    sortOverloadedColumnModalHead: "Navegação Desabilitada",
    sortOverloadedColumnModalText:
      "Uma das colunas tem muitos cartões (ela será destacada em laranja e terá uma borda tracejada). Por favor, ajuste a colocação dos cartões para que todas as colunas tenham o número correto.",
    mobileSortSwapModalHead: "Trocar Classificações das Afirmações?",
    mobileSortSwapModalSuccessMessage: "As posições das afirmações foram trocadas com sucesso.",
    mobileSortSwapModalText: 'Clique em "Confirmar" para trocar.',
    mobileSortSwapModalConfirmButton: "Trocar",
    mobileSortConditionsOfInstruction:
      "Classifique as Afirmações de Acordo com Sua Experiência de Uso dos iPads na Aula",
    mobileSortHelpModalHead: "Etapa 3 de 5<br/> Classificação Final das Afirmações",
    mobileSortHelpModalText:
      "As afirmações foram classificadas com base em suas avaliações anteriores.<br/><br/> Aquelas afirmações que estão mais próximas da sua perspectiva devem estar no topo da lista. Aquelas que estão mais distantes da sua perspectiva devem estar na parte inferior da lista.<br/><br/>Você precisará <b>rolar para baixo</b> para ver todas as afirmações.<br/><br/>Por favor, <b>revise as classificações</b> e faça quaisquer mudanças necessárias na classificação das afirmações para que a ordenação <b>reflita com precisão sua perspectiva</b>. <br/><br/><mark>Esta é a etapa mais crítica da pesquisa, portanto, revise as classificações das afirmações com cuidado.</mark><br/><br/> Para <b>trocar as posições de afirmações vizinhas</b>, toque nas setas para cima ou para baixo no lado direito ou esquerdo da afirmação.<br/><br/>Para <b>trocar as posições de afirmações que estão separadas</b>, toque em duas afirmações (a cor da afirmação mudará para amarelo) e uma mensagem de confirmação de troca aparecerá.<br/><br/>Quando estiver satisfeito com todas as classificações, toque no botão de navegação no canto inferior direito.",
    mobileSortScrollBottomModalHead: "Navegação Desabilitada",
    mobileSortScrollBottomModalText:
      "Por favor, role até o final e revise a classificação de todas as afirmações antes de ir para a próxima etapa.",
    postsortHeader: "Comentários Pós-Ordenação",
    postsortInstructions:
      "<h3>Por favor, descreva seus pensamentos sobre estas afirmações com mais detalhes.</h3>",
    placeholder: "Clique aqui para adicionar comentário",
    postsortPlacedOn: "Colocado em ",
    postsortAgreement: "Colocado em Concordo",
    postsortDisagreement: "Colocado em Discordo",
    postsortModalHead: "Passo 4 de 5",
    postsortModalText:
      "Você pode usar os botões na parte inferior da página para alterar o tamanho da fonte ou a altura do cartão.<br/>",
    postsortPreventNavModalHead: "Navegação Desabilitada",
    postsortPreventNavModalText:
      "Por favor, adicione comentários a todos os cartões antes de ir para o próximo passo.",
    postsortBackButtonText: "Voltar",
    mobilePostsortPreventNavModalHead: "Navegação Desabilitada",
    mobilePostsortPreventNavModalText:
      "Por favor, adicione comentários a todas as afirmações antes de ir para o próximo passo.",
    mobilePostsortSortbarText: "Comentários Pós-Ordenação",
    mobilePostsortPlaceholder: "Clique aqui para adicionar comentário",
    mobilePostsortHelpModalHead: "Etapa 4 de 5<br/> Comentários Pós-Classificação",
    mobilePostsortHelpModalText: "Por favor, comente sobre suas classificações destas afirmações.",
    surveyHeader: "Questionário Pós-Ordenação",
    surveyModalHead: "Passo 5 de 5",
    surveyModalText:
      'Finalmente, por favor, responda às seguintes perguntas sobre seu histórico. As perguntas marcadas com um "*" no título são obrigatórias.<br/>',
    surveyPreventNavModalHead: "Navegação Desabilitada",
    surveyPreventNavModalText:
      "Por favor, responda às perguntas obrigatórias (destacadas em amarelo) antes de ir para o próximo passo.",
    mobileSurveyHelpModalHead: "Etapa 5 de 5<br/> Questionário Pós-Classificação",
    mobileSurveyHelpModalText:
      "Por favor, responda a estas perguntas de histórico.<br/><br/>Algumas das perguntas podem exigir que você forneça uma resposta antes de poder ir para o passo final.",
    btnTransfer: "Enviar Dados",
    transferHead: "Passo Final",
    transferTextAbove:
      '<h1>Pronto para Enviar</h1><br/><br/> <h2>Por favor, clique no botão "Enviar Dados" para transmitir seus resultados.</h2>',
    transferTextBelow:
      "Por favor, aguarde a mensagem de confirmação que indica que seus dados foram enviados ao servidor com sucesso.",
    transferOkModalHeader: "Sucesso - Os dados foram enviados ao servidor.",
    transferOkModalText:
      "Obrigado por usar Quince!<br/><br/>Você pode agora fechar a aba do seu navegador.",
    transferFailModalHeader: "Falha na conexão com o servidor",
    transferFailModalText: "Por favor, tente novamente em alguns instantes.",
    fallbackMessage:
      '*** Erro - Falha na Transmissão*** <br/><br/>Por favor, verifique sua conexão com a internet e clique no botão "Enviar Dados" novamente.',
    btnDownload: "Baixar",
    goodbyeMessage:
      "<div>Obrigado!</div> <br /><div>Você pode agora fechar a aba do navegador</div>",
    mobileSortTitleBar: "Enviar Dados",
    btnTransferEmail: "Abrir Cliente de Email e Enviar Resultados",
    clipboardResults: "Copiar Resultados para a Área de Transferência",
    clipboardEmail: "Copiar Endereço de Email para a Área de Transferência",
    copiedText: "Copiado!",
    downloadResultsButtonText: "Baixar Resultados",
    copyFailMessage: "Erro: Por favor, tente novamente.",
    defaultEmailClientFail:
      "Seu cliente de email padrão deveria ter aberto automaticamente com os resultados no corpo do email. Se não abriu, por favor, use os botões abaixo para copiar e colar suas informações em um email.",
    emailBodyMessage:
      "Você não precisa adicionar nada a este email. Por favor, apenas clique no botão ENVIAR.",
    linkingFallbackMessage: "Por favor, clique no botão para iniciar a próxima ordenação Q",
    linkingBtnText: "Iniciar Próxima Ordenação Q",
    localHeader: "Painel de Controle de Ordenação Q Offline",
    partIdText: "Nome do Participante",
    usercodeText: "Código de Usuário",
    localStartButtonText: "Iniciar Ordenação Q",
    localDeleteButtonText: "Excluir",
    localDownloadButtonText: "Salvar Dados da Ordenação Q em Disco",
    storedQsortsHeaderText: "Ordenações Q Armazenadas",
    localDeleteModalText:
      "Isto excluirá os dados da ordenação Q do participante que estão atualmente armazenados no navegador. Você normalmente faria isso apenas ao iniciar um novo projeto.<br/><br/><b>ATENÇÃO - Dados excluídos não podem ser recuperados.</b> <br/><br/> <center></center>",
    localDeleteModalHead: "Excluir Dados Armazenados no Navegador?",
    localParticipantsText: "Participantes",
    localSaveDataButton: "Salvar Dados do Participante na Memória do Navegador",
    localSubmitSuccessModalHeader: "Sucesso",
    localSubmitSuccessModalText:
      "Os dados da ordenação Q do participante foram salvos com sucesso na memória do navegador",
    localSaveBeforeDeleteModalHeader: "Exclusão Desabilitada",
    localSaveBeforeDeleteModalText: "Salve os Dados da Ordenação Q em Disco antes de excluir.",
    returnToLocalPanelButtonText: "Retornar ao Painel de Controle",
    emailSubjectText: `Resultados do Quince Q-sort`,
    submitFailMessage:
      "Não foi possível conectar ao banco de dados.<br/><br/>Clique no botão para abrir seu cliente de e-mail padrão e enviar um e-mail contendo os dados para a equipe de pesquisa.",
    checkInternetMessage:
      "*** Erro - Falha na transmissão ***<br/><br/>Por favor, verifique sua conexão com a internet e clique novamente no botão 'Enviar dados'.",
    press1: "(pressionar 1)",
    press2: "(pressionar 2)",
    press3: "(pressionar 3)",
  };
  return obj;
};

export default showSectionDefaults_PT;
