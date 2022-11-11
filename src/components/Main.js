import { Button } from 'react-bootstrap';

function Main() {

    const container_sty = {
        height : "65vh",
        margin : '20vh 20vw',
        verticalAlign : 'middle',
        width : '80vw'
    }

    const row_container_sty = {
        height : "50vh",
        margin : 'auto',
        verticalAlign : 'middle'
    }

    const card_style = {
        // height : "100vh",
        alignItem : 'center',
        width: '35vh'
    }

    const card_style2 = {
        // height : "100vh",
        alignItem : 'center',
        width: '35vh',
        height: '21vh',
    }

    return (
        <div class="container text-center" style = {container_sty}>
            <div class="row row-cols-4" style = {row_container_sty}>
                <div class="col">
                    <a href="/1" style={{textDecoration: "none", color:'black'}}>
                        <div class="card" style={card_style}>
                            <div class="card-body">
                                <p class="card-text"><h5>미세먼지 농도 예측</h5></p>
                            </div>
                            <img src="img/main1.png" class="card-img-bottom" alt="..." style={{height:'35vh'}}/>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <div class="card" style={card_style}>
                        <div class="card-body">
                            <p class="card-text"><h5>실시간 대기 이미지 확인</h5></p>
                        </div>
                        <img src="img/main2.jpg" class="card-img-bottom" alt="..." style={{height:'35vh'}}  />
                    </div>
                </div>
                <div class="col" style={card_style2}>
                    <div class="card" style={card_style2}>
                        <div class="card-body" style={{textAlign:'center',verticalAlign:'middle'}}>
                            오늘의 이용자 수
                            <h1>0</h1>
                        </div>
                    </div>
                    <div style={{height:'1vh'}}></div>
                    <div class="card" style={card_style2}>
                        <div class="card-body">
                            학습에 사용한 이미지 수
                            <h1>21759</h1>
                        </div>
                    </div>
                </div>
                {/* <div class="col">
                    <div class="card" style={card_style}>
                        <div class="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Main;
