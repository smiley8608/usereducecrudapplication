import { getValue } from "@testing-library/user-event/dist/utils";
import { useReducer, useState } from "react";

// export const TodoContext = createContext({});
const initialState :any={
  
}
const reducer = (state: any, action: any) => {
  switch (action.type) {
    
    
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, iscompleted: false }],
      };
    case "toogle-todo":
      return {
        todos: state.todos.map((value: any, index: any) =>
          index === action.index
            ? { ...value, iscompleted: !value.iscompleted }
            : value
        ),
      };
      case 'delete-todo':
        return{
          todos:state.todos.filter((value:any,index:any)=>index !==action.index)
        }
    default:
      return state;
  }
};
const UseReducer = () => {
  const [text, setText] = useState<any>();
 
  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: []
  });

  const submitHandler = (e: any) => {
    
    e.preventDefault();
    console.log("run");    


    dispatch({ type: "add-todo", text });
    setText("");

    // console.log(todos);
  };

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <form onSubmit={submitHandler}>
          <label>Enter book name :</label>
          <input
            type={"text"}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Clickme</button>
        </form>

        <div className=" ml-6">
          {todos &&
            todos.map((value: any, index: any) => {
              return (
                <div
                  key={index}
                  style={{
                    textDecoration: value.iscompleted ? "line-through" : "",
                  }}
                  onClick={() => dispatch({ type: "toogle-todo", index })}
                  onDoubleClick={()=>dispatch({type:'delete-todo',index})}
                >
                  {" "}
                  {value.text}
                </div>
              );
            })}
        </div>
        <div>
          {/* {
          JSON.stringify(todos,null,2)
         }  */}
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
