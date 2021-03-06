<template>
  <amp-body>
    <amp-story
      standalone
      title="The Mars Cruise"
      publisher="The AMP Project"
      publisher-logo-src="https://amp.dev/static/samples/standalone/amp-story/img/publisher-src.png"
      poster-portrait-src="https://amp.dev/static/samples/standalone/amp-story/img/portrait-src.jpg"
      poster-square-src="https://amp.dev/static/samples/standalone/amp-story/img/square-src.jpg"
      poster-landscape-src="https://amp.dev/static/samples/standalone/amp-story/img/landscape-src.jpg"
      background-audio="https://amp.dev/static/samples/standalone/amp-story/audio/Asche_Spencer-Contemplative_312.mp3"
    >
      <!-- The Cover Page -->
      <amp-story-page id="cover">
        <amp-story-grid-layer template="fill">
          <amp-img class="bkgd" src="https://amp.dev/static/samples/standalone/amp-story/img/01/bkgd.jpg" width="720" height="1280" layout="responsive" />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="fill" class="gradient" />
        <amp-story-grid-layer template="vertical" class="copy-layer">
          <h1 animate-in="fly-in-bottom" animate-in-duration="0.55s" animate-in-delay="0.35s">
            <span class="horiz">The</span><span class="yellow">MARS</span>CRUISE
          </h1>
          <p class="copy" animate-in="fade-in" animate-in-duration="0.75s" animate-in-delay="0.75s">
            Get ready for the trip of your life. Keep reading to see all
            that awaits you on the Red Planet.
          </p>
        </amp-story-grid-layer>
      </amp-story-page>

      <!-- Journey -->
      <amp-story-page id="journey">
        <amp-story-grid-layer template="fill">
          <amp-video
            width="960"
            height="1280"
            autoplay
            noaudio
            layout="responsive"
            src="https://amp.dev/static/samples/standalone/amp-story/video/02-bkgd.mp4"
            poster="https://amp.dev/static/samples/standalone/amp-story/img/02/bkgd-poster.jpg"
          />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="copy-layer">
          <h2 animate-in="fly-in-right" animate-in-duration="0.6s" animate-in-delay="0.2s">
            the journey
          </h2>
          <p class="copy" animate-in="fade-in" animate-in-duration="0.7s" animate-in-delay="0.6s">
            Every 2 years, when Earth and Mars are closest to each other,
            the voyage to the fourth planet takes a brisk 9 months.
          </p>
        </amp-story-grid-layer>
      </amp-story-page>

      <!-- What to Bring -->
      <amp-story-page id="what-to-bring">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://amp.dev/static/samples/standalone/amp-story/img/03/bkgd.jpg"
            width="960"
            height="1280"
          />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="mars-wrapper">
          <amp-img
            class="mars"
            src="https://amp.dev/static/samples/standalone/amp-story/img/03/mars.png"
            width="960"
            height="450"
            layout="responsive"
          />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="suitcase-wrapper">
          <div>
            <amp-img
              class="suitcase"
              src="https://amp.dev/static/samples/standalone/amp-story/img/03/suitcase.png"
              layout="responsive"
              width="960"
              height="663"
              animate-in="fly-in-bottom"
              animate-in-duration="0.85s"
              animate-in-delay="0.45s"
            />
            <amp-img
              class="books"
              src="https://amp.dev/static/samples/standalone/amp-story/img/03/books.png"
              layout="responsive"
              width="960"
              height="663"
              animate-in="fly-in-top"
              animate-in-duration="0.75s"
              animate-in-delay="0.8s"
            />
            <amp-img
              class="sextant"
              src="https://amp.dev/static/samples/standalone/amp-story/img/03/sextant.png"
              layout="responsive"
              width="960"
              height="663"
              animate-in="fly-in-top"
              animate-in-duration="1.25s"
              animate-in-delay="1.2s"
            />
            <amp-img
              class="helmet"
              src="https://amp.dev/static/samples/standalone/amp-story/img/03/helmet.png"
              layout="responsive"
              width="960"
              height="680"
              animate-in="fly-in-top"
              animate-in-duration="0.75s"
              animate-in-delay="1.1s"
            />
            <amp-img
              class="suitcase-front"
              src="https://amp.dev/static/samples/standalone/amp-story/img/03/suitcase-front.png"
              layout="responsive"
              width="960"
              height="663"
              animate-in="fly-in-bottom"
              animate-in-duration="0.85s"
              animate-in-delay="0.45s"
            />
          </div>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="copy-layer">
          <h2 animate-in="fly-in-bottom" animate-in-duration="0.5s" animate-in-delay="1.05s">
            what to bring
          </h2>
          <p animate-in="fade-in" animate-in-duration="0.6s" animate-in-delay="1.55s">
            Aside from warm clothes, there are a few essentials you’ll
            want to bring from home: like a space suit, solar phone
            charger, sextant, and a good book
          </p>
        </amp-story-grid-layer>
      </amp-story-page>

      <!-- Highlights -->
      <amp-story-page id="trip-highlights">
        <amp-story-grid-layer template="fill">
          <amp-video
            noaudio
            autoplay
            width="960"
            height="1280"
            src="https://amp.dev/video/04-bkgd.mp4"
            layout="responsive"
            poster="https://amp.dev/static/samples/standalone/amp-story/img/04/poster.jpg"
          >
            <div fallback>
              <p>This browser does not support the video element.</p>
            </div>
          </amp-video>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="video-wrapper">
          <div
            class="video"
            animate-in="fly-in-right"
            animate-in-duration="0.55s"
            animate-in-delay="0.9s"
          >
            <amp-video
              autoplay
              noaudio
              width="960"
              height="540"
              src="https://amp.dev/video/04-trip-movie.mp4"
              layout="responsive"
              poster="https://amp.dev/static/samples/standalone/amp-story/img/04/trip-movie.jpg"
            >
              <div fallback>
                <p>This browser does not support the video element.</p>
              </div>
            </amp-video>
          </div>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="icons">
          <div class="pin">
            <amp-img
              layout="flex-item"
              src="https://amp.dev/static/samples/standalone/amp-story/img/04/pin.png"
            />
            <h3><span>valles marineris</span></h3>
          </div>
          <div class="flag">
            <amp-img
              layout="flex-item"
              src="https://amp.dev/static/samples/standalone/amp-story/img/04/flag.png"
            />
            <h3><span>marineris golf course</span></h3>
          </div>
          <div class="resort">
            <amp-img
              layout="flex-item"
              src="https://amp.dev/static/samples/standalone/amp-story/img/04/resort.png"
            />
            <h3><span>rift valley resort</span></h3>
          </div>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="copy-layer">
          <h2 animate-in="fly-in-bottom" animate-in-duration="0.8s" animate-in-delay="0.85s">
            trip highlights
          </h2>
          <p animate-in="fade-in" animate-in-duration="0.65s" animate-in-delay="1.55s">
            There’s a whole planet to explore, and we want to make sure
            you see the best parts. First among them is the beautiful
            rift valley, Valles Marineris.
          </p>
        </amp-story-grid-layer>
      </amp-story-page>

      <!-- Rover tours -->
      <amp-story-page id="rover-tours">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://amp.dev/static/samples/standalone/amp-story/img/05/bkgd.jpg"
            width="960"
            height="1280"
            layout="responsive"
          />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="copy-layer">
          <h2 animate-in="fade-in" animate-in-duration="0.75s">
            rover tours
          </h2>
          <p animate-in="fade-in" animate-in-duration="0.75s" animate-in-delay="0.25s">
            This is one activity you won’t want to miss. For a small
            upgrade fee, you and your family can take a guided tour of
            Mars from the comfort of our all-terrain Rovers.
          </p>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="button-container">
          <amp-img
            src="https://amp.dev/static/samples/standalone/amp-story/img/05/360-btn.png"
            width="567"
            height="230"
            layout="responsive"
          />
        </amp-story-grid-layer>
      </amp-story-page>

      <!-- 360 -->
      <amp-story-page id="rover-360" auto-advance-after="rover-video">
        <amp-story-grid-layer template="fill">
          <amp-video
            id="rover-video"
            autoplay
            noaudio
            width="960"
            height="1280"
            src="https://amp.dev/video/05B-rover.mp4"
            layout="responsive"
            poster="https://amp.dev/static/samples/standalone/amp-story/img/05B/rover.jpg"
          >
            <div fallback>
              <p>This browser does not support the video element.</p>
            </div>
          </amp-video>
        </amp-story-grid-layer>
      </amp-story-page>

      <!-- Can't Wait -->
      <amp-story-page id="last">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="https://amp.dev/static/samples/standalone/amp-story/img/06/bkgd.jpg"
            width="960"
            height="1280"
            layout="responsive"
          />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="fill">
          <amp-img
            class="mars"
            src="https://amp.dev/static/samples/standalone/amp-story/img/06/mars.png"
            width="960"
            height="1280"
            layout="responsive"
          />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="fill">
          <amp-img
            class="astronaut"
            src="https://amp.dev/static/samples/standalone/amp-story/img/06/astronaut.png"
            width="960"
            height="1280"
            layout="responsive"
          />
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="copy-layer">
          <h2 animate-in="fly-in-top" animate-in-duration="0.55s" animate-in-delay="0.35s">
            <span class="horiz italic">We</span>
            can't wait
            <span class="italic">to have</span>
            <span class="last">you aboard!</span>
          </h2>
        </amp-story-grid-layer>
      </amp-story-page>

      <!-- Bookend -->
      <amp-story-bookend
        layout="nodisplay"
      >
        <script v-html="json" type="application/json" />
      </amp-story-bookend>
    </amp-story>
  </amp-body>
</template>

<script>
export default {
  amp: 'only',
  data () {
    return {
      json: JSON.stringify({
        'bookendVersion': 'v1.0',
        'shareProviders': [
          'email',
          'twitter',
          'tumblr',
          {
            'provider': 'facebook',
            'app_id': '254325784911610'
          }
        ],
        'components': [
          {
            'type': 'heading',
            'text': 'Introduction'
          },
          {
            'type': 'small',
            'title': 'AMP Story Hello World',
            'url': '/documentation/examples/introduction/stories_in_amp',
            'image': '/favicons/android-chrome-256x256.png'
          },
          {
            'type': 'heading',
            'text': 'Features'
          },
          {
            'type': 'small',
            'title': 'Animations',
            'url': '/documentation/examples/visual-effects/amp_story_animations',
            'image': '/favicons/android-chrome-256x256.png'
          },
          {
            'type': 'small',
            'title': 'Layouts',
            'url': '/documentation/examples/style-layout/amp_story_layouts',
            'image': '/favicons/android-chrome-256x256.png'
          },
          {
            'type': 'small',
            'title': 'Media',
            'url': '/stories/features/media/',
            'image': '/favicons/android-chrome-256x256.png'
          },
          {
            'type': 'small',
            'title': 'Supporting desktop and landscape mode',
            'url': '/documentation/examples/style-layout/desktop_and_landscape_mode_support',
            'image': '/favicons/android-chrome-256x256.png'
          },
          {
            'type': 'heading',
            'text': 'Monetization'
          },
          {
            'type': 'small',
            'title': 'DoubleClick',
            'url': '/documentation/examples/advertising-analytics/doubleclick_amp_story_ads',
            'image': '/favicons/android-chrome-256x256.png'
          },
          {
            'type': 'small',
            'title': 'Publisher Served',
            'url': '/documentation/examples/advertising-analytics/publisher_served_amp_story_ads',
            'image': '/favicons/android-chrome-256x256.png'
          },
          {
            'type': 'heading',
            'text': 'Visual Effects'
          },
          {
            'type': 'small',
            'title': 'Ken Burns',
            'url': '/documentation/examples/visual-effects/ken_burns',
            'image': '/favicons/android-chrome-256x256.png'
          },
          {
            'type': 'heading',
            'text': 'User Consent'
          },
          {
            'type': 'small',
            'title': 'Story User Consent',
            'url': '/documentation/examples/user-consent/story_user_consent',
            'image': '/favicons/android-chrome-256x256.png'
          }
        ]
      })
    }
  },
  head () {
    return {
      title: 'Story'
    }
  }
}
</script>

<style>
:root {
  --yellow: #ffd200;
  --transparent: rgba(0, 0, 0, 0);
  --black: rgba(0, 0, 0, 1);
}

amp-story {
  color: #eaeaea;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
}

amp-story .horiz {
  display: flex;
  flex-direction: row;
}

amp-story .horiz::before,
amp-story .horiz::after {
  content: "";
  flex: 1 1;
  border-bottom: 0.0625em solid #fff;
  margin: auto;
}

amp-story .horiz::before {
  margin-right: 2.3rem;
}

amp-story .horiz::after {
  margin-left: 2.3rem;
}

amp-story h2 {
  color: var(--yellow);
  font-size: 6.8vw;
  font-weight: 700;
  font-family: "Josefin Sans", sans-serif;
  text-transform: uppercase;
  margin-bottom: -2vw;
}

amp-story h3 {
  font-weight: 700;
  font-family: "Josefin Sans", sans-serif;
}

amp-story p {
  font-size: 4.5vw;
  line-height: 5vw;
  letter-spacing: 0.1vw;
}

amp-story .yellow {
  color: var(--yellow);
}

/* PAGE 01: COVER - THE MARS CRUISE */
#cover {
  background-color: #71311c;
}

#cover[active] .bkgd {
  animation-name: coverPan;
  animation-duration: 30s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: ease-out;
}

#cover .gradient {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 34%,
    black 100%
  );
}

#cover .copy-layer {
  margin: 0 auto;
  padding: 0 14vw 12vw;
  align-content: flex-end;
}

#cover h1 {
  color: #fff;
  font-size: 19.4vw;
  font-weight: 700;
  font-family: "Josefin Sans", sans-serif;
  line-height: 20vw;
}

#cover .horiz {
  padding: 0 2vw;
  font-size: 7.5vw;
  font-weight: 700;
  font-style: italic;
  font-family: "Tienne", serif;
}

#cover .yellow {
  font-size: 25vw;
  display: block;
}

#cover p {
  font-size: 5vw;
  line-height: 6.3vw;
  text-align: left;
  padding: 0 3vw;
}

/* PAGE 02: THE JOURNEY */
#journey {
  background-color: black;
}

#journey .copy-layer {
  padding: 12.8vw 21vw;
}

#journey h2 {
  margin-bottom: -1vw;
}

/*
      * PAGE 04: TRIP HIGHLIGHTS
      * Stylelint requires `#trip-highlights` styles before `#what-to-bring`
      */
#trip-highlights {
  background-color: #000;
}

#trip-highlights .icons {
  padding: 0;
}

#trip-highlights .icons > div {
  opacity: 0;
  width: auto;
  position: absolute;
  align-content: flex-start;
}

#trip-highlights h3 {
  width: 0;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
}

#trip-highlights h3 span {
  padding: 1vw 2vw 0.7vw;
  text-transform: uppercase;
  display: inline-block;
  background-color: black;
}

#trip-highlights .pin {
  top: 7vw;
  left: 10vw;
}

#trip-highlights .pin amp-img {
  width: 14vw;
  height: 20vw;
}

#trip-highlights .pin h3 {
  font-size: 2.7vw;
  animation-delay: 1s;
  margin-top: -6.7vw;
  margin-left: 13vw;
}

#trip-highlights .flag {
  top: 68.1vw;
  left: 9.2vw;
  animation-delay: 0.15s;
}

#trip-highlights .flag amp-img {
  width: 7vw;
  height: 8vw;
  margin-top: -7.7vw;
  margin-left: -1vw;
}

#trip-highlights .flag h3 {
  font-size: 1.9vw;
  margin-top: 1.3vw;
  margin-left: -2.4vw;
  animation-delay: 1s;
}

#trip-highlights .resort {
  top: 86.3vw;
  left: 52.9vw;
  animation-delay: 0.4s;
}

#trip-highlights .resort amp-img {
  width: 8vw;
  height: 14vw;
  margin-top: -13.8vw;
  margin-left: -4.1vw;
}

#trip-highlights .resort h3 {
  font-size: 1.9vw;
  margin-top: -4.6vw;
  margin-left: 5vw;
  animation-delay: 1s;
}

#trip-highlights .video-wrapper {
  padding-right: 14.6vw;
  padding-left: 24.5vw;
  padding-top: 28.4vw;
}

#trip-highlights .video-wrapper .video {
  padding: 0.375em;
  background-color: rgba(255, 255, 255, 0.21);
}

#trip-highlights .copy-layer {
  margin: 0 auto;
  padding: 0 19vw 16.3vw;
  max-width: 65%;
  align-content: flex-end;
}

#trip-highlights[active] .icons > div {
  animation-name: dropIn;
  animation-duration: 0.65s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: ease-out;
}

#trip-highlights[active] .icons h3 {
  animation-name: wipeRight;
  animation-duration: 0.65s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: ease-out;
}

/*
      * PAGE 03: WHAT TO BRING
      * Stylelint requires `#trip-highlights` styles before `#what-to-bring`
      */
#what-to-bring {
  background-color: #0b0309;
}

#what-to-bring .suitcase-wrapper {
  padding: 22vh 0 0;
}

#what-to-bring .suitcase-wrapper amp-img {
  width: 100%;
  position: absolute;
}

#what-to-bring .mars-wrapper {
  padding: 0;
  align-content: flex-end;
}

#what-to-bring[active] .mars-wrapper amp-img {
  animation-name: marsRising;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: ease-out;
}

#what-to-bring .copy-layer {
  align-content: flex-end;
  padding: 0 19.6vw 12vh;
}

/* PAGE 05: ROVER TOURS */
#rover-tours {
  background-color: #775444;
}

#rover-tours .button-container {
  align-content: flex-end;
  padding: 0 19.6vw 2.4vw;
}

#rover-tours .copy-layer {
  padding: 15.6vw 21.5vw;
}

#rover-tours h2 {
  margin-bottom: 0;
}

/* PAGE 05B: ROVER 360 */
#rover-360 {
  background-color: #151515;
}

/* PAGE 06: LAST PAGE - WE CAN'T WAIT TO HAVE YOU ABOARD */
#last {
  background-color: black;
}

#last .copy-layer {
  padding: 12.4vw 24vw 10vw;
  text-align: center;
}

#last h2 {
  color: var(--yellow);
  font-size: 8.6vw;
  font-weight: 700;
  font-family: "Josefin Sans", sans-serif;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
}

#last .last {
  font-size: 7.2vw;
}

#last .italic {
  color: #fff;
  font-size: 5vw;
  font-weight: 700;
  font-style: italic;
  font-family: "Tienne", serif;
  text-transform: initial;
  margin-bottom: 1.5vw;
}

#last[active] .mars {
  animation-name: endMars;
  animation-duration: 30s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: ease-out;
}

#last[active] .astronaut {
  animation-name: endAstronaut;
  animation-duration: 30s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: ease-out;
}

@keyframes coverPan {
  0% {
    transform: translate(2.5rem, 4.1875rem) scale(1.25);
  }

  100% {
    transform: translate(-2.5rem, 0.625rem) scale(1.35);
  }
}

@keyframes marsRising {
  0% {
    opacity: 0;
    transform: translate(0, 1.0625rem) scale(1);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0.625rem) scale(1.15);
  }
}

@keyframes endMars {
  0% {
    transform: translate(0.775rem, 0.775rem) scale(1.2);
  }

  100% {
    transform: translate(-0.4375rem, -0.375rem) scale(1.3);
  }
}

@keyframes endAstronaut {
  0% {
    transform: translate(1.8375rem, 2.775rem) scale(1.1);
  }

  100% {
    transform: translate(-1.5rem, 0.375rem) scale(1.2);
  }
}

@keyframes dropIn {
  0% {
    opacity: 0;
    transform: translateY(-34.375rem);
  }

  100% {
    opacity: 1;
  }
}

@keyframes wipeRight {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
