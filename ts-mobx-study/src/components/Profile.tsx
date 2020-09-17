import React from 'react'
import PropTypes from 'prop-types'

const propsTypes = {
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    label: PropTypes.string
}

type ProfileProps {
    onClick: any;
    label: any;
    selected: any
}

const Profile: React.FC<ProfileProps> = ({onClick, label, selected}) => {
    const classes = selected ? 'bold' : '';

    return (
        <li onClick={onClick} className = {classes}>
        {label}
        </li>
    )
}

Profile.propTypes = propsTypes

export default Profile