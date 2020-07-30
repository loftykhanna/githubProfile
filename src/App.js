import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import ContentLayout from "./component/ContentLayout";

import axios from "axios";

function App(props) {
  const [userData, setUserData] = useState({});
  const [repoDetails, setRepoDetails] = useState([]);
  const [filteredRepoDetails, setFilteredRepoDetails] = useState([]);

  const searchRepo = input => {
    console.log("input", input);

    setFilteredRepoDetails(
      repoDetails.filter(repo => {
        return repo.name.toLowerCase().includes(input);
      })
    );
  };

  console.log(window.location.pathname);
  const fetchRepoDetails = async () => {
    const repoDetails = await axios
      .get(`https://api.github.com/users${window.location.pathname}/repos`)
      .catch(() => {
        return { response: "NO data found", status: "Error" };
      });
    setRepoDetails(repoDetails.data);
    setFilteredRepoDetails(repoDetails.data);
    console.log("repo", repoDetails);
  };

  const fetchUserDetails = async () => {
    const apiCall = await axios
      .get(`https://api.github.com/users${window.location.pathname}`)
      .catch(() => {
        return { response: "NO data found", status: "Error" };
      });

    setUserData(apiCall.status == "Error" ? { status: "Error" } : apiCall.data);
    console.log("ssss", apiCall);
    if (apiCall.status != "Error") fetchRepoDetails();
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="App">
      <Header />

      {userData.status == "Error" ? (
        <h1> Wrong github handle </h1>
      ) : (
        <ContentLayout
          userData={userData}
          repoDetails={filteredRepoDetails}
          searchRepo={searchRepo}
        />
      )}
    </div>
  );
}

export default App;
