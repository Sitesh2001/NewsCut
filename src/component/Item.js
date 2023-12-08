import React,{Component} from 'react';

export class Item extends Component{

  render(){
    let {title,description,imgurl} = this.props;
    let desc = description.slice(0,100)
    
  //  console.log(description.slice(0,1))
    return(
      <div>
      <div className="card shadow-sm" style={{width: "18rem"}}>
  <img src={imgurl} className="card-img-top md-50" style={{width: "17rem",height:"200px",margin:"auto",marginTop:"7px"} } alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>

    <p className="card-text">{desc} <span>...Read More</span></p>
  </div>
</div>
      </div>
    )
  }
}
export default Item
