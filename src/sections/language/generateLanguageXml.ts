import encodeHTML from "../utils/encodeHTML";
import { useStore } from "../../globalState/useStore.js";

const generateLanguageXml = () => {
  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <language version="Quincy ${useStore.getState().version}" htmlParse="true">\n;

        <!-- 1. MULTIPLE SCREENS AND FOOTER -->
        <item order= "1-1" id="btnHelp">${encodeHTML(useStore.getState().btnHelp)}</item>
        <item order= "1-2" id="fontSizeText">${encodeHTML(useStore.getState().fontSizeText)}</item>
        <item order= "1-3" id="cardHeightText">${encodeHTML(
          useStore.getState().cardHeightText
        )}</item>
        <item order= "1-4" id="btnNext">${encodeHTML(useStore.getState().btnNext)}</item>
        <item order= "1-5" id="stepCompletedMessage">${encodeHTML(
          useStore.getState().stepCompleted
        )}</item>
        <item order= "1-6" id="screenOrientationText">${encodeHTML(
          useStore.getState().screenOrientationText
        )}</item>
        <item order= "1-7" id="mobileTextSize">${encodeHTML(
          useStore.getState().mobileTextSize
        )}</item>
        <item order= "1-8" id="mobileViewSize">${encodeHTML(
          useStore.getState().mobileViewSize
        )}</item>
        <item order= "1-9" id="mobileModalButtonCancel">${encodeHTML(
          useStore.getState().mobileModalButtonCancel
        )}</item>
        <item order= "1-10" id="expandViewMessage">${encodeHTML(
          useStore.getState().expandViewMessage
        )}</item>
        
        <!-- 2. CONSENT SCREEN -->
        <item order= "2-1" id="consentTitleBarText">${encodeHTML(
          useStore.getState().consentTitleBarText
        )}</item>
        <item order= "2-2" id="consentText">${encodeHTML(useStore.getState().consentText)}</item>
        <item order= "2-3" id="consentHelpModalHead">${encodeHTML(
          useStore.getState().consentHelpModalHead
        )}</item>
        <item order= "2-4" id="consentHelpModalText">${encodeHTML(
          useStore.getState().consentHelpModalText
        )}</item>
        <item order= "2-5" id="btnHelpConsent">${encodeHTML(
          useStore.getState().btnHelpConsent
        )}</item>
        <item order= "2-6" id="btnNextConsent">${encodeHTML(
          useStore.getState().btnNextConsent
        )}</item>

        <!-- 3. ACCESS CONTROL - only displayed if access is restricted -->
        <item order= "3-1" id="loginWelcomeText">${encodeHTML(
          useStore.getState().loginWelcomeText
        )}</item>
        <item order= "3-2" id="loginHeaderText">${encodeHTML(
          useStore.getState().loginHeaderText
        )}</item>
        <item order= "3-3" id="loginPartIdText">${encodeHTML(
          useStore.getState().loginPartIdText
        )}</item>
        <item order= "3-4" id="accessCodeText">${encodeHTML(
          useStore.getState().accessCodeText
        )}</item>
        <item order= "3-5" id="accessInputText">${encodeHTML(
          useStore.getState().accessInputText
        )}</item>
        <item order= "3-6" id="partIdWarning">${encodeHTML(
          useStore.getState().partIdWarning
        )}</item>
        <item order= "3-7" id="accessCodeWarning">${encodeHTML(
          useStore.getState().accessCodeWarning
        )}</item>
        <item order= "3-8" id="loginSubmitButtonText">${encodeHTML(
          useStore.getState().loginSubmitButtonText
        )}</item>
        
        <!-- 4. WELCOME (LANDING) SCREEN -->
        <item order= "4-1" id="landingHead">${encodeHTML(useStore.getState().landingHead)}</item>
        <item order= "4-2" id="welcomeText">${encodeHTML(
          useStore.getState().welcomeText
        )}</item>        
        <item order= "4-3" id="landingHelpModalHead">${encodeHTML(
          useStore.getState().landingHelpModalHead
        )}</item>
        <item order= "4-4" id="landingHelpModalText">${encodeHTML(
          useStore.getState().landingHelpModalText
        )}</item>
        <item order= "4-5" id="btnHelpLanding">${encodeHTML(
          useStore.getState().btnHelpLanding
        )}</item>
        <item order= "4-6" id="btnNextLanding">${encodeHTML(
          useStore.getState().btnNextLanding
        )}</item>

        <!-- 5. MOBILE WELCOME (LANDING) SCREEN -->
        <item order= "5-1" id="mobileWelcomeText">${encodeHTML(
          useStore.getState().mobileWelcomeText
        )}</item>

        <!-- 6. PRESORT: rough sorting into three piles -->
        <item order= "6-1" id="logInFirst">${encodeHTML(useStore.getState().logInFirst)}</item>
        <item order= "6-2" id="titleBarText">${encodeHTML(useStore.getState().titleBarText)}</item>
        <item order= "6-3" id="presortAgreement">${encodeHTML(
          useStore.getState().presortAgreement
        )}</item>
        <item order= "6-4" id="presortNeutral">${encodeHTML(
          useStore.getState().presortNeutral
        )}</item>
        <item order= "6-5" id="presortDisagreement">${encodeHTML(
          useStore.getState().presortDisagreement
        )}</item>
        <item order= "6-6" id="presortStatements">${encodeHTML(
          useStore.getState().presortStatements
        )}</item>
        <item order= "6-7" id="presortOnPageInstructions">${encodeHTML(
          useStore.getState().presortOnPageInstructions
        )}</item>
        <item order= "6-8" id="presortModalHead">${encodeHTML(
          useStore.getState().presortModalHead
        )}</item>
        <item order= "6-9" id="presortModalText">${encodeHTML(
          useStore.getState().presortModalText
        )}</item>
        <item order= "6-10" id="presortPreventNavModalHead">${encodeHTML(
          useStore.getState().presortPreventNavModalHead
        )}</item>
        <item order= "6-11" id="presortPreventNavModalText">${encodeHTML(
          useStore.getState().presortPreventNavModalText
        )}</item>
        <item order= "6-12" id="presortFinishedModalHead">${encodeHTML(
          useStore.getState().presortFinishedModalHead
        )}</item>
        <item order= "6-13" id="presortFinishedModalText">${encodeHTML(
          useStore.getState().presortFinishedModalText
        )}</item>
        <item order= "6-14" id="presortImageSortInstructions">${encodeHTML(
          useStore.getState().presortImageSortInstructions
        )}</item>        

        <!-- 7. MOBILE PRESORT -->
        <item order= "7-1" id="mobilePresortHelpModalHead">${encodeHTML(
          useStore.getState().mobilePresortHelpModalHead
        )}</item>
        <item order= "7-2" id="mobilePresortHelpModalText">${encodeHTML(
          useStore.getState().mobilePresortHelpModalText
        )}</item>
        <item order= "7-3" id="mobilePresortConditionsOfInstruction">${encodeHTML(
          useStore.getState().mobilePresortConditionsOfInstruction
        )}</item>
        <item order= "7-4" id="mobilePresortCompletedLabel">${encodeHTML(
          useStore.getState().mobilePresortCompletedLabel
        )}</item>
        <item order= "7-5" id="mobilePresortAssignLeft">${encodeHTML(
          useStore.getState().mobilePresortAssignLeft
        )}</item>
        <item order= "7-6" id="mobilePresortAssignRight">${encodeHTML(
          useStore.getState().mobilePresortAssignRight
        )}</item>
        <item order= "7-7" id="mobilePresortRedoModalHead">${encodeHTML(
          useStore.getState().mobilePresortRedoModalHead
        )}</item>
        <item order= "7-8" id="mobilePresortRedoModalText">${encodeHTML(
          useStore.getState().mobilePresortRedoModalText
        )}</item>
        <item order= "7-9" id="mobilePresortEvaluationsComplete">${encodeHTML(
          useStore.getState().mobilePresortEvaluationsComplete
        )}</item>
        <item order= "7-10" id="mobilePresortFinishedModalHead">${encodeHTML(
          useStore.getState().mobilePresortFinishedModalHead
        )}</item>
        <item order= "7-11" id="mobilePresortFinishedModalText">${encodeHTML(
          useStore.getState().mobilePresortFinishedModalText
        )}</item>
        <item order= "7-12" id="mobilePresortPreventNavModalHead">${encodeHTML(
          useStore.getState().mobilePresortPreventNavModalHead
        )}</item>
        <item order= "7-13" id="mobilePresortPreventNavModalText">${encodeHTML(
          useStore.getState().mobilePresortPreventNavModalText
        )}</item>        

        <!-- 8. THINNING -->
        <item order= "8-1" id="thinningHelpModalHead">${encodeHTML(
          useStore.getState().thinningHelpModalHead
        )}</item>
         <item order= "8-2" id="thinningHelpModalText">${encodeHTML(
           useStore.getState().thinningHelpModalText
         )}</item>
         <item order= "8-3" id="thinPageTitle">${encodeHTML(
           useStore.getState().thinPageTitle
         )}</item>
         <item order= "8-4" id="thinPageSubmitButton">${encodeHTML(
           useStore.getState().thinPageSubmitButton
         )}</item>
         <item order= "8-5" id="numStatementsToSelect">${encodeHTML(
           useStore.getState().numStatementsToSelect
         )}</item>
         <item order= "8-6" id="currentlySelectedNumber">${encodeHTML(
           useStore.getState().currentlySelectedNumber
         )}</item>
         <item order= "8-7" id="initialInstructionPart1">${encodeHTML(
           useStore.getState().initialInstructionPart1
         )}</item>
         <item order= "8-8" id="initialInstructionPart2">${encodeHTML(
           useStore.getState().initialInstructionPart2
         )}</item>
         <item order= "8-9" id="initialInstructionPart3">${encodeHTML(
           useStore.getState().initialInstructionPart3
         )}</item>
         <item order= "8-10" id="initialInstructionPartNeg1">${encodeHTML(
           useStore.getState().initialInstructionPartNeg1
         )}</item>
         <item order= "8-11" id="initialInstructionPartNeg2">${encodeHTML(
           useStore.getState().initialInstructionPartNeg2
         )}</item>
         <item order= "8-12" id="finalInstructions">${encodeHTML(
           useStore.getState().finalInstructions
         )}</item>
         <item order= "8-13" id="thinningPreventNavModalHead">${encodeHTML(
           useStore.getState().thinningPreventNavModalHead
         )}</item>
         <item order= "8-14" id="thinningPreventNavModalText">${encodeHTML(
           useStore.getState().thinningPreventNavModalText
         )}</item>
         
        <!-- 9. MOBILE THINNING -->
        <item id="moveTopMobileHead">${encodeHTML(useStore.getState().moveTopMobileHead)}</item>
        <item id="moveTopMobileText">${encodeHTML(useStore.getState().moveTopMobileText)}</item>
        <item id="moveAllTopMobileText">${encodeHTML(
          useStore.getState().moveAllTopMobileText
        )}</item>
        <item id="moveTopMobileButtonOK">${encodeHTML(
          useStore.getState().moveTopMobileButtonOK
        )}</item>
        <item id="mobileThinConditionsOfInstruction">${encodeHTML(
          useStore.getState().mobileThinConditionsOfInstruction
        )}</item>
        <item id="mobileThinSubmitButtonText">${encodeHTML(
          useStore.getState().mobileThinSubmitButtonText
        )}</item>
        <item id="mobileThinHelpModalHead">${encodeHTML(
          useStore.getState().mobileThinHelpModalHead
        )}</item>
        <item id="mobileThinHelpModalText">${encodeHTML(
          useStore.getState().mobileThinHelpModalText
        )}</item>
        <item id="mobileThinPreventNavModalHead">${encodeHTML(
          useStore.getState().mobileThinPreventNavModalHead
        )}</item>
        <item id="mobileThinPreventNavModalText">${encodeHTML(
          useStore.getState().mobileThinPreventNavModalText
        )}</item>
        <item id="mobileThinProcessCompleteMessage">${encodeHTML(
          useStore.getState().mobileThinProcessCompleteMessage
        )}</item>
        <item id="mobileGuidanceModalRight1Header">${encodeHTML(
          useStore.getState().mobileGuidanceModalRight1Header
        )}</item>
        <item id="mobileGuidanceModalRight1Text">${encodeHTML(
          useStore.getState().mobileGuidanceModalRight1Text
        )}</item>
        <item id="mobileGuidanceModalRight2Header">${encodeHTML(
          useStore.getState().mobileGuidanceModalRight2Header
        )}</item>
        <item id="mobileGuidanceModalRight2Text">${encodeHTML(
          useStore.getState().mobileGuidanceModalRight2Text
        )}</item>
        <item id="mobileGuidanceModalLeft1Header">${encodeHTML(
          useStore.getState().mobileGuidanceModalLeft1Header
        )}</item>
        <item id="mobileGuidanceModalLeft1Text">${encodeHTML(
          useStore.getState().mobileGuidanceModalLeft1Text
        )}</item>
        <item id="mobileGuidanceModalLeft2Header">${encodeHTML(
          useStore.getState().mobileGuidanceModalLeft2Header
        )}</item>
        <item id="mobileGuidanceModalLeft2Text">${encodeHTML(
          useStore.getState().mobileGuidanceModalLeft2Text
        )}</item>
        <item id="mobileThinScrollBottomModalHead">${encodeHTML(
          useStore.getState().mobileThinScrollBottomModalHead
        )}</item>
        <item id="mobileThinScrollBottomModalText">${encodeHTML(
          useStore.getState().mobileThinScrollBottomModalText
        )}</item>

        <!-- 10. SORT -->
        <item id="sortHelpModalHead">${encodeHTML(useStore.getState().sortHelpModalHead)}</item>
        <item id="sortHelpModalText">${encodeHTML(useStore.getState().sortHelpModalText)}</item>
        <item id="sortAgreement">${encodeHTML(useStore.getState().sortAgreement)}</item>
        <item id="sortDisagreement">${encodeHTML(useStore.getState().sortDisagreement)}</item>
        <item id="condOfInst">${encodeHTML(useStore.getState().condOfInst)}</item>
        <item id="sortingCompleteModalHead">${encodeHTML(
          useStore.getState().sortingCompleteModalHead
        )}</item>
        <item id="sortingCompleteModalText">${encodeHTML(
          useStore.getState().sortingCompleteModalText
        )}</item>
        <item id="sortPreventNavModalHead">${encodeHTML(
          useStore.getState().sortPreventNavModalHead
        )}</item>
        <item id="sortPreventNavModalText">${encodeHTML(
          useStore.getState().sortPreventNavModalText
        )}</item>
        <item id="sortOverloadedColumnModalHead">${encodeHTML(
          useStore.getState().sortOverloadedColumnModalHead
        )}</item>
        <item id="sortOverloadedColumnModalText">${encodeHTML(
          useStore.getState().sortOverloadedColumnModalText
        )}</item>

        <!-- 11. MOBILE SORT -->
        <item id="mobileSortSwapModalHead">${encodeHTML(
          useStore.getState().mobileSortSwapModalHead
        )}</item>
        <item id="mobileSortSwapModalText">${encodeHTML(
          useStore.getState().mobileSortSwapModalText
        )}</item>
        <item id="mobileSortSwapModalConfirmButton">${encodeHTML(
          useStore.getState().mobileSortSwapModalConfirmButton
        )}</item>
        <item id="mobileSortConditionsOfInstruction">${encodeHTML(
          useStore.getState().mobileSortConditionsOfInstruction
        )}</item>
        <item id="mobileSortHelpModalHead">${encodeHTML(
          useStore.getState().mobileSortHelpModalHead
        )}</item>
        <item id="mobileSortHelpModalText">${encodeHTML(
          useStore.getState().mobileSortHelpModalText
        )}</item>
        <item id="mobileSortScrollBottomModalHead">${encodeHTML(
          useStore.getState().mobileSortScrollBottomModalHead
        )}</item>
        <item id="mobileSortScrollBottomModalText">${encodeHTML(
          useStore.getState().mobileSortScrollBottomModalText
        )}</item>

       <!-- 11. POSTSORT: comments - only displayed if showStep3 = TRUE in config.xml -->
        <item id="postsortHeader">${encodeHTML(useStore.getState().postsortHeader)}</item>
        <item id="postsortInstructions">${encodeHTML(
          useStore.getState().postsortInstructions
        )}</item>
        <item id="placeholder">${encodeHTML(useStore.getState().placeholder)}</item>
        <item id="postsortAgreement">${encodeHTML(useStore.getState().postsortAgreement)}</item>
        <item id="postsortDisagreement">${encodeHTML(
          useStore.getState().postsortDisagreement
        )}</item>
        <item id="postsortModalHead">${encodeHTML(useStore.getState().postsortModalHead)}</item>
        <item id="postsortModalText">${encodeHTML(useStore.getState().postsortModalText)}</item>
        <item id="postsortPreventNavModalHead">${encodeHTML(
          useStore.getState().postsortPreventNavModalHead
        )}</item>
        <item id="postsortPreventNavModalText">${encodeHTML(
          useStore.getState().postsortPreventNavModalText
        )}</item>
        <item id="postsortBackButtonText">${encodeHTML(
          useStore.getState().postsortBackButtonText
        )}</item>

       <!-- 12. MOBILE POSTSORT: comments - only displayed if showStep3 = TRUE in config.xml -->
       <item id="mobilePostsortPreventNavModalHead">${encodeHTML(
         useStore.getState().mobilePostsortPreventNavModalHead
       )}</item>
       <item id="mobilePostsortPreventNavModalText">${encodeHTML(
         useStore.getState().mobilePostsortPreventNavModalText
       )}</item>
       <item id="mobilePostsortSortbarText">${encodeHTML(
         useStore.getState().mobilePostsortSortbarText
       )}</item>
       <item id="mobilePostsortHelpModalHead">${encodeHTML(
         useStore.getState().mobilePostsortHelpModalHead
       )}</item>
       <item id="mobilePostsortHelpModalText">${encodeHTML(
         useStore.getState().mobilePostsortHelpModalText
       )}</item>

        <!-- 13. SURVEY: Additional questions, only displayed if showStep4 == TRUE -->
        <item id="surveyHeader">${encodeHTML(useStore.getState().surveyHeader)}</item>
        <item id="surveyModalHead">${encodeHTML(useStore.getState().surveyModalHead)}</item>
        <item id="surveyModalText">${encodeHTML(useStore.getState().surveyModalText)}</item>
        <item id="surveyPreventNavModalHead">${encodeHTML(
          useStore.getState().surveyPreventNavModalHead
        )}</item>
        <item id="surveyPreventNavModalText">${encodeHTML(
          useStore.getState().surveyPreventNavModalText
        )}</item>
       
        <!-- 14. MOBILE SURVEY: Additional questions, only displayed if showStep4 == true -->
        <item id="mobileSurveyHelpModalHead">${encodeHTML(
          useStore.getState().mobileSurveyHelpModalHead
        )}</item>
        <item id="mobileSurveyHelpModalText">${encodeHTML(
          useStore.getState().mobileSurveyHelpModalText
        )}</item>

        <!-- 15. SUBMIT -->
        <item id="btnTransfer">${encodeHTML(useStore.getState().btnTransfer)}</item>
        <item id="transferHead">${encodeHTML(useStore.getState().transferHead)}</item>
        <item id="transferTextAbove">${encodeHTML(useStore.getState().transferTextAbove)}</item>
        <item id="transferTextBelow">${encodeHTML(useStore.getState().transferTextBelow)}</item>
        <item id="transferOkModalHeader">${encodeHTML(
          useStore.getState().transferOkModalHeader
        )}</item>   
        <item id="transferOkModalText">${encodeHTML(useStore.getState().transferOkModalText)}</item>
        <item id="transferFailModalHeader">${encodeHTML(
          useStore.getState().transferFailModalHeader
        )}</item>   
        <item id="transferFailModalText">${encodeHTML(
          useStore.getState().transferFailModalText
        )}</item>   
        <item id="fallbackMessage">${encodeHTML(useStore.getState().fallbackMessage)}</item>   
        <item id="btnDownload">${encodeHTML(useStore.getState().btnDownload)}</item>   
        <item id="goodbyeMessage">${encodeHTML(useStore.getState().goodbyeMessage)}</item>   

        <!-- 16. MOBILE SUBMIT -->
        <item id="mobileSortTitleBar">${encodeHTML(useStore.getState().mobileSortTitleBar)}</item>

        <!-- 17. EMAIL -->
        <item id="btnTransferEmail">${encodeHTML(useStore.getState().btnTransferEmail)}</item>
        <item id="clipboardResults">${encodeHTML(useStore.getState().clipboardResults)}</item>  
        <item id="clipboardEmail">${encodeHTML(useStore.getState().clipboardEmail)}</item>  
        <item id="copiedText">${encodeHTML(useStore.getState().copiedText)}</item>  
        <item id="downloadResultsButtonText">${encodeHTML(
          useStore.getState().downloadResultsButtonText
        )}</item>  
        <item id="emailSubmit
        <item id="copyTextError">${encodeHTML(useStore.getState().copyFailMessage)}</item>  
        <item id="defaultEmailClientFail">${encodeHTML(
          useStore.getState().defaultEmailClientFail
        )}</item>   
        <item id="emailBodyMessage">${encodeHTML(useStore.getState().emailBodyMessage)}</item>
        <item id="emailSubjectText">${encodeHTML(useStore.getState().emailSubjectText)}</item>

        <!-- 18. LINKING -->
        <item id="linkedProjectFallbackMessage">${encodeHTML(
          useStore.getState().linkingFallbackMessage
        )}</item>   
         <item id="linkedProjectBtnMessage">${encodeHTML(
           useStore.getState().linkingBtnText
         )}</item>   

                 <!-- LOCAL DATA COLLECTION -->  
        <item id="localHeader">${encodeHTML(useStore.getState().localHeader)}</item>
        <item id="partIdText">${encodeHTML(useStore.getState().partIdText)}</item>
        <item id="usercodeText">${encodeHTML(useStore.getState().usercodeText)}</item>
        <item id="localStartButtonText">${encodeHTML(
          useStore.getState().localStartButtonText
        )}</item>
        <item id="localDeleteButtonText">${encodeHTML(
          useStore.getState().localDeleteButtonText
        )}</item>
        <item id="localDownloadButtonText">${encodeHTML(
          useStore.getState().localDownloadButtonText
        )}</item>
        <item id="storedQsortsHeaderText">${encodeHTML(
          useStore.getState().storedQsortsHeaderText
        )}</item>
        <item id="localDeleteModalHead">${encodeHTML(
          useStore.getState().localDeleteModalHead
        )}</item>
        <item id="localDeleteModalText">${encodeHTML(
          useStore.getState().localDeleteModalText
        )}</item>
        <item id="localParticipantsText">${encodeHTML(
          useStore.getState().localParticipantsText
        )}</item>
        <item id="localSaveDataButton">${encodeHTML(useStore.getState().localSaveDataButton)}</item>
        <item id="localSubmitSuccessModalHeader">${encodeHTML(
          useStore.getState().localSubmitSuccessModalHeader
        )}</item>
        <item id="localSubmitSuccessModalText">${encodeHTML(
          useStore.getState().localSubmitSuccessModalText
        )}</item>
        <item id="localSaveBeforeDeleteModalHeader">${encodeHTML(
          useStore.getState().localSaveBeforeDeleteModalHeader
        )}</item>
        <item id="localSaveBeforeDeleteModalText">${encodeHTML(
          useStore.getState().localSaveBeforeDeleteModalText
        )}</item>
        <item id="returnToLocalPanelButtonText">${encodeHTML(
          useStore.getState().returnToLocalPanelButtonText
        )}</item>

   </language>`;

  return data;
};

export { generateLanguageXml };
