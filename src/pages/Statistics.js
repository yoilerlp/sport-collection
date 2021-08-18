import React, {  useState, useEffect  } from 'react';
import {  getBestSellingProducts, getSellersMostSales } from '../services/statisticServices'
import Loader from '../components/Loader';

const Statistics = () => {

  const [isLoadin, setLoadin] =  useState(false)
  const [moreProduc, setmoreProduc] = useState({})
  const [leastProduct, setLeastProduct] = useState({})

  const [mostSeller, setMostSeller] = useState({})
  const [leatsSeller, setLeatsSeller] = useState({})


  useEffect(() => {
      (async () => {

        setLoadin(true)
        try {
          
          const produc = await getBestSellingProducts();
          const sells = await getSellersMostSales()

          console.log(produc, sells)

          setmoreProduc(produc.data[0])
          setLeastProduct(produc.data[produc.data.length - 1])

          setMostSeller(sells.data[0])
          setLeatsSeller(sells.data[sells.data.length - 1])


        } catch (error) {
          
        }
        setLoadin(false)

      })()

  }, [])



  if(isLoadin) {
    return (
      <div className="container px-4 mt-3 pt-5" >
        <Loader />
      </div>
    )
  }

  return (
    //
    <div className="container px-4 mt-3 pt-5" >
      <div className="row justify-content-center ">

        <div className="col-12 col-md-6 col-lg-4 my-3">
          <div className="card shadow">
            <div class="card-header bg-success text-white">PRODUCTO MÁS VENDIDO</div>
            <div className="card-body">
              <div class="card-title mb-3 h5"> {moreProduc.name}</div>
              {/* <h5 className="card-title">Usuarios</h5> */}
              <p className="card-text">Valor unitario: <b>${moreProduc.price}</b></p>
              <p className="card-text">Unidades vendidas: <b>{moreProduc.soldUnits}</b> </p>
              <p className="card-text">Totoal generado: <b>${moreProduc.price * moreProduc.soldUnits }</b> </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 my-3">
          <div className="card shadow">
            <div class="card-header bg-secondary text-white">PRODUCTO MENOS VENDIDO</div>
            <div className="card-body">
              <div class="card-title mb-3 h5"> {leastProduct.name}</div>
              {/* <h5 className="card-title">Usuarios</h5> */}
              <p className="card-text">Valor unitario: <b>${leastProduct.price}</b></p>
              <p className="card-text">Unidades vendidas: <b>{leastProduct.soldUnits}</b> </p>
              <p className="card-text">Totoal generado: <b>${leastProduct.price * leastProduct.soldUnits}</b> </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center ">

        <div className="col-12 col-md-6 col-lg-4 my-3">
          <div className="card shadow" >
            <div class="card-header bg-success text-white">VENDEDOR DESTACADO</div>
            <div className="card-body">
              <div class="card-title mb-3 h5">{mostSeller.firstName + mostSeller.lastName }</div>
              <p className="card-text">Email: <b>{mostSeller.email}</b></p>
              <p className="card-text">Record de ventas: <b>$ {mostSeller.balanceInSales}</b></p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 my-3">
          <div className="card shadow" >
            <div class="card-header bg-secondary text-white">VENDEDOR MENOS DESTACADO</div>
            <div className="card-body">
              <div class="card-title mb-3 h5">{leatsSeller.firstName + leatsSeller.lastName}</div>
              <p className="card-text">Email: <b>{leatsSeller.email}</b></p>
              <p className="card-text">Record de ventas: <b>$ {leatsSeller.balanceInSales}</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics;