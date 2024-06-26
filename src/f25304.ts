import * as readline from "readline/promises";

export default async function f25304() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const X = Number(await rl.question(""));
  if (isNaN(X) || X < 1 || X > 1000000000) process.exit("Invalid X value");

  const N = Number(await rl.question(""));
  if (isNaN(N) || N < 1 || N > 100) process.exit("Invalid N value");

  let items: [a: number, b: number][] = [];
  for (let i = 0; i < N; i++) {
    const [a, b] = await rl.question("").then((answer) =>
      answer
        .split(" ")
        .slice(0, 2)
        .map((value) => {
          const v = Number(value);

          if (isNaN(v)) process.exit("Invalid input value");
          else return v;
        })
    );

    if (a < 1 || a > 1000000) process.exit("Invalid A value");
    if (b < 1 || b > 10) process.exit("Invalid B value");

    items.push([a, b]);
  }

  rl.close();

  const sum = items.reduce((acc, [a, b]) => acc + a * b, 0);

  if (sum === X) console.log("Yes");
  else console.log("No");
}
