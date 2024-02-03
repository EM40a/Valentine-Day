import { useEffect } from "preact/hooks";

const OkYay = () => {
  useEffect(() => {
    document.title = "Ok yay!!!";
    Confetti();
  }, []);

  const Confetti = () => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };

    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
    });

    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3,
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 4,
    });
  };

  return (
    <button onClick={Confetti}>
      <img
        alt="Bear kiss bear kisses"
        src="/bear-kiss-bear-kisses.gif"
        class="mix-blend-multiply"
      />
      <h2 class="text-4xl font-bold my-4">Ok yay!!!</h2>
    </button>
  );
};

export default OkYay;
