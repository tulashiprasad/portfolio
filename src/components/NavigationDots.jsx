import React from "react";
import { navigationItems } from "../constants";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navigationItems.map((item, index) => {
        // eslint-disable-next-line no-mixed-operators
        const isActive = active === item || item.includes("skills") && active === "skills";
        return (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            href={`#${item === "skills and experience" ? "skills" : item}`}
            className="app__navigation-dot"
            key={item + index}
            style={isActive ? { backgroundColor: "var(--accent-primary)", boxShadow: "var(--shadow-glow)", transform: "scale(1.3)", borderColor: "var(--accent-glow)" } : {}}
          />
        );
      })}
    </div>

  );
};

export default NavigationDots;
