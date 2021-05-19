import React from "react";
import { connect } from "react-redux";
import { requestapi } from "../Action";
import Card from "../Card";
import styles from "./Page.module.css";
class Page extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getapi();
    }
  
    render(){
        console.log(this.props.Arraydata)
return(
    <div className={styles.container}>
        {this.props.Arraydata.map((item,index)=>{
            return <div key={index} className={styles.contant}>
                <Card 
                INDEX={index}
                BODY={item.body}
                TITLE={item.title}/>
            </div>
        })}
    </div>
)
}
}
const mapDispatchToProps=(dispatch)=>{
   return {
       getapi:()=>dispatch(requestapi())
   }
}
const mapStateToProps=(store)=>{
    return {
        Arraydata:store.dataarray,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Page);