import React from "react";
import "../styles/Header.css";

function LeftPane(props) {
  const {
    avatar_url,
    name,
    login,
    bio,
    followers,
    following,
    company,
    location,
    email
  } = props.userData;
  return (
    <>
      <div className="flex-shrink-0 col-12 col-md-3 mb-4 mb-md-0">
        <div className="h-card mt-4 mt-md-n5">
          <div className="clearfix d-flex d-md-block flex-items-center mb-4 mb-md-0">
            <div className="position-relative d-inline-block col-2 col-md-12 mr-3 mr-md-0 flex-shrink-0">
              <a itemProp="image">
                <img
                  style={{ height: "auto" }}
                  alt=""
                  width="260"
                  height="260"
                  className="avatar avatar-user width-full border bg-white"
                  src={avatar_url}
                />
              </a>
            </div>

            <div
              className="vcard-names-container float-left col-10 col-md-12 pt-1 pt-md-3 pb-1 pb-md-3 js-sticky js-user-profile-sticky-fields"
              data-original-top="0px"
              style={{ position: "static" }}
            >
              <h1 className="vcard-names pl-2 pl-md-0">
                <span className="p-name vcard-fullname d-block overflow-hidden">
                  {name || ""}
                </span>
                <span className="p-nickname vcard-username d-block">
                  {login || ""}
                </span>
              </h1>
            </div>
          </div>

          <div className="p-note user-profile-bio mb-3 js-user-profile-bio f4">
            <div>{bio || ""}</div>
          </div>

          <div className="d-flex flex-column">
            <div className="flex-order-1 flex-md-order-none">
              <div className="d-flex">
                <div className="flex-1 mb-0 mb-md-3">
                  <div
                    className="js-user-profile-follow-button pb-1 mb-n1 is-placeholder"
                    style={{
                      visibility: "hidden",
                      display: "none",
                      height: "4px"
                    }}
                  ></div>
                  <div
                    className="js-sticky js-user-profile-follow-button pb-1 mb-n1"
                    data-original-top="417.75px"
                    style={{
                      position: "static",
                      top: "417px !important",
                      left: "24px",
                      width: "129.5px"
                    }}
                  ></div>

                  <span className="user-following-container js-form-toggle-container">
                    <form>
                      <input
                        type="button"
                        name="commit"
                        value="Follow"
                        className="btn btn-block "
                      />
                    </form>
                  </span>
                </div>
              </div>
            </div>

            <div className="js-profile-editable-area d-flex flex-column d-md-block">
              <div className="flex-order-1 flex-md-order-none mt-2 mt-md-0">
                <div className="mb-3">
                  <a
                    className="link-gray no-underline no-wrap"
                    href="/supreetsingh247?tab=followers"
                  >
                    <svg
                      text="gray-light"
                      height="16"
                      className="octicon octicon-people text-gray-light"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                      ></path>
                    </svg>
                    <span className="text-bold text-gray-dark">
                      {followers}
                    </span>
                    followers
                  </a>{" "}
                  ·{" "}
                  <a
                    className="link-gray no-underline no-wrap"
                    href="/supreetsingh247?tab=following"
                  >
                    <span className="text-bold text-gray-dark">
                      {following}
                    </span>
                    following
                  </a>{" "}
                  ·{" "}
                  <a
                    className="link-gray no-underline no-wrap"
                    href="/supreetsingh247?tab=stars"
                  >
                    <svg
                      text="gray-light"
                      height="16"
                      className="octicon octicon-star text-gray-light"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                      ></path>
                    </svg>
                    <span className="text-bold text-gray-dark">7</span>
                  </a>{" "}
                </div>
              </div>

              <ul className="vcard-details" style={{ textAlign: "left" }}>
                {company && (
                  <li
                    className="vcard-detail pt-1 css-truncate css-truncate-target hide-sm hide-md"
                    aria-label="Organization: Target Corporation"
                  >
                    <svg
                      className="octicon octicon-organization"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"
                      ></path>
                    </svg>
                    <span className="p-org">
                      <div>{company}</div>
                    </span>
                  </li>
                )}
                {location && (
                  <li
                    className="vcard-detail pt-1 css-truncate css-truncate-target hide-sm hide-md"
                    itemProp="homeLocation"
                    show_title="false"
                    aria-label="Home location: India"
                  >
                    <svg
                      className="octicon octicon-location"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                    <span className="p-label"> {location}</span>
                  </li>
                )}
                {email && (
                  <li
                    itemProp="email"
                    aria-label="Email: {email}"
                    className="vcard-detail pt-1 css-truncate css-truncate-target "
                  >
                    <svg
                      className="octicon octicon-mail"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"
                      ></path>
                    </svg>
                    <a
                      className="u-email link-gray-dark "
                      href="mailto:{email}"
                    >
                      {email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftPane;
