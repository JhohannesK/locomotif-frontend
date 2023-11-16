import React from 'react'
interface RenderProps {
  renderIf?: boolean
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConditionRenderProps<T = Record<string, any>> = T & RenderProps

function ConditionRender<P extends object>(
  Component: React.ComponentType<P> | React.ReactElement<P>
) {
  return function ({ renderIf = true, ...props }: ConditionRenderProps<P>) {
    if (!renderIf) return null

    if (React.isValidElement(Component))
      return React.cloneElement(Component, props as P)

    return <Component {...(props as P)} />
  }
}

export const ConditionRenderComponent: React.FC<RenderProps> = ({
  renderIf,
  children,
}) => {
  if (!renderIf) return null
  return <>{children}</>
}

export default ConditionRender
