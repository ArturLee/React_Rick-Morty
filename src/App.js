/* eslint-disable no-plusplus */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pages from './components/Pages';
import CharactersData from './components/CharactersData';
import { API_URL } from './constants';
import './styles/styles.scss';

export default () => {
  const [loading, setLoading] = useState(false);

  const [pages, setNumberOfPages] = useState();
  const [countCharacters, setCountCharacters] = useState();
  const [currentpage, setCurrentPage] = useState(1);

  const [countEpisodes, setCountEpisodes] = useState();
  const [episodes, setepisodes] = useState([]);
  const [episodesList, setEpisodesList] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios.get(`${API_URL}character/`).then((data) => {
      setNumberOfPages(data.data.info.pages);
      setCountCharacters(data.data.info.count);
    }).catch((err) => console.log(err));

    axios.get(`${API_URL}episode/`).then((data) => {
      setCountEpisodes(data.data.info.count);
    }).catch((err) => console.log(err));
  }, []);

  //
  // --------- Fetch All Episodes from the API
  //
  useEffect(() => {
    setLoading(true);

    if (countEpisodes) {
      const countArray = [];
      for (let i = 1; i <= countEpisodes; i++) {
        countArray.push(i);
      }

      axios.get(`${API_URL}episode/${countArray}`).then((data) => {
        setepisodes(data.data);
        setLoading(false);
      }).catch((err) => console.log(err));
    }
  }, [countEpisodes]);

  // ---- Make sure doens't throw error if array empty

  useEffect(() => {
    if (episodes.length > 0) {
      setEpisodesList(episodes);
    }
  }, [episodes]);

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <span className="spinner-inner-1" />
          <span className="spinner-inner-2" />
          <span className="spinner-inner-3" />
        </div>
      ) : (
        <div>
          <img className="title" src="https://carlisletheacarlisletheatre.org/images/rick-and-morty-logo-svg-3.png" alt="Rick and Morty" />
          <CharactersData
            currentpage={currentpage}
            episodesList={episodesList}
            countCharacters={countCharacters}
          />
          <Pages
            totalPages={pages}
            setPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};
