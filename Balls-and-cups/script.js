const cupAndBalls = (ball, pairs) => pairs.reduce((ball, [a, b]) => (a == ball ? b : b == ball ? a : ball), ball);


//https://www.codewars.com/kata/5b715fd11db5ce5912000019/train/javascript/5e80c9847226be001a6ca8de