import React, { useState } from "react";

// TODO replace with built-in from React-bootstrap
const Tabs = ({ titles, children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (titles.length !== children.length) {
    console.error("Number of tabs is inconsistent:", titles.length, children.length);
  }

  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        {titles.map((tabTitle, tabIndex) => (
          <li key={tabTitle}
            className={activeTabIndex === tabIndex ? "active" : ""}
            onClick={_ => setActiveTabIndex(tabIndex)}>
            <a href="#" role="tab">{tabTitle}</a>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {children.map((tabContents, tabIndex) => (
          <div key={titles[tabIndex]}
            role="tabpanel"
            className={activeTabIndex === tabIndex ? "active tab-pane" : "tab-pane"}>
            {tabContents}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
