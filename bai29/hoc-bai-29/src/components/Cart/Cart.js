import React, { useState } from "react";
import "./Cart.scss";

const Cart = () => {
  const unitPrice = 120000;
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    const updateQuantity = parseInt(e.target.value);
    setQuantity(updateQuantity);
  };
  return (
    <>
      <table className="cart">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Giày thể thao nam cao cấp</td>
            <td>
              <input
                type="number"
                min={1}
                defaultValue={quantity}
                onChange={handleChange}
              />
            </td>
            <td>{unitPrice}đ</td>
            <td>{unitPrice * quantity}đ</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
