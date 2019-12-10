import React, { Component } from "react";

import YouTube from "react-youtube";

class BestOfYouTube extends Component {
  constructor() {
    super();
    this.state = {
      autoSlide: true,
      activeVideo: 0,
      bestofYouTubeVids: []
    };
    this.moveSlide = this.moveSlide.bind(this);
    this.autoSlide = this.autoSlide.bind(this);
    this.pauseSlide = this.pauseSlide.bind(this);
    this.playSlide = this.playSlide.bind(this);
  }
  moveSlide(whichVideo) {
    if (whichVideo < 0) whichVideo = 29;
    if (whichVideo > 29) whichVideo = 0;

    this.setState({
      activeVideo: whichVideo,
      autoSlide: false
    });
  }

  pauseSlide() {
    const sliding = this.state.autoSlide;
    this.setState({
      autoSlide: false
    });
  }

  playSlide() {
    const sliding = this.state.autoSlide;
    this.setState({
      autoSlide: true
    });
  }

  autoSlide() {
    setInterval(activeVideo => {
      let newActive = this.state.activeVideo + 1;
      if (newActive < 0) newActive = 29;
      if (newActive > 29) newActive = 0;

      if (this.state.autoSlide === true) {
        this.setState({ activeVideo: newActive });
      }
    }, 5000);
  }

  componentDidMount() {
    fetch("XXXXXX/bestOfYouTube.php")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            bestofYouTubeVids: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

    this.autoSlide();
  }

  render() {
    const bestofYouTubeVids = this.state.bestofYouTubeVids;
    const activeVideo = this.state.activeVideo;

    return (
      <div className="row">
        <div className="col-md-12">
          <ul className="videoindexParent">
            {this.state.bestofYouTubeVids.map((movie, i) => {
              return (
                <li
                  key={i}
                  data-num={i}
                  onClick={() => this.moveSlide(i)}
                  className={
                    activeVideo === i ? "sliderIndex active" : "sliderIndex"
                  }
                />
              );
            })}
          </ul>
        </div>
        <div className="youTubeFrame col-md-12">
          <YouTube
            videoId={bestofYouTubeVids[activeVideo]}
            id={bestofYouTubeVids[activeVideo]}
            className={"youTubeIframe animate slideInLeft"}
            onPlay={this.pauseSlide}
          />
        </div>
        <div className="col-md-12">
          <small>Carousel Controls</small>
        </div>

        <div className="btn-group col-md-12" role="group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => this.moveSlide(activeVideo - 1)}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={this.pauseSlide}
            className="btn btn-secondary"
          >
            Pause
          </button>
          <button
            type="button"
            onClick={this.playSlide}
            className="btn btn-secondary"
          >
            Play
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => this.moveSlide(activeVideo + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default BestOfYouTube;
