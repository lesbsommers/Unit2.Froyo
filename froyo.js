/*if, else statment w/o for loop
function FroyoFlavors() {
    const flavorPrompt = prompt("Please enter your froyo flavors, separated by commas:", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
  
    if (flavorPrompt) {
      const flavors = flavorPrompt.split(",").map(flavor => flavor.trim());
      const flavorCounts = {};
  
      flavors.forEach(flavor => {
        flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
      });
  
      console.table(flavorCounts);
    } else {
      console.log("No flavors entered.");
    }
  }
  
  FroyoFlavors();
  */

  //for Loop
  function FroyoFlavors() {
    const flavorPrompt = prompt("Please enter your froyo flavors, separated by commas:", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
    const checks = [flavorPrompt];
  
    for (let i = 0; i < checks.length; i++) {
        if (checks[i]) {
            const flavors = checks[i].split(",").map(flavor => flavor.trim());
            const flavorCounts = {}; //object to keep count of the number of orders per flavor
    
            flavors.forEach(flavor => {
                flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
            });
    
            console.table(flavorCounts); 
        } else {
            console.log("No flavors entered.");
        }
    }
}
  
FroyoFlavors();