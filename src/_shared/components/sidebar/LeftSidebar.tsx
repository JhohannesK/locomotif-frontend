import { ReactNode } from 'react'
import NavbarLeftPaneMenu from '../navbar/LeftPaneMenu'
import { ConditionRenderComponent } from '../../../utils/ConditionRender'

interface linksObject {
  name: string
  path: string
  icon: ReactNode
}

type Props = {
  closePane: () => void
  menu: linksObject[]
  type: 'personnel' | 'facility'
}

function LeftSidebar({ closePane, menu, type }: Props) {
  console.log(menu)

  return (
    <>
      <ConditionRenderComponent renderIf={type === 'personnel'}>
        <NavbarLeftPaneMenu closePane={closePane} menu={menu} />
      </ConditionRenderComponent>
      <ConditionRenderComponent renderIf={type === 'facility'}>
        <NavbarLeftPaneMenu closePane={closePane} menu={menu} />
      </ConditionRenderComponent>
    </>
  )
}

export default LeftSidebar
