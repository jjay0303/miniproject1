const main = document.querySelector("#main");
const play = document.querySelector("#play");
const end = 11;

function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        play.style.WebkitAnimation = "fadeIn 1s";
        play.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display= "none";
            play.style.display = "block";  
        }, 400);
        let qIdx = 0;
        next(qIdx);
    }, 400);
    // 부드러운 화면 전환 및 새로운 요소 등장
}

// console.log(main);
// 질문 출력 함수
function next(qIdx){
    if(qIdx === end){
        result();
    }
    let q = document.querySelector('.question');
    q.innerHTML = qnaList[qIdx].q;                      // qIdx번재 qnaList 배열의 q값을 q변수에 대입
    for(let i in qnaList[qIdx].a){                      
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);           // qIdx번재 qnaList 배열의 a(답변) 갯수만큼 버튼생성하는 함수 호출 
    }
}

// 답변 출력 함수
function addAnswer(answerText, qIdx){                         // 매개변수 qnaList[qIdx].a[i].answer를 answerText라는 이름으로 받음
    let a = document.querySelector('.answer');          // answer 영역에 뿌릴 변수 생성
    let answer = document.createElement('button');      // createElement : html요소 만들어서 반환
    answer.classList.add('answerList');                 // 만들어진 버튼에 class 속성 부여
    answer.classList.add('my-2');                       // 만들어진 버튼에 마진 속성 부여
    answer.classList.add('py-2');                       // 만들어진 버튼에 패딩 속성 부여
    answer.classList.add('mx-auto'); 
    answer.classList.add('fadeIn');

    a.appendChild(answer);                              // answer가 a에 소속되도록 => answer 클래스 내 div 안에 button이 생성
    answer.innerHTML = answerText;                      // 버튼에 매개변수값을 넣어줌
    
    answer.addEventListener("click", function(){        // 이벤트리스너 : 지정한 이벤트가 대상에 전달될 때마다 호출할 함수 설정
        let children = document.querySelectorAll('.answerList');        // children에 버튼 3개 담기
        for(let i=0; i<children.length; i++){                           
            children[i].disabled = true;                                // 버튼 클릭 시 버튼들 클릭 못하게하고
            children[i].style.WebkitAnimation = 'fadeOut 0.5s';                         
            children[i].style.animation = 'fadeOut 0.5s';               // 버튼들 서서히 사라지게
        } 
        setTimeout(() => {                  
            for(let i=0; i<children.length; i++){                           
                children[i].style.display = 'none';                     // 클릭 후 0.9초 뒤 버튼 완전히 사라지고     
            } 
            next(++qIdx);                                               // next함수를 불러서 다음 버튼 나오게
        }, 450)                               
    }, false);
}

function result(){
    
}
