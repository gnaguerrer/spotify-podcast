import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = props => {
    const { size, color } = props
    return (
        <Spin indicator={<LoadingOutlined style={{ fontSize: size ?? 24, color: color ?? '#4d4d4d' }} spin />} />
    )
}

Loading.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
}

export { Loading }