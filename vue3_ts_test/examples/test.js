function print(n) {
  if (n == 0)
    console.log("零");
  if (n == 1)
    console.log("一");
  if (n == 2)
    console.log("二");
  if (n == 3)
    console.log("三");
  if (n == 4)
    console.log("四");
  if (n == 5)
    console.log("五");
  if (n == 6)
    console.log("六");
  if (n == 7)
    console.log("七");
  if (n == 8)
    console.log("八");
  if (n == 9)
    console.log("九");
}

function thousandmaxprint(n) {
  const bit = new Array(4).fill(0);
  bit[0] = Math.floor(n / 1000);
  bit[1] = Math.floor(n % 1000 / 100);
  bit[2] = Math.floor(n % 100 / 10);
  bit[3] = n % 10;
  let start = 0;
  let firstzero = 1;
  let alwayszero = 1;
  if (n == 0)
    print(n);
  else {
    for (let tempcount = 0; tempcount < 4; tempcount++) {
      if (bit[tempcount] != 0 || tempcount == 3)
        start = 1;
      if (start) {
        if (bit[tempcount] != 0) {
          if (tempcount == 0) {
            print(bit[tempcount]);
            console.log("千");
          }
          if (tempcount == 1) {
            print(bit[tempcount]);
            console.log("百");
          }
          if (tempcount == 2) {
            print(bit[tempcount]);
            console.log("十");
          }
          if (tempcount == 3) {
            print(bit[tempcount]);
          }
        } else {
          if (firstzero && tempcount < 3) {
            for (let i = tempcount; i < 4; i++)
              if (bit[i] != 0)
                alwayszero = 0;
            if (!alwayszero)
              print(bit[tempcount]);
            firstzero = 0;
          }
        }
      }
    }
  }
}

function tenthousandmaxprint(n) {
  let n1 = Math.floor(n / 10000);
  let n2 = n % 10000;
  if (n1 != 0) {
    thousandmaxprint(n1);
    console.log("万");
  }
  if (n2 != 0) {
    if (n2 < 1000);
    console.log("零");
    thousandmaxprint(n2);
  }
}

function hundredbillionmaxprint(n) {
  let n1 = Math.floor(n / 100000000);
  let n2 = n % 100000000;
  thousandmaxprint(n1);
  console.log("亿");
  if (n2 != 0)
    tenthousandmaxprint(n2);
}

function main() {
  let n = 10101010;
  if (n >= 100000000)
    hundredbillionmaxprint(n);
  else {
    if (n >= 10000)
      tenthousandmaxprint(n);
    else
      thousandmaxprint(n);
  }
  return 0;
}

main();