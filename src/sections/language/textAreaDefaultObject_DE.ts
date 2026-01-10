const showSectionDefaults_DE = () => {
  const obj = {
    btnHelp: "Hilfe",
    fontSizeText: "Textgröße",
    cardHeightText: "Kartenhöhe",
    btnNext: "Weiter",
    stepCompletedMessage:
      'Sie haben diesen Schritt abgeschlossen. Bitte klicken Sie auf die <b>blaue Schaltfläche "Weiter"</b> unten rechts auf Ihrem Bildschirm, um zum nächsten Schritt zu gelangen.',
    screenOrientationText: "Bitte verwenden Sie das Hochformat!",
    mobileTextSize: "Text",
    mobileViewSize: "Ansicht",
    mobileModalButtonCancel: "Abbrechen",
    expandViewMessage:
      'Tippen Sie unten auf die Schaltfläche "+" bei Ansicht, um den Anzeigebereich zu erweitern und diese Nachricht auszublenden.',
    consentTitleBarText: "Forschungseinwilligung",
    consentText:
      'Sie sind eingeladen, an einer Forschungsstudie teilzunehmen, die von [Name des Hauptprüfers] an [Institution oder Organisation] durchgeführt wird. Bevor Sie sich für eine Teilnahme entscheiden, ist es wichtig, dass Sie verstehen, warum die Forschung durchgeführt wird und was sie beinhaltet. Bitte nehmen Sie sich die Zeit, die folgenden Informationen sorgfältig zu lesen. Wenden Sie sich bei Fragen gerne an das Forschungsteam.<br /><br /><b>Zweck der Studie</b><br />Der Zweck dieser Studie ist es, [kurze Beschreibung des Zwecks, z. B. die Auswirkungen einer neuen Lehrmethode auf die Leistung von Schülern zu verstehen]. Diese Forschung wird uns helfen, Erkenntnisse über [erwähnen Sie breitere Auswirkungen oder Ziele der Studie] zu gewinnen. <br /><br /><b>Studienablauf</b><br />Wenn Sie sich zur Teilnahme bereit erklären, werden Sie gebeten, [beschreiben Sie die beteiligten Verfahren, einschließlich dessen, was die Teilnehmer tun werden, wie lange es dauern wird und wie häufig es vorkommen wird]. Sie werden beispielsweise gebeten, eine Reihe von Aussagen zu bewerten, sie zu sortieren und dann über die Sortierung zu reflektieren. Zusätzlich gibt es am Ende einen kurzen Fragebogen. Die Studie wird ungefähr [Dauer, z. B. 45 Minuten] dauern. <br /><br /><b>Nutzen</b><br />Obwohl es möglicherweise keine direkten Vorteile für Sie durch die Teilnahme gibt, können die in dieser Studie gesammelten Informationen dazu beitragen, [beschreiben Sie potenzielle Vorteile, z. B. Bildungsmethoden zu verbessern, zum wissenschaftlichen Wissen beizutragen usw.]. Sie können auch persönliche Einblicke in [beschreiben Sie gegebenenfalls persönliche Vorteile] gewinnen.<br /><br /><b>Vertraulichkeit</b><br />Alle in dieser Studie gesammelten Informationen werden streng vertraulich behandelt. Die Daten werden sicher gespeichert und nur das Forschungsteam hat Zugriff darauf. Ihre Identität wird in keinen Berichten oder Veröffentlichungen, die aus dieser Studie resultieren, offengelegt. [Beschreiben Sie, wie Daten anonymisiert, verschlüsselt oder sicher gespeichert werden].<br /><br /><b>Freiwillige Teilnahme</b><br />Ihre Teilnahme an dieser Studie ist völlig freiwillig. Es steht Ihnen frei, eine Teilnahme abzulehnen oder jederzeit zurückzutreten, ohne Strafe oder Verlust von Leistungen, auf die Sie anderweitig Anspruch haben. Wenn Sie sich zum Rücktritt entscheiden, schließen Sie die Webseite und alle bis zu diesem Zeitpunkt gesammelten Daten werden gelöscht.<br /><br /><b>Einwilligung</b><br />Indem Sie unten auf dieser Seite auf die Schaltfläche "Einverstanden" klicken, bestätigen Sie, dass Sie die bereitgestellten Informationen gelesen und verstanden haben und dass Sie der Teilnahme an dieser Studie zustimmen. Wenn Sie Fragen zu dieser Studie haben, wenden Sie sich bitte an [Name und Kontaktinformationen des Hauptprüfers].',
    consentHelpModalHead: "Kontaktinformationen",
    consentHelpModalText:
      "Vielen Dank für Ihre Teilnahme an diesem universitären Forschungsprojekt. Sie können das Forschungsteam telefonisch (1-555-867-5309) oder per E-Mail unter researchTeam@myMail.com kontaktieren",
    btnHelpConsent: "Kontaktinformationen",
    btnNextConsent: "Einverstanden und weiter",
    loginWelcomeText:
      "<center></center><h3>Willkommen!</h3></center><br/> Vielen Dank für Ihre Teilnahme an diesem Q-methodologischen Forschungsprojekt. <br/>Bitte <b>melden Sie sich an</b> mit dem untenstehenden Formular, um den Prozess zu beginnen. ",
    loginHeaderText: "Anmelden",
    loginPartIdText: "Bitte geben Sie Ihren Namen oder Ihre Teilnehmer-ID ein",
    accessCodeText: "Zugangscode",
    accessInputText: "Bitte geben Sie den Zugangscode für diese Umfrage ein.",
    partIdWarning: "Ungültiger Name oder ID",
    accessCodeWarning: "Zugangscode ungültig",
    loginSubmitButtonText: "Absenden",
    landingHead: "Universitäres Forschungsprojekt",
    welcomeText:
      "<h2>Quince Demoprojekt - iPad-Nutzung im Klassenzimmer.</h2><br/><br/><p>Vielen Dank für Ihre Unterstützung bei diesem Forschungsprojekt</p><br/>",
    landingHelpModalHead: "Willkommen!",
    landingHelpModalText:
      'Vielen Dank für Ihre Teilnahme an diesem universitären Forschungsprojekt. Bitte klicken Sie auf die Schaltfläche "<b>Weiter</b>" unten rechts auf dem Bildschirm, um zum nächsten Schritt zu gelangen.',
    btnNextLanding: "Weiter",
    btnHelpLanding: "Hilfe",
    mobileWelcomeText:
      "<h2>Quince Demoprojekt - iPad-Nutzung im Klassenzimmer.</h2><br/><br/><p>Vielen Dank für Ihre Unterstützung bei diesem Forschungsprojekt!</p><br/>",
    logInFirst: "Bitte schließen Sie zuerst den Anmeldevorgang ab.",
    titleBarText: "Vorsortierung",
    presortAgreement: "Zustimmung (3)",
    presortNeutral: "Keine starke Meinung (2)",
    presortDisagreement: "Ablehnung (1)",
    presortStatements: "Aussagen",
    presortModalHead: "Schritt 1 von 4",
    presortModalText:
      "Lesen Sie die folgenden Aussagen sorgfältig und teilen Sie sie in drei Stapel auf: einen Stapel für Aussagen, denen Sie tendenziell nicht zustimmen, einen Stapel für Karten, denen Sie tendenziell zustimmen, und einen Stapel für die übrigen. Änderungen können später vorgenommen werden.<br/><br/>Wenn Sie diese Anleitung ein zweites Mal lesen möchten, klicken Sie auf die Hilfe-Schaltfläche in der unteren linken Ecke.<br/><br/>",
    presortPreventNavModalHead: "Navigation deaktiviert",
    presortPreventNavModalText:
      "Bitte beenden Sie die Vorsortierung, bevor Sie zum nächsten Schritt übergehen.",
    presortFinishedModalHead: "Vorsortierung abgeschlossen",
    presortFinishedModalText:
      'Sie haben diesen Schritt abgeschlossen. Bitte klicken Sie auf die Schaltfläche "Weiter" unten rechts auf der Seite, um zum nächsten Schritt zu gelangen.',
    presortOnPageInstructions:
      '<div style="font-size: 24px">Klicken und ziehen Sie die Karten oder drücken Sie die Tasten "1", "2" oder "3", um die Aussagen zu sortieren.</div>',
    presortImageSortInstructions:
      "Um ein Bild zu vergrößern, bewegen Sie Ihren Mauszeiger darüber und doppelklicken Sie. <br/><br/> Um Bilder zu vergleichen, <u>halten Sie</u> die <b><i>Shift</i></b>-Taste auf Ihrer Tastatur gedrückt und doppelklicken Sie dann mit Ihrer Maus auf ZWEI Bilder.",
    mobilePresortConditionsOfInstruction:
      "Bewerten Sie die Aussagen gemäß Ihrer Erfahrung mit der Nutzung der iPads im Unterricht",
    mobilePresortCompletedLabel: "Abgeschlossene Bewertungen",
    mobilePresortAssignLeft: "Unterscheidet sich von meiner Perspektive",
    mobilePresortAssignRight: "Ähnlich zu meiner Perspektive",
    mobilePresortRedoModalHead: "Aussage erneut bewerten",
    mobilePresortRedoModalText: "Klicken Sie auf das entsprechende Symbol",
    mobilePresortRedoModalConfirmButton: "Bestätigen",
    mobilePresortEvaluationsComplete:
      "<div><b>Alle Aussagen bewertet.</b> <br /><br />Bitte überprüfen Sie die Aussagen, um Ihre Bewertungen zu bestätigen.  <br /><br /><div>",
    mobilePresortHelpModalHead: "Phase 1 von 5<br />Aussagenbewertung",
    mobilePresortHelpModalText:
      'Tippen Sie auf die entsprechende Schaltfläche, um jeder Aussage einen Wert zuzuweisen. <br /><br /> Wenn Sie das Gefühl haben, dass die Aussage <b>Ihrer Perspektive ähnlich ist</b>, tippen Sie auf die grüne "+"-Schaltfläche.<br /><br /> Wenn Sie das Gefühl haben, dass die Aussage sich <b>von Ihrer Perspektive unterscheidet</b>, tippen Sie auf die rote "-"-Schaltfläche. <br /><br />Wenn Sie unsicher sind, tippen Sie auf die "?"-Schaltfläche. <br /><br /> Es gibt <b>33 Aussagen</b> in dieser Umfrage. <br /><br /> Wenn Sie Ihre Bewertung <b>ändern</b> möchten, tippen Sie auf das <b>Wiederholungssymbol</b> neben der Aussage.',
    mobilePresortFinishedModalHead: "Phase 1 von 5<br />Aussagenbewertung",
    mobilePresortFinishedModalText:
      'Der Bewertungsprozess ist abgeschlossen. <br/><br/> Bitte <b>überprüfen Sie die Aussagen</b>, um Ihre Bewertungen zu bestätigen.  <br /><br />Wenn Sie eine Änderung vornehmen möchten, tippen Sie auf das "Wiederholungssymbol" links neben der Aussage.<br /><br />Wenn Sie mit allen Ihren Bewertungen zufrieden sind, tippen Sie auf die <b>Navigationsschaltfläche</b> unten rechts.',
    mobilePresortProcessCompleteMessage:
      "Der Bewertungsprozess ist abgeschlossen. <br/><br/> Bitte klicken Sie auf die Navigationsschaltfläche unten rechts, um zur nächsten Phase zu gelangen.",
    mobilePresortPreventNavModalHead: "Navigation deaktiviert",
    mobilePresortPreventNavModalText:
      "Bitte beenden Sie die Bewertungen, bevor Sie zur nächsten Phase übergehen.",
    thinPageTitle: "Verfeinern Sie Ihre Bewertungen",
    thinPageSubmitButton: "Absenden",
    numStatementsToSelect: "Anzahl der auszuwählenden Aussagen",
    currentlySelectedNumber: "Aktuelle Anzahl ausgewählter Aussagen",
    thinningPreventNavModalHead: "Navigation deaktiviert",
    thinningPreventNavModalText:
      "Bitte beenden Sie den Verfeinerungsprozess, bevor Sie zum nächsten Schritt übergehen.",
    thinningHelpModalHead: "Verfeinern Sie Ihre Bewertungen",
    thinningHelpModalText:
      "Bitte schauen Sie sich die Aussagen, die Sie in der vorherigen Phase bewertet haben, noch einmal an. Wählen Sie diejenigen aus, von denen Sie glauben, dass sie der beste Ausdruck Ihrer Perspektive sind.",
    thinningConfirmModalHead: "Unvollständige Auswahl",
    thinningConfirmModalText: "Bitte wählen Sie die erforderliche Anzahl von Aussagen aus.",
    initialInstructionPart1:
      "Unten sehen Sie die Aussagen, die Sie im vorherigen Schritt positiv bewertet haben. Wählen Sie nun die Anzahl der Aussagen aus, denen Sie <b>AM MEISTEN ZUSTIMMEN</b>.<br /><br />",
    initialInstructionPart2:
      "Wählen Sie als Nächstes weiterhin die Aussagen aus, die Ihrer Perspektive AM NÄCHSTEN kommen",
    initialInstructionPart3:
      'Nach dem Klicken auf die orange Schaltfläche "Absenden" wird eine weitere Reihe von Aussagen auf dem Bildschirm angezeigt.',
    initialInstructionPartNeg1:
      "Unten sehen Sie die Aussagen, die Sie im vorherigen Schritt positiv bewertet haben. Wählen Sie nun Aussagen aus, die sich <mark><b>AM MEISTEN VON IHRER PERSPEKTIVE UNTERSCHEIDEN</b></mark>.",
    initialInstructionPartNeg2:
      "Wählen Sie als Nächstes weiterhin die Aussagen aus, die sich <mark>AM MEISTEN</mark> von Ihrer Perspektive unterscheiden.",
    finalInstructions:
      "Verfeinerungsprozess abgeschlossen. Klicken Sie auf die Navigationsschaltfläche unten rechts, um zur nächsten Phase zu gelangen.",
    moveTopMobileHead: "Verschieben bestätigen",
    moveAllTopMobileText: "Alle ausgewählten Aussagen an den Anfang der Liste verschieben?",
    moveTopMobileButtonOK: "Ja",
    mobileThinConditionsOfInstruction: "Verfeinern Sie Ihre Bewertungen",
    mobileThinSubmitButtonText: "Absenden",
    mobileThinSelectedText: "Ausgewählt",
    mobileThinHelpModalHead: "Schritt 2 von 5<br/>Verfeinerungsprozess",
    mobileThinHelpModalText:
      'In dieser Phase werden Sie gebeten, <b>die Aussagen</b> zu überprüfen, die Sie bewertet haben, und diejenigen auszuwählen, die Ihrer Perspektive am ähnlichsten oder am unterschiedlichsten sind.<br/><br/>Möglicherweise müssen Sie <b>nach unten scrollen</b>, um alle Aussagen zu sehen.<br/><br/>Um <b>eine Aussage auszuwählen</b>, tippen Sie auf den Aussagencontainer. Die Farbe der Aussage ändert sich zu gelb.<br/><br/>Wenn Sie die <b>richtige Anzahl</b> von Aussagen ausgewählt haben, ändert sich die Schaltfläche "Absenden" zu <b>blau</b>. <br/><br/>Um den Vergleich der Aussagen zu erleichtern, können Sie sie <b>neu anordnen</b>, indem Sie auf die Pfeile nach oben und unten tippen, die sich auf der rechten oder linken Seite der Aussage befinden.<br/><br/>Sie können auch <b>eine Gruppe</b> ausgewählter Aussagen an den Anfang der Liste verschieben, indem Sie auf den Pfeilen rechts neben einer Aussage <b>lange drücken</b> (etwa 1 Sekunde).',
    mobileThinPreventNavModalHead: "Navigation deaktiviert",
    mobileThinPreventNavModalText:
      "Bitte schließen Sie den Verfeinerungsprozess ab, bevor Sie zur nächsten Seite navigieren.",
    mobileThinProcessCompleteMessage:
      "Der Verfeinerungsprozess ist abgeschlossen. <br/><br/> Bitte klicken Sie auf die Navigationsschaltfläche unten rechts, um zur nächsten Phase zu gelangen.",
    mobileGuidanceModalRight1Header: "Phase 2 von 5<br/> Verfeinerungsprozess",
    mobileGuidanceModalRight1Text:
      "Diese Phase umfasst mehrere Schritte. <br/><br/>Schritt 1. Bitte betrachten Sie alle Aussagen, die Sie <b>positiv</b> bewertet haben, und wählen Sie diejenigen aus, die Ihrer Perspektive <b>am nächsten kommen</b>.<br/><br/>Möglicherweise müssen Sie nach unten <b>scrollen</b>, um alle Aussagen zu sehen.",
    mobileGuidanceModalRight2Header: "Phase 2 von 5<br/> Verfeinerungsprozess",
    mobileGuidanceModalRight2Text:
      "Als nächstes betrachten Sie erneut die verbleibenden Aussagen, die Sie <b>positiv</b> bewertet haben, und wählen Sie die <b>nächste Gruppe</b> von Aussagen aus, die Ihrer Perspektive <b>am nächsten kommen</b>.",
    mobileGuidanceModalLeft1Header: "Phase 2 von 5<br/> Verfeinerungsprozess",
    mobileGuidanceModalLeft1Text:
      "Schritt 2. Als nächstes betrachten Sie bitte alle Aussagen, die Sie negativ bewertet haben, und <b>wählen</b> Sie diejenigen aus, die sich <b>am stärksten</b> von Ihrer Perspektive <b>unterscheiden</b>.<br/><br/>Möglicherweise müssen Sie nach unten <b>scrollen</b>, um alle Aussagen zu sehen.",
    mobileGuidanceModalLeft2Header: "Phase 2 von 5<br/> Verfeinerungsprozess",
    mobileGuidanceModalLeft2Text:
      "Als nächstes betrachten Sie erneut die verbleibenden Aussagen, die Sie <b>negativ</b> bewertet haben, und <b>wählen</b> Sie die <b>nächste Gruppe</b> von Aussagen aus, die sich <b>am stärksten von Ihrer Perspektive unterscheiden</b>.",
    mobileThinScrollBottomModalHead: "Bestätigung deaktiviert",
    mobileThinScrollBottomModalText:
      "Bitte scrollen Sie nach unten und überprüfen Sie alle Aussagen, bevor Sie Ihre Auswahl bestätigen.",
    sortHelpModalHead: "Schritt 3 von 5",
    sortHelpModalText:
      "In diesem Schritt klicken Sie bitte auf die Aussagenkarten und ziehen Sie diese in die entsprechende Spalte, basierend auf Ihrer Perspektive und den Anweisungen des Forschers am oberen Rand der Seite. <br/><br/>",
    sortAgreement: "Zustimmung",
    sortDisagreement: "Ablehnung",
    condOfInst:
      "Sortieren Sie die Karten entsprechend Ihrer Erfahrung mit den iPads in diesem Semester",
    sortingCompleteModalHead: "Sortierung abgeschlossen",
    sortingCompleteModalText:
      'Sie haben die erste Sortierung abgeschlossen. Bitte nehmen Sie sich einen Moment Zeit, um die Platzierung der Karten zu überprüfen.<br/><br/>Wenn Sie mit der Platzierung zufrieden sind, klicken Sie bitte auf die <b>blaue Schaltfläche "Weiter"</b> unten rechts auf Ihrem Bildschirm, um zum nächsten Schritt zu gelangen.',
    sortPreventNavModalHead: "Navigation deaktiviert",
    sortPreventNavModalText:
      "Bitte beenden Sie die Rastersortierung, bevor Sie zum nächsten Schritt gehen.",
    sortOverloadedColumnModalHead: "Navigation deaktiviert",
    sortOverloadedColumnModalText:
      "Eine der Spalten enthält zu viele Karten (sie wird orange umrandet und hat einen gestrichelten Rahmen). Bitte passen Sie die Platzierung der Karten so an, dass alle Spalten die korrekte Anzahl aufweisen.",
    mobileSortSwapModalHead: "Aussagen-Rankings tauschen?",
    mobileSortSwapModalSuccessMessage: "Die Positionen der Aussagen wurden erfolgreich getauscht.",
    mobileSortSwapModalText: 'Klicken Sie auf "Bestätigen", um zu tauschen.',
    mobileSortSwapModalConfirmButton: "Tauschen",
    mobileSortConditionsOfInstruction:
      "Ordnen Sie die Aussagen entsprechend Ihrer Erfahrung mit der Nutzung der iPads im Unterricht",
    mobileSortHelpModalHead: "Phase 3 von 5<br/> Endgültige Aussagen-Rangfolge",
    mobileSortHelpModalText:
      "Die Aussagen wurden auf Grundlage Ihrer vorherigen Bewertungen geordnet.<br/><br/> Diejenigen Aussagen, die Ihrer Perspektive am nächsten kommen, sollten oben in der Liste stehen. Diejenigen, die am weitesten von Ihrer Perspektive entfernt sind, sollten unten in der Liste stehen.<br/><br/>Sie müssen nach unten <b>scrollen</b>, um alle Aussagen zu sehen.<br/><br/>Bitte <b>überprüfen Sie die Rangfolge</b> und nehmen Sie alle notwendigen Änderungen an der Rangfolge der Aussagen vor, damit die Reihenfolge <b>Ihre Perspektive genau widerspiegelt</b>. <br/><br/><mark>Dies ist die wichtigste Phase der Befragung, daher überprüfen Sie bitte die Aussagen-Rangfolge sorgfältig.</mark><br/><br/> Um <b>die Positionen benachbarter Aussagen zu tauschen</b>, tippen Sie auf die Aufwärts- oder Abwärtspfeile auf der rechten oder linken Seite der Aussage.<br/><br/>Um <b>die Positionen von Aussagen zu tauschen, die getrennt sind</b>, tippen Sie auf zwei Aussagen (die Farbe der Aussage ändert sich zu Gelb) und eine Tausch-Bestätigungsmeldung erscheint.<br/><br/>Wenn Sie mit allen Rangfolgen zufrieden sind, tippen Sie auf die Navigationsschaltfläche unten rechts.",
    mobileSortScrollBottomModalHead: "Navigation deaktiviert",
    mobileSortScrollBottomModalText:
      "Bitte scrollen Sie nach unten und überprüfen Sie die Rangfolge aller Aussagen, bevor Sie zur nächsten Phase gehen.",
    postsortHeader: "Kommentare nach der Sortierung",
    postsortInstructions:
      "<h3>Bitte beschreiben Sie Ihre Gedanken zu diesen Aussagen ausführlicher.</h3>",
    placeholder: "Klicken Sie hier, um einen Kommentar hinzuzufügen",
    postsortPlacedOn: "Platziert auf ",
    postsortAgreement: "Platziert auf Zustimmung",
    postsortDisagreement: "Platziert auf Ablehnung",
    postsortModalHead: "Schritt 4 von 5",
    postsortModalText:
      "Sie können die Schaltflächen am unteren Rand der Seite verwenden, um die Schriftgröße oder Kartenhöhe zu ändern.<br/><br/>",
    postsortPreventNavModalHead: "Navigation deaktiviert",
    postsortPreventNavModalText:
      "Bitte fügen Sie Kommentare zu allen Karten hinzu, bevor Sie zum nächsten Schritt gehen.",
    postsortBackButtonText: "Zurück",
    mobilePostsortPreventNavModalHead: "Navigation deaktiviert",
    mobilePostsortPreventNavModalText:
      "Bitte fügen Sie Kommentare zu allen Aussagen hinzu, bevor Sie zum nächsten Schritt gehen.",
    mobilePostsortSortbarText: "Kommentare nach der Sortierung",
    mobilePostsortPlaceholder: "Klicken Sie hier, um einen Kommentar hinzuzufügen",
    mobilePostsortHelpModalHead: "Phase 4 von 5<br/> Kommentare nach der Rangfolge",
    mobilePostsortHelpModalText: "Bitte kommentieren Sie Ihre Rangfolge dieser Aussagen.",
    surveyHeader: "Fragebogen nach der Sortierung",
    surveyModalHead: "Schritt 5 von 5",
    surveyModalText:
      'Bitte beantworten Sie abschließend die folgenden Fragen zu Ihrem Hintergrund. Die mit einem "*" im Titel gekennzeichneten Fragen sind Pflichtfragen.<br/><br/>',
    surveyPreventNavModalHead: "Navigation deaktiviert",
    surveyPreventNavModalText:
      "Bitte beantworten Sie die Pflichtfragen (gelb umrandet), bevor Sie zum nächsten Schritt gehen.",
    mobileSurveyHelpModalHead: "Phase 5 von 5<br/> Befragung nach der Rangfolge",
    mobileSurveyHelpModalText:
      "Bitte beantworten Sie diese Hintergrundfragen.<br/><br/>Bei einigen Fragen müssen Sie möglicherweise eine Antwort angeben, bevor Sie zum letzten Schritt gehen können.",
    btnTransfer: "Daten übermitteln",
    transferHead: "Letzter Schritt",
    transferTextAbove:
      '<h1>Bereit zur Übermittlung</h1><br/><br/> <h2>Bitte klicken Sie auf die Schaltfläche "Daten übermitteln", um Ihre Ergebnisse zu übertragen.</h2>',
    transferTextBelow:
      "Bitte warten Sie auf die Bestätigungsmeldung, die anzeigt, dass Ihre Daten erfolgreich an den Server gesendet wurden.",
    transferOkModalHeader: "Erfolg - Die Daten wurden an den Server gesendet.",
    transferOkModalText:
      "Vielen Dank, dass Sie Quince verwendet haben!<br/><br/>Sie können nun Ihren Browser-Tab schließen.",
    transferFailModalHeader: "Verbindung zum Server fehlgeschlagen",
    transferFailModalText: "Bitte versuchen Sie es in wenigen Momenten erneut.",
    fallbackMessage:
      '*** Fehler - Übertragung fehlgeschlagen*** <br/><br/>Bitte überprüfen Sie Ihre Internetverbindung und klicken Sie erneut auf die Schaltfläche "Daten übermitteln".',
    btnDownload: "Herunterladen",
    goodbyeMessage:
      "<div>Vielen Dank!</div> <br /><div>Sie können nun den Browser-Tab schließen</div>",
    mobileSortTitleBar: "Daten übermitteln",
    btnTransferEmail: "E-Mail-Client öffnen und Ergebnisse senden",
    clipboardResults: "Ergebnisse in Zwischenablage kopieren",
    clipboardEmail: "E-Mail-Adresse in Zwischenablage kopieren",
    copiedText: "Kopiert!",
    downloadResultsButtonText: "Ergebnisse herunterladen",
    copyFailMessage: "Fehler: Bitte versuchen Sie es erneut.",
    defaultEmailClientFail:
      "Ihr Standard-E-Mail-Client sollte automatisch mit den Ergebnissen im E-Mail-Text geöffnet worden sein. Falls nicht, verwenden Sie bitte die Schaltflächen unten, um Ihre Informationen zu kopieren und in eine E-Mail einzufügen.",
    emailBodyMessage:
      "Sie müssen dieser E-Mail nichts hinzufügen. Bitte klicken Sie einfach auf die SENDEN-Schaltfläche.",
    linkingFallbackMessage:
      "Bitte klicken Sie auf die Schaltfläche, um mit dem nächsten Q-Sort zu beginnen",
    linkingBtnText: "Nächsten Q-Sort beginnen",
    localHeader: "Offline Q-Sort Kontrollfeld",
    partIdText: "Teilnehmername",
    usercodeText: "Benutzercode",
    localStartButtonText: "Q-Sort starten",
    localDeleteButtonText: "Löschen",
    localDownloadButtonText: "Q-Sort-Daten auf Festplatte speichern",
    storedQsortsHeaderText: "Gespeicherte Q-Sorts",
    localDeleteModalText:
      "Dies wird die Teilnehmer-Q-Sort-Daten löschen, die derzeit im Browser gespeichert sind. Dies würden Sie normalerweise nur tun, wenn Sie ein neues Projekt beginnen.<br/><br/><b>VORSICHT - Gelöschte Daten können nicht wiederhergestellt werden.</b> <br/><br/> <center></center>",
    localDeleteModalHead: "Im Browser gespeicherte Daten löschen?",
    localParticipantsText: "Teilnehmer",
    localSaveDataButton: "Teilnehmerdaten im Browser-Speicher sichern",
    localSubmitSuccessModalHeader: "Erfolg",
    localSubmitSuccessModalText:
      "Die Q-Sort-Daten der Teilnehmer wurden erfolgreich im Browser-Speicher gesichert",
    localSaveBeforeDeleteModalHeader: "Löschen deaktiviert",
    localSaveBeforeDeleteModalText:
      "Speichern Sie Q-Sort-Daten auf der Festplatte, bevor Sie löschen.",
    returnToLocalPanelButtonText: "Zum Kontrollfeld zurückkehren",
    emailSubjectText: `Quince Q-sort Ergebnisse`,
    submitFailMessage:
      "Verbindung zur Datenbank nicht möglich.<br/><br/>Klicken Sie auf die Schaltfläche, um Ihr Standard-E-Mail-Programm zu öffnen und eine E-Mail mit den Daten an das Forschungsteam zu senden.",
    checkInternetMessage:
      "*** Fehler - Übertragung fehlgeschlagen ***<br/><br/>Bitte überprüfen Sie Ihre Internetverbindung und klicken Sie erneut auf die Schaltfläche 'Daten übermitteln'.",
    press1: "(1 drücken)",
    press2: "(2 drücken)",
    press3: "(3 drücken)",
  };
  return obj;
};

export default showSectionDefaults_DE;
