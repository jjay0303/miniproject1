/* object타입의 객체 */

/*
  'waste', 0 
  'notme', 1
  'easy', 2
  'happy', 3
  'success', 4
  'fun', 5
  'zzang', 6
  'flower', 7
  'go', 8
  'ramgee', 9
  'todo', 10
  'myway', 11
*/

const qnaList = [
  {
    q: '1. 오늘은 쉬는날! 이럴 때 나는?',
    a: [
      { answer: 'a. 오늘은 무조건 방콕! 침대와 한몸이다!', type: [0, 1, 2, 3] },
      { answer: 'b. 밖에 나가서 누구보다 바쁘게 돌아다닌다', type: [4, 5, 6, 7, 8, 9] },
      { answer: 'c. ...쉬는날이 없다 오늘도 난 일을 한다', type: [10, 11 ] },
    ]
  },
  {
    q: '2. 출근중인데 갑자기 비가 온다! 이럴 때 나는?',
    a: [
      { answer: 'a. 나의 프로패셔널한 모습이 흐트러지면 안된다! 급하게 우산을 산다.', type: [4, 10, 9]  },
      { answer: 'b. 회사를 위해 돈을 쓸 수 없다. 비를 맞으면서 출근한다.', type: [3, 6, 7, 8, 5] },
      { answer: 'c. 이런 날 무슨 출근이냐... 사표내고 회사를 탈주한다. ', type: [0, 1, 11, 2] },
    ]
  },
  {
    q: '3. 갑자기 잡힌 회식. 빠지고 싶다ㅠㅠ 이럴 때 나는?',
    a: [
      { answer: 'a. 미리 빌드업을 하고 완벽한 핑계를 대서 빠진다', type: [1, 5, 7, 6, 9, 8] },
      { answer: 'b. 나는 거짓말을 못한다. 그냥 포기하고 간다.', type: [4, 10, 2 ] },
      { answer: 'c. 회식은 싫지만 밥은 먹고싶다! 얼굴에 철판깔고 맛잇는 것만 먹고 집으로 도망친다.', type: [0, 11, 3] }
    ]
  },
  {
    q: '4. 친구가 영화를 보자고 하는데 별로 보고싶지 않은 영화다.<br> 이럴 때 나는?',
    a: [
      { answer: 'a. 그래도 친구가 보고싶어하는데 같이 봐준다 ', type: [10, 2, 5, 3] },
      { answer: 'b. 보기싫다고 솔직히 말하고 다른걸 하자고 한다 ', type: [4, 11, 7, 9] },
      { answer: 'c. 먼저 친구가 있냐고 물어봐주라. 나는 친구가 없다.. ', type: [0, 1, 6, 8] },
    ]
  },
  {
    q: '5. 간만에 운동이 하고싶다! 당신이 할 운동은?',
    a: [
      { answer: 'a. 운동은 나가서 해야지! 야외운동을 즐긴다', type: [4, 3, 7, 6, 9, 8] },
      { answer: 'b. 집에서도 운동은 가능하지. 실내운동을 한다.', type: [11, 10]},
      { answer: 'c. 내 인생에 운동은 없다... 운동 안함', type: [0,1, 2, 5] },
    ]
  },

  {
    q: '6. 오늘은 내 생일이다! 오늘 뭐하지?',
    a: [
      { answer: 'a. 이미 한 달 전에 계획 짜고 예약 해놨다! 즐기자!', type: [4, 10] },
      { answer: 'b. 오늘은 끌리는거 하는 날이지ㅎㅎ 하고싶은걸 하러간다', type: [1, 2, 3, 9] },
      { answer: 'c. 생일..? 이몸과 상관없는 단어다 크킄... ', type: [0, 11, 5, 7, 6, 8] },
    ]
  },
  {
    q: '7. 열심히 일한 당신. 새 차를 뽑으려 한다!<br> 당신이 선택한 차는?',
    a: [
      { answer: 'a. 차는 간지나는 세단이지!', type: [4, 7] },
      { answer: 'b. 차는 안전이지! 튼튼한 SUV를 산다!', type: [11, 10, 5, 3, 8] },
      { answer: 'c. 나는 뚜벅이다... 돈 아까워 안삼', type: [0, 1, 2, 6, 9] },
    ]
  },
  {
    q: '8. 센터에 봉사를 간 당신! 동물칭구들의 눈빛을 외면할 수 없어 한마리 입양하려한다.<br> 당신이 선택한 아이는?',
    a: [
      { answer: 'a. 나를 향해 꼬리치며 달려오는 귀여운 댕댕이', type: [10, 5, 3, 7] },
      { answer: 'b. 나에게 턱을 비비지만 손을 뻗으면 도망가는 도도한 냥냥이', type: [0, 4, 6, 9 , 8 ] },
      { answer: 'c. 센터 뒷산에서 구조한 고라니', type: [1, 11, 2] },
    ]
  },
  {
    q: '9. 오늘은 특별식을 먹고 싶다! 당신이 선택한 음식은?',
    a: [
      { answer: 'a. 이런 날은 레스토랑이지! 파스타와 피자를 먹는다', type: [10, 5, 3, 7] },
      { answer: 'b. 원래 진정한 특별식은 짱깨지! 짜장면 탕수육을 먹는다', type: [0, 4, 6, 9 , 8 ] },
      { answer: 'c. 국밥은 언제 먹어도 특별해! 국밥을 먹는다', type: [1, 11, 2] },
    ]
  },
  {
    q: '10. 기차 시간에 조금 늦은 당신. 뛰어가면 기차를 탈 수 있다!<br> 그런데 눈 앞에 무거운 짐을 들고가는 할머니가?! ',
    a: [
      { answer: 'a. 앗.. 아무리 그래도 할머니를 도와드려야지ㅠㅠ 기차시간을 바꾸고 할머니를 도와준다', type: [1, 2, 3, 9] },
      { answer: 'b. 할머니 죄송해요 제가 급해요ㅠㅠ 기차역으로 뛰어간다', type: [4, 10] },
      { answer: 'c. 할머니를 도와드릴까 말까 고민하다가 기차도 놓치고 할머니도 가버리셨다;;', type: [0, 'myway', 5, 7, 6, 8] },
    ]
  },
  {
    q: '11. 드디어 코로나가 끝나고 여행을 가게 된 당신!<br> 어디로 갔을까?',
    a: [
      { answer: 'a. 일단 우리나라를 탈출하고 싶다! 해외여행 고고!', type: [11, 10]},
      { answer: 'b. 드디어 맘편히 국내 여행을 다닐 수 있네! 제주도를 간다', type: [4, 3, 7, 6, 9, 8] },
      { answer: 'c. 에? 코로나 이전이나 이후나 나의 일상은 변함없다.. 여행싫어... ', type: [0, 1, 2, 5] },
    ]
  }
]

const resultList = [
  {
    name: '낭비조차 "잘"하는 당신! 낭비왕!',
    desc: '본능에 충실한 당신. 낭비를 할 때도 "잘" 하시는군요! 멋져요!'
  },
  {
    name: '나는 잘못이 없지! 남탓왕!',
    desc: '이미 저질러진 일, 내 탓하면 뭐합니까? 맘 편하게 남 탓 하는 합리적인 당신! 멋져요!'
  },
  {
    name: '내가 못하는건 없다! 되는 것만 하니까!',
    desc: '복잡하고 할 것 많은 세상. 안되는거 붙잡고 있어서 뭐합니까? 속 편하게 사는 당신! 멋져요!'
  },
  {
    name: '나는 럭키걸! 언제나 행복해!',
    desc: '거지같고 힘든 세상에서도 행복을 찾을 줄 아는 당신! 그게 바로 진짜 인생이죠! 멋져요!'
  },
  {
    name: '쭈굴이였던 나,,, 눈 떠보니 짱?!',
    desc: '무한 경쟁의 시대에서 짱이 된 당신! 사실 당신은 태어날 때부터 짱이었답니다! 멋져요!'
  },
  {
    name: '인생 즐길 줄 아는 당신! 룰루랄라! ',
    desc: '인생 날로 먹을 줄 아는 당신! 사실은 정말 많이 노력한 거 알아요! 멋져요!'
  },
  {
    name: '멋진 복수를 꿈꾸는 당신! 복수왕!',
    desc: '복수도 필요한 순간이 있죠! 짜릿하고 멋진 복수를 꿈꾸고 이루는 당신! 멋져요!'
  },
  {
    name: '얼굴도 피고! 인생도 피고!',
    desc: '사실 당신의 인생은 원래부터 펴있었답니다! 꽃길만 걷게될 당신! 멋져요!'
  },
  {
    name: '일단 직진하는 당신! 무대뽀!',
    desc: '맞아요. 하고싶은건 해봐야지 후회가 없죠! 인생 제대로 살 줄 아는 당신! 멋져요!'
  },
  {
    name: '당신,, 뭔가 해낸 당당한 다람쥐군요!',
    desc: '뭔진 모르겠지만 일단 뭔가 해낸 당신! 정말 수고했어요! 멋져요!'
  },
  {
    name: '계획적인 당신,, 혹시 J ?!',
    desc: '계획이 없는 것도 계획인거 아시죠? 계획적으로 할 일을 하는 당신! 멋져요! '
  },
  {
    name: '터벅터벅 나의 일상,, 혹시 단소 빌런 본인?!',
    desc: '인생은 원래 마이웨이랍니다! 본인만의 페이스로 인생을 살아가는 당신! 멋져요!'
  }
]
