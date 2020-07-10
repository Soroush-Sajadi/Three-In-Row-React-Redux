import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../Redux';
import './Style/Boxes.css';


const Game = ({ userData, fetchData }) => {

    useEffect(() => {
        fetchData('http://localhost:3000/')
    })

    return(
        <>
            {userData.data.length > 0 ?
            <div className="wrapper">
                {userData.data.map((item, i) => 
                    <div key={i} id ={item.id} className="boxes">
                        
                    </div>
                )}
            </div>:
            null
            }
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