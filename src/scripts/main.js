import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js";
import { addPlant, usePlants } from "./field.js"

const yearlyPlan = createPlan();
console.log("plan", yearlyPlan);

plantSeeds(yearlyPlan);

const fieldState = usePlants();
console.log("fieldState", fieldState);