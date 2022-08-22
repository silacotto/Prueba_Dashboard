import{useState, useEffect} from "react"


function UltimoRegistro(props) {
	const [lastRegister, setLastRegister] = useState([]);


useEffect(() => {
	console.log("moonto el componente Ultimo Registro")
	fetch("http://localhost:5020/api/users/ultimo/customer")
	.then( res => res.json())
	.then( last => {
	
		setLastRegister(last.data)
		
	})
	
	.catch( error => console.error(error));

}, []);



    return(

			
      
      			<div className="col-lg-5 mb-2">
							<div className="card shadow mb-4">
								<div className="card-header py-2">
									<h6 className="m-1 font-weight-bold text-primary">Ultimo Cliente Registrado</h6>
								</div>
								{lastRegister.map((register, i)=>{
									return (
								<div  key={i} className="lastp">
									<div className="last">
										<ul>
											<li><img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"http://localhost:5020/images/users/avatars/"+register.userRegister.avatar}></img></li>
											<li>id: {register.user_id}</li>
											<li>Nombre: {register.first_name + " " + register.last_name }</li>
											<li>Email: {register.userRegister.email }</li>
											<li>Nombre usuario: {register.userRegister.user }</li>
											<li>Contacto: {register.phone_number }</li>
										</ul>
									</div>
									
									
								</div>
										 )})}
							</div>
										
							
							
				</div>
				
      
      
    )
}



export default UltimoRegistro;