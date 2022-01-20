import { Link } from "react-router-dom";

const Item = (props) => {
    const pathItem = `/product/${props.id}`

    return (
        <div className="w-25 card m-2" key={props.id}>
        <div className="row justify-content-center g-0">
          <div className="w-100 col-md-4">
            <img src={props.img} className="img-fluid rounded-start" style={{objectFit: "cover"}} alt={props.name}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text"><small className="text-muted"> precio: {props.price}</small></p>
              <Link to={pathItem} type="button" className="btn btn-success rounded-pill">
                Ver detalle
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Item;