import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

const ImgSharp = ({ fluidClass, fluidImg, srcClass, srcImg, title, position }) => (
    <React.Fragment>
        { fluidImg ? (
            <Img style={{ position: `${ position || `relative` }` }} className={fluidClass} fluid={fluidImg} alt={title} />
        ) : (
            srcImg && <img className={srcClass} src={srcImg} alt={title} />
        )}
    </React.Fragment>
)

ImgSharp.propTypes = {
    fluidClass: PropTypes.string,
    fluidImg: PropTypes.object,
    srcClass: PropTypes.string,
    srcImg: PropTypes.string,
    title: PropTypes.string.isRequired,
    position: PropTypes.string,
}

export default ImgSharp
