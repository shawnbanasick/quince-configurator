import React from "react";
import { useStore } from "../../GlobalState/useStore";
import { UserTextInput } from "../utils/UserTextInput";
import { UserTextAreaInput } from "../utils/UserTextAreaInput";
import showSectionDefaults from "./showSectionDefaults";
import clearSection from "./clearSection";

const getDisplayMode = (state) => state.displayMode;
const getSetText = (state) => state.setText;

const SubmitTextInput: React.FC = () => {
  let displayMode = useStore(getDisplayMode);
  const setText = useStore(getSetText);

  const btnTransfer = useStore((state) => state.btnTransfer);
  const setBtnTransfer = useStore((state) => state.setBtnTransfer);

  const transferHead = useStore((state) => state.transferHead);
  const setTransferHead = useStore((state) => state.setTransferHead);

  const transferTextAbove = useStore((state) => state.transferTextAbove);
  const setTransferTextAbove = useStore((state) => state.setTransferTextAbove);

  const transferTextBelow = useStore((state) => state.transferTextBelow);
  const setTransferTextBelow = useStore((state) => state.setTransferTextBelow);

  const transferOkModalHeader = useStore((state) => state.transferOkModalHeader);
  const setTransferOkModalHeader = useStore((state) => state.setTransferOkModalHeader);

  const transferOkModalText = useStore((state) => state.transferOkModalText);
  const setTransferOkModalText = useStore((state) => state.setTransferOkModalText);

  const transferFailModalHeader = useStore((state) => state.transferFailModalHeader);
  const setTransferFailModalHeader = useStore((state) => state.setTransferFailModalHeader);

  const transferFailModalText = useStore((state) => state.transferFailModalText);
  const setTransferFailModalText = useStore((state) => state.setTransferFailModalText);

  const fallbackMessage = useStore((state) => state.fallbackMessage);
  const setFallbackMessage = useStore((state) => state.setFallbackMessage);

  const btnDownload = useStore((state) => state.btnDownload);
  const setBtnDownload = useStore((state) => state.setBtnDownload);

  const goodbyeMessage = useStore((state) => state.goodbyeMessage);
  const setGoodbyeMessage = useStore((state) => state.setGoodbyeMessage);

  const handleRefImage = (e) => {
    // showRefImage(e.target.id);
  };
  const handleShowDefaults = (e) => {
    showSectionDefaults(e.target.id);
  };

  const handleTextChange = (e) => {
    console.log("handleTextChange", e.target.value);
    setText(e.target.name, e.target.value);
  };

  const handleClearAll = (e) => {
    clearSection(e.target.id);
  };

  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }
  return (
    <div className="outline outline-2 outline-slate-500 p-2 w-[78vw] max-w-[78vw] rounded-sm bg-gray-100">
      <div className="flex flex-row justify-between mb-4">
        <h2>16 . Submit Results Screen</h2>
        <div className="flex flex-row gap-4">
          {/* <DefaultsButton id="footerDef" onClick={handleShowDefaults}> */}
          <button
            id="submitDef"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleShowDefaults}
          >
            Use Defaults
          </button>
          {/* <ClearAllButton id="footerClear" onClick={handleClearAll}> */}
          <button
            id="submitClear"
            className="bg-slate-300 p-2 rounded-md w-[130px] hover:bg-slate-400 hover:font-semibold"
            onClick={handleClearAll}
          >
            Clear Section
          </button>
          {/* <RefImageButton */}
          <button
            className="bg-slate-300 p-2 rounded-md w-[160px] hover:bg-slate-400 hover:font-semibold"
            id="submitImage"
            // marginRight="35px"
            onClick={handleRefImage}
          >
            Reference Image
          </button>
        </div>
      </div>
      <div className="pl-10">
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="16-1. Transfer Button Text"
          name="btnTransfer"
          value={btnTransfer}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="16-2. Transfer Screen Title"
          name="transferHead"
          value={transferHead}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="16-3. Transfer Text Above Submit Button"
          name="transferTextAbove"
          height={150}
          value={transferTextAbove}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="16-4. Transfer Text Below Submit Button"
          name="transferTextBelow"
          height={150}
          value={transferTextBelow}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="16-5. Submit Data Success Modal Title"
          name="transferOkModalHeader"
          value={transferOkModalHeader}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="16-6. Submit Data Success Modal Text"
          name="transferOkModalText"
          height={150}
          value={transferOkModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="16-7. Data Submit Fail Modal Title"
          name="transferFailModalHeader"
          value={transferFailModalHeader}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="16-8. Data Submit Fail Modal Text"
          name="transferFailModalText"
          height={150}
          value={transferFailModalText}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="16-9. Fallback Message"
          name="fallbackMessage"
          height={150}
          value={fallbackMessage}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
        <UserTextInput
          classNameText="flex-1 mt-1 block min-w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="16-10. Fallback Data Download Button Text"
          name="btnDownload"
          value={btnDownload}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
        />
        <UserTextAreaInput
          classNameText="flex-1 mt-1 block min-w-[400px] h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500 focus:outline-2 select-none sm:text-sm disabled:opacity-50 font-normal text-left align-top"
          classNameLabel="w-auto content-center pt-1 mr-1 disabled:opacity-50 select-none"
          label="16-11. Goodbye Message"
          name="goodbyeMessage"
          height={150}
          value={goodbyeMessage}
          onChange={handleTextChange}
          highlight={false}
          placeholder=""
          disabled={false}
          tabIndex="0"
        />
      </div>
    </div>
  );
};

export { SubmitTextInput };
