import React from 'react';



const Button = (props)=>(

    <button style={{height:'30px'}} {...props}>{props.children}</button>
)

export default Button;