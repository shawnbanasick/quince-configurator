import TextImage from "../../assets/images/testImage.png";
import TextAreaImage from "../../assets/images/textAreaImage.png";
import RadioImage from "../../assets/images/radioImage.png";
import Scale2Image from "../../assets/images/rating2Image.png";
import Scale5Image from "../../assets/images/rating5Image.png";
import Scale10Image from "../../assets/images/rating10Image.png";
import CheckboxImage from "../../assets/images/checkboxImage.png";
import SelectImage from "../../assets/images/selectImage.png";
import LikertImage from "../../assets/images/likertImage.png";
import { useStore } from "../../globalState/useStore";

const getShowSurveytextImage = (state) => state.showSurveytextImage;
const getShowSurveytextareaImage = (state) => state.showSurveytextareaImage;
const getShowSurveyradioImage = (state) => state.showSurveyradioImage;
const getShowSurveyselectImage = (state) => state.showSurveyselectImage;
const getShowSurveycheckboxImage = (state) => state.showSurveycheckboxImage;
const getShowSurveylikertImage = (state) => state.showSurveylikertImage;
const getShowSurveyrating2Image = (state) => state.showSurveyrating2Image;
const getShowSurveyrating5Image = (state) => state.showSurveyrating5Image;
const getShowSurveyrating10Image = (state) => state.showSurveyrating10Image;
const getShowSurveyinformationImage = (state) =>
  state.showSurveyinformationImage;

const SurveyImageContainer = () => {
  const showSurveyinformationImage = useStore(getShowSurveyinformationImage);
  const showSurveytextImage = useStore(getShowSurveytextImage);
  const showSurveytextareaImage = useStore(getShowSurveytextareaImage);
  const showSurveyradioImage = useStore(getShowSurveyradioImage);
  const showSurveyselectImage = useStore(getShowSurveyselectImage);
  const showSurveycheckboxImage = useStore(getShowSurveycheckboxImage);
  const showSurveylikertImage = useStore(getShowSurveylikertImage);
  const showSurveyrating2Image = useStore(getShowSurveyrating2Image);
  const showSurveyrating5Image = useStore(getShowSurveyrating5Image);
  const showSurveyrating10Image = useStore(getShowSurveyrating10Image);

  return (
    <div className="min-h-[300px] bg-slate-100 rounded-md p-4 flex flex-col justify-center">
      {showSurveytextImage && (
        // <FadeIn delay={150} duration={450}>
        <img
          src="data:image/png;base64,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"
          className=" w-12/12 justify-self-center"
          alt="Survey Text"
        />
        // </FadeIn>
      )}
      {showSurveytextareaImage && (
        // <FadeIn delay={150} duration={450}>
        <img
          src={TextAreaImage}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="Survey Text Area"
        />
        // </FadeIn>
      )}
      {showSurveyradioImage && (
        // <FadeIn delay={150} duration={450}>
        <img
          src={RadioImage}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="Survey Radio"
        />
        // </FadeIn>
      )}
      {showSurveyselectImage && (
        // <FadeIn delay={150} duration={450}>
        <img
          src={SelectImage}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="Survey Select"
        />
        // </FadeIn>
      )}
      {showSurveycheckboxImage && (
        // <FadeIn delay={150} duration={450}>
        <img
          src={CheckboxImage}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="Survey Checkbox"
        />
        // </FadeIn>
      )}
      {showSurveyrating2Image && (
        // <FadeIn delay={150} duration={450}>
        <img
          src={Scale2Image}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="Survey Scale 2"
        />
        // </FadeIn>
      )}
      {showSurveyrating5Image && (
        // <FadeIn delay={150} duration={450}>
        <img
          src={Scale5Image}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="Survey Scale 5"
        />
        // </FadeIn>
      )}
      {showSurveyrating10Image && (
        // <FadeIn delay={150} duration={450}>
        <img
          src={Scale10Image}
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="Survey Text Area"
        />
        // </FadeIn>
      )}
      {showSurveyinformationImage && (
        // <FadeIn delay={150} duration={450}>
        <img
          className=" w-12/12 justify-self-center border-2 border-gray-300 rounded-md"
          alt="information statement"
          src="data:image/png;base64,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"
        />
        // </FadeIn>
      )}
      {showSurveylikertImage && (
        // <FadeIn delay={150} duration={450}>
        <img
          src={LikertImage}
          className=" w-12/12 justify-self-center border border-2 border-gray-300 rounded-md"
          alt="Survey Likert"
        />
        // </FadeIn>
      )}
    </div>
  );
};

export { SurveyImageContainer };
