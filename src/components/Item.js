const Item = (props) => {
    return (
        <div class="card w-50 mb-3" key={props.id}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={props.img} class="img-fluid rounded-start" alt={props.name}/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{props.name}</h5>
              <p class="card-text">{props.description}</p>
              <p class="card-text"><small class="text-muted">{props.price}</small></p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Item;