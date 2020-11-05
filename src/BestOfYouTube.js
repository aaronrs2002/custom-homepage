import React, { Component } from "react";
import APIkey from "./config/APIkey.js";
//import YouTubeSearch from "./YoutTubeSearch";
import YouTube from "react-youtube";

class BestOfYouTube extends Component {
  constructor() {
    super();
    this.state = {
      autoSlide: true,
      activeVideo: 0,
      bestofYouTubeVids: [],
      animation: "youTubeIframe",
      originalVideos: [],
    };
    this.moveSlide = this.moveSlide.bind(this);
    this.autoSlide = this.autoSlide.bind(this);
    this.pauseSlide = this.pauseSlide.bind(this);
    this.playSlide = this.playSlide.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  moveSlide(whichVideo) {
    if (whichVideo < 0) whichVideo = 29;
    if (whichVideo > 29) whichVideo = 0;

    this.setState({
      activeVideo: whichVideo,
      autoSlide: false,
    });
  }

  pauseSlide() {
    const sliding = this.state.autoSlide;
    this.setState({
      autoSlide: false,
    });
  }

  playSlide() {
    const sliding = this.state.autoSlide;
    this.setState({
      autoSlide: true,
    });
  }

  autoSlide() {
    setInterval(() => {
      let newActive = this.state.activeVideo + 1;
      if (newActive < 0) newActive = 29;
      if (newActive > 29) newActive = 0;

      if (this.state.autoSlide === true) {
        this.setState({
          activeVideo: newActive,
          animation: "youTubeIframe animated fadeIn",
        });
      }
    }, 5000);
    setInterval(() => {
      if (this.state.autoSlide === true) {
        this.setState({
          animation: "youTubeIframe",
        });
      }
    }, 6000);
  }

  componentDidMount() {
    fetch("https://mechanized-aesthetics.net/landingHome/bestOfYouTube.php")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            bestofYouTubeVids: result,
            originalVideos: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    this.autoSlide();
  }

  fetchData() {
    const searchVal = document.getElementById("YouTubeQuery").value;

    if (searchVal !== "") {
      fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=" +
          searchVal +
          "&type=video&key=" +
          APIkey
      )
        .then((res) => res.json())
        .then((data) => {
          let tempData = [];
          if (data) {
            for (let i = 0; i < data.items.length; i++) {
              tempData.push(data.items[i].id.videoId);
            }
            this.setState({
              bestofYouTubeVids: tempData,
              activeVideo: 0,
              autoSlide: true,
            });
          }
        });
    } else {
      this.setState({
        bestofYouTubeVids: this.state.originalVideos,
        activeVideo: 0,
        autoSlide: true,
      });
    }
  }

  render() {
    const videoObj = this.state.bestofYouTubeVids;
    const activeVideo = this.state.activeVideo;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="YouTubeQuery"
              placeholder="Update video list"
            />
            <span class="input-group-btn">
              <button
                className="btn btn-dark"
                type="button"
                id="search-button"
                onClick={this.fetchData}
              >
                <i className="fas fa-search"></i>
              </button>
            </span>
          </div>
        </div>
        <div className="col-md-12">
          <ul className="videoindexParent">
            {videoObj.map((movie, i) => {
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
        <div className="col-md-12">
          <YouTube
            videoId={videoObj[activeVideo]}
            id={videoObj[activeVideo]}
            className={this.state.animation}
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
