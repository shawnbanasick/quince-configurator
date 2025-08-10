import React, { useState } from "react";
import XMLParser from "react-xml-parser";
import { useStore } from "../../globalState/useStore";
import { useTranslation } from "react-i18next";

interface QuestObjType {
  surveyQuestionType?: string;
  required?: string;
  label?: string;
  note?: string;
  bg?: string;
  limited?: string;
  maxlength?: string;
  restricted?: string;
  placeholder?: string;
  options?: string;
  scale?: string;
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
  const { t } = useTranslation();

  const [xmlContent, setXmlContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [surveyQuestArray, setSurveyQuestArray] = useState<QuestObjType[]>([]);

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
            let inputObj = xmlObjectArray[index].children;
            let questObj: QuestObjType = {};
            let questType = inputObj[0].attributes?.type;
            questObj.surveyQuestionType = questType;
            questObj.required = inputObj[0].attributes?.required;
            if (questType !== "information") {
              questObj.label = inputObj[1]?.value;
            }
            if (questType === "information") {
              questObj.note = inputObj[1]?.value;
              questObj.bg = inputObj[1]?.attributes?.bg;
            }
            if (questType === "text") {
              questObj.limited = inputObj[0].attributes?.limited;
              let inputLenVal = inputObj[0].attributes?.maxlength;
              if (inputLenVal === null || inputLenVal === undefined || isNaN(inputLenVal)) {
                questObj.maxlength = inputObj[0].attributes?.limitLength;
              } else {
                questObj.maxlength = inputObj[0].attributes?.maxlength;
              }
              questObj.restricted = inputObj[0].attributes?.restricted;
              questObj.note = inputObj[2]?.value;
              questObj.placeholder = inputObj[3]?.value;
            }
            if (questType === "textarea") {
              questObj.note = inputObj[2]?.value;
              questObj.placeholder = inputObj[3]?.value;
            }
            if (questType === "radio") {
              questObj[inputObj[2].name] = inputObj[2]?.value;
              questObj.options = inputObj[0]?.value;
            }
            if (questType === "likert") {
              questObj.required = inputObj[0].attributes?.required;
              questObj.scale = inputObj[0].attributes?.scale;
              questObj.label = inputObj[1]?.value;
            }
            if (
              questType === "select" ||
              questType === "checkbox" ||
              questType === "rating2" ||
              questType === "rating5" ||
              questType === "rating10"
            ) {
              questObj.options = inputObj[0]?.value;
              questObj.note = inputObj[2]?.value;
            }
            if (questType === "rating2" || questType === "rating5" || questType === "rating10") {
              questObj.scale = inputObj[0].attributes?.scale;
            }
            surveyQuestArray.push(questObj);
            setSurveyQuestionsArray(surveyQuestArray);
          }
        });
        return;
      };

      reader.onerror = () => {
        console.error("Error reading file");
        setError("Error reading file");
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className="flex items-center justify-center mt-2">
      <label
        className="flex flex-row gap-3 min-w-[250px] cursor-pointer bg-orange-300 hover:opacity-50 border-2 border-gray-600 rounded-md p-2"
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
