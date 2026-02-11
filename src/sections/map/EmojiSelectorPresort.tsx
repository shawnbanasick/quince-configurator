import { useStore } from "../../GlobalState/useStore.js";

const getSetPresortEmojiPositiveIndex = (state: State) => state.setPresortEmojiPositiveIndex;
const getSetPresortEmojiNegativeIndex = (state: State) => state.setPresortEmojiNegativeIndex;
const getSetPresortEmojiNeutralIndex = (state: State) => state.setPresortEmojiNeutralIndex;

interface State {
  presortEmojiPositiveIndex: number;
  presortEmojiNegativeIndex: number;
  presortEmojiNeutralIndex: number;
  setPresortEmojiPositiveIndex: (index: number) => void;
  setPresortEmojiNegativeIndex: (index: number) => void;
  setPresortEmojiNeutralIndex: (index: number) => void;
}

const EmojiSelector: React.FC<{
  emojiArray?: any[];
  disabled?: boolean;
  presortEmojiPositiveIndex: number;
  presortEmojiNegativeIndex: number;
  presortEmojiNeutralIndex: number;
}> = ({
  emojiArray = [],
  disabled = false,
  presortEmojiPositiveIndex = 0,
  presortEmojiNegativeIndex = 0,
  presortEmojiNeutralIndex = 0,
}) => {
  const setPresortEmojiPositiveIndex = useStore(getSetPresortEmojiPositiveIndex);
  const setPresortEmojiNegativeIndex = useStore(getSetPresortEmojiNegativeIndex);
  const setPresortEmojiNeutralIndex = useStore(getSetPresortEmojiNeutralIndex);

  return (
    <div className={`mx-auto pt-2 pl-2 ml-8 mb-8 ${disabled ? "opacity-25" : "opacity-100"}`}>
      <h2 className="text-sm font-semibold mb-2 text-gray-800">
        1. Select Positive Pre-Sort Emoji:
      </h2>
      <div
        className={`grid grid-cols-${emojiArray.length} sm:grid-cols-${emojiArray.length} md:grid-cols-12 gap-2`}
      >
        {emojiArray.map((emoji, index) => (
          <button
            key={index}
            onClick={() => setPresortEmojiPositiveIndex(index)}
            disabled={disabled}
            data-selected={presortEmojiPositiveIndex === index}
            className={`flex 
              px-0 py-0 rounded-lg transition-all duration-200 items-center justify-center
              border-2 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400
              ${presortEmojiPositiveIndex === index ? "border-blue-500 bg-blue-50 shadow-lg scale-105" : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"}`}
            aria-label={`Emoji option ${index + 1}`}
          >
            <div className="h-[20px] w-[20px]">{emoji}</div>
          </button>
        ))}
      </div>
      <h2 className="text-sm font-semibold mb-2 text-gray-800 mt-2">
        2. Select Neutral Pre-Sort Emoji:
      </h2>
      <div
        className={`grid grid-cols-${emojiArray.length} sm:grid-cols-${emojiArray.length} md:grid-cols-12 gap-2`}
      >
        {emojiArray.map((emoji, index) => (
          <button
            key={index}
            onClick={() => setPresortEmojiNeutralIndex(index)}
            disabled={disabled}
            className={`flex
              px-0 py-0 rounded-lg transition-all duration-200 h-[25px] items-center justify-center
              border-2 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400
              ${
                presortEmojiNeutralIndex === index
                  ? "border-blue-500 bg-blue-50 shadow-lg scale-105"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
              }
            `}
            aria-label={`Emoji option ${index + 1}`}
          >
            <div className="">{emoji}</div>
          </button>
        ))}
      </div>
      <h2 className="text-sm font-semibold mb-2 text-gray-800 mt-2">
        3. Select Negative Pre-Sort Emoji:
      </h2>
      <div
        className={`grid grid-cols-${emojiArray.length} sm:grid-cols-${emojiArray.length} md:grid-cols-12 gap-2`}
      >
        {emojiArray.map((emoji, index) => (
          <button
            key={index}
            onClick={() => setPresortEmojiNegativeIndex(index)}
            disabled={disabled}
            className={`flex
              px-0 py-0 rounded-lg transition-all duration-200 h-[25px] items-center justify-center
              border-2 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400
              ${
                presortEmojiNegativeIndex === index
                  ? "border-blue-500 bg-blue-50 shadow-lg scale-105"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
              }
            `}
            aria-label={`Emoji option ${index + 1}`}
          >
            <div className="">{emoji}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiSelector;

// Usage example:
// import { EmojiN5, EmojiN3, EmojiN2, EmojiN1, Emoji0, Emoji1, Emoji2, Emoji3, Emoji5 } from './your-emoji-components';
//
// const emoji4Array = [
//   <EmojiN5 size={50} />,
//   <EmojiN3 size={50} />,
//   <EmojiN2 size={50} />,
//   <EmojiN1 size={50} />,
//   <Emoji0 size={50} />,
//   <Emoji1 size={50} />,
//   <Emoji2 size={50} />,
//   <Emoji3 size={50} />,
//   <Emoji5 size={50} />,
// ];
//
// <EmojiSelector emojiArray={emoji4Array} />
