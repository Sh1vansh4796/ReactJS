export default function Doubledice(){
    const num1 = Math.floor(Math.random()*6 + 1 );
    const num2 = Math.floor(Math.random()*6 + 1 );
    const styles = {color : "purple" , fontSize : "40px" }
    if(num1 == num2){
    return(
        
        <div className="dies" style={styles}>
            <h3>You Win</h3>
            
                 <div>Num1 : {num1}</div>
                <div>Num2 : {num2}</div>
            
        </div>)
    }
    else{ 
        return (
        <div className="dies" style={styles}>
            <h3>You Lose</h3>
            
                <div>Num1 : {num1}</div>
                <div>Num2 : {num2}</div>
                
                
            
        </div>
    )
}
}