import React from "react";

import styles from "./EpisodesListItem.module.scss";

import playerStore from "../../stores/player";
import { useRecoilState } from "recoil";

import { convertHMS } from "../../utils";

import PlayIcon from "../Icons/Play";
import PauseIcon from "../Icons/Pause";

const EpisodesListItem = ({ episode, setCurrentEpisode }) => {
  const [playerState] = useRecoilState(playerStore);

  const { src: playerSrc, playing, playPause } = playerState;

  const currently_me = episode.enclosure_url === playerSrc;

  function playPauseMe() {
    if (currently_me) {
      playPause();
    } else {
      setCurrentEpisode(episode);
    }
  }

  return (
    <div className={styles.episode}>
      <div
        className={styles.button}
        onClick={playPauseMe}
        aria-label={currently_me && playing ? "Mettre en pause" : "Reprendre"}
      >
        {currently_me && playing ? <PauseIcon /> : <PlayIcon />}
      </div>
      <a
        href={episode.url}
        target="_blank"
        rel="noreferrer"
        className={styles.title}
      >
        {episode.title}
      </a>
      <div className={styles.duration}>
        {convertHMS(episode.enclosure_duration)}
      </div>
    </div>
  );
};

export default EpisodesListItem;
