const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What day is it? ", (day)=>{
  rl.question("What's your nicknames? ", (nickname) =>{
    rl.question("What is your favourite song? ", (song) => {
      rl.question("What is your favourite drink? ", (drink) => {
        rl.question("What did you do yesterday? ", (yesterday) => {
          console.log(`On this day of ${day}, the great drink of ${drink} was spilled when ${nickname} was singing ${song} at the palace of ${yesterday}`);
          rl.close();
        });
      });
    });
  });
});