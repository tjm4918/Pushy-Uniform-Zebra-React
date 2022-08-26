import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pushy Uniform Zebra</title>
        <meta property="og:title" content="Pushy Uniform Zebra" />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/brainpageflipped-1600w.png"
        className="home-image"
      />
      <img
        alt="image"
        src="/playground_assets/optimiseyourlearning-300h.png"
        className="home-image1"
      />
      <span className="home-text">
        <span>Boost your learning to the next level</span>
        <br></br>
      </span>
      <span className="home-text03">
        <span className="home-text04">Learn</span>
        <span className="home-text05">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="home-text06">F</span>
        <span className="home-text07">aster, </span>
        <span className="home-text08">E</span>
        <span className="home-text09">
          asier &amp; more
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br className="home-text10"></br>
        <span className="home-text11">E</span>
        <span className="home-text12">ffectively than ever before</span>
        <br className="home-text13"></br>
      </span>
      <input
        type="text"
        placeholder="placeholder"
        className="home-textinput Email_Input input"
      />
      <button className="home-button button">Sign-up to the Beta</button>
      <span className="home-text14">
        <span>
          Want an
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="home-text16">easy to use</span>
        <span>
          ,
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="home-text18">free</span>
        <span>
          {' '}
          guide
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br className="home-text20"></br>
        <span className="home-text21">right now</span>
        <span>?</span>
        <br></br>
      </span>
    </div>
  )
}

export default Home
