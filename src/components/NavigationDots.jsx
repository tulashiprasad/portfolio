import React from "react";

const NavigationDots = (active) => {
  return (
      <div className="app__navigation">
          
      {["home", "about", "work", "skills", "contact"].map((item,index) => (
          <a
              href={`#${item}`}
              className="app__navigation-dot"
              key = {item + index}
              style = {active === item ? {bakgroundColor: '#313bac'} : {}}
          />

      ))}
    </div>
  );
};

export default NavigationDots;
