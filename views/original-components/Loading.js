import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import theme from '~/theme/theme'

const Loading = () => (
  <div className="progress-theme">
    <div className="inner">
      <div className="loader">
        <ScaleLoader
          sizeUnit={'px'}
          height={150}
          width={15}
          color={theme.colors.colorAccent}
          loading
        />
        Loading...
      </div>
    </div>

    <style jsx>{`
      .progress-theme {
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        -o-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
        z-index: 9999999;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
      .inner {
        height: 100%;
        width: 100%;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
      }
      .loader {
        position: absolute;
        top: 40%;
        left: 50%;
        display: block;
        width: 200px;
        height: 120px;
        margin-left: -100px;
        margin-top: -60px;
        text-align: center;
        font-size: ${theme.fontSizes.XXXL};
        line-height: 90px;
      }
    `}</style>
  </div>
)

export default Loading
