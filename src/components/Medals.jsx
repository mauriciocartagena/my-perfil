import React from 'react';
import { Card } from './Card';
import '../asset/styles/components/Medals.scss'
import flutterFree from '../asset/static/flutter-free.png';
import flutter from '../asset/static/flutter.png';
import gitHub from '../asset/static/git-github.png';
import javascript from '../asset/static/javascript.png';
import jquery from '../asset/static/jquery.png';
import jqueryAvanzado from '../asset/static/jquery-avanzado.png';
import jsModerno from '../asset/static/js-moderno.png';
import react from '../asset/static/react.png';
import restFul from '../asset/static/restful.png';
import vsCode from '../asset/static/vscode.png';
import node from '../asset/static/node-cero-experto.png';
import programacion from '../asset/static/progra-101.png';
import herramientas from '../asset/static/herramientas.png';

export const Medals = () => {

    const image = [ 
        flutterFree,
        flutter,
        gitHub,
        javascript,
        jquery,
        jqueryAvanzado,
        jsModerno,
        react,
        restFul,
        vsCode,
        node,
        programacion,
        herramientas
    ];
    return (
        <div className="container-fluid" >   
            <div className="row">
                    <h2 className="col medals" >Medals</h2>
            </div>
                <div className="row">                 
                    {         
                        image.map( ( img, key )=> (
                            <Card key={ key } image={ img } />
                        ))
                    }
                </div>
        </div>
    )
}
