interface Add {
    (arg1: number, arg2: number):number
}

let sum:Add = function(num1: unknown, num2: unknown) {
  return (num1 as number)+(num2 as number);
}

sum(10,20)