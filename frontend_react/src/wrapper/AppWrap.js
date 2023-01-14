import React from "react";
import { SocialMedia, NavigationDots } from "../components";

const AppWrap = (Component,idName) => function HOC(){
  return (
    <div id={idName}>
      <SocialMedia />
      <div>
        <Component />
        <div className="app__wrapper app__flex">
          <p className="p-text">@2020 MICHAEL</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
