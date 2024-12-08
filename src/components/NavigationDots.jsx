import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "education", "projects", "skills and experience", "contact"].map((item, index) => {
        const isActive = active === item || item.includes("skills") && active === "skills";
        return (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            href={`#${item === "skills and experience" ? "skills" : item}`}
            className="app__navigation-dot"
            key={item + index}
            style={isActive ? { backgroundColor: "#3af200" } : {}}
          />
        );
      })}
    </div>

  );
};

export default NavigationDots;
