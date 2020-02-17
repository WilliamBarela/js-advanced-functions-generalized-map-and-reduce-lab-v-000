// Add your functions here
const map = (arr, f) => {
  let transform = [];
  for(const elem of arr){
    transform.push(f(elem));
  }
  return transform;
};

const reduce = (arr, f, startingPoint = 0) => {
  reducedVal = startingPoint
  
  for(const elem of arr){
    reducedVal += elem
  }
  return reducedVal
}