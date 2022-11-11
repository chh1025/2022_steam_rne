import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Upload(props) {
    const navigate = useNavigate();

    const move = () => {
        // 두번재 인자의 state 속성에 원하는 파라미터를 넣어준다. (id, job을 넣어봤다)
        navigate('/3', {
          state: {
            img : img
          }
        });
      };

    const [ img, setImg ] = useState(0)

    const onChange = (e) => {
        const img = e.target.files[0];
        const formData = new FormData();
        formData.append('img', img);
        // console.log(formData) // FormData {}
        for (const keyValue of formData){
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setImg(reader.result)
        };
        reader.readAsDataURL(file);
        console.log("uploaded")
        console.log(img)

        } // ["img", File] File은 객체

    }

    return (
        <div style={{textAlign: 'center',verticalAlign:'middle', justifyContent: 'center', height:'80vh',width:'100vw',}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <img src="/img/image.png" style={{height:"40vh"}}></img>
            <h3>이미지로 손쉬운 농도 예측! Give Me Sajin!</h3>
            <input type="file" accept='image/*' onChange={onChange} />
            <span onClick={move}>확인</span>
        </div>
    );
}

export default Upload;
