import React from "react";
import XMLParser from "react-xml-parser";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";
import { decodeHTML } from "../utils/decodeHTML";

interface QuestObjType {
  surveyQuestionType?: string;
  required?: string;
  other?: string;
  label?: string;
  note?: string;
  itemNum?: string;
  bg?: string;
  limited?: string;
  limitLength?: string;
  restricted?: string;
  placeholder?: string;
  options?: string;
  scale?: string;
  surveyQuestArray?: any[];
}

const getSetStudyTitle = (state) => state.setStudyTitle;
const getSetSetupTarget = (state) => state.setSetupTarget;
const getSetEmailAddress = (state) => state.setEmailAddress;
const getSetEmailSubjectLine = (state) => state.setEmailSubjectLine;
const getSetLinkToSecondProject = (state) => state.setLinkToSecondProject;
const getSetSecondProjectUrl = (state) => state.setSecondProjectUrl;
const getSetUseImages = (state) => state.setUseImages;
const getSetNumImages = (state) => state.setNumImages;
const getSetImageFileType = (state) => state.setImageFileType;
const getSetImageFormat = (state) => state.setImageFormat;
const getSetShowConsentPage = (state) => state.setShowConsentPage;
const getSetShowConsentPageHelpModal = (state) => state.setShowConsentPageHelpModal;
const getSetInitialScreen = (state) => state.setInitialScreen;
const getSetAccessCode = (state) => state.setAccessCode;
const getSetHeaderBarColor = (state) => state.setHeaderBarColor;
const getSetGreenCardColor = (state) => state.setGreenCardColor;
const getSetPinkCardColor = (state) => state.setPinkCardColor;
const getSetYellowCardColor = (state) => state.setYellowCardColor;
const getSetDefaultFontColor = (state) => state.setDefaultFontColor;
const getSetShuffleCards = (state) => state.setShuffleCards;
const getSetDefaultFontSizePresort = (state) => state.setDefaultFontSizePresort;
const getSetCondOfInstFontSize = (state) => state.setCondOfInstFontSize;
const getSetSortDirection = (state) => state.setSortDirection;
const getSetAllowUnforcedSorts = (state) => state.setAllowUnforcedSorts;
const getSetWarnOverloadedColumn = (state) => state.setWarnOverloadedColumn;
const getSetShowPostsort = (state) => state.setShowPostsort;
const getSetShowSecondPosColumn = (state) => state.setShowSecondPosColumn;
const getSetShowSecondNegColumn = (state) => state.setShowSecondNegColumn;
const getSetShowBackButton = (state) => state.setShowBackButton;
const getSetPostsortCommentsRequired = (state) => state.setPostsortCommentsRequired;
const getSetDefaultFontSizePostsort = (state) => state.setDefaultFontSizePostsort;
const getSetMinCardHeightPostsort = (state) => state.setMinCardHeightPostsort;
const getSetShowSurvey = (state) => state.setShowSurvey;
const getSetSurveyQuestionsArray = (state) => state.setSurveyQuestionsArray;
const getSetIsConfigXmlLoaded = (state) => state.setIsConfigXmlLoaded;
const getSetBaserowToken = (state) => state.setBaserowToken;
const getSetBaserowDatabaseIdNumber = (state) => state.setBaserowDatabaseIdNumber;
const getSetRequireMinCommentLength = (state) => state.setRequireMinCommentLength;
const getSetMinCommentLength = (state) => state.setMinCommentLength;
const getSetPreventMobileAccess = (state) => state.setPreventMobileAccess;

const UploadAndParseXML: React.FC = () => {
  const setStudyTitle = useStore(getSetStudyTitle);
  const setSetupTarget = useStore(getSetSetupTarget);
  const setEmailAddress = useStore(getSetEmailAddress);
  const setEmailSubjectLine = useStore(getSetEmailSubjectLine);
  const setLinkToSecondProject = useStore(getSetLinkToSecondProject);
  const setSecondProjectUrl = useStore(getSetSecondProjectUrl);
  const setUseImages = useStore(getSetUseImages);
  const setNumImages = useStore(getSetNumImages);
  const setImageFileType = useStore(getSetImageFileType);
  const setImageFormat = useStore(getSetImageFormat);
  const setShowConsentPage = useStore(getSetShowConsentPage);
  const setShowConsentPageHelpModal = useStore(getSetShowConsentPageHelpModal);
  const setInitialScreen = useStore(getSetInitialScreen);
  const setAccessCode = useStore(getSetAccessCode);
  const setHeaderBarColor = useStore(getSetHeaderBarColor);
  const setGreenCardColor = useStore(getSetGreenCardColor);
  const setPinkCardColor = useStore(getSetPinkCardColor);
  const setYellowCardColor = useStore(getSetYellowCardColor);
  const setDefaultFontColor = useStore(getSetDefaultFontColor);
  const setShuffleCards = useStore(getSetShuffleCards);
  const setDefaultFontSizePresort = useStore(getSetDefaultFontSizePresort);
  const setCondOfInstFontSize = useStore(getSetCondOfInstFontSize);
  const setSortDirection = useStore(getSetSortDirection);
  const setAllowUnforcedSorts = useStore(getSetAllowUnforcedSorts);
  const setWarnOverloadedColumn = useStore(getSetWarnOverloadedColumn);
  const setShowPostsort = useStore(getSetShowPostsort);
  const setShowSecondPosColumn = useStore(getSetShowSecondPosColumn);
  const setShowSecondNegColumn = useStore(getSetShowSecondNegColumn);
  const setShowBackButton = useStore(getSetShowBackButton);
  const setPostsortCommentsRequired = useStore(getSetPostsortCommentsRequired);
  const setDefaultFontSizePostsort = useStore(getSetDefaultFontSizePostsort);
  const setMinCardHeightPostsort = useStore(getSetMinCardHeightPostsort);
  const setShowSurvey = useStore(getSetShowSurvey);
  const setSurveyQuestionsArray = useStore(getSetSurveyQuestionsArray);
  const setIsConfigXmlLoaded = useStore(getSetIsConfigXmlLoaded);
  const setBaserowToken = useStore(getSetBaserowToken);
  const setBaserowDatabaseIdNumber = useStore(getSetBaserowDatabaseIdNumber);
  const setRequireMinCommentLength = useStore(getSetRequireMinCommentLength);
  const setMinCommentLength = useStore(getSetMinCommentLength);
  const setPreventMobileAccess = useStore(getSetPreventMobileAccess);

  const { t } = useTranslation();

  const surveyQuestArray: QuestObjType[] = [];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const data = e.target?.result as string;
        const parser = new XMLParser();
        const xml = parser.parseFromString(data, "text/xml");
        const xmlObjectArray = xml.getElementsByTagName("item");

        xmlObjectArray.forEach((item, index) => {
          if (item?.attributes?.id === "studyTitle") {
            setStudyTitle(item?.value);
          }
          if (item?.attributes?.id === "setupTarget") {
            setSetupTarget(item?.value);
          }
          if (item?.attributes?.id === "emailAddress") {
            setEmailAddress(item?.value);
          }
          if (item?.attributes?.id === "emailSubjectLine") {
            setEmailSubjectLine(item?.value);
          }
          if (item?.attributes?.id === "baserowToken") {
            setBaserowToken(item?.value);
          }
          if (item?.attributes?.id === "baserowDatabaseIdNumber") {
            setBaserowDatabaseIdNumber(item?.value);
          }
          if (item?.attributes?.id === "preventMobileAccess") {
            setPreventMobileAccess(item?.value === "true");
          }
          if (item?.attributes?.id === "linkToSecondProject") {
            setLinkToSecondProject(item?.value === "true");
          }
          if (item?.attributes?.id === "secondProjectUrl") {
            setSecondProjectUrl(item?.value);
          }
          if (item?.attributes?.id === "useImages") {
            setUseImages(item?.value === "true");
          }
          if (item?.attributes?.id === "numImages") {
            setNumImages(parseInt(item?.value));
          }
          if (item?.attributes?.id === "imageFileType") {
            setImageFileType(item?.value);
          }
          if (item?.attributes?.id === "imageFormat") {
            setImageFormat(item?.value);
          }
          if (item?.attributes?.id === "showConsentPage") {
            setShowConsentPage(item?.value === "true");
          }
          if (item?.attributes?.id === "showConsentPageHelpModal") {
            setShowConsentPageHelpModal(item?.value === "true");
          }
          if (item?.attributes?.id === "initialScreen") {
            setInitialScreen(item?.value);
          }
          if (item?.attributes?.id === "accessCode") {
            setAccessCode(item?.value);
          }
          if (item?.attributes?.id === "headerBarColor") {
            setHeaderBarColor(item?.value);
          }
          if (item?.attributes?.id === "greenCardColor") {
            setGreenCardColor(item?.value);
          }
          if (item?.attributes?.id === "pinkCardColor") {
            setPinkCardColor(item?.value);
          }
          if (item?.attributes?.id === "yellowCardColor") {
            setYellowCardColor(item?.value);
          }
          if (item?.attributes?.id === "defaultFontColor") {
            setDefaultFontColor(item?.value);
          }
          if (item?.attributes?.id === "shuffleCards") {
            setShuffleCards(item?.value === "true");
          }
          if (item?.attributes?.id === "defaultFontSizePresort") {
            setDefaultFontSizePresort(parseInt(item?.value));
          }
          if (item?.attributes?.id === "condOfInstFontSize") {
            setCondOfInstFontSize(parseInt(item?.value));
          }
          if (item?.attributes?.id === "sortDirection") {
            setSortDirection(item?.value);
          }
          if (item?.attributes?.id === "allowUnforcedSorts") {
            setAllowUnforcedSorts(item?.value === "true");
          }
          if (item?.attributes?.id === "warnOverloadedColumn") {
            setWarnOverloadedColumn(item?.value === "true");
          }
          if (item?.attributes?.id === "showPostsort") {
            setShowPostsort(item?.value === "true");
          }
          if (item?.attributes?.id === "showSecondPosColumn") {
            setShowSecondPosColumn(item?.value === "true");
          }
          if (item?.attributes?.id === "showSecondNegColumn") {
            setShowSecondNegColumn(item?.value === "true");
          }
          if (item?.attributes?.id === "showBackButton") {
            setShowBackButton(item?.value === "true");
          }
          if (item?.attributes?.id === "postsortCommentsRequired") {
            setPostsortCommentsRequired(item?.value === "true");
          }

          if (item?.attributes?.id === "requireMinCommentLength") {
            setRequireMinCommentLength(item?.value === "true");
          }
          if (item?.attributes?.id === "minWordCountValuePostsort") {
            setMinCommentLength(parseInt(item?.value));
          }

          if (item?.attributes?.id === "defaultFontSizePostsort") {
            setDefaultFontSizePostsort(parseInt(item?.value));
          }
          if (item?.attributes?.id === "minCardHeightPostsort") {
            setMinCardHeightPostsort(parseInt(item?.value));
          }
          if (item?.attributes?.id === "showSurvey") {
            setShowSurvey(item?.value === "true");
          }
          if (item?.attributes?.id === "surveyQuestionsArray") {
            setSurveyQuestionsArray(JSON.parse(item?.value));
          }

          if (xmlObjectArray[index].attributes.id === "survey") {
            let inputObjArray = xmlObjectArray[index].children;
            let questObj: QuestObjType = {};

            questObj.itemNum = index + 1;

            // for all questions
            let mainNameObj = inputObjArray.find((item) => item.name === "input");
            let questType = mainNameObj?.attributes?.type;
            questObj.surveyQuestionType = questType;
            questObj.required = mainNameObj?.attributes?.required;

            // info objects
            let labelObj = inputObjArray.find((item) => item.name === "label");
            let noteObj = inputObjArray.find((item) => item.name === "note");

            // transformations
            if (questType === "likert") {
              questObj.note = decodeHTML(noteObj?.value, true) || "";
              questObj.options = decodeHTML(mainNameObj?.attributes?.scale, true);
            }

            if (questType !== "information") {
              questObj.label = decodeHTML(labelObj?.value, true);
            }

            if (questType === "information") {
              questObj.note = decodeHTML(noteObj?.value, true);
              questObj.bg = decodeHTML(inputObjArray[1]?.attributes?.bg, true);
            }

            if (questType === "text") {
              questObj.limited = mainNameObj?.attributes?.limited;
              let inputLenVal = mainNameObj?.attributes?.limitLength;
              if (inputLenVal === null || inputLenVal === undefined || isNaN(inputLenVal)) {
                questObj.limitLength = mainNameObj?.attributes?.limitLength;
              } else {
                questObj.limitLength = mainNameObj?.attributes?.limitLength;
              }
              questObj.restricted = mainNameObj?.attributes?.restricted;
              questObj.note = decodeHTML(noteObj.value, true);
            }

            if (questType === "textarea") {
              questObj.label = decodeHTML(labelObj?.value, true) || "";
              questObj.note = decodeHTML(noteObj?.value, true) || "";
            }
            if (questType === "radio") {
              questObj[inputObjArray[2].name] = decodeHTML(inputObjArray[2]?.value, true);
              questObj.options = decodeHTML(mainNameObj?.value, true) || "";
            }
            if (questType === "checkbox" || questType === "radio") {
              let otherValue = mainNameObj?.attributes?.other;
              if (otherValue === "true" || otherValue === true) {
                questObj.other = "true";
              } else {
                questObj.other = "false";
              }
            }
            if (
              questType === "select" ||
              questType === "checkbox" ||
              questType === "rating2" ||
              questType === "rating5" ||
              questType === "rating10"
            ) {
              questObj.options = decodeHTML(mainNameObj?.value, true) || "";
              questObj.note = decodeHTML(noteObj?.value, true) || "";
              questObj.label = decodeHTML(labelObj.value, true) || "";
            }
            if (questType === "rating2" || questType === "rating5" || questType === "rating10") {
              questObj.scale = decodeHTML(inputObjArray[0].attributes?.scale, true);
            }
            if (questType === "likert") {
              questObj.surveyQuestionType = "radio";
              questType = "radio";
            }

            surveyQuestArray.push(questObj);
            setSurveyQuestionsArray(surveyQuestArray);
          }
          setIsConfigXmlLoaded(true);
        });
        return;
      };

      reader.onerror = () => {
        console.error("Error reading file");
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className="flex items-center justify-center mt-2">
      <label
        className="flex flex-row gap-3 w-[400px] items-center justify-center cursor-pointer bg-orange-300 hover:opacity-50 border border-gray-600 rounded-md p-2 pt-2 mt-5"
        htmlFor="uploadXml"
      >
        <svg className="max-w-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        {t("uploadXmlConfigFile")}
      </label>
      <input
        className="hidden"
        id="uploadXml"
        type="file"
        name="xmlFile"
        accept=".xml"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default UploadAndParseXML;
