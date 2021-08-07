import React from 'react'

import iconEdit from '../assets/images/iconEdit.svg';
import iconTrash from '../assets/images/iconTrash.svg';

export default function Articles() {
	return (
		<div className="container px-4 mt-3 pt-5" >

			<div className="d-flex justify-content-between my-4">
				<h1 className="navbar-brand">Gestionar artículos</h1>
				<button type="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Registrar nuevo</button>
			</div>

			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="text-success">Registrar nuevo artículo</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">


							<div className="row mb-3">
								<div className="col-md">
									<div>
										<label for="refArticle" className="col-form-leabel">Referencia:</label>
										<input type="text" className="form-control" id="refArticle" placeholder="Referencia"></input>
									</div>
								</div>
								<div className="col-md">
									<div>
										<label for="prductName" className="col-form-leabel">Producto:</label>
										<input type="text" className="form-control" id="prductName" placeholder="Producto"></input>
									</div>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-md">
									<label for="genArticle" className="col-form-leabel">Género:</label>
									<input type="text" className="form-control" id="genArticle" placeholder="Género"></input>
								</div>
								<div className="col-md">
									<div>
										<label for="sizeArticle" className="col-form-leabel">Talla:</label>
										<input type="text" className="form-control" id="sizeArticle" placeholder="Talla"></input>
									</div>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-md">
									<div>
										<label for="existenceArticle" className="col-form-leabel">Existencias:</label>
										<input type="text" className="form-control" id="existenceArticle" placeholder="Existencias"></input>
									</div>
								</div>
								<div className="col-md">

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
							<th className="text-light">Referencias</th>
							<th className="text-light">Producto</th>
							<th className="text-light">Género</th>
							<th className="text-light">Talla</th>
							<th className="text-light">Existencias</th>
							<th className="text-light">Acción</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>G550</th>
							<th>Gorra</th>
							<th>Mujer</th>
							<th>unica</th>
							<th>10</th>
							<th className="text-center">
								<img className="iconActions" src={iconEdit} alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" />
								<img className="iconActions" src={iconTrash} alt="..." />
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
