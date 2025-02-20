import encodeHTML from "../utils/encodeHTML";
import { useStore } from "../../globalState/useStore.js";

const generateLanguageXml = () => {
  let data = `<?xml version="1.0" encoding="UTF-8"?>

   <language version="${useStore.getState().version}" htmlParse="true">\n;

        <!-- MULTIPLE SCREENS AND FOOTER -->
        <item id="btnHelp">${encodeHTML(useStore.getState().btnHelp)}</item>
        <item id="fontSizeText">${encodeHTML(useStore.getState().footerTextSize)}</item>
        <item id="cardHeightText">${encodeHTML(useStore.getState().footerCardHeight)}</item>
        <item id="btnNext">${encodeHTML(useStore.getState().btnNext)}</item>
        <item id="stepCompleteMessage">${encodeHTML(useStore.getState().stepCompleted)}</item>
        <item id="screenOrientationText">${encodeHTML(
          useStore.getState().screenOrientationText
        )}</item>

        <!-- CONSENT SCREEN -->
        <item id="consentTitleBarText">${encodeHTML(useStore.getState().consentTitleBarText)}</item>
        <item id="consentText">${encodeHTML(useStore.getState().consentText)}</item>
        <item id="consentHelpModalHead">${encodeHTML(
          useStore.getState().consentHelpModalHead
        )}</item>
        <item id="consentHelpModalText">${encodeHTML(
          useStore.getState().consentHelpModalText
        )}</item>
        <item id="btnNextConsent">${encodeHTML(useStore.getState().btnNextConsent)}</item>
        <item id="btnHelpConsent">${encodeHTML(useStore.getState().btnHelpConsent)}</item>


        <!-- ACCESS CONTROL - only displayed if access is restricted -->
        <item id="loginWelcomeText">${encodeHTML(useStore.getState().loginWelcomeText)}</item>
        <item id="loginHeaderText">${encodeHTML(useStore.getState().loginHeaderText)}</item>
        <item id="loginPartIdText">${encodeHTML(useStore.getState().loginPartIdText)}</item>
         <item id="accessCodeText">${encodeHTML(useStore.getState().accessCodeText)}</item>
        <item id="partIdWarning">${encodeHTML(useStore.getState().partIdWarning)}</item>
        <item id="accessCodeWarning">${encodeHTML(useStore.getState().accessCodeWarning)}</item>
        <item id="loginSubmitButtonText">${encodeHTML(
          useStore.getState().loginSubmitButtonText
        )}</item>
        <item id="accessInputText">${encodeHTML(useStore.getState().accessInputText)}</item>


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
        <item id="localSaveBeforeDeleteModalHeader">${encodeHTML(
          useStore.getState().localSaveBeforeDeleteModalHeader
        )}</item>
        <item id="localSaveBeforeDeleteModalText">${encodeHTML(
          useStore.getState().localSaveBeforeDeleteModalText
        )}</item>
        <item id="localSaveDataButton">${encodeHTML(useStore.getState().LocalSaveDataButton)}</item>
        <item id="localSubmitSuccessModalHeader">${encodeHTML(
          useStore.getState().localSubmitSuccessModalHeader
        )}</item>
        <item id="localSubmitSuccessModalText">${encodeHTML(
          useStore.getState().localSubmitSuccessModalText
        )}</item>
        <item id="returnToLocalPanelButtonText">${encodeHTML(
          useStore.getState().returnToLocalPanelButtonText
        )}</item>


        <!-- WELCOME (LANDING) SCREEN -->
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



        <!-- PRESORT: rough sorting into three piles -->
        <item id="logInFirst">${encodeHTML(useStore.getState().loginFirst)}</item>
        <item id="titleBarText">${encodeHTML(useStore.getState().titleBarText)}</item>
        <item id="presortAgreement">${encodeHTML(useStore.getState().presortAgreement)}</item>
        <item id="presortStatements">${encodeHTML(useStore.getState().presortStatements)}</item>
        <item id="presortNeutral">${encodeHTML(useStore.getState().presortNeutral)}</item>
        <item id="presortDisagreement">${encodeHTML(useStore.getState().presortDisagreement)}</item>
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
        <item id="presortOnPageInstructions">${encodeHTML(
          useStore.getState().presortOnPageInstructions
        )}</item>
        <item id="presortImageSortInstructions">${encodeHTML(
          useStore.getState().presortImageSortInstructions
        )}</item>

        
        <!-- SORT: sorting (leave blank to skip popup) -->
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

        <!-- POSTSORT: comments - only displayed if showStep3 = true -->
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

        <!-- SURVEY: Additional questions, only displayed if showStep4 == true -->
        <item id="surveyHeader">${encodeHTML(useStore.getState().surveyHeader)}</item>
        <item id="surveyModalHead">${encodeHTML(useStore.getState().surveyModalHead)}</item>
        <item id="surveyModalText">${encodeHTML(useStore.getState().surveyModalText)}</item>
        <item id="surveyPreventNavModalHead">${encodeHTML(
          useStore.getState().surveyPreventNavModalHead
        )}</item>
        <item id="surveyPreventNavModalText">${encodeHTML(
          useStore.getState().surveyPreventNavModalText
        )}</item>
       
        <!-- SUBMIT -->
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

        <!-- EMAIL -->
        <item id="btnTransferEmail">${encodeHTML(useStore.getState().emailSubmitBtn)}</item>
        <item id="clipboardResults">${encodeHTML(useStore.getState().emailCopyResultsBtn)}</item>  
        <item id="clipboardEmail">${encodeHTML(useStore.getState().emailCopyAddressBtn)}</item>  
        <item id="copiedText">${encodeHTML(useStore.getState().copySuccessMessage)}</item>  
        <item id="copyTextError">${encodeHTML(useStore.getState().copyFailMessage)}</item>  
        <item id="defaultEmailClientFail">${encodeHTML(
          useStore.getState().defaultEmailFailModalText
        )}</item>   
        <item id="emailMessage1">${encodeHTML(useStore.getState().emailBodyMessage)}</item>

        <!-- LINKING -->
        <item id="linkedProjectFallbackMessage">${encodeHTML(
          useStore.getState().linkingFallbackMessage
        )}</item>   
         <item id="linkedProjectBtnMessage">${encodeHTML(
           useStore.getState().linkingBtnText
         )}</item>   


   </language>`;

  return data;
};

export { generateLanguageXml };
