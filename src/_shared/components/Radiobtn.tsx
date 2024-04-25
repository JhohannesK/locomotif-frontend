const Radiobtn = ({ isWhite }: { isWhite?: boolean }) => {
  return (
    <div
      className={
        `${isWhite ? 'border-border-tertiary' : 'border-border-active'}` +
        ' ' +
        'h-[2rem] w-[2rem] border-2 rounded-full'
      }
    ></div>
  )
}

export const RadioBtnActive = ({ isWhite }: { isWhite?: boolean }) => {
  console.log('🚀 ~ RadioBtnActive ~ isWhite:', isWhite)
  return (
    <div
      className={
        `${isWhite ? 'border-border-tertiary' : 'border-border-active'}` +
        ' ' +
        'h-[2rem] w-[2rem] border-2 rounded-full flex items-center justify-center'
      }
    >
      <div
        className={
          `${isWhite ? 'bg-background-secondary' : 'bg-background-primary '}` +
          ' ' +
          'h-[.7rem] w-[.7rem] rounded-full'
        }
      ></div>
    </div>
  )
}
export default Radiobtn
