// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

//const { resolve } = require("source-map-resolve");

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
}, (error) => console.log(error));
 
getInstruction("mashedPotatoes", 1, (step2) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
}, (error) => console.log(error));
 
getInstruction("mashedPotatoes", 2, (step3) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
}, (error) => console.log(error));
 
getInstruction("mashedPotatoes", 3, (step4) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
}, (error) => console.log(error));
 
getInstruction("mashedPotatoes", 4, (step5) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
}, (error) => console.log(error));*/



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  let lastStep = "Mashed potatoes are ready!"
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
    getInstruction('mashedPotatoes', 2, (step0) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
      getInstruction('mashedPotatoes', 3, (step0) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
        getInstruction('mashedPotatoes', 4, (step0) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${lastStep}</li>`
        });
      });
    });
  });
  
});


// Iteration 2 - using promises
const finalMessage = "Stake is ready!"
obtainInstruction('steak', 0)
.then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  return obtainInstruction('steak', 1)
})
.then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
  return obtainInstruction('steak', 2)
})
.then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
  return obtainInstruction('steak', 3)
})
.then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
  return obtainInstruction('steak', 4)
})
.then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
  return obtainInstruction('steak', 5)
})
.then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
  return obtainInstruction('steak', 6)
})
.then((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
  return obtainInstruction('steak', 7)
})
.then(() => {
  document.querySelector("#steak").innerHTML += `<li>${finalMessage}</li>`;
});



// Iteration 3 using async/await
async function makeBroccoli(){
  const finalMessage = "Broccoli is ready!"
  for(let i=0; i< broccoli.length; i++){
    const step0 = await obtainInstruction("broccoli", i);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
  }
  document.querySelector("#broccoli").innerHTML += `<li>${finalMessage}</li>`
}

makeBroccoli();



// Bonus 2 - Promise all
// ...