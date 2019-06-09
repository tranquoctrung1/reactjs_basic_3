import React,{ useState, useEffect } from "react";

// Hook chỉ dùng trong thằng function không dùng cho class được

export default function Hook () {
    // count là biến có giá trị trong thằng useState còn setCount có thể là hàm hoặc là biến dùng để thay đổi thằng count
    const [count, setCount] = useState(0);


    // Giống với ComponentDidMouth và ComponentDidUpdate
    useEffect(() =>
    {
        // API of browser 
        document.title = `You clicked ${count} times`;
    })

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
        </div>
    )
}