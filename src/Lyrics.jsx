import React, { useState } from "react";

const Lyrics = ({ setlyrics }) => {
  let [value, setvalue] = useState();
  const scriptHandler = (e) => {
    e.preventDefault();
    setlyrics(value);
    if(!value){
        console.log("Enter Script.");
    }
  };
  return (
   <div
  style={{
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <form
    onSubmit={scriptHandler}
    style={{
      background: "#ffffff10",
      padding: "30px",
      marginTop: "100px",
      borderRadius: "16px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
      backdropFilter: "blur(10px)",
      textAlign: "center",
      width: "100%",
      maxWidth: "500px",
      backgroundColor: "#000000d9"
    }}
  >
    <textarea
      style={{
        padding: "12px",
        fontSize: "18px",
        width: "90%",
        borderRadius: "12px",
        border: "1px solid #444",
        outline: "none",
        background: "#1a1a1a",
        color: "#fff",
        resize: "vertical",
        marginBottom: "15px",
      }}
      placeholder="Enter the script"
      value={value}
      rows={10}
      cols={35}
      onChange={(e) => setvalue(e.target.value)}
    />

    <br />
    <button
      style={{
        background: "#1a1a1a",
        border: "none",
        padding: "12px 28px",
        borderRadius: "10px",
        fontSize: "18px",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "600",
        transition: "0.3s",
      }}
      onMouseOver={(e) => (e.target.style.background = "#1a1a1a8b")}
      onMouseOut={(e) => (e.target.style.background = "#1a1a1a")}
      onmouse
    >
      Submit
    </button>
  </form>
</div>

  );
};

export default Lyrics;
