const sumAll = function(mn, mx) {
    if (!Number.isInteger(mn) || !Number.isInteger(mx)) return "ERROR";
    if (mn < 0 || mx < 0) return "ERROR";
    if (mn > mx) {
      const temp = mn;
      mn = mx;
      mx = temp;
};

let sum=0;
for (let i=mn; i<=mx; i++)
    {
     sum+= i;
    }
    return sum;}
// Do not edit below this line
module.exports = sumAll;
