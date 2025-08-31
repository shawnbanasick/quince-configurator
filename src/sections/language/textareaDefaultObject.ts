const showSectionDefaults = () => {
  const obj = {
    /*
     ******* MULTIPLE SCREENS  ****************** */
    btnHelp: "Help",
    fontSizeText: `Text Size`,
    cardHeightText: `Card Height`,
    // LoginFirst: `Please complete the log-in process first.`,
    btnNext: "Continue",
    stepCompletedMessage: `You have completed this step. Please click on the <b> blue "Continue" button </b> at the bottom right-side of your screen to go to the next step.`,
    screenOrientationText: "Please Use Portrait Orientation!",
    expandViewMessage:
      'Tap the View "+" button below to expand the view area and hide this message.',
    mobileTextSize: `Text`,
    mobileViewSize: `View`,
    mobileModalButtonCancel: `Cancel`,
    mobileExpandViewMessage: `Tap the View "+" button below to expand the view area and hide this message.`,

    /*
     ******** CONSENT PAGE  ****************** */
    consentTitleBarText: `Research Consent`,
    consentText: `You are invited to participate in a research study conducted by [Principal Investigator’s Name] at [Institution or Organization]. Before you decide to participate, it is important that you understand why the research is being conducted and what it will involve. Please take the time to read the following information carefully. Feel free to contact the research team with any questions you may have.<br /><br /><b>Purpose of the Study</b><br />The purpose of this study is to [briefly describe the purpose, e.g., understand the effects of a new teaching method on student performance]. This research will help us gain insights into [mention any broader implications or goals of the study]. <br /><br /><b>Study Procedures</b><br />If you agree to participate, you will be asked to [describe the procedures involved, including what participants will do, how long it will take, and how frequently it will occur]. For example, you will be asked to complete evaluate a series of statements, sort them, and then reflect on the sorting. Additionally, there is a short questionnaires at the end. The study will take approximately [duration, e.g., 45 minutes]. <br /><br /><b>Benefits</b><br />While there may not be direct benefits to you for participating, the information gathered from this study may help [describe potential benefits, e.g., improve educational methods, contribute to scientific knowledge, etc.]. You may also gain personal insights into [describe any personal benefits, if applicable].<br /><br /><b>Confidentiality</b><br />All information collected in this study will be kept strictly confidential. Data will be stored securely and only the research team will have access to it. Your identity will not be disclosed in any reports or publications resulting from this study. [Describe how data will be anonymized, encrypted, or stored securely].<br /><br /><b>Voluntary Participation</b><br />Your participation in this study is entirely voluntary. You are free to decline to participate, or to withdraw at any time, without penalty or loss of benefits to which you are otherwise entitled. If you decide to withdraw, close the webpage and any data collected up to that point will be deleted.<br /><br /><b>Consent</b><br />By clicking on the "Agree" button on the bottom of this page, you are indicating that you have read and understood the information provided, and that you agree to participate in this study. If you have any questions about this study, please contact [Principal Investigator’s Name and Contact Information].`,
    consentHelpModalHead: `Contact Information`,
    consentHelpModalText: `Thank you for participating in this University Research Project. You can contact the research team by phone (1-555-867-5309) or by email at researchTeam@myMail.com`,
    btnNextConsent: `Agree`,
    btnHelpConsent: `Contact Information`,

    /*
     ******* ACCESS PAGE  ****************** */
    loginWelcomeText: `<center><h3>Welcome!</h3></center><br/> Thank you for participating in this Q methodology research project. <br/>Please <b>sign in</b> using the form below to begin the process. `,
    loginHeaderText: `Sign In`,
    loginPartIdText: `Please enter your name or participant ID`,
    accessCodeText: `Access Code`,
    accessInputText: "Please enter the access code for this survey.",
    partIdWarning: `Invalid name or ID`,
    accessCodeWarning: `Access code invalid`,
    loginSubmitButtonText: `Submit`,

    /*
     ******* WELCOME PAGE  ****************** */
    landingHead: `University Research Project`,
    welcomeText: `<h2>EQ Web Sort Demo Project - iPad Use in the Classroom.</h2><br/><br/><p>Thank you for helping with this research project</p><br/><br/><br/>
    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/lMy4ARVEcCI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
    landingHelpModalHead: `Welcome!`,
    landingHelpModalText: `Thank you for participating in this University Research Project. Please click the "<b>Continue</b>" button at the bottom right side of the screen to go to the next step.`,
    btnNextLanding: `Continue`,
    btnHelpLanding: `Help`,

    /*
     ******** PRESORT  ****************** */
    logInFirst: "Please complete the log-in process first.",
    titleBarText: `Preliminary Sorting`,
    presortAgreement: `Agree (3)`,
    presortStatements: `Statements`,
    presortNeutral: `No Strong Feelings (2)`,
    presortDisagreement: `Disagree (1)`,
    presortImageSortInstructions: `To enlarge an image, hover your mouse pointer over it and double-click. <br/><br/> To compare images, <u>press and hold</u> the <b><i>Shift</i></b> key on your keyboard and then double-click on TWO images with your mouse.`,
    presortModalHead: `Step 1 of 4`,
    presortModalText: `Read the following statements carefully and split them up into three piles: a pile for statements you tend to disagree with, a pile for cards you tend to agree with, and a pile for the rest. Changes can be made later.<br/><br/>If you want to read this instruction a second time, click the help-button at the bottom left corner.<br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/vtnLuKzpcKQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
    presortPreventNavModalHead: `Navigation Disabled`,
    presortPreventNavModalText: `Please finish the preliminary sorting before going to the next step.`,
    presortFinishedModalHead: `Preliminary Sorting Complete`,
    presortFinishedModalText: `You have completed this step. Please click the "Continue" button in the bottom right side of the page to go to the next step.`,
    presortOnPageInstructions: `<div style="font-size: 24px">Click and drag on the cards  or press the "1", "2", or "3" keys to sort the statements.</div>`,

    /*
     ******** MOBILE PRESORT  ****************** */
    mobilePresortConditionsOfInstruction: `Evaluate the Statements According to Your Experience of using the iPads in the Class`,
    mobilePresortCompletedLabel: `Completed Evaluations`,
    mobilePresortAssignLeft: `Different from My Perspective`,
    mobilePresortAssignRight: `Similar to My Perspective`,
    mobilePresortRedoModalHead: `Re-Evaluate Statement`,
    mobilePresortRedoModalText: `Click on the appropriate icon`,
    mobilePresortRedoModalConfirmButton: `Confirm`,
    mobilePresortEvaluationsComplete: `<div><b>All Statements Evaluated.</b> <br /><br />Please review the statements to confirm your evaluations.  <br /><br /><div>`,
    mobilePresortHelpModalHead: `Stage 1 of 5<br />Statement Evaluation`,
    mobilePresortHelpModalText: `Tap on the appropriate button to assign a value to each statement. <br /><br /> If you feel that the statement is <b>similar to your perspective</b>, tap the green "+" button.<br /><br /> If you feel that the statement is <b>different from your perspective</b>, tap the red "-" button. <br /><br />If you are unsure, tap the "?" button. <br /><br /> There are <b>33 statements</b> in this survey. <br /><br /> If you want to <b>change</b> your evaluation, tap the <b>redo icon</b> next to the statement.`,
    mobilePresortFinishedModalHead: `Stage 1 of 5<br />Statement Evaluation`,
    mobilePresortFinishedModalText: `The evaluation process is complete. <br/><br/> Please <b>review the statements</b> to confirm your evaluations.  <br /><br />If you want to make a change, tap the "redo" icon to the left of the statement.<br /><br />When you are satisfied with all of your evaluations, tap the <b>navigation button</b> on the bottom right.`,
    mobilePresortProcessCompleteMessage: `The evaluation process is complete. <br/><br/> Please click on the navigation button on the bottom right side to go to the next stage.`,
    mobilePresortPreventNavModalHead: `Navigation Disabled`,
    mobilePresortPreventNavModalText: `Please finish the evaluations before going to the next stage.`,

    /*
     ******** REFINE SCREEN  ****************** */
    thinPageTitle: `Refine Your Evaluations`,
    thinPageSubmitButton: `Submit`,
    numStatementsToSelect: `Number of Statements to Select`,
    currentlySelectedNumber: `Current Number of Statements Selected`,
    thinningPreventNavModalHead: `Navigation Disabled`,
    thinningPreventNavModalText: `Please finish the refining process before going to the next step.`,
    thinningHelpModalHead: `Refine Your Evaluations`,
    thinningHelpModalText: `Please look again at the statements you evaluated in the previous stage. Choose those which you feel are the best expression of your perspective.`,
    thinningConfirmModalHead: `Incomplete Selection`,
    thinningConfirmModalText: `Please select the required number of statements.`,
    initialInstructionPart1: `Below are the statements you rated positively in the previous step. Now, pick the number of statements that you <b>MOST AGREE</b>.<br /><br />`,
    initialInstructionPart2: `Next, continue to select the statements that are CLOSEST to your perspective`,
    initialInstructionPart3: `Another set of statements will appear on the screen after you click the orange "Submit" button.`,
    initialInstructionPartNeg1: `Below are the statements you rated positively in the previous step. Now, pick statements that <mark><b>DIFFER THE MOST FROM YOUR PERSPECTIVE</b></mark>.`,
    initialInstructionPartNeg2: `Next, continue to select the statements that are <mark>DIFFER THE MOST</mark> from your perspective.`,
    // agreeMostText: `Next, repeat the process with the remaining statements, but this time please select the cards that you agree with the most.`,
    // agreeLeastText: `Next, repeat the process with the remaining statements, but this time please select the cards that you agree with the least.`,
    finalInstructions: `Refinement process complete. Click on the navigation button on the bottom right side to go to the next stage.`,

    /*
     ******** MOBILE REFINE SCREEN  ****************** */
    moveTopMobileHead: `Confirm Move`,
    moveTopMobileText: `Move this statement to the top of the list?`,
    moveAllTopMobileText: `Move all selected statements to the top of the list?`,
    moveTopMobileButtonOK: `Yes`,
    // mobileModalButtonCancel: `Cancel`,
    mobileThinConditionsOfInstruction: `Refine Your Evaluations`,
    mobileThinSubmitButtonText: `Submit`,
    mobileThinSelectedText: `Selected`,
    mobileThinHelpModalHead: `Step 2 of 5<br/>Refinement Process`,
    mobileThinHelpModalText: `During this stage you will be asked to <b></b>review the statements</b> you evaluated and choose those that are most similar or most different from your perspective.<br/><br/>You may need to <b>scroll down</b> to see all of the statements.<br/><br/>To <b>select a statement</b>, tap on the statement container. The color of the statement will change to yellow.<br/><br/>When you have selected the <b>correct number</b> of statements, the "Submit" button will change to <b>blue</b>. <br/><br/>To make it easier to compare the statements, you can <b>reorder</b> them by tapping on the up and down arrows located on the right or left sides of the statement.<br/><br/>You can also <b>move a group</b> of selected statements to the top of the list by <b>long pressing</b> (about 1 second) on a statement.`,
    mobileThinPreventNavModalHead: `Navigation Disabled`,
    mobileThinPreventNavModalText: `Please complete the refining process before navigating to the next page.`,
    mobileThinProcessCompleteMessage: `The refinement process is complete. <br/><br/> Please click on the navigation button on the bottom right side to go to the next stage.`,
    mobileGuidanceModalRight1Header: `Stage 2 of 5<br/> Refinement Process`,
    mobileGuidanceModalRight1Text: `There are several steps in this Stage. <br/><br/>Step 1. Please look at all of the statements that you evaluated <b>positively</b> and select those that are <b>closest to your perspective</b>.<br/><br/>You may need to <b>scroll</b> down to see all of the statements.`,
    mobileGuidanceModalRight2Header: `Stage 2 of 5<br/> Refinement Process`,
    mobileGuidanceModalRight2Text: `Next, once again look at the remaining statements that you evaluated <b>positively</b> and select the <b>next set</b> of statements that are <b>closest to your perspective</b>.`,
    mobileGuidanceModalLeft1Header: `Stage 2 of 5<br/> Refinement Process`,
    mobileGuidanceModalLeft1Text: `Step 2. Next, please look at all of the statements that you evaluated negatively and <b>select</b> those that <b>differ the most</b> from your perspective.<br/><br/>You may need to <b>scroll down</b> to see all of the statements.`,
    mobileGuidanceModalLeft2Header: `Stage 2 of 5<br/> Refinement Process`,
    mobileGuidanceModalLeft2Text: `Next, once again look at the remaining statements that you evaluated <b>negatively</b> and <b>select</b> the <b>next set</b> of statements that are <b>most different from to your perspective</b>.`,
    mobileThinScrollBottomModalHead: `Confirmation Disabled`,
    mobileThinScrollBottomModalText: `Please scroll to the bottom and review all the statements before confirming your selections.`,

    /*
     ******** SORT  ****************** */
    sortHelpModalHead: `Step 3 of 5`,
    sortHelpModalText: `In this step, please click and drag the statement cards to the appropriate column based on your perspective and the researcher's instructions at the top of the page. <br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/iRxC9Vv3dLo?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
    sortAgreement: `Agree`,
    sortDisagreement: `Disagree`,
    condOfInst: `Sort the cards according to your experience with the iPads this semester`,
    sortingCompleteModalHead: `Sorting Complete`,
    sortingCompleteModalText: `You have completed the initial sorting. Please take a moment to confirm your placement of the cards.<br/><br/>When you are satisfied with their placement, please click on the <b>blue "Continue" button</b> at the bottom right-side of your screen to go to the next step.`,
    sortPreventNavModalHead: `Navigation Disabled`,
    sortPreventNavModalText: `Please finish the grid sorting before going to the next step.`,
    sortOverloadedColumnModalHead: `Navigation Disabled`,
    sortOverloadedColumnModalText: `One of the columns has too many cards (it will be outlined in orange and have a dashed border). Please adjust the placement of the cards so that all columns have the correct number.`,

    /*
     ******** MOBILE SORT  ****************** */
    mobileSortSwapModalHead: `Swap Statement Rankings?`,
    mobileSortSwapModalText: `Click "Confirm" to swap.`,
    mobileSortSwapModalConfirmButton: `Swap`,
    mobileSortConditionsOfInstruction: `Rank the Statements According to Your Experience of using the iPads in the Class`,
    mobileSortHelpModalHead: `Stage 3 of 5<br/> Final Statement Ranking`,
    mobileSortHelpModalText: `The statements have been ranked based on your previous evaluations.<br/><br/> Those statements that are closest to your perspective should be at the top of the list. Those that are farthest from your perspective should be at the bottom of the list.<br/><br/>You will need to <b>scroll down</b> to see all of the statements.<br/><br/>Please <b>review the rankings</b> and make any necessary changes to the ranking of the statements so that the ordering <b>accurately reflects your perspective</b>. <br/><br/><mark>This is the most critical stage of the survey, so please review the statement rankings carefully.</mark><br/><br/> To <b>swap the positions of neighboring statements</b>, tap the up or down arrows on the right or left side of the statement.<br/><br/>To <b>swap the positions of statements that are separated</b>, tap on two statements (the statement color will change to yellow) and a swap confirmation message will appear.<br/><br/>When you are satisfied with all of the rankings, tap the navigation button on the bottom right.`,
    mobileSortScrollBottomModalHead: `Navigation Disabled`,
    mobileSortScrollBottomModalText: `Please scroll to the bottom and review the ranking of all the statements before going to the next stage.`,

    /*
     ******** 12. POSTSORT  ****************** */
    postsortHeader: `Post-Sort Comments`,
    postsortInstructions: `<h3>Please describe your thoughts about these statements in more detail.</h3>`,
    placeholder: `Click here to add comment`,
    postsortAgreement: `Placed on Agree`,
    postsortDisagreement: `Placed on Disagree`,
    postsortModalHead: `Step 4 of 5`,
    postsortModalText: `You can use the buttons at the bottom of the page to change the font size or card height.<br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/EFNlSiaEVVg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></h3></center>`,
    postsortPreventNavModalHead: `Navigation Disabled`,
    postsortPreventNavModalText: `Please add comments to all of the cards before going to the next step.`,
    postsortBackButtonText: `Go Back`,

    /*
     ******** 13. MOBILE POSTSORT  ****************** */
    mobilePostsortPreventNavModalHead: `Navigation Disabled`,
    mobilePostsortPreventNavModalText: `Please add comments to all of the statements before going to the next step.`,
    mobilePostsortSortbarText: `Postsort Comments`,
    mobilePostsortPlaceholder: `Click here to add comment`,
    mobilePostsortHelpModalHead: `Stage 4 of 5<br/> Post-Ranking Comments`,
    mobilePostsortHelpModalText: `Please comment on your rankings of these statements.`,

    /*
     ******** SURVEY  ****************** */
    surveyHeader: `Post-Sort Questionnaire`,
    surveyModalHead: `Step 5 of 5`,
    surveyModalText: `Finally, please answer the following questions regarding your background. The questions marked with an "*" in their title are required.<br/><br/><center><iframe width="560" height="315" src="https://www.youtube.com/embed/68MHzgLn1zg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>`,
    surveyPreventNavModalHead: `Navigation Disabled`,
    surveyPreventNavModalText: `Please answer the required questions (outlined in yellow) before going to the next step.`,

    /*
     ******** MOBILE SURVEY  ****************** */
    mobileSurveyHelpModalHead: `Stage 5 of 5<br/> Post-Ranking Survey`,
    mobileSurveyHelpModalText: `Please answer the following questions.`,

    /*
     ******** SUBMIT  ****************** */
    btnTransfer: `Submit Data`,
    transferHead: `Final Step`,
    transferTextAbove: `<h1>Ready to Submit</h1><br/><br/> <h2>Please click the "Submit Data" button to transmit your results.</h2>`,
    transferTextBelow: `Please wait for the confirmation message that indicates your data have been sent to the server successfully.`,
    transferOkModalHeader: `Success - The data have been sent to the server.`,
    transferOkModalText: `Thank you for using EQ Web Sort!<br/><br/>You can now close your browser tab.`,
    transferFailModalHeader: `Connection to server failed`,
    transferFailModalText: `Please try again in a few moments.`,
    goodbyeMessage: `<div>Thank You!</div> <br/><div>You can now close the browser tab</div>`,

    /*
     ********  17. MOBILE SUBMIT  ****************** */
    mobileSortTitleBar: `Submit Data`,

    /*
     ******** 18. FAILURE  ****************** */
    checkInternetMessage: `*** Error - Transmission Failure*** <br/><br/>Please check your internet connection and click the "Submit Data" button again.`,
    btnTransferEmail: "Open Email Client and Send Results",
    submitFailMessage:
      "Unable to connect with the database.<br/><br/>Please click the button to open your default email client and send an email with your data to the research team.",
    defaultEmailClientFail:
      "Your default email client should have automatically opened with the results in the email body. If it didn't, please use the buttons below to copy and paste your information into an email.<br><br/>There is also a button to download your results to your computer as a backup.",
    clipboardEmail: "Copy Email Address to Clipboard",
    clipboardResults: "Copy Results to Clipboard",
    copiedText: "Copied!",
    downloadResultsButtonText: `Download Results`,
    emailBodyMessage:
      "You don't have to add anything to this email. Please just click the 'Send' button.",
    emailSubjectText: `Quince Q sort Results`,

    /*
     ******** 19. SECOND PROJECT LINK  ****************** */
    linkingFallbackMessage: "Please click the button to begin the next Q sort",
    linkingBtnText: "Begin Next Q sort",

    /*
     ******** 20. LOCAL DATA COLLECTION  ****************** */
    LocalHeader: "Offline Q-sort Control Panel",
    PartIdText: "Participant Name",
    UsercodeText: "Usercode",
    LocalStartButtonText: "Start Q-sort",
    LocalDeleteButtonText: "Delete",
    LocalDownloadButtonText: "Save Q-sort Data to Disk",
    StoredQsortsHeaderText: "Stored Q-sorts",
    LocalDeleteModalText:
      "This will delete the participant Q-sort data that is currently stored in the browser. You would usually only do this when you are starting a new project.<br/><br/><b>CAUTION - Deleted data cannot be recovered.</b> <br/><br/> <center></center>",
    LocalDeleteModalHead: "Delete Data Stored in Browser?",
    LocalParticipantsText: "Participants",
    LocalSaveDataButton: "Save Participant Data to Browser Memory",
    LocalSubmitSuccessModalHeader: "Success",
    LocalSubmitSuccessModalText:
      "Participant Q sort data have been successfully saved to browser memory",
    ReturnToLocalPanelButtonText: "Return to Control Panel",
    LocalSaveBeforeDeleteModalHeader: "Delete Disabled",
    LocalSaveBeforeDeleteModalText: "Save Q sort Data to Disk before deleting.",
  };
  return obj;
};

export default showSectionDefaults;
