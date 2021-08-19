/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useRef, useContext } from 'react'
import swal from 'sweetalert'
import {  authCotext } from '../App';
import Loader from '../components/Loader';
import iconEdit from '../assets/images/iconEdit.svg';
import iconTrash from '../assets/images/iconTrash.svg';
import iconCart from '../assets/images/iconCart.svg';
import { getAllProducts, createProduct, updateProduct, deleteProduc, sellProduct } from '../services/productsServices';

import ReactTooltip from 'react-tooltip';

export default function Articles() {

	const [dataForm, setDataForm] = useState({});
	const [products, setProducts] = useState([]);
	const [isUpdating, setUpdating] = useState(false)
	const [isLoading, setLoading] = useState(false)
	const [quantitySell, setQuantitySell] = useState(0)

	const { userAuth } = useContext(authCotext)


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
			await alertUpdate()
		}
		else {
			await createProduct(dataForm)
			alertCreate()
		}
		setLoading(false)
		closeModalRef.current.click();
		getProducts()
	}


	const handlerSellProduct = async (event) => {
		event.preventDefault();

		let sellProduc = await swal({
			// title: "Confirmar compra!!",
			text: "¿Desea confirmar esta compra?",
			icon: "success",
			buttons: ["Cancelar", "Confirmar"],
		})

		if(sellProduc) {
			const sell = {
				user: userAuth,
				product: dataForm,
				quantities: +quantitySell
			}
			try {
				const response = await sellProduct(sell)
				alertConfirmSale()
				console.log(response)
				getProducts()
			} catch (error) {
				alertError("Error durante la venta, intentelo de nuevo")
			}
		}
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
		let willDelete = await swal({
			title: "Eliminar",
			text: "¿Está seguro que desea eliminar este producto?",
			icon: "error",
			buttons: ["Cencelar", "Eliminar"],
		})

		if (willDelete) {
			await deleteProduc(productId)
			setProducts(products.filter(p => p._id !== productId))
		}
	}

	const alertCreate = () => {
		swal({
			text: "Ha creado un producto",
			icon: "success",
			button: "Aceptar",
			//timer: 1500,
		})
	}

	const alertError = msg => {
		swal({
			text: msg,
			icon: "error",
			button: "Aceptar"
		})
	}


	const alertUpdate = async () => {
		let willUpdate = await swal({
			text: "Seguro deseas actualizar la informacion de este producto ?",
			icon: "warning",
			buttons: ["Cancelar", "Actualizar"],
			dangerMode: true,
		})

		if (willUpdate) {
			setLoading(true)
			try {
				await await updateProduct(dataForm._id, dataForm)
				await swal({
					text: "Ha editado un producto",
					icon: "success",
					button: "Aceptar",
				})
			} catch (error) {
				alertError("Error actualizando producto, revisa los datos ingresados")
			}
		} else {
			swal("Actualizacion descartada");
		}

	}


	const alertConfirmSale = () => {
		swal({
			title: "Compra confirmada!!",
			text: "Venta exitosa",
			icon: "success",
			button: "Aceptar",
		})
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

			{/*  INICIO ---- Modal VENTAS */}
			<div className="modal fade" id="saleModal" tabindex="-1" aria-labelledby="saleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<form action="#" className="col-12" onSubmit={handlerSellProduct}>
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="text-success"> Vender producto</h5>
								<button ref={closeModalRef} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">

								<div className="row mb-3">
									<div className="col-md">
										<div>
											<label for="descriptionArticle" className="col-form-leabel">Descripción:</label>
											<input value={dataForm.description} type="text" className="form-control" id="descriptionArticle"></input>
										</div>
									</div>
								</div>

								<div className="row mb-3">
									<div className="col-md">
										<div>
											<label for="quantityArticle" className="col-form-leabel">Cantidad:</label>
											<input max={dataForm.units} min={1} name="quantities" required type="number" value={quantitySell}
											onChange={(e) => {
												setQuantitySell(e.target.value)
											}}
											 className="form-control" id="quantityArticle" placeholder="Cantidad"></input>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
								<button type="submit" className="btn btn-success">Confirmar compra
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			{/*  FIN ---- Modal VENTAS */}


			<div className="table-responsive">
				<table className="table table-bordered table-hover">
					<thead>
						<tr className="bg-secondary bg-gradient">
							<th className="text-light">N.</th>
							<th className="text-light">Descripción</th>
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
									<td>{index + 1}</td>
									{<td>{product.description && product.description.substr(0, 50)}</td>}
									<td>{product.name}</td>
									{/*<th>GENERO</th>
									<th>unica</th>*/}
									<td>{product.units}</td>
									<td>{product.price}</td>
									<td className="text-center">
										<>
										{ userAuth.rol === 1 && 
										<>
										<img
											data-tip
											data-for="btnTooltipEdit"
											onClick={() => {
												setUpdating(true)
												setDataForm({
													...product,
													gender: '',
												})
											}} className="iconActions" src={iconEdit} alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" />

										<ReactTooltip
											id="btnTooltipEdit"
											place="bottom"
											type="dark"
											effect="solid">
											Editar producto
										</ReactTooltip>

										<img
											data-tip
											data-for="btnTooltipTrash"
											onClick={() => {
												handlerDeleteProduct(product._id)
											}} className="iconActions" src={iconTrash} alt="..." />

										<ReactTooltip
											id="btnTooltipTrash"
											place="bottom"
											type="error"
											effect="solid">
											Eliminar producto
										</ReactTooltip>
										</>
										}

										{ userAuth.rol === 2 &&
											<>
											<img
											data-tip
											data-for="btnTooltipCart"
											onClick={() => {
												setDataForm({
													...product,
												})
												setQuantitySell(0)
											}} className="iconActions" src={iconCart} alt="..." data-bs-toggle="modal" data-bs-target="#saleModal" />

										<ReactTooltip
											id="btnTooltipCart"
											place="bottom"
											type="dark"
											effect="solid">
											Vender producto
										</ReactTooltip>
										</>
										}

									</>
										
									</td>
								</tr>
							)
						})}

					</tbody>
				</table>
			</div>
			{isLoading && <Loader />}
		</div>
	)
}
