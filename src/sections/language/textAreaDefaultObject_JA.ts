const showSectionDefaults_JA = () => {
  const obj = {
    btnHelp: "ヘルプ",
    fontSizeText: `テキストサイズ`,
    cardHeightText: `カードの高さ`,
    // LoginFirst: `まずログインを完了してください。`,
    btnNext: "次",
    stepCompletedMessage: `このステップを完了しました。画面右下の青い「続行」ボタンをクリックして、次のステップに進んでください。`,
    screenOrientationText: `縦向きでご使用ください！`,
    expandViewMessage:
      'Tap the View "+" button below to expand the view area and hide this message.',

    /*
     ******** 同意ページ  ****************** */
    consentTitleBarText: `研究同意`,
    consentText: `[研究責任者氏名]が[機関または組織名]で実施する研究に参加していただくようご案内しています。参加を決める前に、研究の目的と内容について理解いただくことが重要です。以下の情報をよくお読みください。ご質問がございましたら、研究チームまでお気軽にお問い合わせください。<br /><br /><b>研究の目的</b><br />この研究の目的は、[研究の目的を簡潔に説明、例：新しい教授法が学生の成績に与える影響を調査する]です。この研究は、[研究のより広い意味や目標を mention]に関する洞察を得るのに役立ちます。<br /><br /><b>研究の手順</b><br />参加に同意された場合、[参加者が行う手順、所要時間、頻度など]をご説明します。例えば、一連の陈述文を評価し、分類し、その分類について振り返っていただく場合があります。また、最後に短いアンケートにご回答いただきます。研究は[所要時間（例：45分）]程度かかります。<br /><br /><b>メリット</b><br />参加による直接的なメリットはない可能性がありますが、この研究で収集された情報は[潜在的なメリットを説明、例：教育方法の改善、科学的知識への貢献など]に役立つ可能性があります。また、[適用可能な場合、個人的なメリットを説明]を得る可能性もあります。<br /><br /><b>機密保持</b><br />本研究で収集されたすべての情報は厳重に機密保持されます。データは安全に保管され、研究チームのみがアクセス可能です。あなたの身分は、本研究の結果に基づく報告書や出版物において開示されません。[データの匿名化、暗号化、または安全な保管方法について説明]<br /><br /><b>任意の参加</b><br />本研究への参加は完全に任意です。参加を拒否したり、いつでも参加を中止したりすることができ、その場合でも、本来受けられる権利や利益は一切失われません。参加を中止する場合、ウェブページを閉じると、その時点までに収集されたデータは削除されます。<br /><br /><b>同意</b><br />このページの最下部にある「同意する」ボタンをクリックすることにより、提供された情報を理解し、本研究への参加に同意したものとみなされます。本研究に関するご質問がございましたら、[研究責任者の氏名と連絡先情報]までご連絡ください。`,

    consentHelpModalHead: `連絡先情報`,
    consentHelpModalText: `この大学研究プロジェクトへのご参加ありがとうございます。研究チームへは電話（1-555-867-5309）またはメール（researchTeam@myMail.com）でご連絡いただけます`,
    btnNextConsent: `同意する`,
    btnHelpConsent: `連絡先情報`,

    /*
     ******* アクセスページ  ****************** */
    loginWelcomeText: `<center><h3>ようこそ！</h3></center><br/> このQメソドロジー研究プロジェクトへのご参加ありがとうございます。<br/>以下のフォームを使用して<b>サインイン</b>してください。`,

    loginHeaderText: `サインイン`,
    loginPartIdText: `お名前または参加者IDを入力してください`,
    accessCodeText: `アクセスコード`,
    accessInputText: `この調査のアクセスコードを入力してください。`,
    partIdWarning: `名前またはIDが無効です`,
    accessCodeWarning: `アクセスコードが無効です`,
    loginSubmitButtonText: `送信`,

    /*
     ******* ウェルカムページ  ****************** */
    landingHead: `大学研究プロジェクト`,
    welcomeText: `<h2>EQ Web Sort デモプロジェクト - 教室でのiPad活用</h2><br/><br/><p>この研究プロジェクトにご協力いただきありがとうございます</p><br/><br/><br/>
    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/lMy4ARVEcCI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
    landingHelpModalHead: `ようこそ！`,
    landingHelpModalText: `この大学研究プロジェクトにご参加いただき、ありがとうございます。画面右下の「<b>次へ</b>」ボタンをクリックして次のステップに進んでください。`,
    btnNextLanding: `次へ`,
    btnHelpLanding: `ヘルプ`,

    /*
     ******** 事前分類 ****************** */
    logInFirst: `まずログイン手続きを完了してください。`,

    titleBarText: `事前分類`,
    presortAgreement: `同意 (3)`,
    presortStatements: `陈述`,
    presortNeutral: `特に感じない (2)`,
    presortDisagreement: `反対 (1)`,
    presortImageSortInstructions: `画像を拡大するには、マウス ポインターを画像の上に置き、ダブルクリックしてください。<br/><br/> 画像を比較するには、キーボードの<u>Shift</u>キーを押したまま、マウスで2つの画像をクリックしてください。`,

    presortModalHead: `ステップ1/4`,
    presortModalText: `以下の文を注意深く読み、3つの山に分けます：同意しない文の山、同意する文の山、残りの文の山。後で変更可能です。<br/><br/>この指示をもう一度読みたい場合は、画面左下のヘルプボタンをクリックしてください。<br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/vtnLuKzpcKQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
    presortPreventNavModalHead: `ナビゲーション無効`,
    presortPreventNavModalText: `次のステップに進む前に、事前ソートを完了してください。`,
    presortFinishedModalHead: `事前ソート完了`,

    presortFinishedModalText: `このステップは完了しました。ページの右下にある「次へ」ボタンをクリックして次のステップに進んでください。`,
    presortOnPageInstructions: `<div style="font-size: 24px">カードをクリックしてドラッグするか、または「1」「2」「3」キーを押して文を並べ替えてください。</div>`,

    /*
     ******** モバイル事前分類  ****************** */

    mobilePresortConditionsOfInstruction: `クラスのiPad使用経験に基づいて文を評価してください`,
    mobilePresortCompletedLabel: `評価完了`,
    mobilePresortAssignLeft: `私の見解と異なる`,
    mobilePresortAssignRight: `私の見解と類似している`,
    mobilePresortRedoModalHead: `文を再評価する`,

    mobilePresortRedoModalText: `適切なアイコンをクリックしてください`,
    mobilePresortRedoModalConfirmButton: `確認`,
    mobilePresortEvaluationsComplete: `<div><b>すべての文が評価されました。</b> <br /><br />評価を確認するため、文を確認してください。  <br /><br /><div>`,

    mobilePresortHelpModalHead: `ステージ 1/5<br />ステートメントの評価`,
    mobilePresortHelpModalText: `各ステートメントに値を割り当てるために、適切なボタンをタップしてください。 <br /><br /> ステートメントが <b>あなたの見解と類似している</b> 場合、緑の「+」ボタンをタップしてください。<br /><br /> 記述が<b>あなたの見解と異なる</b>場合は、赤い「-」ボタンをタップしてください。 <br /><br />不明な場合は、「？」ボタンをタップしてください。 <br /><br /> このアンケートには<b>33の記述</b>があります。<br /><br /> 評価を<b>変更</b>したい場合は、記述文の横にある<b>やり直しアイコン</b>をタップしてください。`,
    mobilePresortFinishedModalHead: `5段階中1段階目<br />記述文の評価`,
    mobilePresortFinishedModalText: `評価プロセスが完了しました。<br/><br/> 回答内容を確認するため、<b>質問項目を再確認</b>してください。  <br /><br />変更したい場合は、質問項目の左にある「再実行」アイコンをタップしてください。<br /><br />すべての評価に満足したら、画面右下の<b>ナビゲーションボタン</b>をタップしてください。`,

    mobilePresortProcessCompleteMessage: `評価プロセスが完了しました。<br/><br/> 右下のナビゲーションボタンをクリックして次の段階に進んでください。`,
    mobilePresortPreventNavModalHead: `ナビゲーション無効`,
    mobilePresortPreventNavModalText: `次の段階に進む前に評価を完了してください。`,

    /*
     ******** REFINE SCREEN  ****************** */
    thinningPreventNavModalHead: `ナビゲーションが無効です`,
    thinningPreventNavModalText: `次のステップに進む前に、精査プロセスを完了してください。`,
    thinningConfirmModalHead: `選択が不完全です`,
    thinningConfirmModalText: `必要な数の文を選択してください`,
    initialInstructionPart1: `以下は、前のステップで肯定的に評価した文です。次に、最も同意する文の数を<b>選択</b>してください。<br /><br />`,
    initialInstructionPart2: `次に、あなたの見解に最も近い文を選択してください`,
    initialInstructionPart3: `オレンジ色の「送信」ボタンをクリックすると、画面に別の文のセットが表示されます`,

    agreeMostText: `次に、残りの文に対して同じプロセスを繰り返してください。ただし、今回は最も同意するカードを選択してください。`,
    agreeLeastText: `次に、残りの文に対して同じプロセスを繰り返してください。ただし、今回は最も同意しないカードを選択してください。`,
    finalInstructions: `精査プロセスが完了しました。画面右下のナビゲーションボタンをクリックして次の段階に進んでください。`,

    /*
     ******** モバイル精緻化画面  ****************** */
    moveTopMobileHead: `移動を確認`,
    moveTopMobileText: `この文をリストの上部に移動しますか？`,
    moveAllTopMobileText: `選択したすべての文をリストの上部に移動しますか？`,
    moveTopMobileButtonOK: `はい`,

    mobileModalButtonCancel: `キャンセル`,
    mobileThinConditionsOfInstruction: `評価を精査してください`,
    mobileThinSubmitButtonText: `送信`,

    mobileThinHelpModalHead: `評価を精査してください`,
    mobileThinHelpModalText: `この段階では、評価した文を<b></b>レビューし</b>、あなたの視点から最も類似または最も異なるものを選択する必要があります。<br/><br/>すべての文を確認するには、<b>下にスクロール</b>してください。<br/><br/>文を選択するには、文のコンテナをタップしてください。文の色が黄色に変わります。<br/><br/>正しい数の文を選択すると、「送信」ボタンが<b>青色</b>に変わります。<br/><br/>文を比較しやすくするため、文の右側または左側にある上下の矢印をタップして<b>並べ替え</b>ることができます。<br/><br/>選択したステートメントのグループをリストの上部に移動するには、ステートメントを<b>長押し</b>（約1秒間）します。`,
    mobileThinPreventNavModalHead: `ナビゲーション無効`,

    mobileThinPreventNavModalText: `次のページに移動する前に、精査プロセスを完了してください。`,
    mobileThinProcessCompleteMessage: `精査プロセスが完了しました。<br/><br/> 次のステージに進むには、右下のナビゲーションボタンをクリックしてください。`,
    mobileGuidanceModalRight1Header: `ステージ 2/5<br/> 精緻化プロセス`,
    mobileGuidanceModalRight1Text: `このステージにはいくつかのステップがあります。<br/><br/>ステップ 1. <b>肯定的に</b>評価したすべての文を確認し、あなたの見解に最も近いものを選択してください。<br/><br/>すべての文を確認するには、<b>スクロール</b>する必要がある場合があります。`,
    mobileGuidanceModalRight2Header: `5段階中の2段階目<br/>精緻化プロセス`,
    mobileGuidanceModalRight2Text: `次に、再び肯定的に評価した残りの項目を確認し、あなたの見解に最も近い次のセットの項目を選択してください。`,

    mobileGuidanceModalLeft1Header: `ステージ 2/5<br/>精緻化プロセス`,
    mobileGuidanceModalLeft1Text: `ステップ 2. 次に、否定的に評価したすべての文を確認し、<b>選択</b>してください。<b>最も異なる</b>ものを選んでください。<br/><br/>すべての文を確認するには、<b>スクロールダウン</b>する必要がある場合があります。`,
    mobileGuidanceModalLeft2Header: `ステージ2/5<br/>精緻化プロセス`,
    mobileGuidanceModalLeft2Text: `次に、再度、<b>否定的に評価した</b>残りの項目を確認し、<b>選択</b>してください。次に、<b>最も異なる</b>項目を<b>次のセット</b>として選択してください。`,

    mobileThinScrollBottomModalHead: `確認無効`,
    mobileThinScrollBottomModalText: `選択を確認する前に、画面下までスクロールしてすべての文を確認してください。`,

    /*
     ******** SORT  ****************** */
    sortHelpModalHead: `ステップ 3/5`,
    sortHelpModalText: `このステップでは、ご自身の視点とページ上部の研究者の指示に基づいて、ステートメントカードを適切な列にドラッグアンドドロップしてください。<br/><br/><center><iframe width="560" height=「315」 src="https://www.youtube.com/embed/iRxC9Vv3dLo?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,

    sortAgreement: `同意`,
    sortDisagreement: `不同意`,
    condOfInst: `この学期にiPadを使用した経験に基づいてカードを並べ替えてください`,
    sortingCompleteModalHead: `並べ替え完了`,
    sortingCompleteModalText: `初期の並べ替えが完了しました。カードの配置を確認してください。<br/><br/>配置に満足したら、画面右下の<b>青い「次へ」ボタン</b>をクリックして次のステップに進んでください。`,
    sortPreventNavModalHead: `ナビゲーション無効`,

    sortPreventNavModalText: `次のステップに進む前にグリッドの並べ替えを完了してください。`,
    sortOverloadedColumnModalHead: `ナビゲーションが無効です`,
    sortOverloadedColumnModalText: `列の1つにカードが多すぎます（オレンジ色で囲まれ、破線枠で表示されます）。すべての列が正しい枚数になるようにカードの配置を調整してください。`,

    /*
     ******** モバイル並べ替え  ****************** */
    mobileSortSwapModalHead: `ステートメントのランキングを交換しますか？`,
    mobileSortSwapModalText: `「確認」をクリックして交換してください。`,

    mobileSortSwapModalConfirmButton: `入れ替え`,
    mobileSortConditionsOfInstruction: `クラスでのiPadの使用経験に基づいて文をランク付けしてください`,
    mobileSortHelpModalHead: `5段階中3段階目<br/> 最終的な文のランク付け`,
    mobileSortHelpModalText: `文は、以前の評価に基づいてランク付けされています。<br/><br/> あなたの見解に最も近い文はリストの上部に、最も遠い文は下部に配置してください。<br/><br/>すべてのコメントを確認するには、<b>下にスクロール</b>してください。<br/><br/><b>ランキングを確認</b>し、必要に応じてコメントの順位を変更して、順序が<b>あなたの見解を正確に反映</b>するようにしてください。<br/><br/><mark>これは調査で最も重要な段階です。コメントのランキングを慎重に確認してください。</mark><br/><br/> 隣接する文書の位置を交換するには、文書の右または左にある上下の矢印をタップしてください。<br/><br/>分離された文書の位置を交換するには、2つの文書をタップ（文書の色が黄色に変わります）し、交換確認メッセージが表示されます。<br/><br/>すべての順位に満足したら、画面右下のナビゲーションボタンをタップしてください。`,
    mobileSortScrollBottomModalHead: `ナビゲーション無効`,
    mobileSortScrollBottomModalText: `次の段階に進む前に、画面下までスクロールしてすべての文の順位を確認してください。`,

    /*
     ******** POSTSORT  ****************** */

    postsortHeader: `ポストソート コメント`,
    postsortInstructions: `<h3>これらの文について、より詳細なご意見を記入してください。</h3>`,
    placeholder: `コメントを追加するにはここをクリック`,
    postsortAgreement: `同意に配置`,
    postsortDisagreement: `反対に配置`,
    postsortModalHead: `ステップ 4/5`,
    postsortModalText: `ページの最下部にあるボタンを使用して、フォントサイズやカードの高さを変更できます。<br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/EFNlSiaEVVg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></h3></center>`,
    postsortPreventNavModalHead: `ナビゲーションを無効にしました`,
    postsortPreventNavModalText: `次のステップに進む前に、すべてのカードにコメントを追加してください`,
    postsortBackButtonText: `戻る`,

    /*
     ******** モバイル投稿ソート  ****************** */
    mobilePostsortPreventNavModalHead: `ナビゲーションを無効にしました`,
    mobilePostsortPreventNavModalText: `次のステップに進む前に、すべてのコメントにコメントを追加してください`,
    mobilePostsortSortbarText: `投稿後のコメント`,
    mobilePostsortPlaceholder: `コメントを追加するにはここをクリック`,
    mobilePostsortHelpModalHead: `ステージ 4/5<br/> 投稿後のコメント`,
    mobilePostsortHelpModalText: `これらの投稿のランキングについてコメントしてください。`,

    /*
     ******** アンケート  ****************** */
    surveyHeader: `投稿後のアンケート`,
    surveyModalHead: `ステップ 5/5`,
    surveyModalText: `最後に、ご自身の背景に関する以下の質問にお答えください。タイトルに「*」が付いた質問は必須です。<br/><br/><center><iframe width="560" height=「315」 src="https://www.youtube.com/embed/68MHzgLn1zg?rel=0" title="YouTube動画プレイヤー" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,

    surveyPreventNavModalHead: `ナビゲーションが無効です`,
    surveyPreventNavModalText: `次のステップに進む前に、黄色で囲まれた必須の質問に回答してください。`,

    /*
     ******** モバイルアンケート  ****************** */
    mobileSurveyHelpModalHead: `5段階中5段階目<br/> ランキング後のアンケート`,
    mobileSurveyHelpModalText: `以下の質問にお答えください。`,

    /*
     ******** SUBMIT  ****************** */
    btnTransfer: `データを送信`,
    transferHead: `最終ステップ`,
    transferTextAbove: `<h1>送信準備完了</h1><br/><br/> <h2>「データを送信」ボタンをクリックして結果を送信してください。</h2>`,
    transferTextBelow: `送信確認メッセージが表示されない場合は、<br/>数分待ってから送信ボタンを再度クリックしてください。`,
    transferOkModalHeader: `成功 - データがサーバーに送信されました。`,
    transferOkModalText: `EQ Web Sortをご利用いただきありがとうございました。<br/><br/>ブラウザのタブを閉じても構いません。`,

    transferFailModalHeader: `サーバーへの接続に失敗しました`,
    transferFailModalText: `しばらくしてからもう一度お試しください。`,
    fallbackMessage: `データ送信に失敗しました。結果をダウンロードし、ken.q.tools@gmail.com 宛に添付ファイルとしてメールで送信してください。 ありがとう！`,
    btnDownload: `ダウンロード`,
    goodbyeMessage: `<div>ありがとう！</div> <br/><div>ブラウザのタブを閉じても構いません</div>`,

    /*
     ******** 17. MOBILE SUBMIT  ****************** */
    mobileSortTitleBar: `データを送信`,

    /*
     ******** 18. FAILURE  ****************** */
    btnTransferEmail: `メールクライアントを開いて結果を送信`,
    clipboardResults: `結果をクリップボードにコピー`,
    clipboardEmail: `メールアドレスをクリップボードにコピー`,
    copiedText: `コピー完了！`,
    downloadResultsButtonText: `結果をダウンロード`,

    // コピー失敗メッセージ: `エラー: もう一度お試しください。`,
    // デフォルトメール失敗モーダルテキスト: `デフォルトのメールクライアントが自動的に開くはずでした。結果がメール本文に表示されていない場合は、以下のボタンを使用して情報をコピーし、メールに貼り付けてください。`,
    // メール本文メッセージ: `このメールに何も追加する必要はありません。送信ボタンをクリックしてください。`,

    /*
     ******** 19. PROJECT LINKING  ****************** */
    linkingFallbackMessage: `次のQソートを開始するにはボタンをクリックしてください`,
    linkingBtnText: `次のQソートを開始`,

    /*
     ******** 20. ローカルデータ収集  ****************** */
    LocalHeader: `オフライン Q-sort コントロールパネル`,
    PartIdText: `参加者名`,
    UsercodeText: `ユーザーコード`,
    LocalStartButtonText: `Q-sort を開始`,
    LocalDeleteButtonText: `削除`,
    LocalDownloadButtonText: `Q-sort データをディスクに保存`,
    StoredQsortsHeaderText: `保存されたQ-sort`,
    LocalDeleteModalText: `この操作は、ブラウザに保存されている参加者のQ-sortデータを削除します。通常は新しいプロジェクトを開始する際にのみ実行してください。<br/><br/><b>注意 - 削除されたデータは復元できません。</b> <br/><br/> <center></center>`,

    LocalDeleteModalHead: `ブラウザに保存されたデータを削除しますか？`,
    LocalParticipantsText: `参加者`,
    LocalSaveDataButton: `参加者データをブラウザのメモリに保存`,
    LocalSubmitSuccessModalHeader: `成功`,
    LocalSubmitSuccessModalText: `参加者のQ-sortデータがブラウザのメモリに正常に保存されました`,
    ReturnToLocalPanelButtonText: `コントロールパネルに戻る`,
    LocalSaveBeforeDeleteModalHeader: `削除無効`,
    LocalSaveBeforeDeleteModalText: `削除前にQソートデータをディスクに保存します。`,
  };
  return obj;
};

export default showSectionDefaults_JA;
