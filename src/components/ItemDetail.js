import React from "react";
import ItemListCounter from "./ItemListCounter"

function ItemDetail (props) {
    return(
        <div class="container border shadow m-3 pb-3">
        
          {/* <!-- Portfolio Item Heading --> */}
          <h1 class="my-4">Page Heading{props.name}
            <small>Secondary Text{props.author}</small>
          </h1>
        
          {/* <!-- Portfolio Item Row --> */}
          <div class="row">
        
            <div class="col-md-8">
              <img class="img-fluid" src="https://via.placeholder.com/750x500" alt={props.name}/>
            </div>
        
            <div class="col-md-4">
              <h3 class="my-3">Project Description</h3>
              <p>{props.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
              <h3 class="my-3">Project Details</h3>
              {/* <!-- contador de items! --> */}
              <ItemListCounter stock={props.stock} initial={props.initial} price={props.price}/>
              {/* <!-- /contador de items! --> */}
            </div>
          </div>
        </div>
    );
}