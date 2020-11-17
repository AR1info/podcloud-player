import React from "react";

const PlayerControls = ({ playerRef, episodeTitle, showEpList }) => {
  function moins15() {
    playerRef.current.currentTime = playerRef.current.currentTime - 15;
  }

  function plus15() {
    playerRef.current.currentTime = playerRef.current.currentTime + 15;
  }

  return (
    <div className="controls">
      <img src={"/backward.svg"} alt="-15s" onClick={moins15} />
      <img
        id="playButton"
        src={!playerRef.current?.paused ? "/pause.svg" : "/play.svg"}
        alt={
          playerRef.current?.paused
            ? "Reprendre " + episodeTitle
            : "Mettre en pause " + episodeTitle
        }
        onClick={() =>
          playerRef.current &&
          (playerRef.current.paused
            ? playerRef.current.play()
            : playerRef.current.pause())
        }
      />
      <img src={"/forward.svg"} alt="+15s" onClick={plus15} />
      <img src={"/list.svg"} alt="Liste des épisodes" onClick={showEpList} />
    </div>
  );
};

export default PlayerControls;
