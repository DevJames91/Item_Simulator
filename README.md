# CH 3 아이템 시뮬레이터 과제

==============================

1. **암호화 방식**

   - 비밀번호를 DB에 저장할 때 Hash를 이용했는데, Hash는 단방향 암호화와 양방향 암호화 중 어떤 암호화 방식에 해당할까요?
    **  Hash는 양방향 암호화 방식에 해당합니다. Hash의 특징은 지속적인 Crypto 방식의 암호화로 보안성 및 로그인 할때마다 주어지는 값이 계속 변하기 때문입니다.**
     
   - 비밀번호를 그냥 저장하지 않고 Hash 한 값을 저장 했을 때의 좋은 점은 무엇인가요?
  **   Hash한 값을 저장하였을때는 사람의 힘으로는 도저히 알아낼수없는 고도화 된 암호화로 되기 때문에 해킹 걱정은 없습니다.**

2. **인증 방식**

   - JWT(Json Web Token)을 이용해 인증 기능을 했는데, 만약 Access Token이 노출되었을 경우 발생할 수 있는 문제점은 무엇일까요?
     **JWT는 Stateless이기 때문에 한 번 만들어지면 제어가 불가능합니다 .임의로 토큰을 삭제할 수 없기 때문에 만료기간을 설정하지 않으면 탈취될 가능성이 높습니다.**
     
   - 해당 문제점을 보완하기 위한 방법으로는 어떤 것이 있을까요?
     **만료기간을 되도록 짧게 잡는다**

3. **인증과 인가**

   - 인증과 인가가 무엇인지 각각 설명해 주세요.
     **인증은 사용자의 신원을 확인하기 위한 검증하는 작업 인증(Authentication)은 일반적인 사이트의 로그인 기능에 해당합니다.**
     **인가는 인증된 사용자가 특정 리소스에 접근 및 작업을 수행할수있는 권한이 있는지를 검증 **
     
   - 위 API 구현 명세에서 인증을 필요로 하는 API와 그렇지 않은 API의 차이가 뭐라고 생각하시나요?
     API 기능중 하나인 1:1 관계를 가질수 있어 사용자의 정보를 차례대로 입력하여 동일한 유저 아이디 및 이메일이 있는지, 이름은 멀쩡한지, 나이는 괜찮은지에 등을 토대로 다음 스텝을 넘어가는 반면 그렇지 않는 API는 그러한 검증이 없을시 서버가 터질수있는 오류를 야기하게 됩니다.
     
   - 아이템 생성, 수정 API는 인증을 필요로 하지 않는다고 했지만 사실은 어느 API보다도 인증이 필요한 API입니다. 왜 그럴까요?
     게임 재화 및 아이템에 대해서는 단순 속성값만 가지고 있기 때문입니다. 따라서 사용자의 검증과는 달리 따로 검증을 할 필요가 없기 때문입니다.

4. **Http Status Code**

   - 과제를 진행하면서 사용한 Http Status Code를 모두 나열하고, 각각이 의미하는 것과 어떤 상황에 사용했는지 작성해 주세요.
     **죄송합니다, 다음에 더 열심히하겠습니다**

5. **게임 경제**

   - 현재는 간편한 구현을 위해 캐릭터 테이블에 money라는 게임 머니 컬럼만 추가하였습니다.
     - 이렇게 되었을 때 어떠한 단점이 있을 수 있을까요?
       **money라는 단순 게임머니 컬럼만 추가 하였을시 게임 속 내에 또 다른 유료 서비스 재화를 추가하기가 어렵습니다**
       
     - 이렇게 하지 않고 다르게 구현할 수 있는 방법은 어떤 것이 있을까요?
       **아직은 제 능력밖이지만 다시 리뷰를 통하여 멋진 모습으로 찾아뵙겠습니다**
       
   - 아이템 구입 시에 가격을 클라이언트에서 입력하게 하면 어떠한 문제점이 있을 수 있을까요?
   **게임 세상에서의 규율이 존재하며 클라이언트 입장에서 입력하게 하면 아이템의 가치보존이 어렵게 되어 게임 시스템이 붕괴되는 현상을 초래합니다**
     
6. 어려웠던 점
**처음 로그라이크 과제를 시작했을때보다 더 빠른 이해도와 공부 방법이 뭔지를 차차 알아가게 되어 이번 과제는 생각보다 쉬울것같다고 생각했지만 막상 들어가보니 다른 세상이였습니다. 나름 쉬울줄 알았지만 자주 찾아오는 문법적인 오류가 절 괴롭혔습니다. 자바스크립트 기초 문법 배울때처럼의 수준과 내용인줄 알고 만만하게 생각했다가 큰코 다쳤습니다**
