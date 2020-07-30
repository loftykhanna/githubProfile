import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import _ from "lodash";

function RightPane(props) {
  const [searchInput, setSearchInput] = useState("");
  const { repoDetails = [] } = props;

  const debouncedSearch = _.debounce(q => props.searchRepo(q), 1000);

  const repoList = () => {
    return repoDetails.map(repo => {
      return (
        <li
          className="col-12 d-flex width-full py-4 border-bottom public source"
          itemProp="owns"
          itemCcope=""
          itemType="http://schema.org/Code"
          key={repo.name}
        >
          <div
            className="col-10 col-lg-9 d-inline-block"
            style={{ textAlign: "left" }}
          >
            <div className="d-inline-block mb-1">
              <h3 className="wb-break-all">
                <a itemProp="name codeRepository">{repo.name}</a>
              </h3>
            </div>

            <div></div>

            <div className="f6 text-gray mt-2">
              {repo.language && (
                <span className="ml-0 mr-3">
                  <span
                    className="repo-language-color"
                    style={{ backgroundColor: "#e34c26" }}
                  ></span>
                  <span itemProp="programmingLanguage"> {repo.language}</span>
                </span>
              )}
              {repo.forks_count != 0 && (
                <a className="muted-link mr-3">
                  <svg
                    aria-label="fork"
                    className="octicon octicon-repo-forked"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    role="img"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    ></path>
                  </svg>
                  {repo.forks_count}
                </a>
              )}
              {repo.license && repo.license.name && (
                <span className="mr-3">
                  <svg
                    className="octicon octicon-law mr-1"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
                    ></path>
                  </svg>
                  {repo.license.name}
                </span>
              )}
              {repo.stargazers_count != 0 && (
                <a className="muted-link mr-3">
                  <svg
                    aria-label="star"
                    className="octicon octicon-star"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    role="img"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                    ></path>
                  </svg>
                  {repo.stargazers_count}
                </a>
              )}
              Updated{" "}
              <relative-time
                datetime="2018-09-09T11:01:55Z"
                className="no-wrap"
                title="9 Sep 2018, 16:31 GMT+5:30"
              >
                {" "}
                on {new Date(repo.updated_at).toLocaleString()}{" "}
              </relative-time>
            </div>
          </div>

          <div className="col-2 col-lg-3 d-flex flex-column flex-justify-around">
            <div className="text-right">
              <div className="d-inline-block js-social-container js-form-toggle-container">
                <form
                  className="js-social-form js-form-toggle-target"
                  action="/supreetsingh247/walnut/star"
                  acceptCharset="UTF-8"
                  method="post"
                >
                  <button
                    className="btn btn-sm "
                    type="submit"
                    value="Star"
                    aria-label="Star this repository"
                    title="Star supreetsingh247/walnut"
                    data-ga-click="Repository, click star button, action:profiles#show; text:Star"
                  >
                    <svg
                      className="octicon octicon-star mr-1"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                      ></path>
                    </svg>
                    Star
                  </button>
                </form>{" "}
              </div>
            </div>
          </div>
        </li>
      );
    });
  };

  const searchRepo = e => {
    setSearchInput(e.target.value);
    debouncedSearch(e.target.value);
  };
  return (
    <>
      <div className="flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0">
        <div>
          <div className="position-relative">
            <div className="border-bottom border-gray-dark py-3">
              <form className="d-block d-md-flex">
                <div className="mb-3 mb-md-0 mr-md-3 flex-auto">
                  <input
                    type="search"
                    id="your-repos-filter"
                    name="q"
                    className="form-control width-full"
                    placeholder="Find a repository…"
                    onChange={searchRepo}
                    value={searchInput}
                  />
                </div>

                <div className="d-flex">
                  <details
                    className="details-reset details-overlay position-relative mr-2"
                    id="type-options"
                  >
                    <summary className="btn" aria-haspopup="menu" role="button">
                      <i>Type:</i>
                      <span data-menu-button="">All</span>
                      <span className="dropdown-caret"></span>
                    </summary>

                    <details-menu className="SelectMenu right-md-0" role="menu">
                      <div className="SelectMenu-modal">
                        <header className="SelectMenu-header">
                          <span className="SelectMenu-title">Select type</span>
                          <button
                            className="SelectMenu-closeButton"
                            type="button"
                            data-toggle-for="type-options"
                          >
                            <svg
                              aria-label="Close menu"
                              className="octicon octicon-x"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              role="img"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                              ></path>
                            </svg>
                          </button>
                        </header>
                        <div className="SelectMenu-list">
                          <label
                            className="SelectMenu-item"
                            role="menuitemradio"
                            aria-checked="true"
                            tabIndex="0"
                          >
                            <input
                              type="radio"
                              name="type"
                              id="type_"
                              value=""
                              hidden="hidden"
                              data-autosubmit="true"
                              checked="checked"
                            />
                            <svg
                              className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                              ></path>
                            </svg>
                            <span
                              className="text-normal"
                              data-menu-button-text=""
                            >
                              All
                            </span>
                          </label>
                          <label
                            className="SelectMenu-item"
                            role="menuitemradio"
                            aria-checked="false"
                            tabIndex="0"
                          >
                            <input
                              type="radio"
                              name="type"
                              id="type_source"
                              value="source"
                              hidden="hidden"
                              data-autosubmit="true"
                            />
                            <svg
                              className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                              ></path>
                            </svg>
                            <span
                              className="text-normal"
                              data-menu-button-text=""
                            >
                              Sources
                            </span>
                          </label>
                          <label
                            className="SelectMenu-item"
                            role="menuitemradio"
                            aria-checked="false"
                            tabIndex="0"
                          >
                            <input
                              type="radio"
                              name="type"
                              id="type_fork"
                              value="fork"
                              hidden="hidden"
                              data-autosubmit="true"
                            />
                            <svg
                              className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                              ></path>
                            </svg>
                            <span
                              className="text-normal"
                              data-menu-button-text=""
                            >
                              Forks
                            </span>
                          </label>
                          <label
                            className="SelectMenu-item"
                            role="menuitemradio"
                            aria-checked="false"
                            tabIndex="0"
                          >
                            <input
                              type="radio"
                              name="type"
                              id="type_archived"
                              value="archived"
                              hidden="hidden"
                              data-autosubmit="true"
                            />
                            <svg
                              className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                              ></path>
                            </svg>
                            <span
                              className="text-normal"
                              data-menu-button-text=""
                            >
                              Archived
                            </span>
                          </label>
                          <label
                            className="SelectMenu-item"
                            role="menuitemradio"
                            aria-checked="false"
                            tabIndex="0"
                          >
                            <input
                              type="radio"
                              name="type"
                              id="type_mirror"
                              value="mirror"
                              hidden="hidden"
                              data-autosubmit="true"
                            />
                            <svg
                              className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                              ></path>
                            </svg>
                            <span
                              className="text-normal"
                              data-menu-button-text=""
                            >
                              Mirrors
                            </span>
                          </label>
                        </div>
                      </div>
                    </details-menu>
                  </details>

                  <details
                    className="details-reset details-overlay position-relative flex-auto"
                    id="language-options"
                  >
                    <summary className="btn" aria-haspopup="menu" role="button">
                      <i>Language:</i>
                      <span data-menu-button="">All</span>
                      <span className="dropdown-caret"></span>
                    </summary>

                    <details-menu className="SelectMenu right-md-0" role="menu">
                      <div className="SelectMenu-modal">
                        <header className="SelectMenu-header">
                          <span className="SelectMenu-title">
                            Select language
                          </span>
                          <button
                            className="SelectMenu-closeButton"
                            type="button"
                            data-toggle-for="language-options"
                          >
                            <svg
                              aria-label="Close menu"
                              className="octicon octicon-x"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              role="img"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                              ></path>
                            </svg>
                          </button>
                        </header>
                        <div className="SelectMenu-list">
                          <label
                            className="SelectMenu-item"
                            role="menuitemradio"
                            aria-checked="true"
                            tabIndex="0"
                          >
                            <input
                              type="radio"
                              name="language"
                              id="language_"
                              value=""
                              hidden="hidden"
                              data-autosubmit="true"
                              checked="checked"
                            />
                            <svg
                              className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                              ></path>
                            </svg>
                            <span
                              className="text-normal"
                              data-menu-button-text=""
                            >
                              All
                            </span>
                          </label>
                        </div>
                      </div>
                    </details-menu>
                  </details>
                </div>
              </form>
            </div>

            <div id="user-repositories-list">
             { repoDetails.length ? <ul
                data-filterable-for="your-repos-filter"
                data-filterable-type="substring"
              >
                {repoList()}
              </ul> : <h2> No repo to show</h2>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightPane;
