import React, { useEffect, useState } from "react";
import "../Styles/waxingPhases.scss";
import "../Styles/waningPhases.scss";
import "../Styles/baseMoon.scss";

const LunarPhases = () => {
  const [moonDegree, setMoonDegree] = useState(140);

  const [lunarAge, setLunarAge] = useState();

  const [lunarTitle, setLunarTitle] = useState("test");

  const [waneStart, setWaneStart] = useState(false);

  const [animOver, setAnimOver] = useState(false);

  const LUNAR_MONTH = 29.530588853;

  const getJulianDate = (date = new Date()) => {
    const time = date.getTime();
    const tzoffset = date.getTimezoneOffset();

    return time / 86400000 - tzoffset / 1440 + 2440587.5;
  };

  const normalize = (value) => {
    value = value - Math.floor(value);
    if (value < 0) {
      value = value + 1;
    }
    return value;
  };

  const PercentToDegree = (LunarPercent) => {
    const finalMoonDegree = LunarPercent * 360;
    setMoonDegree(finalMoonDegree);
  };

  const getLunarPhase = (age) => {
    if (age < 1.84566) return "New Moon";
    else if (age < 5.53699) return "Waxing Crescent";
    else if (age < 9.22831) return "First Quarter";
    else if (age < 12.91963) return "Waxing Gibbous";
    else if (age < 16.61096) return "Full Moon";
    else if (age < 20.30228) return "Waning Gibbous";
    else if (age < 23.99361) return "Last Quarter";
    else if (age < 27.68493) return "Waning Crescent";
    return "New Moon";
  };

  useEffect(() => {
    const TODAYS_DATE = new Date();

    const getLunarAgePercent = (date = new Date()) => {
      return normalize((getJulianDate(date) - 2451550.1) / LUNAR_MONTH);
    };

    PercentToDegree(getLunarAgePercent(TODAYS_DATE).toFixed(2));

    const shadow = document.getElementById("shadow");

    const selector = document.querySelector(":root");

    if (shadow != null) {
      if (moonDegree >= 180) {
        selector.style.setProperty("--endDegree", moonDegree - 180 + "deg");
        shadow.addEventListener("animationend", () => {
          setAnimOver(true);
        });
      }
      if (moonDegree < 180) {
        setWaneStart(true);
        selector.style.setProperty("--endDegree", moonDegree + "deg");
        shadow.addEventListener("animationend", () => {
          setAnimOver(true);
        });
      }
    }

    const getLunarAge = (date = new Date()) => {
      const percent = getLunarAgePercent(date);
      const age = percent * LUNAR_MONTH;
      setLunarAge(age);
    };

    getLunarAge(TODAYS_DATE);

    // const currentLunarTitle = (lunarAge) => {
    //   let title = "";

    //   // switch (lunarAge) {
    //   //   case lunarAge < 1.84566:
    //   //     return setLunarTitle("New Moon");
    //   //   case lunarAge < 5.53699:
    //   //     return setLunarTitle("Waxing Crescent");
    //   //   case lunarAge < 9.22831:
    //   //     return setLunarTitle("First Quarter");
    //   //   case lunarAge < 12.91963:
    //   //     // setLunarTitle("Waxing Gibbous");
    //   //     title = "Waxing Gibbous";
    //   //     break;
    //   //   case lunarAge < 16.61096:
    //   //     // setLunarTitle("Full Moon");
    //   //     title = "Full Moon";
    //   //     break;
    //   //   case lunarAge < 20.30228:
    //   //     // setLunarTitle("Waning Gibbous");
    //   //     title = "Waning Gibbous";
    //   //     break;
    //   //   case lunarAge < 23.99361:
    //   //     // setLunarTitle("Last Quarter");
    //   //     title = "Last Quarter";
    //   //     break;
    //   //   case lunarAge < 27.68493:
    //   //     // setLunarTitle("Waning Crescent");
    //   //     title = "Waning Crescent";
    //   //     break;
    //   //   default:
    //   //     break;
    //   // }
    //   // setLunarTitle(title);
    // };

    // currentLunarTitle(lunarAge);
  }, [lunarAge, moonDegree]);

  console.log(moonDegree);

  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        {!waneStart ? (
          <div id="moon" className="waxingStart">
            {!animOver ? (
              <div id="shadow" className="waxingShadow"></div>
            ) : (
              <div id="endShadow" className="waxingShadowEnd"></div>
            )}
          </div>
        ) : (
          <div id="moon" className="waningStart">
            {!animOver ? (
              <div id="shadow" className="waningShadow"></div>
            ) : (
              <div id="endShadow" className="waningShadowEnd"></div>
            )}
          </div>
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        We're currently {lunarAge?.toFixed(1)} days into the lunar cycle,
        currently in the
        <span> {getLunarPhase(lunarAge)}</span>. <br /> And here's a fun fact,
        there's no such thing as a 'Half Moon'!
        <br /> What you're seeing is actually the first/third quarter phases.
      </div>
    </div>
  );
};

export default LunarPhases;
