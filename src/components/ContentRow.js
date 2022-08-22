import React from "react"
import { useState, useEffect} from "react";

import CategoriesDB from './CategoriesDB';
import UltimoRegistro from "./UltimoRegistro";
import UltimoProducto from "./UltimoProducto";
import ListadoProductos from "./ListadoProductos";
import Estadisticas from "./Estadisticas";


function ContentRow(props) {
    const [totalFacturacion, setTotalFacturacion] = useState([]);
    const [totalOperaciones, setTotalOperaciones] = useState([]);
    const [totalClientes, setTotalClientes] = useState([]);
    const [totalPaquetes, setTotalPaquetes] = useState([]);
    const [totalUsuarios, setTotalUsuarios] = useState([]);


    useEffect( () => {
        console.log("monto el componente total Facturacion");
        console.log("monto el componente total Operaciones");
        fetch("http://localhost:5020/api/transactions/total")
            .then( res => res.json())
            .then( dato => {
				setTotalFacturacion(dato.data[0].facturacion)
                setTotalOperaciones(dato.data[0].operaciones)
			})
            .catch( error => console.error(error));
        }, []);
   
    useEffect( () => {
        console.log("monto el componente total clientes");
        fetch("http://localhost:5020/api/users/customers")
                .then( res => res.json())
                .then( dato => {
                    setTotalClientes(dato.meta.total)
                    
                })
                .catch( error => console.error(error));
            }, []);
            console.log(totalClientes)
    	

    useEffect( () => {
        console.log("Se montó el componente TotalPaquetes");
        fetch("http://localhost:5020/api/products/total")
            .then( res => res.json())
            .then( dato => {
				setTotalPaquetes(dato.data[0].products)
			})            
    		.catch( error => console.error(error));

    }, []);  

    useEffect( () => {
        console.log("monto el componente Total Usuarios");
        fetch("http://localhost:5020/api/users/register")
            .then((res) => res.json())
            .then((data) => {
                setTotalUsuarios(data.meta.total)
            })
            .catch( error => console.error(error));
    }, []);

    let estadisticas =
    [
        {
            title: "Total Facturacion",
            borderColor: "success",
            icon: "fa-dollar-sign",
            total: totalFacturacion
        },
        {
            title: "Total Clientes",
            borderColor: "primary",
            icon: "fa-user-check",
            total: totalClientes 
        },
        {
            title: "Total Productos",
            borderColor: "warning",
            icon: "fa-clipboard-list",
            total: totalPaquetes 
       },
       {
            title: "Total Operaciones",
            borderColor: "danger",
            icon:"fa-solid fa-credit-card",
            total: totalOperaciones
        },
        {
            title: "Total Usuarios",
            borderColor: "info",
            icon: "fa-solid fa-user",
            total: totalUsuarios 
        },
    ]

   
    
    return(
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">Dashboard Turisteando</h1>
			</div>
            <div className="row">
                <Estadisticas estadisticas={estadisticas}/>  
                <UltimoRegistro/>    
                <UltimoProducto/>   
                <div className="row">    
                <CategoriesDB />
                <ListadoProductos/>
                </div>
            </div>
        </div>
 
    
      
    )
}

export default ContentRow;