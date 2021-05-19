import React from "react";
import { connect } from "react-redux";
import { deleteapidata } from "../Action";
import styles from "./Card.module.css";
class Card extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
        <div className={styles.contant}> 
            <h1 className={styles.heading}>{this.props.TITLE}</h1>
           <p className={styles.para}>{this.props.BODY}</p>
           <div className={styles.buttonbox}><button className={styles.button} onClick={()=>this.props.deleteapi(this.props.INDEX)}>Delete</button></div>
        </div>
    )
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        deleteapi:(item)=>dispatch(deleteapidata(item))
    }
 }
export default connect(null,mapDispatchToProps)(Card);