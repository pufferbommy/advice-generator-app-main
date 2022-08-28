async function getAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice')
    const { slip } = await response.json()
    return slip
  } catch (err) {
    console.error(err)
  }
}

getAdvice().then(({ id, advice }) => {
  document.querySelector('.id').textContent = `ADVICE #${id}`
  document.querySelector('.advice').textContent = advice
})

document.querySelector('.roll-btn').addEventListener('click', async () => {
  const { id, advice } = await getAdvice()
  document.querySelector('.id').textContent = `ADVICE #${id}`
  document.querySelector('.advice').textContent = advice
})
