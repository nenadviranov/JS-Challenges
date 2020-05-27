const isPangram = (string) => {
    let str = string
      .split(" ")
      .join("")
      .replace(/[\W\d]/g, "")
      .toLowerCase()
      .split("");
    return [...new Set(str)].length == 26;
}


//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript/5e6e3f781dd1bc001062797b