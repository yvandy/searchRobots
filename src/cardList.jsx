import React from 'react';

const CardList = (props) => {


    const { robots } = props;
    // if (true) {
    //     throw new Error
    // }


    return (

        <div >

            {robots.map((robo) => {
                return (
                    <div style={{ width: "25%", display: "inline-block" }} className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
                        <img src={`https://robohash.org/${robo.id}`} alt="robot" />
                        <div>
                            <h2> {robo.name} </h2>
                            <p> {robo.email} </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardList;