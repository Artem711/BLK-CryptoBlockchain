import Blockchain from ".."

const blockchain = new Blockchain()
blockchain.addBlock({ data: "INITIAL" })

console.log("first block", blockchain.chain[blockchain.chain.length - 1])
let prevTimestamp, nextTimstamp, nextBlock, timeDiff, average
const times = []

for (let i = 0; i < 10000; i++) {
  prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp

  blockchain.addBlock({ data: `block ${i}` })
  nextBlock = blockchain.chain[blockchain.chain.length - 1]

  nextTimstamp = nextBlock.timestamp
  timeDiff = nextTimstamp - prevTimestamp
  times.push(timeDiff)

  average = times.reduce((acc, cur) => acc + cur) / times.length
  console.log(
    `Time to mine block: ${timeDiff}ms. Difficulty: ${nextBlock.difficulty}. Average time: ${average}ms`
  )
}