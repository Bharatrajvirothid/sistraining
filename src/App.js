import React, { useState, useEffect } from "react";
import Body from "./components/Body";
import WhatsAppAndScrollToTop from "./components/WhatsApp/WhatsApp";
import { useLottie } from "lottie-react";
import loadingAnimation from "./Assets/Images/Animation - 1738955674736.json"; // Replace with your JSON file

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Show animation for 4 seconds
  }, []);

  const options = {
    animationData: loadingAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#fff",
          }}
        >
          <div style={{ width: "400px", height: "400px" }}>{View}</div>
        </div>
      ) : (
        <>
          <Body />
          <WhatsAppAndScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
