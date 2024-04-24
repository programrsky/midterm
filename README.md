# 이하늘 202030326학번
## 정상 작동
---
## 시험 내용
- 어떤 과일을 좋아하나요?

---
### index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
```
- 메인 실행 파일 App.js를 import 해서 App.js를 실행 시킨다.

---

### App.js
```javascript
import { useState } from "react";

export default function Midterm(){
    const [headerText, setHeaderText] = useState('당신은 어떤 과일을 좋아하나요? ');

    const onClick = (fruit) => {
        setHeaderText(`당신은 어떤 과일을 좋아하나요?  ${fruit}`);
    };

    return (
        <div>
            <h1>{headerText}</h1>
            <div className="first_box">
                <button className="st" onClick = {() => onClick('사과')}>사과</button>
                <button className="st" onClick = {() => onClick('오렌지')}>오렌지</button>
                <button className="st" onClick = {() => onClick('바나나')}>바나나</button>
            </div>
        </div>
    )
}
```

- useState기능을 사용해서 반응이 일어났을때 그부분만 로딩하게 합니다.
- onClick으로 버튼을 눌렀을때 사과 오렌지 바나나 중에 선택되어서 fruit 변수에 등록됩니다.

---

### index.css
```css
h1 {
  text-align: center;
}

.first_box {
  text-align: center;
}

.st{
  margin: 5px;
}
```

- 버튼 박스, 버튼 위치, 텍스트 위치를 조정합니다.