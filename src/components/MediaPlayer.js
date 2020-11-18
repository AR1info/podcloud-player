import React, { useRef, useEffect } from "react";

import playerStore from "../stores/player";

import { useRecoilState } from "recoil";

const MediaPlayer = ({ mediaUrl }) => {
  const player = useRef();

  const [playerState, setPlayerState] = useRecoilState(playerStore);

  const ref = player.current;

  useEffect(() => {
    if (ref && ref.dataset.boundEvents !== "did") {
      ref.dataset.boundEvents = "did";

      console.log("adding funcs to playerState");
      setPlayerState((playerState) => {
        return {
          ...playerState,
          minus15: () => {
            ref.currentTime = ref.currentTime - 15;
            if (ref.paused) {
              ref.play().catch((error) => {
                ref.dispatchEvent(new ErrorEvent(error, {}));
              });
            }
          },
          plus15: () => {
            ref.currentTime = ref.currentTime + 15;
            if (ref.paused) {
              ref.play().catch((error) => {
                ref.dispatchEvent(new ErrorEvent(error, {}));
              });
            }
          },
          playPause: () => {
            const loading = ref.seeking || ref.networkState === 2;

            if (loading || (!ref.paused && !ref.ended)) {
              ref.pause();
            } else {
              ref.play().catch((error) => {
                ref.dispatchEvent(new ErrorEvent(error, {}));
              });
            }
          },
          seekToPercent: (percent) => {
            const jump = () => {
              ref.currentTime = percent * ref.duration;
              ref.play();
            };

            if (ref.readyState > 0) {
              jump();
            } else {
              ref
                .play()
                .then(jump)
                .catch((error) => {
                  ref.dispatchEvent(new ErrorEvent(error, {}));
                });
            }
          },
          togglePlaybackRate: () => {
            ref.playbackRate = ref.playbackRate + 0.25;
            if (ref.playbackRate > 2) ref.playbackRate = 0.25;
          },
        };
      });

      const events = (
        "loadstart progress suspend abort error " +
        "emptied stalled loadedmetadata loadeddata canplay canplaythrough " +
        "playing waiting seeking seeked ended durationchange " +
        "timeupdate play pause ratechange resize volumechange"
      ).split(" ");

      const bindPlayer = (ev) => {
        ref.addEventListener(ev.trim(), (e) => {
          if (e?.error) {
            console.error(e.error);
          }

          setPlayerState((playerState) => ({
            ...playerState,
            hasVideo: ref.videoWidth > 0 || ref.videoHeight > 0,
            duration: ref.duration,
            currentTime: ref.currentTime,
            paused: ref.paused,
            ended: ref.ended,
            networkState: ref.networkState,
            readyState: ref.readyState,
            playbackRate: ref.playbackRate,
            muted: ref.muted,
            loading: ref.networkState === 2,
            playing: !(ref.ended || ref.seeking || ref.paused),
            percent:
              Math.trunc(
                ((ref.currentTime || 0) / (ref.duration || 1)) * 10000
              ) / 100,
            src: ref.src,
          }));
        });
      };

      events.forEach(bindPlayer);
    }
  }, [ref, setPlayerState]);

  useEffect(() => {
    if (ref && mediaUrl !== ref.src) {
      ref.src = mediaUrl;

      if (playerState.should_autoplay) {
        ref.play().catch((error) => {
          ref.dispatchEvent(new ErrorEvent(error, {}));
        });
      }

      setPlayerState((playerState) => ({
        ...playerState,
        should_autoplay: true, // autoplay next tracks
      }));
    }
  }, [ref, mediaUrl, playerState, setPlayerState]);

  return <video ref={player} hidden preload={"none"} />;
};

export default MediaPlayer;
