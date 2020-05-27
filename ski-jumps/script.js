const skiJump = (mountain) => {
    const height = mountain.length;
    const speed = height * 1.5;
    const length = ((height * speed * 9) / 10).toFixed(2);
    if (length < 10) return `${length} metres: He's crap!`;
    if (length < 25) return `${length} metres: He's ok!`;
    if (length < 50) return `${length} metres: He's flying!`;
    return `${length} metres: Gold!!`;
}


//https://www.codewars.com/kata/57ed7214f670e99f7a000c73/train/javascript/5e6e3f09b6a0310024afee21