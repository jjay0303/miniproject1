const main = document.querySelector("#main");
const play = document.querySelector("#play");
const end = 11;
const result = document.querySelector("#result");
const select =[0,0,0,0,0,0,0,0,0,0,0,0];                   // 몇 번째 질문에 대한 답인지를 담을 배열 생성

function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        play.style.WebkitAnimation = "fadeIn 1s";
        play.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display= "none";
            play.style.display = "block";  
        }, 450);
        let qIdx = 0;
        next(qIdx);
    }, 450);
    // 부드러운 화면 전환 및 새로운 요소 등장
}

// console.log(main);
// 질문 출력 함수
function next(qIdx){
    if(qIdx === end){
        setResult();
        return;
    }

    let q = document.querySelector('.question');
    q.innerHTML = qnaList[qIdx].q;                      // qIdx번재 qnaList 배열의 q값을 q변수에 대입
    for(let i in qnaList[qIdx].a){                      
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);           // qIdx번재 qnaList 배열의 a(답변) 갯수만큼 버튼생성하는 함수 호출 
    }
}

// 답변 출력 함수
function addAnswer(answerText, qIdx, idx){                         // 매개변수 qnaList[qIdx].a[i].answer를 answerText라는 이름으로 받음
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
            let target = qnaList[qIdx].a[idx].type;       // i번째 질문의 답의 type값을 가져온 다음
            for(let i=0; i<target.length; i++){      // 해당 타입 길이만큼 반복문 돌면서 해당 select 배열의 value값을 1씩 증가 
                select[target[i]] += 1;
            }
                                                  // 몇 번째 질문에 대한 답인지를 배열에 담기        
            for(let i=0; i<children.length; i++){                           
                children[i].style.display = 'none';                     // 클릭 후 0.9초 뒤 버튼 완전히 사라지고     
            } 
            next(++qIdx);                                               // next함수를 불러서 다음 버튼 나오게
        }, 450)                               
    }, false);
}

// 결과 출력할 함수
function setResult(){
    play.style.WebkitAnimation = "fadeOut 1s";
    play.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            play.style.display= "none";
            result.style.display = "block";  
        }, 400)})
    printResult();
}

function printResult(){
    let idx = calResult();
    const resultTitle = document.querySelector('.resultTitle');
    resultTitle.innerHTML = resultList[idx].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'image/img' + (idx+1) + '.jpg';
    resultImg.src = imgURL;
    imgDiv.appendChild(resultImg);

    const resultContent = document.querySelector('.resultContent');
    resultContent.innerHTML = resultList[idx].desc;
}

// 결과 계산할 함수
function calResult(){
    /* addAnswer의 setTimeout에 이 과정을 수행하는 알고리즘 대체
    let pointArr = [
        { name: 'waste', value: 0, key:0}, 
        { name: 'notme', value: 0, key:1},
        { name: 'easy', value: 0, key:2},
        { name: 'happy', value: 0, key:3},
        { name: 'success', value: 0, key:4},
        { name: 'fun', value: 0, key:5},
        { name: 'zzang', value: 0, key:6},
        { name: 'flower', value: 0, key:7},
        { name: 'go', value: 0, key:8},
        { name: 'ramgee', value: 0, key:9},
        { name: 'todo', value: 0, key:10},
        { name: 'myway', value: 0, key:11},
    ]

    for(let i=0; i<end; i++){
        let target = qnaList[i].a[select[i]];       // i번째 질문의 답이 담긴 select를 변수로 선언
        for(let j=0; j<target.type.length; j++){         
            for(let k=0; k<pointArr.length; k++){
                if(target.type[j] === pointArr[k].name){    // target(선택한 답)의 타입값과 pointArr의 이름값이 일치하면
                    pointArr[k].value += 1;                 // pointArr의 value값을 1 증가
                }
            }
        }
    } 

    let resultArr = pointArr.sort(function (a,b){       // sort 함수 더 공부하기
        if(a.value > b.value){
            return -1;
        }
        if(a.value < b.value){
            return 1;
        }
        return 0;
    });

    let resultKey = resultArr[0].key;
    return resultKey;
    
    */
    
    let result = select.indexOf(Math.max(...select));       // ...select 전개구문 => 선택한 배열을 펼침
    return result;
    console.log(result);
}
