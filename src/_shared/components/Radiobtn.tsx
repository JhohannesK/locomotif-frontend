const Radiobtn = () => {
  return (
    <div className="h-[2rem] w-[2rem] border-2 border-border-active rounded-full"></div>
  )
}

export const RadioBtnActive = ({ isWhite }: { isWhite?: boolean }) => {
  console.log('🚀 ~ RadioBtnActive ~ isWhite:', isWhite)
  return (
    <div className="h-[2rem] w-[2rem] border-2 border-border-active rounded-full flex items-center justify-center">
      <div className="h-[.7rem] w-[.7rem] bg-background-primary rounded-full"></div>
    </div>
  )
}
export default Radiobtn
