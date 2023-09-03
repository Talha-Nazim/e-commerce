// import StateDemo from "./StateDemo";
// import FAQCard from "./FAQCard";

// export default function Home() {
//   return (
    
//     <div>
//       {/* <Link href = './Search/page'>
//       <Search/></Link>
//       // useState & useRoute
//       // dom, virtual dom &  */}
//       {/* <StateDemo />
//       <h1>hhhhh</h1> */}
//       <FAQCard/>
//     </div>
    
//   )
// }

// PRACTICE


"use client";
import Header from "./Header";
import { createContext, useReducer} from "react";

const SectionContext = createContext(0);
let initialState = 0;
const reducer = (state:any , action:any) => {
  if(action.type == "header"){
    return state + 1;
  }
  if(action.type == "lesson"){
    return state + 1;
  }
}
export default function Home() {
  const [state , dispatch] = useReducer(reducer , initialState);
  return (
    <SectionContext.Provider value={state}>
      <div>
        <div>Hello Q2</div>
        <Header />
        <div className="flex p-x-8">
      <button className="p-2 border rounded-lg bg-green-400 " onClick={()=>{dispatch({type: "header"})}}>Header</button>
      <button className="p-2 border rounded-lg bg-green-400 " onClick={()=>{dispatch({type: "lesson"})}}>Lesson</button>
      </div>
      </div>
    </SectionContext.Provider>
  );
}

export { SectionContext };