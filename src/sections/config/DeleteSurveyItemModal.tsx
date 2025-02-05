import "react-responsive-modal/styles.css";
import { useStore } from "../../globalState/useStore";
import ReactHtmlParser from "html-react-parser";
import { Modal } from "react-responsive-modal";
import { decodeHTML } from "../utils/decodeHTML.ts";
import { useTranslation } from "react-i18next";

const getTriggerModal = (state) => state.triggerSurveyQuestionDeleteModal;
const getSetTriggerModal = (state) => state.setTriggerSurveyQuestionDeleteModal;

const DeleteSurveyItemModal = (props) => {
  const triggerModal = useStore(getTriggerModal);
  const setTriggerModal = useStore(getSetTriggerModal);
  const { t } = useTranslation();

  const ModalHead = ReactHtmlParser(decodeHTML(t("deleteItem"))) || "";
  const ModalText = ReactHtmlParser(decodeHTML(t("areYouSure"))) || "";
  const okButtonText = ReactHtmlParser(decodeHTML(t("delete"))) || "";
  const cancelButtonText = ReactHtmlParser(decodeHTML(t("cancel"))) || "";

  const onCloseModal = () => {
    setTriggerModal(false);
  };

  return (
    <Modal
      data-id="sortHelpModal"
      open={triggerModal}
      onClose={onCloseModal}
      closeOnOverlayClick={false}
      center
    >
      <div className="font-semibold mb-2">{ModalHead}</div>
      <hr />
      <div className="mt-2">{ModalText}</div>
      <div className="flex flex-row justify-between">
        <div
          className="flex content-center select-none justify-center bg-white outline outline-1 outline-zinc-600 p-2 pl-5 pr-5 rounded-md mt-5 w-auto mr-[50px]"
          color={"#FBD5D5"}
          onClick={onCloseModal}
        >
          {cancelButtonText}
        </div>
        <div
          className="flex content-center select-none justify-center bg-red-200 outline outline-1 outline-zinc-600 p-2 pl-5 pr-5 rounded-md mt-5 w-auto"
          onClick={() => {
            props.handleConfirmDelete();
          }}
        >
          {okButtonText}
        </div>
      </div>
    </Modal>
  );
};

export { DeleteSurveyItemModal };
