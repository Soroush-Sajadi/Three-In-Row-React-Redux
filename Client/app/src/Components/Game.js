import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../Redux'


const Game = ({ userData, fetchData }) => {

    useEffect(() => {
        
    })

    return(
        <>
        </>
    )
}
const mapStateToProps = state => {
    return {
        userData: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        fetchData: (url) => dispatch(fetchData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)