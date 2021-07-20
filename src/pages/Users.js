import React from 'react'

import iconEdit from '../assets/images/iconEdit.svg';
import iconTrash from '../assets/images/iconTrash.svg';




export default function Users() {
	return (
		<div className="container px-4 mt-3 pt-5" >

			<div className="d-flex justify-content-between my-4">
				<h1 className="navbar-brand">Gestionar usuarios</h1>
				<button type="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Crear nuevo</button>
			</div>

			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="text-success">Crear nuevo usuario</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">


							<div className="row mb-3">
								<div className="col-md">
									<div>
										<label for="nameUser" className="col-form-leabel">Nombre:</label>
										<input type="text" className="form-control" id="nameUser" placeholder="Nombre"></input>
									</div>
								</div>
								<div className="col-md">
									<div>
										<label for="lastNameUser" className="col-form-leabel">Apellido:</label>
										<input type="text" className="form-control" id="lastNameUser" placeholder="Apellido(s)"></input>
									</div>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-md">
									<label for="idUser" className="col-form-leabel">Identificación:</label>
									<input type="number" className="form-control" id="idUser"  placeholder="Identificación"></input>
								</div>
								<div className="col-md">
									<div>
									<label for="emailUser" className="col-form-leabel">Email:</label>
									<input type="text" className="form-control" id="emailUser" placeholder="email@domain.com"></input>
									</div>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-md">
									<div>
									<label for="rollUser" className="col-form-leabel">Rol:</label>
									<select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
										<option selected>Seleccione el Rol</option>
										<option value="1">Administrador</option>
										<option value="2">Vendedor</option>
									</select>
									</div>
								</div>
								<div className="col-md">
									<div>
									<label for="passUser" className="col-form-leabel">Contraseña:</label>
									<input type="text" className="form-control" id="passUser" placeholder="Contraseña"></input>
									</div>
								</div>
							</div>


						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
							<button type="button" className="btn btn-success">Guardar</button>
						</div>
					</div>
				</div>
			</div>

			

			<div className="table-responsive">
				<table className="table table-bordered table-hover">
					<thead>
						<tr className="bg-secondary bg-gradient">
							<th className="text-light">Identificación</th>
							<th className="text-light">Nombre</th>
							<th className="text-light">Apellido</th>
							<th className="text-light">Email</th>
							<th className="text-light">Rol</th>
							<th className="text-light">Acción</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>100987376</th>
							<th>Claudia</th>
							<th>Arevalo</th>
							<th>claudia@sport.com.co</th>
							<th>Administrador</th>
							<th className="text-center">
								<img className="iconActions" src={ iconEdit } alt="..."  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"/>
								<img className="iconActions" src={ iconTrash } alt="..." />
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
