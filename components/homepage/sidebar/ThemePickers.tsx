import * as React from "react";
import { bps } from "../../../utils/bps";
import { InputLabel } from "../../ui/InputLabel";
import { ColourPicker } from "../../ui/ColourPicker";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";

export const ThemePickers = () => {
  const { cbp, color, setColor, colorOptions, isDark, setTheme } =
    useContext(GlobalContext);

  return (
    <div>
      <div
        className={`aic mr-10 ${cbp < bps.sm ? "flex mb-8" : "inline-flex"}`}
      >
        <InputLabel className={"mb-0 mr-5"} text={"Colour"} />
        <ColourPicker
          active={color}
          onChange={(e) => setColor(e)}
          options={colorOptions}
        />
      </div>

      <div className="inline-flex aic">
        <InputLabel className={"mb-0 mr-5"} text={"Light / Dark"} />
        <ColourPicker
          active={isDark ? 1 : 0}
          onChange={(e) => setTheme(!!e, false)}
          options={["230,230,230", "40,40,40"]}
        />
      </div>
    </div>
  );
};
