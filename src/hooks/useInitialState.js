import { useState } from "react";


const useInitialState = (data) => {
  const [estado, setEstado] = useState(data)
  return estado;
};


export default useInitialState;