document.addEventListener('DOMContentLoaded', () => {
    // DOM 요소 선택
    const numberDisplay = document.querySelector('.value');
    const buttons = document.querySelectorAll('.item');
    
    // 상태 변수 초기화
    let currentValue = '0';  // 현재 입력 중인 값
    let operator = '';       // 선택된 연산자
    let previousValue = '';  // 이전에 입력한 값
    let shouldResetDisplay = false;  // 디스플레이 리셋 여부

    // 모든 버튼에 클릭 이벤트 리스너 추가
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = button.textContent;

            // 숫자 또는 소수점이 입력된 경우
            if (!isNaN(value) || value === '.') {
                if (shouldResetDisplay) {
                    // 새로운 숫자 입력 시작
                    currentValue = value;
                    shouldResetDisplay = false;
                } else {
                    // 기존 숫자에 추가
                    currentValue = currentValue === '0' && value !== '.' ? value : currentValue + value;
                }
                numberDisplay.textContent = currentValue;
            } 
            // 연산자가 입력된 경우
            else if (['+', '-', '*', '/'].includes(value)) {
                if (operator && previousValue && !shouldResetDisplay) {
                    // 연속 계산: 이전 계산 수행 후 결과 표시
                    currentValue = calculate(previousValue, currentValue, operator);
                    numberDisplay.textContent = currentValue;
                }
                operator = value;
                previousValue = currentValue;
                shouldResetDisplay = true;
            } 
            // 등호(=)가 입력된 경우
            else if (value === '=') {
                if (operator && previousValue) {
                    // 최종 계산 수행 및 결과 표시
                    currentValue = calculate(previousValue, currentValue, operator);
                    numberDisplay.textContent = currentValue;
                    // 상태 초기화
                    operator = '';
                    previousValue = '';
                    shouldResetDisplay = true;
                }
            } 
            // 초기화(C) 버튼이 눌린 경우
            else if (value === 'C') {
                // 모든 상태 초기화
                currentValue = '0';
                operator = '';
                previousValue = '';
                shouldResetDisplay = false;
                numberDisplay.textContent = currentValue;
            }

            // 버튼 클릭 효과
            e.target.classList.add('button-click');
            setTimeout(() => {
                e.target.classList.remove('button-click');
            }, 300);
        });
    });

    // 계산 함수
    function calculate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case '+': return (a + b).toString();
            case '-': return (a - b).toString();
            case '*': return (a * b).toString();
            case '/': return (b !== 0 ? (a / b).toString() : 'Error');
            default: return b.toString();
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.item');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // 기존의 클릭 이벤트 핸들러 코드

            // 버튼 깜빡임 효과
            e.target.classList.add('button-click');
            setTimeout(() => {
                e.target.classList.remove('button-click');
            }, 300);
        });
    });

    // 나머지 계산기 로직
});