let score = { red: 0, blue: 0, green: 0, yellow: 0 };

setTimeout(function OpeningCeremony() {
  console.log("Let the games begin");
  setTimeout(function Race100M() {
    console.log("Enter into race");
    setTimeout(function LongJump() {
      console.log("Enter into long Jump");
      setTimeout(function HighJump() {
        console.log("Event was cancelled");
        AwardCeremony();
        function AwardCeremony() {
          console.log("Yellow score is 100");
          console.log("red score is 400");
          console.log("blue score is 200");
          console.log("green score is 300");
        }
      }, 0000);
    }, 2000);
  }, 3000);
}, 1000);
