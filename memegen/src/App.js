import React from "react";
import Header from "./Header";
import Form from "./Form";
//import Box from "./Box";
//import boxesData from "./boxes-data";

export default function App(){

    //const[squares, setSquares] = React.useState(boxesData)
    //const squareElements = squares.map(square=>(
        //<Box  key={square.id} on={square.on} />
    //))
    return(
        <div>
            <Header />
            <Form />
        </div>
        //<main>{squareElements}</main>
    )
}