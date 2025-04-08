import { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//pl26319174.profitableratecpm.com/d5ba697c09e6886e1f7e98f4c8cab99a/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    document
      .getElementById("container-d5ba697c09e6886e1f7e98f4c8cab99a")
      ?.appendChild(script);
  }, []);

  return (
    <div
      id="container-d5ba697c09e6886e1f7e98f4c8cab99a"
      style={{ textAlign: "center", margin: "1rem 0" }}
    ></div>
  );
};

export default AdComponent;
