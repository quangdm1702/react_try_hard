import React, { useEffect, useReducer, useRef } from "react";

const init = [
  {
    id: 1,
    content: "Thứ 2 học HTML",
  },
  {
    id: 2,
    content: "Thứ 3 học CSS",
  },
  {
    id: 3,
    content: "Thứ 4 học JS",
  },
];

const reducer = (state, action) => {
  // action: CREATE, DELETE
  console.log(state, action);
  switch (action.type) {
    case "CREATE":
      return [
        ...state,
        {
          id: Date.now(),
          content: action.value,
        },
        // return về state dẫn đến việc data được cập nhật lại
      ];
    case "DELETE":
      const newState = state.filter((todo) => todo.id !== action.id); // lọc ra id khác với id người dùng gửi lên
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, init);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.inputTodo.value;
    if (value) {
      dispatch({
        type: "CREATE",
        value: value,
      });

      inputRef.current.value = "";
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} name="inputTodo" />
        <button>Thêm Todo</button>
      </form>
      {todos.length > 0 && (
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              {item.content}
              <button onClick={() => handleDelete(item.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Todos;
