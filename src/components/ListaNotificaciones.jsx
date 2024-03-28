
function ListaNotificaciones() {
    return (
        <>
            <div className="card" style={{marginBottom:"15px"}}>
                <div className="card-header bg-secondary bg-gradient bg-opacity-10" >Notificación 1</div>
                <div className="card-body">
                    <h5 className="card-title">Nueva Notificación 1</h5>
                    <p className="card-text">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium.
                    </p>
                </div>
            </div>

            {/*DESPUÉS ELIMINAR ESTAN REPETIDOS */}
            <div className="card" style={{marginBottom:"15px"}}>
                <div className="card-header bg-secondary bg-gradient bg-opacity-10" >Notificación 2</div>
                <div className="card-body">
                    <h5 className="card-title">Nueva Notificación 2</h5>
                    <p className="card-text">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium.
                    </p>
                </div>
            </div>

            <div className="card" style={{marginBottom:"15px"}}>
                <div className="card-header bg-secondary bg-gradient bg-opacity-10" >Notificación 3</div>
                <div className="card-body">
                    <h5 className="card-title">Nueva Notificación 3</h5>
                    <p className="card-text">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ListaNotificaciones