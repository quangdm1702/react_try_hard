import React, { useEffect, useReducer } from "react";

const init = {
  products: [],
  loading: true,
};

// data = init : giá trị khởi tạo ban đầu

const reducer = (state, action) => {
  if (action.type === "SUCCESS") {
    return {
      // nhận dữ liệu từ dispatch gửi lên sau đó cập nhật lại cho state = init
      products: action.products,
      loading: false,
    };
  } else {
    return state;
  }
};

const ProductReducer = () => {
  const [data, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    const fetchApi = () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "SUCCESS",
            products: data.products,
          });
        });
    };
    setTimeout(() => {
      fetchApi();
    }, 3000);
  }, []);
  return (
    <>
      {data.loading ? (
        <>Đang tải dữ liệu</>
      ) : (
        <ul>
          {data.products.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductReducer;
