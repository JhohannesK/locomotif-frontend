import { cn } from '@/utils/lib'

const Radiobtn = ({
  isWhite,
  className,
}: {
  isWhite?: boolean
  className?: string
}) => {
  return (
    <div
      className={
        `${isWhite ? 'border-border-tertiary' : 'border-border-active'}` +
        ' ' +
        cn('h-[2rem] w-[2rem] border-2 rounded-full', className)
      }
    ></div>
  )
}

export const RadioBtnActive = ({
  isWhite,
  innerClassName,
  outerClassName,
}: {
  isWhite?: boolean
  outerClassName?: string
  innerClassName?: string
}) => {
  return (
    <div
      className={
        `${isWhite ? 'border-border-tertiary' : 'border-border-active'}` +
        ' ' +
        cn(
          'h-[2rem] w-[2rem] border-2 rounded-full flex items-center justify-center',
          outerClassName
        )
      }
    >
      <div
        className={
          `${isWhite ? 'bg-background-secondary' : 'bg-background-primary '}` +
          ' ' +
          cn('h-[.7rem] w-[.7rem] rounded-full', innerClassName)
        }
      ></div>
    </div>
  )
}
export default Radiobtn
