import styled from 'styled-components'
import { colors } from '../../colors'

const Radiobtn = ({
  height,
  width,
  colorOp,
}: {
  height: string
  width: string
  colorOp?: boolean
}) => {
  return <NotAction colorOp={colorOp} height={height} width={width}></NotAction>
}

export const RadioBtnActive = ({
  innerRadius,
  outerRadius,
  colorOp,
}: {
  innerRadius: string
  outerRadius: string
  colorOp?: boolean
}) => {
  return (
    <Outerdiv colorOp={colorOp} radius={outerRadius}>
      <Innerdiv colorOp={colorOp} radius={innerRadius}></Innerdiv>
    </Outerdiv>
  )
}
export default Radiobtn

const NotAction = styled.div<{
  height: string
  width: string
  colorOp: boolean | undefined
}>`
  height: ${(props) => props.height ?? '3rem'};
  width: ${(props) => props.width ?? '3rem'};
  border: ${(props) =>
    props.colorOp
      ? `1px solid ${colors.border.timberwolf}`
      : `1px solid ${colors.background.pineGreen}`};
  border-radius: 50%;
`
const Outerdiv = styled.div<{ radius: string; colorOp: boolean | undefined }>`
  height: ${(props) => props.radius ?? '3rem'};
  width: ${(props) => props.radius ?? '3rem'};
  border: ${(props) =>
    props.colorOp
      ? `1px solid ${colors.border.timberwolf}`
      : `1px solid ${colors.background.pineGreen}`};
  padding: 0.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Innerdiv = styled.div<{ radius: string; colorOp: boolean | undefined }>`
  height: ${(props) => props.radius ?? '1rem'};
  width: ${(props) => props.radius ?? '1rem'};
  border: ${(props) =>
    props.colorOp
      ? `1px solid ${colors.border.timberwolf}`
      : `1px solid ${colors.background.pineGreen}`};
  background-color: ${(props) =>
    props.colorOp
      ? `${colors.border.timberwolf}`
      : `${colors.background.pineGreen}`};
  border-radius: 50%;
`
