import React, { useState } from "react";

import EpisodesList from "./EpisodesList";

import EpisodeTitle from "./EpisodeTitle";
import PodcastTitle from "./PodcastTitle";

import BackgroundCover from "./BackgroundCover";

import MediaPlayer from "./MediaPlayer";

import PodCloud from "./Icons/PodCloud";

import styles from "./Player.module.scss";

import {
  PlayerProgressBar,
  PlayerTimecodes,
  PlayerControls,
} from "./PlayerElements";

const Player = ({
  currentEpisode,
  currentPodcast,
  episodesList,
  setCurrentEpisode,
}) => {
  const [episodesListVisible, setEpisodesListVisible] = useState(false);
  const showEpisodesList = episodesList?.loading || episodesList?.length > 0;

  return (
    <div className={styles.wrapper}>
      {/* eslint-disable react/jsx-no-target-blank */}
      <a
        href={currentEpisode.podcloud_url ?? "https://podcloud.fr"}
        target="_blank"
      >
        <PodCloud className={styles.podcloud_logo} noOutline={true} />
      </a>
      {/* eslint-enable react/jsx-no-target-blank */}
      <MediaPlayer currentEpisode={currentEpisode} />
      <div className={styles.player}>
        <div className={styles.head}>
          <EpisodeTitle currentEpisode={currentEpisode} />
          <PodcastTitle currentPodcast={currentPodcast} />
        </div>
        <PlayerTimecodes initialDuration={currentEpisode.enclosure_duration} />
        <PlayerProgressBar />
        <PlayerControls
          episodesListLoading={episodesList?.loading}
          showEpisodesListButtonFn={
            showEpisodesList
              ? () => {
                  setEpisodesListVisible((current) => {
                    return !current;
                  });
                }
              : null
          }
        />
      </div>
      {showEpisodesList ? (
        <EpisodesList
          episodesList={episodesList}
          setCurrentEpisode={setCurrentEpisode}
          className={styles.episodes_list}
          open={episodesListVisible}
        />
      ) : null}
      <BackgroundCover currentEpisode={currentEpisode} />
    </div>
  );
};

export default Player;
