import encodeHTML from "../utils/encodeHTML";
import { useStore } from "../../globalState/useStore.js";

const generateLanguageXml = () => {
  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <language version="Quincy ${useStore.getState().version}" htmlParse="true">\n;

        <!-- 1. MULTIPLE SCREENS AND FOOTER -->
        <item id="btnHelp">${encodeHTML(useStore.getState().btnHelp)}</item>
        <item id="fontSizeText">${encodeHTML(useStore.getState().footerTextSize)}</item>
        <item id="cardHeightText">${encodeHTML(useStore.getState().footerCardHeight)}</item>
        <item id="btnNext">${encodeHTML(useStore.getState().btnNext)}</item>
        <item id="stepCompleteMessage">${encodeHTML(useStore.getState().stepCompleted)}</item>
        <item id="screenOrientationText">${encodeHTML(
          useStore.getState().screenOrientationText
        )}</item>

        <!-- 1b. MOBILE MULTIPLE SCREENS AND FOOTER -->
        <item id="mobileTextSize">${encodeHTML(useStore.getState().mobileTextSize)}</item>
        <item id="mobileViewSize">${encodeHTML(useStore.getState().mobileViewSize)}</item>
        <item id="mobileModalButtonCancel">${encodeHTML(
          useStore.getState().mobileModalButtonCancel
        )}</item>
        
        <!-- 2. CONSENT SCREEN -->
        <item id="consentTitleBarText">${encodeHTML(useStore.getState().consentTitleBarText)}</item>
        <item id="consentText">${encodeHTML(useStore.getState().consentText)}</item>
        <item id="consentHelpModalHead">${encodeHTML(
          useStore.getState().consentHelpModalHead
        )}</item>
        <item id="consentHelpModalText">${encodeHTML(
          useStore.getState().consentHelpModalText
        )}</item>
        <item id="btnHelpConsent">${encodeHTML(useStore.getState().btnHelpConsent)}</item>
        <item id="btnNextConsent">${encodeHTML(useStore.getState().btnNextConsent)}</item>

        <!-- 3. ACCESS CONTROL - only displayed if access is restricted -->
        <item id="loginWelcomeText">${encodeHTML(useStore.getState().loginWelcomeText)}</item>
        <item id="loginHeaderText">${encodeHTML(useStore.getState().loginHeaderText)}</item>
        <item id="loginPartIdText">${encodeHTML(useStore.getState().loginPartIdText)}</item>
        <item id="accessCodeText">${encodeHTML(useStore.getState().accessCodeText)}</item>
        <item id="accessInputText">${encodeHTML(useStore.getState().accessInputText)}</item>
        <item id="partIdWarning">${encodeHTML(useStore.getState().partIdWarning)}</item>
        <item id="accessCodeWarning">${encodeHTML(useStore.getState().accessCodeWarning)}</item>
        <item id="loginSubmitButtonText">${encodeHTML(
          useStore.getState().loginSubmitButtonText
        )}</item>
        
        <!-- 4. WELCOME (LANDING) SCREEN -->
        <item id="landingHead">${encodeHTML(useStore.getState().landingHead)}</item>
        <item id="welcomeText">${encodeHTML(useStore.getState().welcomeMessage)}</item>        
        <item id="landingHelpModalHead">${encodeHTML(
          useStore.getState().landingHelpModalHead
        )}</item>
        <item id="landingHelpModalText">${encodeHTML(
          useStore.getState().landingHelpModalText
        )}</item>
        <item id="btnHelpLanding">${encodeHTML(useStore.getState().btnHelpLanding)}</item>
        <item id="btnNextLanding">${encodeHTML(useStore.getState().btnNextLanding)}</item>

        <!-- 5. MOBILE WELCOME (LANDING) SCREEN -->
        <item id="mobileWelcomeText">${encodeHTML(useStore.getState().mobileWelcomeText)}</item>

        <!-- 6. PRESORT: rough sorting into three piles -->
        <item id="logInFirst">${encodeHTML(useStore.getState().loginFirst)}</item>
        <item id="titleBarText">${encodeHTML(useStore.getState().titleBarText)}</item>
        <item id="presortAgreement">${encodeHTML(useStore.getState().presortAgreement)}</item>
        <item id="presortNeutral">${encodeHTML(useStore.getState().presortNeutral)}</item>
        <item id="presortDisagreement">${encodeHTML(useStore.getState().presortDisagreement)}</item>
        <item id="presortStatements">${encodeHTML(useStore.getState().presortStatements)}</item>
        <item id="presortOnPageInstructions">${encodeHTML(
          useStore.getState().presortOnPageInstructions
        )}</item>
        <item id="presortImageSortInstructions">${encodeHTML(
          useStore.getState().presortImageSortInstructions
        )}</item>        
        <item id="presortModalHead">${encodeHTML(useStore.getState().presortModalHead)}</item>
        <item id="presortModalText">${encodeHTML(useStore.getState().presortModalText)}</item>
        <item id="presortPreventNavModalHead">${encodeHTML(
          useStore.getState().presortPreventNavModalHead
        )}</item>
        <item id="presortPreventNavModalText">${encodeHTML(
          useStore.getState().presortPreventNavModalText
        )}</item>
        <item id="presortFinishedModalHead">${encodeHTML(
          useStore.getState().presortFinishedModalHead
        )}</item>
        <item id="presortFinishedModalText">${encodeHTML(
          useStore.getState().presortFinishedModalText
        )}</item>

        <!-- 7. MOBILE PRESORT -->
        <item id="mobilePresortConditionsOfInstruction">${encodeHTML(
          useStore.getState().mobilePresortConditionsOfInstruction
        )}</item>
        <item id="mobilePresortCompletedLabel">${encodeHTML(
          useStore.getState().mobilePresortCompletedLabel
        )}</item>
        <item id="mobilePresortAssignLeft">${encodeHTML(
          useStore.getState().mobilePresortAssignLeft
        )}</item>
        <item id="mobilePresortAssignRight">${encodeHTML(
          useStore.getState().mobilePresortAssignRight
        )}</item>
        <item id="mobilePresortRedoModalHead">${encodeHTML(
          useStore.getState().mobilePresortRedoModalHead
        )}</item>
        <item id="mobilePresortRedoModalText">${encodeHTML(
          useStore.getState().mobilePresortRedoModalText
        )}</item>
        <item id="mobilePresortRedoModalConfirmButton">${encodeHTML(
          useStore.getState().mobilePresortRedoModalConfirmButton
        )}</item>
        <item id="mobilePresortEvaluationsComplete">${encodeHTML(
          useStore.getState().mobilePresortEvaluationsComplete
        )}</item>
        <item id="mobilePresortHelpModalHead">${encodeHTML(
          useStore.getState().mobilePresortHelpModalHead
        )}</item>
        <item id="mobilePresortHelpModalText">${encodeHTML(
          useStore.getState().mobilePresortHelpModalText
        )}</item>
        <item id="mobilePresortFinishedModalHead">${encodeHTML(
          useStore.getState().mobilePresortFinishedModalHead
        )}</item>
        <item id="mobilePresortFinishedModalText">${encodeHTML(
          useStore.getState().mobilePresortFinishedModalText
        )}</item>
        <item id="mobilePresortProcessCompleteMessage">${encodeHTML(
          useStore.getState().mobilePresortProcessCompleteMessage
        )}</item>
        <item id="mobilePresortPreventNavModalHead">${encodeHTML(
          useStore.getState().mobilePresortPreventNavModalHead
        )}</item>
        <item id="mobilePresortPreventNavModalText">${encodeHTML(
          useStore.getState().mobilePresortPreventNavModalText
        )}</item>

        <!-- 8. THINNING -->
        <item id="thinPageTitle">${encodeHTML(useStore.getState().thinningPageTitle)}</item>
        <item id="thinPageSubmitButton">${encodeHTML(
          useStore.getState().thinningPageSubmitButtonText
        )}</item>
        <item id="numStatementsToSelect">${encodeHTML(
          useStore.getState().thinningPageNumStatesToSelect
        )}</item>
        <item id="currentlySelectedNumber">${encodeHTML(
          useStore.getState().thinningPageCurrentNumStatesSelected
        )}</item>
        <item id="thinningPreventNavModalHead">${encodeHTML(
          useStore.getState().thinningPreventNavModalHead
        )}</item>
        <item id="thinningPreventNavModalText">${encodeHTML(
          useStore.getState().thinningPreventNavModalText
        )}</item>
       <item id="thinningHelpModalHead">${encodeHTML(
         useStore.getState().thinningHelpModalHead
       )}</item>
        <item id="thinningHelpModalText">${encodeHTML(
          useStore.getState().thinningHelpModalText
        )}</item>
        <item id="thinningConfirmModalHead">${encodeHTML(
          useStore.getState().thinningConfirmModalHead
        )}</item>
        <item id="thinningConfirmModalText">${encodeHTML(
          useStore.getState().thinningConfirmModalText
        )}</item>
        <item id="initialInstructionPart1">${encodeHTML(
          useStore.getState().initialInstructionPart1
        )}</item>
        <item id="initialInstructionPart2">${encodeHTML(
          useStore.getState().initialInstructionPart2
        )}</item>
        <item id="initialInstructionPart3">${encodeHTML(
          useStore.getState().initialInstructionPart3
        )}</item>
        <item id="initialInstructionPartNeg1">${encodeHTML(
          useStore.getState().initialInstructionNegPart1
        )}</item>
        <item id="initialInstructionPartNeg2">${encodeHTML(
          useStore.getState().initialInstructionNegPart2
        )}</item>
        <item id="finalInstructions">${encodeHTML(useStore.getState().finalInstructions)}</item>

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
          useStore.getState().postsortBackButton
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
        <item id="btnTransferEmail">${encodeHTML(useStore.getState().emailSubmitBtn)}</item>
        <item id="clipboardResults">${encodeHTML(useStore.getState().emailCopyResultsBtn)}</item>  
        <item id="clipboardEmail">${encodeHTML(useStore.getState().emailCopyAddressBtn)}</item>  
        <item id="copiedText">${encodeHTML(useStore.getState().copySuccessMessage)}</item>  
        <item id="copyTextError">${encodeHTML(useStore.getState().copyFailMessage)}</item>  
        <item id="defaultEmailClientFail">${encodeHTML(
          useStore.getState().defaultEmailFailModalText
        )}</item>   
        <item id="emailMessage1">${encodeHTML(useStore.getState().emailBodyMessage)}</item>

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
