function solution(number) {
    let answer = 0;

    number.forEach((num1, i) => {
        number.slice(i + 1).forEach((num2, j) => {
            number.slice(i + j + 2).forEach((num3) => {
                if (num1 + num2 + num3 === 0) {
                    answer++;
                }
            });
        });
    });

    return answer;
}