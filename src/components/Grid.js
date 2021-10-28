import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {
    const style = {
        gap: props.gap ? `${props.gap}px` : ''
    }
    const col = props.col ? `grid-col-${props.col}` : ''
    const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : ''
    const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : ''

    return (
        <div className={`gird ${col} ${mdCol} ${smCol}`} style={style}>
            {props.children}
        </div>
    )
}

Grid.propTypes = {
    col: PropTypes.number.isRequiredm,
    smCol: PropTypes.number,
    mdCol: PropTypes.number,
    gap: PropTypes.number
}

export default Grid
