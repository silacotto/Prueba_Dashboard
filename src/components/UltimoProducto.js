import{useState, useEffect} from "react"


function UltimoProducto(props) {
	
	const [lastProduct, setLastProduct] = useState([]);

useEffect(() => {
	console.log("moonto el componente Ultimo Producto")
	fetch("http://localhost:5020/api/products/ultimo/producto")
	.then( res => res.json())
	.then( lastProduct => {
	
		setLastProduct(lastProduct.data)
		
	})
	

	.catch( error => console.error(error));

}, []);


    return(

			
      
      			<div className="col-lg-5 mb-2">
							<div className="card shadow mb-4">
								<div className="card-header py-2">
									<h6 className="m-1 font-weight-bold text-primary">Ultimo Producto </h6>
								</div>
								{lastProduct.map((product, i)=>{
									return (
								<div  key={i} className="">
									<div className="last text-center">
										<ul>
											<li><img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"http://localhost:5020/images/"+product.package_image}></img></li>
											<li>id: {product.package_id}</li>
                                            <li>Nombre: {product.package_name}</li>
                                            <li>Precio: {product.package_price}</li>
                                            <li>Descripción: {product.package_description}</li>
										
										</ul>
									</div>  
									
									
								</div>
										 )})}
							</div>
										
							
							
				</div>
				
      
      
    )
}



export default UltimoProducto;