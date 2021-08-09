import React, { useEffect, useState, useRef } from 'react'

import iconEdit from '../assets/images/iconEdit.svg';
import iconTrash from '../assets/images/iconTrash.svg';
import { createUser, deleteUser, getAllUsers, updateUser } from '../services/usersServices';


export default function Users() {
	const [users, setUsers] = useState([])
	const [user, setUser] = useState({})
	const [isUpdating, setUpdating] = useState(false)
	const [isLoading, setLoading] = useState(false)

	const closeModalUserRef =  useRef(null)


	const handlerOnChange = (event) => {
		const { name, value } = event.target;
		console.log(name, value)
		setUser(oldData => ({
			...oldData,
			[name]: value
		}))
	}


	const handlerSubmit = async (event) => {
		event.preventDefault();
		setLoading(true)
		if (isUpdating) {
			await updateUser(user._id, user)
		}
		else {
			const newUser = {
				...user,
				password2: user.password,
				state: 1
			}
			const response = await createUser(newUser)
			console.log(newUser)
			console.log(response)
		}
		setLoading(false)
		closeModalUserRef.current.click();
		getUsers()
	}


	const getUsers = () => {
		(async () => {
			setLoading(true)
			const { data } = await getAllUsers();
			console.log(data)
			setUsers(data)
			setLoading(false)
		})()
	}

	const handlerDeleteUser = async (userId) => {
		// eslint-disable-next-line no-restricted-globals
		if (confirm("¿Desea eliminar este Usuario ?")) {
			await deleteUser(userId)
			setUsers(users.filter(u => u._id !== userId))
		}
	}

	useEffect(() => {
		
		getUsers()
	}, [])
	return (
		<div className="container px-4 mt-3 pt-5" >

			<div className="d-flex justify-content-between my-4">
				<h1 className="navbar-brand">Gestionar usuarios</h1>
				<button onClick={() => { setUpdating(false) }} type="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Crear nuevo</button>
			</div>

		
			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<form onSubmit={handlerSubmit}>
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="text-success">{isUpdating ? "Actualizar datos de usuario" : "Crear nuevo usuario"}</h5>
								<button ref={closeModalUserRef} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">


								<div className="row mb-3">
									<div className="col-md">
										<div>
											<label for="nameUser" className="col-form-leabel">Nombre:</label>
											<input onChange={handlerOnChange} value={user.firstName} required name="firstName" type="text" className="form-control" id="nameUser" placeholder="Nombre"></input>
										</div>
									</div>
									<div className="col-md">
										<div>
											<label for="lastNameUser" className="col-form-leabel">Apellido:</label>
											<input onChange={handlerOnChange} value={user.lastName} required name="lastName" type="text" className="form-control" id="lastNameUser" placeholder="Apellido(s)"></input>
										</div>
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-md">
										<label for="idUser" className="col-form-leabel">Identificación:</label>
										<input type="number" className="form-control" id="idUser" placeholder="Identificación"></input>
									</div>
									<div className="col-md">
										<div>
											<label for="emailUser" className="col-form-leabel">Email:</label>
											<input onChange={handlerOnChange} value={user.email} required name="email" type="text" className="form-control" id="emailUser" placeholder="email@domain.com"></input>
										</div>
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-md">
										<div>
											<label for="rollUser" className="col-form-leabel">Rol:</label>
											<select onChange={handlerOnChange} value={user.rol} name="rol" required class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
												<option selected>Seleccione el Rol</option>
												<option value="1">Administrador</option>
												<option value="2">Vendedor</option>
											</select>
										</div>
									</div>
									<div className="col-md">
										<div>
											<label for="passUser" className="col-form-leabel">Contraseña:</label>
											<input min={6} max={30} onChange={handlerOnChange} value={user.password} required name="password" type="text" className="form-control" id="passUser" placeholder="Contraseña"></input>
										</div>
									</div>
								</div>


							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
								<button type="submit" className="btn btn-success">{isUpdating ? "Actualizar" : "Guardar"}
									{isLoading && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>



			<div className="table-responsive">
				<table className="table table-bordered table-hover">
					<thead>
						<tr className="bg-secondary bg-gradient">
							<th className="text-light">N.</th>
							<th className="text-light">Nombre</th>
							<th className="text-light">Apellido</th>
							<th className="text-light">Email</th>
							<th className="text-light">Rol</th>
							<th className="text-light">Acción</th>
						</tr>
					</thead>
					<tbody>
						{
							users.length > 0 && users.map((user, index) => {
								return (
									<tr key={index}>
										<th>{index + 1}</th>
										<th>{user.firstName}</th>
										<th>{user.lastName}</th>
										<th>{user.email}</th>
										<th>{user.rol}</th>
										<th className="text-center">
											<img onClick={() => {
												setUpdating(true)
												setUser(user)
											}} className="iconActions" src={iconEdit} alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" />
											<img onClick={() => handlerDeleteUser(user._id)} className="iconActions" src={iconTrash} alt="..." />
										</th>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
			{isLoading && (
				<div class="d-flex justify-content-center">
					<div class="spinner-border" role="status">
					</div>
				</div>
			)
			}
		</div>
	)
}
