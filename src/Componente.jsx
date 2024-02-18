import { useState } from "react";



export function Contador(){
    const [status, setStatus ] =  useState(0);

    function incrementar(){
       setStatus(status + 1)
    }

    function decrementar (){
        setStatus(status - 1 )
    }


    return (
       <>
          <h1>Status : {status} </h1> 
          <div>
                <button onClick={incrementar}>Incrementar</button>
                <button onClick={decrementar}>Decrementar</button>
          </div>
       </>
    );
}