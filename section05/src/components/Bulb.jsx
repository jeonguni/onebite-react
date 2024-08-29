import { useState } from "react";

const Bulb = () => {
  const [lighting, setLighting] = useState("off");

  return (
    <div>
      <div
        style={{
          overflow: "hidden",
          borderRadius: "50%",
          width: "70px",
          height: "70px",
        }}
      >
        {lighting === "off" ? (
          <span
            style={{
              lineHeight: "70px",
              textAlign: "center",
              display: "block",
              width: "100%",
              height: "100%",
              backgroundColor: "#ddd",
            }}
          >
            OFF
          </span>
        ) : (
          <span
            style={{
              lineHeight: "70px",
              textAlign: "center",
              display: "block",
              width: "100%",
              height: "100%",
              backgroundColor: "orange",
            }}
          >
            ON
          </span>
        )}
      </div>
      <button
        onClick={() => {
          setLighting(lighting === "off" ? "on" : "off");
        }}
      >
        {lighting === "off" ? "전원 켜기" : "전원 끄기"}
      </button>
    </div>
  );
};

export default Bulb;
