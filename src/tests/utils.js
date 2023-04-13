export const add = (a, b) => {
    return a + b;
};
  
export const substract = (a, b) => {
return a - b;
};

export const multiply = (a, b) => {
return a * b;
};

export const divide = (a, b) => {
return a / b;
};

export const percentage = (a, b) => {
return (a / b) * 100;
};

export const factorial = n => {
if (n === 0) return 1;
return n * factorial(n - 1);
};

export const fibonacci = length => {
var sequence = [0, 1];
for (var i = 2; i <= length; ++i) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
}
return sequence;
};
