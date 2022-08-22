import { useState, useEffect} from "react";


function TotalFacturacion() {
    
    const [totalFacturacion, setTotalFacturacion] = useState([]);
	const [totalOperaciones, setTotalOperaciones] = useState([]);

    useEffect( () => {
        console.log("monto el componente");
        fetch("http://localhost:5020/api/transactions/total")
            .then( res => res.json())
            .then( dato => {
			
                setTotalFacturacion(dato.data[0].facturacion)
				setTotalOperaciones(dato.data[0].operaciones)
            })
            
        
            .catch( error => console.error(error));

    }, []);
   

    

    return(     
        	
		    <div className="col-md-4 mb-4">
				<div className="card border-left-success shadow h-100 py-2">
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total Operaciones:</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">{totalOperaciones}</div>
								<div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total Facturacion:</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">$ {totalFacturacion}</div>

								</div>
								<div className="col-auto">
								<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
								</div>
						</div>
					</div>
				</div>
			</div>
		
    )
}

export default TotalFacturacion;