import { createPlan } from "./plan.js"
import { createSoybean } from "./seeds/soybean.js";
import { addPlant, usePlants } from "./field.js"

const yearlyPlan = createPlan();
console.log(yearlyPlan);

const soybeanSeed = createSoybean();
addPlant(soybeanSeed);

const fieldState = usePlants();
console.log(fieldState);