const startAt = Date.now()
let count = 0

const a = await new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 5000)
})
console.log(a)

export default defineEventHandler(() => ({
  pageview: count++,
  startAt,
}))
