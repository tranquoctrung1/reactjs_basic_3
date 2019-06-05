import React from 'react';
import './App.css';

import url from './img/img.png';
import ImageComponent from './component/ImageComponent';
import HigherComponent from './component/HigherComponent';

//Đây là higher-order-component
// HOC dùng để chúng ta gộp nhiều Component lại với nay để chúng ta dể test, dể kiểm soát, dể tái sữ dụng, làm cho code của mình ngắn gọn hơn
// Cấu trúc HOC là tạo ra 1 component với dạng hàm(function) và sau đó trả về 1 component(class or function tùy vào từng trường hợp) trong component trả về đó chúng ta sẽ dàn layout mà chúng ta muốn và có thể chỉnh sữa chúng thông qua các tham số của component hàm làm cho dynamic hơn :) 
// Dòng code ở dưới mô tả cách sữ dụng của HOC

const DemoHigherComponent = HigherComponent(ImageComponent,0.9);

function App() {
  return (
    <div className="App">
      {/* mặc dù không có props là url nhưng nó cũng sẽ tạo ra props là url(tạo trong component trả về )  */}
      <DemoHigherComponent url={url}></DemoHigherComponent>
    </div>
  );
}

export default App;
