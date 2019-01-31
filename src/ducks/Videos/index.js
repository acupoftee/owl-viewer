import React, { useState, useEffect } from "react";
import {
  StyledVideosSection,
  StyledClose,
  StyledReveal,
  StyledBackground,
  StyledMLG,
  StyledTwichIcon,
  StyledRevealArrow,
  StyledContainer
} from "./styled";
import Video from "./Video";
import BigVideo from "./BigVideo";
import { getRevealText, getMatchInfo } from "./utils";
import { Transition, Spring } from "react-spring";
import MatchInfo from "./MatchInfo";
import { TYPES } from "./constants";

const OtherVideos = ({ setIsExpanded, isExpanded, vods, fullMatchVideo }) => {
  return (
    <StyledContainer>
      <StyledReveal onClick={() => setIsExpanded(!isExpanded)}>
        <React.Fragment>
          <StyledRevealArrow isExpanded={isExpanded}>▼</StyledRevealArrow>
          {getRevealText(isExpanded)}
        </React.Fragment>
      </StyledReveal>
      <Transition
        items={isExpanded}
        from={{ opacity: 0, transform: "translate3d(60px,0,0)" }}
        enter={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
        leave={{ opacity: 0, transform: "translate3d(60px,0,0)" }}
      >
        {toggle =>
          toggle &&
          (props => (
            <div style={props}>
              {vods
                .filter(vod => !fullMatchVideo || vod.id !== fullMatchVideo.id)
                .map(vod => (
                  <Video key={vod.id} {...vod} />
                ))}
            </div>
          ))
        }
      </Transition>
    </StyledContainer>
  );
};

const AllVideos = ({ vods, fullMatchVideo }) => {
  return (
    <StyledContainer>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div style={props}>
            {vods
              .filter(vod => !fullMatchVideo || vod.id !== fullMatchVideo.id)
              .map(vod => (
                <Video key={vod.id} {...vod} />
              ))}
          </div>
        )}
      </Spring>
    </StyledContainer>
  );
};

const FullMatch = ({ fullMatchVideo }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props}>
          <BigVideo {...fullMatchVideo} />
        </div>
      )}
    </Spring>
  );
};

const MLGIcon = () => <StyledMLG src="MLG_2017.svg" alt="MLG" />;

const TwitchIcon = () => <StyledTwichIcon className="fab fa-twitch" />;

const Videos = ({ style, vods, clearVods, matchId }) => {
  const fullMatchVideo = vods.find(video => video.title.includes("Full"));
  const isExpandable = vods && vods.length > 0 && fullMatchVideo;
  const [isExpanded, setIsExpanded] = useState(false);
  const [matchInfo, setMatchInfo] = useState(null);

  useEffect(() => {
    if (matchId) getMatchInfo(matchId).then(setMatchInfo);
  }, [matchId]);

  return (
    <React.Fragment>
      <StyledBackground style={style} onClick={clearVods} />
      <StyledVideosSection style={style}>
        <StyledClose onClick={() => clearVods()}>×</StyledClose>
        {fullMatchVideo && matchInfo && (
          <FullMatch
            fullMatchVideo={{
              ...fullMatchVideo,
              label: <MLGIcon />,
              type: TYPES.MLG,
              thumbnail:
                matchInfo &&
                matchInfo.vods &&
                matchInfo.vods.length > 0 &&
                matchInfo.vods[0].thumbnails.custom
                  ? matchInfo.vods[0].thumbnails.custom
                  : fullMatchVideo.thumbnail
            }}
          />
        )}
        {matchInfo && matchInfo.vods && matchInfo.vods.length > 0 && (
          <FullMatch
            fullMatchVideo={{
              ...matchInfo.vods[0],
              label: <TwitchIcon />,
              type: TYPES.TWITCH,
              thumbnail: matchInfo.vods[0].thumbnails.custom
                ? matchInfo.vods[0].thumbnails.custom
                : matchInfo.vods[0].thumbnails.generated
            }}
          />
        )}
        {matchInfo && matchInfo.id && <MatchInfo {...matchInfo} />}
        {!isExpandable && matchInfo && vods.length > 0 && (
          <AllVideos vods={vods} fullMatchVideo={fullMatchVideo} />
        )}
        {isExpandable && matchInfo && (
          <OtherVideos
            setIsExpanded={setIsExpanded}
            isExpanded={isExpanded}
            vods={vods}
            fullMatchVideo={fullMatchVideo}
          />
        )}
      </StyledVideosSection>
    </React.Fragment>
  );
};

export default Videos;