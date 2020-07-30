import React from "react";
import LayoutNavigation from "./LayoutNavigation";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import "../styles/Header.css";

function ContentLayout(props) {
  return (
    <>
      <div className="application-main ">
        <div id="js-pjax-container">
          <LayoutNavigation
            repoCount={(props.repoDetails && props.repoDetails.length) || 0}
          />
          <div className="container-xl px-3 px-md-4 px-lg-5">
            <div className="gutter-condensed gutter-lg flex-column flex-md-row d-flex">
              <LeftPane userData={props.userData} />
              <RightPane
                repoDetails={props.repoDetails}
                searchRepo={props.searchRepo}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentLayout;
