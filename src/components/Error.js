import {useRouteError} from "react-router-dom";
const Error=()=>{
  const err=useRouteError();
  const {status,statusText}=err;
  return (
   <>
   <h1>Oops!Something went wrong.</h1>
   <h2>{`${status}:${statusText}`}</h2>
   </>
  )
}
export default Error;