/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';
import { API_URL } from '../constants';

const getEpisodeNumber = (character) => {
  const episodelink = character.episode[character.episode.length - 1];
  return episodelink.split('/episode/')[1];
};

function getOrigin(character) {
  const origin = character.origin.name.replace('(', ' - ');
  return origin.slice(0, -1);
}

function getlastlocation(character) {
  const lastlocation = character.location.name.split('(')[0];
  return lastlocation;
}

function getlastdimension(character) {
  const locationname = character.location.name;
  const locationDimension = locationname.split('(')[1];
  if (!locationDimension) { return 'unknown'; }
  const lastDimension = locationDimension.slice(0, -1);
  return lastDimension;
}

function getlastepisodename(episodelist, number) {
  const lastepisodename = episodelist[number - 1].name;
  if (lastepisodename) {
    return (episodelist[number - 1].name);
  } return 'unknown';
}

const getAllEpisodes = (character) => {
  const numberOfEpisodes = character.episode.length - 1;
  const episodesnumber = [];
  for (let i = 0; i <= numberOfEpisodes; i++) {
    episodesnumber.push(character.episode[i].split('/episode/')[1]);
  }
  return episodesnumber;
};

export default function Characters({ currentpage, episodesList, countCharacters }) {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentPage = currentpage || 1;

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios.get(`${API_URL}character/?page=${currentPage}`).then((data) => {
      if (mounted) {
        setCharacter(data.data.results);
        setLoading(false);
      }
    }).then((err) => console.log(err));
    return () => {
      console.log('unmounted');
      mounted = false;
    };
  }, [currentPage]);

  const renderCharacter = (character) => (
    <Character
      key={character.id}
      img={character.image}
      name={character.name}
      status={character.status}
      species={character.species}
      sex={character.gender}
      origin={getOrigin(character)}
      lastlocation={getlastlocation(character)}
      lastdimension={getlastdimension(character)}
      lastepisode={getEpisodeNumber(character)}
      lastepisodename={getlastepisodename(episodesList, getEpisodeNumber(character))}
      loading={loading}

                // Get all episodes to show at the back of the card
      allepisodes={getAllEpisodes(character)}
    />


  );
  return (
    <div className="main-nav">
      <h1 className="title">Characters</h1>
      <p className="c-count">
          count -
        {currentpage * 20}
          /
        {countCharacters}
      </p>
      <p className="c-count">{currentpage}</p>
      <div id="grid">
        {characters.map(renderCharacter)}
      </div>
    </div>
  );
}
