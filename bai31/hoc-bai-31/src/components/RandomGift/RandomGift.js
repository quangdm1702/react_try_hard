import React, { useRef, useState } from 'react';

const RandomGift = () => {
  const gifts = [
    "Điện thoại", "Máy tính", "Xe máy", "Ô tô", "Đồng hồ"
  ];

  const [result, setResult] = useState("");
  const counterRef = useRef(0);
  const handleRandom = () => {
    if(counterRef.current < 3) {
      const random = Math.floor(Math.random()*gifts.length);
      setResult(gifts[random]);
      counterRef.current+=1;
    }
    else {
      alert('Bạn đã hết lượt');
    }
  
  }

  return (
    <>
      <button onClick={handleRandom}>Random</button>
      <div>Món quà của bạn: {result}</div>
    </>
  );
};

export default RandomGift;