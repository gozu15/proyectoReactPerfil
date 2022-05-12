
import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './ImagePrincipal.css'
export function ImagePrincipal(){
    return (
        <>
            <div className='image'>
                <div className='background-letters'>
                    <div className="col-6 text-img">
                    <h1>Programacion profesional</h1>
                    <h2>Javascript</h2>                   
                    <h4>La mejor programacion orientada a prototipos</h4>
                    {/* <Button className="buttn-image" variant="light">Read more</Button> */}
                    <br />
                    <br />
                    <br />
                    <Button className='button-bgimage' variant="light">Read more</Button>                    
                    </div>                    
                </div>
            </div>
        </>
    )
}