export const genCode = (facilityName: string) => {
  const splitName = facilityName.split(' ').map((name) => name.toUpperCase())
  const pickInitials =
    splitName.length < 3
      ? splitName.map((name) => name[0]).join('')
      : splitName[0][0] + splitName[1][0] + splitName[2][0]

  let randomNum = Math.floor(Math.random() * 10000)
  if (randomNum < 1000) {
    randomNum += 1000
  } else if (randomNum > 9999) {
    randomNum -= 1000
  }

  return pickInitials + '-' + randomNum
}
