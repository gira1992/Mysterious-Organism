// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, dna) => {
  return {
    specimenNum : num,
    dna : dna,
    mutate () {
      let currentBase = this.dna[Math.floor(Math.random() * this.dna.length)]
      let baseIndex = this.dna.indexOf(currentBase)
      let newBase;

      for (let i = 0 ; i < this.dna.length; i++) {
        do {
          newBase = returnRandBase()
          console.log(newBase)
        } while (newBase === currentBase)
      }  
      this.dna.splice(baseIndex, 1, newBase)
      return this.dna
    },
    compare(pAequor) {
      let dna = pAequor.dna
      let match =  []
      
      console.log(dna)
      console.log(this.dna)

      for(let i = 0 ; i < dna.length ; i++) {
        if (dna[i] ===  this.dna[i]){
          match.push(dna[i])
        }
      }
      let total = (match.length / dna.length) * 100

      return `speciment ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${total.toFixed()}% DNA in common`
    },
    willLikelySurvive () {
      let cAndG = 0

      this.dna.forEach(e => {
        if(e === 'C' || e === 'G'){
          cAndG++
        }
      })

       let total = (cAndG / this.dna.length) * 100
      console.log(total)
      if(total >= 60){
        return true
      }
      return false
    }
  }
}

const ex1 = pAequorFactory(1, mockUpStrand())
const ex2 = pAequorFactory(2, mockUpStrand())
// console.log(ex1.dna)
 //console.log(ex1.mutate())
// console.log(ex1.dna)
// console.log(ex1.compare(ex2))
 //console.log(ex1.willLikelySurvive())
 let surives = []
 const willSurvive = arr => {
   if (arr.willLikelySurvive() === true){
      surives.push(arr.specimenNum)
   }
 }

willSurvive(ex1)
willSurvive(ex2)
 console.log(surives)






