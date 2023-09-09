

export const CatalogItem = ({ handler, id, name, description, price }) => {

    const onAddProduct = (product) => {
        console.log(product);
        handler(product);
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> {name}</h5>
                    <p className="text">
                        {description}
                    </p>
                    <p className="text">
                        $ {price}
                    </p>
                    <button className="btn btn-primary" onClick={() => onAddProduct({id, name, description, price })}>Agregar</button>
                </div>
            </div>

        </>
    )
}
