/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useRef } from 'react'

import iconEdit from '../assets/images/iconEdit.svg';
import iconTrash from '../assets/images/iconTrash.svg';
import { getAllProducts, createProduct, updateProduct, deleteProduc } from '../services/productsServices';

export default function Articles() {

	const [dataForm, setDataForm] = useState({});
	const [products, setProducts] = useState([]);
	const [isUpdating, setUpdating] = useState(false)
	const [isLoading, setLoading] = useState(false)


	const closeModalRef = useRef()

	const handlerOnChange = (event) => {
		const { name, value } = event.target;
		setDataForm(oldData => ({
			...oldData,
			[name]: value
		}))
	}

	const handlerSubmit = async (event) => {
		setLoading(true)
		event.preventDefault();
		if (isUpdating) {
			await updateProduct(dataForm._id, dataForm)
		}
		else {
			await createProduct(dataForm)
		}
		setLoading(false)
		closeModalRef.current.click();
		getProducts()
	}

	const getProducts = () => {
		(async () => {
			setLoading(true)
			const { data } = await getAllProducts()
			setProducts(data)
			setLoading(false)
		})();

	}

	const handlerDeleteProduct = async (productId) => {
		if (confirm("¿Desea eliminar este producto ?")) {
			await deleteProduc(productId)
			setProducts(products.filter(p => p._id !== productId))
		}
	}

	useEffect(() => {
		getProducts();
	}, [])
	return (
		<div className="container px-4 mt-3 pt-5" >

			<div className="d-flex justify-content-between my-4">
				<h1 className="navbar-brand">Gestionar artículos</h1>
				<button onClick={() => {
					setDataForm({
						name: '',
						gender: '',
						price: 0,
						description: '',
						units: 0,
					})
					setUpdating(false)
				}} type="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Registrar nuevo</button>
			</div>

			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<form action="#" onSubmit={handlerSubmit}>
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="text-success"> {isUpdating ? "Actualizar artículo" : "Registrar nuevo artículo"} </h5>
								<button ref={closeModalRef} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">

								<div className="row mb-3">
									<div className="col-md">
										<div>
											<label for="refArticle" className="col-form-leabel">Descripcion:</label>
											<input value={dataForm.description} onChange={handlerOnChange} name="description" required type="text" className="form-control" id="refArticle" placeholder="Descripcion"></input>
										</div>
									</div>
									<div className="col-md">
										<div>
											<label for="prductName" className="col-form-leabel">Nombre:</label>
											<input value={dataForm.name} onChange={handlerOnChange} name="name" required type="text" className="form-control" id="prductName" placeholder="Producto"></input>
										</div>
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-md">
										<label for="genArticle" className="col-form-leabel">Género:</label>
										<input value={dataForm.gender} onChange={handlerOnChange} name="gender" type="text" className="form-control" id="genArticle" placeholder="Género"></input>
									</div>
									<div className="col-md">
										<div>
											<label for="sizeArticle" className="col-form-leabel">Precio:</label>
											<input value={dataForm.price} onChange={handlerOnChange} name="price" required type="number" className="form-control" id="sizeArticle" placeholder="Precio"></input>
										</div>
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-md">
										<div>
											<label for="existenceArticle" className="col-form-leabel">Existencias:</label>
											<input value={dataForm.units} onChange={handlerOnChange} name="units" required type="number" className="form-control" id="existenceArticle" placeholder="Existencias"></input>
										</div>
									</div>
									<div className="col-md">

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
							<th className="text-light">Referencias</th>
							<th className="text-light">Producto</th>
							{/*<th className="text-light">Género</th>
							<th className="text-light">Talla</th>*/}
							<th className="text-light">Existencias</th>
							<th className="text-light">Precio</th>

							<th className="text-light">Acción</th>
						</tr>
					</thead>
					<tbody>
						{products.length > 0 && products.map((product, index) => {
							return (
								<tr key={index}>
									<th>{index + 1}</th>
									{<th>{product._id && product._id.substr(0, 8)}</th>}
									<th>{product.name}</th>
									{/*<th>GENERO</th>
									<th>unica</th>*/}
									<th>{product.units}</th>
									<th>{product.price}</th>
									<th className="text-center">
										<img onClick={() => {
											setUpdating(true)
											setDataForm({
												...product,
												gender: '',
											})
										}} className="iconActions" src={iconEdit} alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" />
										<img onClick={() => {
											handlerDeleteProduct(product._id)
										}} className="iconActions" src={iconTrash} alt="..." />
									</th>
								</tr>
							)
						})}

					</tbody>
				</table>
			</div>
			{isLoading && (<div class="d-flex justify-content-center">
				<div class="spinner-border" role="status">
				</div>
			</div>)}
		</div>
	)
}
