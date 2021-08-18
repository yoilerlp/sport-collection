import React, { useState, useEffect } from "react";
import swal from 'sweetalert'

import Loader from "../components/Loader";
import { getAllSales } from '../services/salesServices'
const Sales = () => {
  const [sales, setSales] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {

      try {      
        setLoading(true)
        const response = await getAllSales();
        setSales(response.data)
      } catch (error) {
         alertError(error.message)
      }
      finally {
        setLoading(false)
      }
    })()


  },[])

  const alertError = msg => {
    swal({
      text: msg,
      icon: "error",
      button: "Aceptar"
    })
  }
  
  return (
    //
    <div className="container px-4 mt-3 pt-5">
      <div className="d-flex justify-content-between my-4">
        <h1 className="navbar-brand">Resumen de ventas</h1>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="bg-secondary bg-gradient">
              <th className="text-light">N.</th>
              <th className="text-light">Descripción</th>
              <th className="text-light">Valor unitario</th>
              <th className="text-light">Cantidades</th>
              <th className="text-light">Valor total</th>
              <th className="text-light">Venedor(a)</th>
              <th className="text-light">Fecha</th>
            </tr>
          </thead>
          <tbody>
           { sales.length > 0 && ( 
              sales.map((sale, index) => {
                return (
                  <tr key={index + 1}>
                    <th>{index + 1}</th>
                    <th>{sale.productName}</th>
                    <th>${sale.valuePerUnit}</th>
                    <th>{sale.quantities}</th>
                    <th>${sale.totalValue}</th>
                    <th>{sale.sellerName}</th>
                    <th>{new Date(sale.date).toLocaleDateString()}</th>
                  </tr>
                )
              })
             )}
            {isLoading && <Loader />}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
