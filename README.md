# zeplin

페이지는 크게 2개로 구성했으며 각각 index1(달력 부분)과 index2(예약막기 부분)로 구현했습니다. 
기능을 주기위해 nodejs를 활용했으며, nodejs없이 각각의 페이지를 보려면 public폴더의 index1.html, index2.html을 열면 됩니다. 

nodejs로 main.js를 실행하면 전체 기능을 볼 수 있습니다. 
index1에서 선택한 '날짜 수'를 'cnt'변수로 받아서 template.js로 'time', 'price'변수와 함께 줍니다. template.js는 입력받은 변수 값에 따라
index2.html을 출력하는 모듈입니다. cnt는 `총 ${cnt}일`, time은 `시간(${time})`, price는 `요금(${price})`을 나타냅니다. 
index2에서 수정하기를 눌러 요금과 시간정보를 입력하면 'get'방식으로 값을 받아서 time, price변수에 갱신하는 식입니다. 

그외 구현된 기능
-index1-
1. 날짜 선택, 취소 기능
2. 선택 날짜 수 표시 기능
3. 날짜 선택시 팝업 및 화면 구성 변경
4. 체크 버튼 활성화
-index2-
1. 체크 버튼 기능
2. 체크 버튼 클릭시 팝업
3. 수정하기 클릭시 팝업
4. 팝업창서 요금, 시간 정보 입력 기능
5. 팝업 외 여백 클릭시 팝업 비활성화

