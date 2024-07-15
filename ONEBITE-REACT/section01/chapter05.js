function funcA() {
  function funcB() {}
}

for (let i = 0; i < 10; i++) {
  let d = 1;
  function funcB() {}
}

funcB();
console.log(d);
