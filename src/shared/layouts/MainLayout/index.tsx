import React, { ReactNode } from 'react'
import './style.scss';

interface Props {
  children: ReactNode,
}
const MainLayout: React.FC<Props> = ({ children })  => {
  return (
    <div className="main-layout">
      <header></header>
      <div className="content">
        <div className="main-layout__left-panel"></div>
        <div className="main-layout__work-area">{children}</div>
      </div>
        <footer></footer>
    </div>
  )
}

export default MainLayout