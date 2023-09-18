import { CSSProperties, FC, ReactNode } from 'react'

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  height: 'min-content',
  padding: '50px',
  border: '1px solid #ccc',
}

type VerticalContainerProps = {
  children: ReactNode
}
export const VerticalContainer: FC<VerticalContainerProps> = ({ children }) => {
  return <div style={styles}>{children}</div>
}
