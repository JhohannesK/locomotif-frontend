export const saveToLocalStorage = <T>({
  state,
  key,
}: {
  key: string
  state: T
}) => {
  try {
    if (localStorage.getItem(key)) return
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (e) {
    console.log(e)
  }
}

export const loadFromLocalStorage = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) return false

    const state: unknown = JSON.parse(serializedState)
    return state as typeof state
  } catch (e) {
    console.log(e)
    return undefined
  }
}
