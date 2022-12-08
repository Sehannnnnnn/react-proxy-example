import React from 'react'

const DisplayBoard = ({type, numberOfData, getAllData}) => {
    
    return(
        <div className="display-wrapper">
            <div className="display-box">
                <div className="display-board">
                    <h4>생성된 수</h4>
                    <div className="number">
                    {numberOfData}
                    </div>
                </div>
                <div className="get-button">
                    <button onClick={() => getAllData()}>Get all {type}s</button>
                </div>
            </div>
        </div>
    )
}

export default DisplayBoard;