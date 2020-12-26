import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import theme from '~/modules/core/theme/styleguide/theme'

const Loading = () => (
  <div className="progress-theme">
    <div className="inner">
      <div className="loader">
        <ScaleLoader
          sizeUnit={'px'}
          height={100}
          width={15}
          color={theme.colors.colorAccent}
          loading
        />
      </div>
    </div>

    <style jsx>{`
      .progress-theme {
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        -o-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
        z-index: 9999999;
        position: relative;
        margin: 128px;
      }
      .inner {
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
        display: flex;
        justify-content: center;
      }
      .loader {
        display: block;
        width: 200px;
        height: 120px;
        text-align: center;
        font-size: ${theme.fontSizes.XXXL};
        line-height: 90px;
      }
    `}</style>
  </div>
)

export default Loading
