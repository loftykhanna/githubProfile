import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header
        className="Header py-md-0 js-details-container Details flex-wrap flex-md-nowrap px-3"
        role="banner"
      >
        <div className="Header-item d-none d-md-flex">
          <a
            className="Header-link"
            href="https://github.com/"
            data-hotkey="g d"
            aria-label="Homepage "
            data-ga-click="Header, go to dashboard, icon:logo"
          >
            <svg
              className="octicon octicon-mark-github v-align-middle"
              height="32"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </div>
        
        <div className="Header-item d-md-none">
    <button className="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
      <svg height="24" className="octicon octicon-three-bars" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
    </button>
  </div>

  <div className="Header-item Header-item--full flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mr-md-3 mt-3 mt-md-0 Details-content--hidden-not-important d-md-flex">
        <div className="header-search header-search-current js-header-search-current flex-auto  flex-self-stretch flex-md-self-auto mr-0 mr-md-3 mb-3 mb-md-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to js-header-search-current-jump-to" role="combobox" aria-owns="jump-to-results" aria-label="Search or jump to" aria-haspopup="listbox" aria-expanded="false">
  <div className="position-relative">
  <form className="js-site-search-form" role="search" aria-label="Site" data-scope-type="User" data-scope-id="7427552" data-scoped-search-url="/search?user=supreetsingh247" data-unscoped-search-url="/search" action="/search?user=supreetsingh247" acceptCharset="UTF-8" method="get">
      <label className="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text" className="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable" data-hotkey="s,/" name="q" value="" placeholder="Search or jump to…" data-unscoped-placeholder="Search or jump to…" data-scoped-placeholder="Search or jump to…" autoCapitalize="off" aria-autocomplete="list" aria-controls="jump-to-results" aria-label="Search or jump to…" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" spellCheck="false" autoComplete="off" />
          <input type="hidden" value="bE4gnjnwZ5aT22WwdH3p4nJ6kesV4l+B+O6ZdBi2Hcy+yLZJHDwa9LIXB0iwkA0qKp0DjoamrUnUteGn3NecIw==" data-csrf="true" className="js-data-jump-to-suggestions-path-csrf" />
          <input type="hidden" className="js-site-search-type-field" name="type" />
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" className="mr-2 header-search-key-slash" />

            <div className="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul className="d-none js-jump-to-suggestions-template-container">
  

<li className="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabIndex="-1" className="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div className="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" className="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" className="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fillRule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" className="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img className="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28" />

    <div className="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span className="js-jump-to-badge-search-text-default d-none" aria-label="in this user">
        In this user
      </span>
      <span className="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul className="d-none js-jump-to-no-results-template-container">
  <li className="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span className="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" className="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li className="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabIndex="-1" className="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div className="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" className="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" className="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fillRule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" className="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img className="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28" />

    <div className="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span className="js-jump-to-badge-search-text-default d-none" aria-label="in this user">
        In this user
      </span>
      <span className="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li className="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabIndex="-1" className="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div className="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" className="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" className="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fillRule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" className="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img className="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28" />

    <div className="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span className="js-jump-to-badge-search-text-default d-none" aria-label="in this user">
        In this user
      </span>
      <span className="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span className="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li className="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" className="m-2" width="28" />
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


    <nav className="d-flex flex-column flex-md-row flex-self-stretch flex-md-self-auto" aria-label="Global">
    <a className="Header-link py-md-3 d-block d-md-none py-2 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a className="js-selected-navigation-item Header-link py-md-3  mr-0 mr-md-3 py-2 border-top border-md-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
      Pull<span className="d-inline d-md-none d-lg-inline"> request</span>s
</a>
  <a className="js-selected-navigation-item Header-link py-md-3  mr-0 mr-md-3 py-2 border-top border-md-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>

    <div className="mr-0 mr-md-3 py-2 py-md-0 border-top border-md-top-0 border-white-fade-15">
      <a className="js-selected-navigation-item Header-link py-md-3 d-inline-block" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a className="js-selected-navigation-item Header-link py-md-3  mr-0 mr-md-3 py-2 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a className="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade-15" href="/loftykhanna">
      <img className="avatar avatar-user" src="https://avatars2.githubusercontent.com/u/10628479?s=40&amp;v=4" width="20" height="20" alt="@loftykhanna" />
      loftykhanna
</a>
   <form action="/logout" acceptCharset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="GrhmRFXCoZ9FWQyayZD8iQGr+WqxSpdSOECXZ7C2KZBT2XhC/26V6imyr5uVrtFbGmqXDghvsG0f9+UZURXcFg==" />
      <button type="submit" className="Header-link mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade-15 d-md-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style={{paddingLeft: '2px'}}>
        <svg className="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path></svg>
        Sign out
      </button>
</form></nav>

  </div>

  <div className="Header-item Header-item--full flex-justify-center d-md-none position-relative">
    <a className="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg className="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>

  <div className="Header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">
    
    <a aria-label="You have unread notifications" className="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:unread" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTA2Mjg0NzkiLCJ0IjoxNTk1ODcxNjA1fQ==--90beaa38b31f71aa6fe3478d1eeb59757ba006eb495112a4567dd0ce60c271f0" href="/notifications">
        <span className="js-indicator-modifier mail-status unread"></span>
        <svg className="octicon octicon-bell" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fillRule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path></svg>
</a>
  </div>

  

  <div className="Header-item position-relative d-none d-md-flex">
    <details className="details-overlay details-reset">
  <summary className="Header-link" aria-label="Create new…" data-ga-click="Header, create new, icon:add" aria-haspopup="menu" role="button">
    <svg className="octicon octicon-plus" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"></path></svg> <span className="dropdown-caret"></span>
  </summary>
  <details-menu className="dropdown-menu dropdown-menu-sw mt-n2" role="menu">
    
<a role="menuitem" className="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" className="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" className="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" className="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <a role="menuitem" className="dropdown-item" href="/new/project" data-ga-click="Header, create new project">
    New project
  </a>

  </details-menu>
</details>

  </div>

<div className="Header-item position-relative mr-0 d-none d-md-flex">
    
  <details className="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/loftykhanna/feature_preview/indicator_check" open="">

  <summary className="Header-link" aria-label="View profile and more" data-ga-click="Header, show menu, icon:avatar" aria-haspopup="menu" role="button">
    <img alt="@loftykhanna" width="20" height="20" src="https://avatars1.githubusercontent.com/u/10628479?s=60&amp;v=4" className="avatar avatar-user " />

      <span className="feature-preview-indicator js-feature-preview-indicator" style={{top: "10px"}} hidden=""></span>
    <span className="dropdown-caret"></span>
  </summary>
  
</details>

  </div>

      </header>
    </>
  );
}

export default Header;
