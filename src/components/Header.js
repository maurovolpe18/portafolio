import React from 'react'
import Typewriter from 'typewriter-effect';
import algo from '../img/algo.png'


export const Header = (toggle) => {
    
    return (
        <>
        <div className="inicio__logo container h1">
            <h1 className="inicio__texto"><Typewriter className="h1"
                options={{
                    strings: ['< Maurizio Volpe />'],
                    autoStart: true,
                    loop: true,
                }}
            /> </h1>
           
        </div>
         <img className="inicio__pc" src={algo} alt="algo" />
         </>
    )
}
