export const CartApp = () => {
    return (
        <>
            <div className="container">
                <h1>hello</h1>
                <div className="row">


                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Teclado mecanico Soul</h5>
                                <p className="text">
                                    teclado mecanico con luces 546 luces terclas intercambiables modelo446+464
                                </p>
                                <p className="text">
                                    $1000
                                </p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Tv led Samgun =g 55</h5>
                                <p className="text">
                                    televisor led 55 pulgadas
                                </p>
                                <p className="text">
                                    $100000
                                </p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Auriculares noga</h5>
                                <p className="text">
                                    auriculares inahlambricos noga ujkisdjkbs
                                </p>
                                <p className="text">
                                    $85264
                                </p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>


                    <div className="my-4 w-50">
                        <h3>Carro Compra</h3>
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th>Eliminar</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Producto</td>
                                    <td>Precio</td>
                                    <td>Cantidad</td>
                                    <td>Total</td>
                                    <td>Eliminar</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3" className="text-end fw-bold">Total</td>
                                    <td colSpan="2" className="text-start fw-bold"> $ 564656</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div>

            </div>
        </>
    )
}