import { useState, useEffect} from "react";
import React from 'react';
import PropTypes from 'prop-types';

function Estadisticas(props) {


    

    return(     

    <>              
        {props.estadisticas.map((estadistica, i)=>{
                return(
            <div key={i} className="col-md-2.4 ml-8 mr-3 mb-4 "> 
                <div  className={`card border-left-${estadistica.borderColor} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${estadistica.borderColor} text-uppercase mb-1`}>{estadistica.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{estadistica.total}</div>
									 </div>
                                <div className="col-auto">
                                    <i className={`fas ${estadistica.icon} fa-2x text-${estadistica.borderColor}`}></i>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )})}
   {props.children}
    </>
    
        
    )
}

export default Estadisticas;