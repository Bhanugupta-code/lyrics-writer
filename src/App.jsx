import React, { useEffect, useState } from "react";
import Lyrics from "./Lyrics";

const App = () => {
  let [lyrics, setlyrics] = useState("");
  let [data, setdata] = useState("");

  var i = 0;
  var p = "";
  const dataset = () => {
    let delay = 150;
    if(!lyrics) { console.log("give lyrics.")
      return;
     }
    if (lyrics[i] == "\n") {
      delay = 500;
      setdata((p = p + lyrics[i]));
      i++;
    } else if (i < lyrics.length) {
      setdata((p = p + lyrics[i]));
      i++;
    }
    setTimeout(dataset, delay);
  };

  useEffect(() => {
    dataset();
  }, [lyrics]);
  return (
 <div>
  {!lyrics ? (
    <Lyrics setlyrics={setlyrics} />
  ) : (
    <div
      style={{
        whiteSpace: "pre-line",
        fontSize: "21px",
        color: "#fff",
        fontWeight: "500",
        margin: "50px auto",
        // textAlign: "center",
        lineHeight: "1.7",
        animation: "fadeIn 0.6s ease-in-out",
        padding: "50px 35%",
        borderRadius: "10px",
        background: "rgba(0,0,0,0.25)",
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
      }}
    >
      {data}
    </div>
  )}
</div>
  );
};

export default App;
