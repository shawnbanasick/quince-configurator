import encodeHTML from "../utils/encodeHTML";
import { useStore } from "../../globalState/useStore.js";

const generateLanguageXml = () => {
  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <language version="Quince ${useStore.getState().version}" htmlParse="true">\n;

        <!-- 0. FILE INFORMATION -->
        <item order="0-1" id="languageFileVersion">1.0.0</item>
        <item order="0-2" id="iterationDate">2025-08-31</item>

        <!-- 1. MULTIPLE SCREENS AND FOOTER -->
        <item order= "1-1" id="btnHelp">${encodeHTML(useStore.getState().btnHelp)}</item>
        <item order= "1-2" id="fontSizeText">${encodeHTML(useStore.getState().fontSizeText)}</item>
        <item order= "1-3" id="cardHeightText">${encodeHTML(
          useStore.getState().cardHeightText
        )}</item>
        <item order= "1-4" id="btnNext">${encodeHTML(useStore.getState().btnNext)}</item>
        <item order= "1-5" id="stepCompletedMessage">${encodeHTML(
          useStore.getState().stepCompletedMessage
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
         <item order= "6-3b" id="press1">${encodeHTML(useStore.getState().press1)}</item>
        <item order= "6-4" id="presortNeutral">${encodeHTML(
          useStore.getState().presortNeutral
        )}</item>
         <item order= "6-4b" id="press2">${encodeHTML(useStore.getState().press2)}</item>
        <item order= "6-5" id="presortDisagreement">${encodeHTML(
          useStore.getState().presortDisagreement
        )}</item>
         <item order= "6-5b" id="press3">${encodeHTML(useStore.getState().press3)}</item>
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
        <item order= "7-8" id="mobilePresortRedoModalConfirmButton">${encodeHTML(
          useStore.getState().mobilePresortRedoModalConfirmButton
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
        <item order= "7-14" id="mobilePresortProcessCompleteMessage">${encodeHTML(
          useStore.getState().mobilePresortProcessCompleteMessage
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
        <item order="9-1" id="mobileThinHelpModalHead">${encodeHTML(
          useStore.getState().mobileThinHelpModalHead
        )}</item>
        <item order="9-2" id="mobileThinHelpModalText">${encodeHTML(
          useStore.getState().mobileThinHelpModalText
        )}</item>
        <item order="9-3" id="mobileThinConditionsOfInstruction">${encodeHTML(
          useStore.getState().mobileThinConditionsOfInstruction
        )}</item>
          <item order="9-4" id="mobileThinSelectedText">${encodeHTML(
            useStore.getState().mobileThinSelectedText
          )}</item>
        <item order="9-5" id="mobileThinSubmitButtonText">${encodeHTML(
          useStore.getState().mobileThinSubmitButtonText
        )}</item>
        <item order="9-6" id="mobileGuidanceModalLeft1Header">${encodeHTML(
          useStore.getState().mobileGuidanceModalLeft1Header
        )}</item>
        <item order="9-7" id="mobileGuidanceModalLeft1Text">${encodeHTML(
          useStore.getState().mobileGuidanceModalLeft1Text
        )}</item>
        <item order="9-8" id="mobileGuidanceModalRight2Header">${encodeHTML(
          useStore.getState().mobileGuidanceModalRight2Header
        )}</item>
        <item order="9-9" id="mobileGuidanceModalRight2Text">${encodeHTML(
          useStore.getState().mobileGuidanceModalRight2Text
        )}</item>
        <item order="9-10" id="mobileGuidanceModalLeft2Header">${encodeHTML(
          useStore.getState().mobileGuidanceModalLeft2Header
        )}</item>
        <item order="9-11" id="mobileGuidanceModalLeft2Text">${encodeHTML(
          useStore.getState().mobileGuidanceModalLeft2Text
        )}</item>
        <item order="9-12" id="mobileThinScrollBottomModalHead">${encodeHTML(
          useStore.getState().mobileThinScrollBottomModalHead
        )}</item>
        <item order="9-13" id="mobileThinScrollBottomModalText">${encodeHTML(
          useStore.getState().mobileThinScrollBottomModalText
        )}</item>
        <item order="9-14" id="moveTopMobileHead">${encodeHTML(
          useStore.getState().moveTopMobileHead
        )}</item>
        <item order="9-15" id="moveTopMobileText">${encodeHTML(
          useStore.getState().moveTopMobileText
        )}</item>
        <item order="9-16" id="moveTopMobileButtonOK">${encodeHTML(
          useStore.getState().moveTopMobileButtonOK
        )}</item>
        <item order="9-17" id="mobileThinPreventNavModalHead">${encodeHTML(
          useStore.getState().mobileThinPreventNavModalHead
        )}</item>
        <item order="9-18" id="mobileThinPreventNavModalText">${encodeHTML(
          useStore.getState().mobileThinPreventNavModalText
        )}</item>
        <item order="9-19" id="mobileThinProcessCompleteMessage">${encodeHTML(
          useStore.getState().mobileThinProcessCompleteMessage
        )}</item>
        <item order="9-20" id="moveAllTopMobileText">${encodeHTML(
          useStore.getState().moveAllTopMobileText
        )}</item>
        <item order="9-21" id="mobileGuidanceModalRight1Header">${encodeHTML(
          useStore.getState().mobileGuidanceModalRight1Header
        )}</item>
        <item order="9-22" id="mobileGuidanceModalRight1Text">${encodeHTML(
          useStore.getState().mobileGuidanceModalRight1Text
        )}</item>

        <!-- 10. SORT -->
        <item order="10-1" id="sortHelpModalHead">${encodeHTML(
          useStore.getState().sortHelpModalHead
        )}</item>
        <item order="10-2" id="sortHelpModalText">${encodeHTML(
          useStore.getState().sortHelpModalText
        )}</item>
        <item order="10-3"  id="sortAgreement">${encodeHTML(
          useStore.getState().sortAgreement
        )}</item>
        <item order="10-4" id="sortDisagreement">${encodeHTML(
          useStore.getState().sortDisagreement
        )}</item>
        <item order="10-5" id="condOfInst">${encodeHTML(useStore.getState().condOfInst)}</item>
        <item order="10-6" id="sortOverloadedColumnModalHead">${encodeHTML(
          useStore.getState().sortOverloadedColumnModalHead
        )}</item>
        <item order="10-7" id="sortOverloadedColumnModalText">${encodeHTML(
          useStore.getState().sortOverloadedColumnModalText
        )}</item>
              

        <!-- 11. MOBILE SORT -->
        <item order="11-1" id="mobileSortHelpModalHead">${encodeHTML(
          useStore.getState().mobileSortHelpModalHead
        )}</item>
        <item order="11-2" id="mobileSortHelpModalText">${encodeHTML(
          useStore.getState().mobileSortHelpModalText
        )}</item>
        <item order="11-3" id="mobileSortConditionsOfInstruction">${encodeHTML(
          useStore.getState().mobileSortConditionsOfInstruction
        )}</item>
        <item order="11-4" id="mobileSortScrollBottomModalHead">${encodeHTML(
          useStore.getState().mobileSortScrollBottomModalHead
        )}</item>
        <item order="11-5" id="mobileSortScrollBottomModalText">${encodeHTML(
          useStore.getState().mobileSortScrollBottomModalText
        )}</item>
        <item order="11-6" id="mobileSortSwapModalHead">${encodeHTML(
          useStore.getState().mobileSortSwapModalHead
        )}</item>
        <item order="11-7" id="mobileSortSwapModalText">${encodeHTML(
          useStore.getState().mobileSortSwapModalText
        )}</item>
        <item order="11-8" id="mobileSortSwapModalSuccessMessage">${encodeHTML(
          useStore.getState().mobileSortSwapModalSuccessMessage
        )}</item>

       <!-- 12. POSTSORT: comments - only displayed if showStep3 = TRUE in config.xml -->
       <item order="12-1" id="postsortModalHead">${encodeHTML(
         useStore.getState().postsortModalHead
       )}</item>
       <item order="12-2" id="postsortModalText">${encodeHTML(
         useStore.getState().postsortModalText
       )}</item>
       <item order="12-3" id="postsortHeader">${encodeHTML(
         useStore.getState().postsortHeader
       )}</item>
       <item order="12-4" id="postsortInstructions">${encodeHTML(
         useStore.getState().postsortInstructions
       )}</item>
        <item order="12-5" id="placeholder">${encodeHTML(useStore.getState().placeholder)}</item>
        <item order="12-6" id="placedOn">${encodeHTML(useStore.getState().placedOn)}</item>
        <item order="12-7" id="postsortAgreement">${encodeHTML(
          useStore.getState().postsortAgreement
        )}</item>
        <item order="12-8" id="postsortDisagreement">${encodeHTML(
          useStore.getState().postsortDisagreement
        )}</item>
        <item order="12-9" id="postsortBackButtonText">${encodeHTML(
          useStore.getState().postsortBackButtonText
        )}</item>
        <item order="12-10" id="postsortPreventNavModalHead">${encodeHTML(
          useStore.getState().postsortPreventNavModalHead
        )}</item>
        <item order="12-11" id="postsortPreventNavModalText">${encodeHTML(
          useStore.getState().postsortPreventNavModalText
        )}</item>


       <!-- 13. MOBILE POSTSORT: comments - only displayed if showStep3 = TRUE in config.xml -->
       <item order="13-1" id="mobilePostsortHelpModalHead">${encodeHTML(
         useStore.getState().mobilePostsortHelpModalHead
       )}</item>
       <item order="13-2" id="mobilePostsortHelpModalText">${encodeHTML(
         useStore.getState().mobilePostsortHelpModalText
       )}</item>
       <item order="13-3" id="mobilePostsortSortbarText">${encodeHTML(
         useStore.getState().mobilePostsortSortbarText
       )}</item>
       <item order="13-4" id="mobilePostsortPlaceholder">${encodeHTML(
         useStore.getState().mobilePostsortPlaceholder
       )}</item>
       <item order="13-5" id="mobilePostsortPreventNavModalHead">${encodeHTML(
         useStore.getState().mobilePostsortPreventNavModalHead
       )}</item>
       <item order="13-6" id="mobilePostsortPreventNavModalText">${encodeHTML(
         useStore.getState().mobilePostsortPreventNavModalText
       )}</item>
       
        <!-- 14. SURVEY: Additional questions, only displayed if showStep4 == TRUE -->
        <item order="14-1" id="surveyModalHead">${encodeHTML(
          useStore.getState().surveyModalHead
        )}</item>
        <item order="14-2" id="surveyModalText">${encodeHTML(
          useStore.getState().surveyModalText
        )}</item>
        <item order="14-3" id="surveyHeader">${encodeHTML(useStore.getState().surveyHeader)}</item>
        <item order="14-4" id="surveyPreventNavModalHead">${encodeHTML(
          useStore.getState().surveyPreventNavModalHead
        )}</item>
        <item order="14-5" id="surveyPreventNavModalText">${encodeHTML(
          useStore.getState().surveyPreventNavModalText
        )}</item>

        <!-- 15. MOBILE SURVEY: Additional questions, only displayed if showStep4 == true -->
        <item order="15-1" id="mobileSurveyHelpModalHead">${encodeHTML(
          useStore.getState().mobileSurveyHelpModalHead
        )}</item>
        <item order="15-2" id="mobileSurveyHelpModalText">${encodeHTML(
          useStore.getState().mobileSurveyHelpModalText
        )}</item>

        <!-- 16. SUBMIT -->
        <item order="16-1" id="btnTransfer">${encodeHTML(useStore.getState().btnTransfer)}</item>
        <item order="16-2" id="transferHead">${encodeHTML(useStore.getState().transferHead)}</item>
        <item order="16-3" id="transferTextAbove">${encodeHTML(
          useStore.getState().transferTextAbove
        )}</item>
        <item order="16-4" id="transferTextBelow">${encodeHTML(
          useStore.getState().transferTextBelow
        )}</item>
        <item order="16-5" id="transferOkModalHeader">${encodeHTML(
          useStore.getState().transferOkModalHeader
        )}</item>   
        <item order="16-6" id="transferOkModalText">${encodeHTML(
          useStore.getState().transferOkModalText
        )}</item>
        <item order="16-7" id="transferFailModalHeader">${encodeHTML(
          useStore.getState().transferFailModalHeader
        )}</item>   
        <item order="16-8" id="transferFailModalText">${encodeHTML(
          useStore.getState().transferFailModalText
        )}</item>   
        <item order="16-9" id="fallbackMessage">${encodeHTML(
          useStore.getState().fallbackMessage
        )}</item>   
        <item order="16-10" id="btnDownload">${encodeHTML(
          useStore.getState().btnDownload
        )}</item>   
        <item order="16-11" id="goodbyeMessage">${encodeHTML(
          useStore.getState().goodbyeMessage
        )}</item>   

        <!-- 17. MOBILE SUBMIT -->
        <item order="17-1" id="mobileSortTitleBar">${encodeHTML(
          useStore.getState().mobileSortTitleBar
        )}</item>

        <!-- 18. EMAIL -->
        <item order="18-1" id="checkInternetMessage">${encodeHTML(
          useStore.getState().checkInternetMessage
        )}</item>
        <item order="18-2" id="btnTransferEmail">${encodeHTML(
          useStore.getState().btnTransferEmail
        )}</item>
        <item order="18-3" id="submitFailMessage">${encodeHTML(
          useStore.getState().submitFailMessage
        )}</item>  
        <item order="18-4" id="defaultEmailClientFail">${encodeHTML(
          useStore.getState().defaultEmailClientFail
        )}</item>   
        <item order="18-5" id="clipboardEmail">${encodeHTML(
          useStore.getState().clipboardEmail
        )}</item>  
        <item order="18-6" id="clipboardResults">${encodeHTML(
          useStore.getState().clipboardResults
        )}</item>  
        <item order="18-7" id="copiedText">${encodeHTML(useStore.getState().copiedText)}</item>  
        <item order="18-8" id="downloadResultsButtonText">${encodeHTML(
          useStore.getState().downloadResultsButtonText
        )}</item>  
        <item order="18-9" id="emailBodyMessage">${encodeHTML(
          useStore.getState().emailBodyMessage
        )}</item>

        <!-- 19. LINKING -->
        <item order="19-" id="linkedProjectMessage">${encodeHTML(
          useStore.getState().linkedProjectMessage
        )}</item>   
         <item order="19-" id="linkedProjectBtnMessage">${encodeHTML(
           useStore.getState().linkedProjectBtnMessage
         )}</item>   

        <!-- 20. LOCAL DATA COLLECTION -->  
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
