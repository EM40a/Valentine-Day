import { useState } from "preact/hooks";
import OkYay from "./OkYay";

export const App = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <main className="w-11/12 max-w-7xl mx-auto flex flex-col items-center justify-center h-svh -mt-16">
      {yesPressed ? (
        <OkYay />
      ) : (
        <>
          <img
            alt="Cute love bear roses"
            className="h-52 brightness-110 mix-blend-multiply"
            src="/cute-love-bear-roses.gif"
          />
          <h1 className="text-4xl font-bold text-center my-4">
            Will you be my Valentine?
          </h1>
          <div>
            <button
              type="button"
              className={`run bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded mr-2 mb-2`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded ml-2 mt-2"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </main>
  );
};
