// NO. 2 > Satuan Berat

function convertWeight(summation, unitWeight) {
  //your code here
  units = ["ton", "kwintal", "", "kg", "ons", "dag", "g", "dg", "cg", "mg"];
  
  const splittedSummation1 = summation.split('+')
  const splittedSummation2 = []
  for (let i = 0; i < splittedSummation1.length; i++) {
    splittedSummation2.push(splittedSummation1[i].split(' '))
  }
  // console.log(splittedSummation2);
  //cek urutan
  let indexUnitWeight = 0
  let indexUnitSummation = []
  for (let i = 0; i < splittedSummation2.length; i++) {
    for (let j = 0; j < units.length; j++) {
      if (splittedSummation2[i][1] === units[j]) {
        indexUnitSummation.push(j)
        break
      }
    }
  }
  // console.log(indexUnitSummation);
  for (let i = 0; i < units.length; i++) {
    if (units[i] === unitWeight) {
      indexUnitWeight = i
      break
    }
  }
  // console.log(indexUnitWeight);
  //selisih index
  let differentIndex = []
  for (let i = 0; i < indexUnitSummation.length; i++) {
    differentIndex.push(Math.abs(indexUnitSummation[i] - indexUnitWeight))
  }
  // console.log(differentIndex);

  let output = 0
  for (let i = 0; i < indexUnitSummation.length; i++) {
    indexUnitSummation[i] < indexUnitWeight ? output += Math.pow(10 ,differentIndex[i]) * splittedSummation2[i][0] : output += splittedSummation2[i][0] / Math.pow(10 ,differentIndex[i])
  }
  return output + ' ' + unitWeight
}

console.log(convertWeight("1 ton +10 ons+2 kwintal", "kg")); //1201 kg

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g

console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg
