/* object타입의 객체 */

const qnaList = [
  {
    q: '1. 오늘은 쉬는날! 이럴 때 나는?',
    a: [
      { answer: 'a. 오늘은 무조건 방콕! 침대와 한몸이다!', type: ['waste', 'notme', 'easy', 'happy'] },
      { answer: 'b. 밖에 나가서 누구보다 바쁘게 돌아다닌다', type: ['success', 'fun', 'zzang', 'flower', 'go', 'ramgee'] },
      { answer: 'c. ...쉬는날이 없다 오늘도 난 일을 한다', type: ['todo', 'myway' ] },
    ]
  },
  {
    q: '2. 출근중인데 갑자기 비가 온다! 이럴 때 나는?',
    a: [
      { answer: 'a. 나의 프로패셔널한 모습이 흐트러지면 안된다! 급하게 우산을 산다.', type: ['success', 'todo', 'ramgee']  },
      { answer: 'b. 회사를 위해 돈을 쓸 수 없다. 비를 맞으면서 출근한다.', type: ['happy', 'zzang', 'flower', 'go', 'fun'] },
      { answer: 'c. 이런 날 무슨 출근이냐... 사표내고 회사를 탈주한다. ', type: ['waste', 'notme', 'myway', 'easy'] },
    ]
  },
  {
    q: '3. 갑자기 잡힌 회식. 빠지고 싶다ㅠㅠ 이럴 때 나는?',
    a: [
      { answer: 'a. 미리 빌드업을 하고 완벽한 핑계를 대서 빠진다', type: ['notme', 'fun', 'flower', 'zzang', 'ramgee', 'go'] },
      { answer: 'b. 나는 거짓말을 못한다. 그냥 포기하고 간다.', type: ['success', 'todo', 'easy' ] },
      { answer: 'c. 회식은 싫지만 밥은 먹고싶다! 얼굴에 철판깔고 맛잇는 것만 먹고 집으로 도망친다.', type: ['waste', 'myway', 'happy'] }
    ]
  },
  {
    q: '4. 친구가 영화를 보자고 하는데 별로 보고싶지 않은 영화다. 이럴 때 나는?',
    a: [
      { answer: 'a. 그래도 친구가 보고싶어하는데 같이 봐준다" ', type: ['todo', 'easy', 'fun', 'happy'] },
      { answer: 'b. 보기싫다고 솔직히 말하고 다른걸 하자고 한다" ', type: ['success', 'myway', 'flower', 'ramgee'] },
      { answer: 'c. 먼저 친구가 있냐고 물어봐주라. 나는 친구가 없다.." ', type: ['waste', 'notme', 'zzang', 'go'] },
    ]
  },
  {
    q: '5. 간만에 운동이 하고싶다! 당신이 할 운동은?',
    a: [
      { answer: 'a. 운동은 나가서 해야지! 야외운동을 즐긴다', type: ['success', 'happy', 'flower', 'zzang', 'ramgee', 'go'] },
      { answer: 'b. 집에서도 운동은 가능하지. 실내운동을 한다.', type: ['myway', 'todo']},
      { answer: 'c. 내 인생에 운동은 없다... 운동 안함', type: ['waste','notme', 'easy', 'fun'] },
    ]
  },

  {
    q: '6. 오늘은 내 생일이다! 오늘 뭐하지?',
    a: [
      { answer: 'a. 이미 한 달 전에 계획 짜고 예약 해놨다! 즐기자!', type: ['success', 'todo'] },
      { answer: 'b. 오늘은 끌리는거 하는 날이지ㅎㅎ 하고싶은걸 하러간다', type: ['notme', 'easy', 'happy', 'ramgee'] },
      { answer: 'c. 생일..? 이몸과 상관없는 단어다 크킄... ', type: ['waste', 'myway', 'fun', 'flower', 'zzang', 'go'] },
    ]
  },
  {
    q: '7. 열심히 일한 당신. 새 차를 뽑으려 한다! 당신이 선택한 차는?',
    a: [
      { answer: 'a. 차는 간지나는 세단이지!', type: ['success', 'flower'] },
      { answer: 'b. 차는 안전이지! 튼튼한 SUV를 산다!', type: ['myway', 'todo', 'fun', 'happy', 'go'] },
      { answer: 'c. 나는 뚜벅이다... 돈 아까워 안삼', type: ['waste', 'notme', 'easy', 'zzang', 'ramgee'] },
    ]
  },
  {
    q: '8. 센터에 봉사를 간 당신! 동물칭구들의 눈빛을 외면할 수 없어 한마리 입양하려한다. 당신이 선택한 아이는?',
    a: [
      { answer: 'a. 나를 향해 꼬리치며 달려오는 귀여운 댕댕이', type: ['todo', 'fun', 'happy', 'flower'] },
      { answer: 'b. 나에게 턱을 비비지만 손을 뻗으면 도망가는 도도한 냥냥이', type: ['waste', 'success', 'zzang', 'ramgee' , 'go' ] },
      { answer: 'c. 센터 뒷산에서 구조한 고라니', type: ['notme', 'myway', 'easy'] },
    ]
  },
  {
    q: '9. 오늘은 특별식을 먹고 싶다! 당신이 선택한 음식은?',
    a: [
      { answer: 'a. 이런 날은 레스토랑이지! 파스타와 피자를 먹는다', type: ['todo', 'fun', 'happy', 'flower'] },
      { answer: 'b. 원래 진정한 특별식은 짱깨지! 짜장면 탕수육을 먹는다', type: ['waste', 'success', 'zzang', 'ramgee' , 'go' ] },
      { answer: 'c. 국밥은 언제 먹어도 특별해! 국밥을 먹는다', type: ['notme', 'myway', 'easy'] },
    ]
  },
  {
    q: '10. 기차 시간에 조금 늦은 당신. 뛰어가면 기차를 탈 수 있다! 그런데 눈 앞에 무거운 짐을 들고가는 할머니가?! ',
    a: [
      { answer: 'a. 앗.. 아무리 그래도 할머니를 도와드려야지ㅠㅠ 기차시간을 바꾸고 할머니를 도와준다', type: ['notme', 'easy', 'happy', 'ramgee'] },
      { answer: 'b. 할머니 죄송해요 제가 급해요ㅠㅠ 기차역으로 뛰어간다', type: ['success', 'todo'] },
      { answer: 'c. 할머니를 도와드릴까 말까 고민하다가 기차도 놓치고 할머니도 가버리셨다;;', type: ['waste', 'myway', 'fun', 'flower', 'zzang', 'go'] },
    ]
  },
  {
    q: '11. 드디어 코로나가 끝나고 여행을 가게 된 당신! 어디로 갔을까?',
    a: [
      { answer: 'a. 일단 우리나라를 탈출하고 싶다! 해외여행 고고!', type: ['myway', 'todo']},
      { answer: 'b. 드디어 맘편히 국내 여행을 다닐 수 있네! 제주도를 간다', type: ['success', 'happy', 'flower', 'zzang', 'ramgee', 'go'] },
      { answer: 'c. 에? 코로나 이전이나 이후나 나의 일상은 변함없다.. 여행싫어... ', type: ['waste','notme', 'easy', 'fun'] },
    ]
  }
]

const infoList = [
  {
    name: '',
    desc: ''
  }
  
]
