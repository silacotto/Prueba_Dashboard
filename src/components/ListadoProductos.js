import { useState, useEffect} from "react";

function ListadoProductos() {

    const [listadoProductos, setListadoProductos] = useState([]);

useEffect(() => {
	console.log("moonto el componente listado Productos")
	fetch("http://localhost:5020/api/products/list")
	.then( res => res.json())
	.then( list => {
	
		setListadoProductos(list.data)
		
	})
	

	.catch( error => console.error(error));

}, []);

    return(

        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Listado Productos</h6>
            </div>
            <div className="card-body">
                <div className="row">
                {listadoProductos.map((producto, i)=>{
                       return(
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                            {producto.package_name}
                            </div>
                        </div>
                    </div>
                            )
                    })}
                </div>
            </div>
        </div>
        </div>
                  

            
    );
}

export default ListadoProductos