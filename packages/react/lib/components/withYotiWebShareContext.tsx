import { type ComponentType, type ContextType, useContext } from 'react'

import YotiWebShareContext from '../contexts/YotiWebShareContext'

type WithContextProps = ContextType<typeof YotiWebShareContext>

export function withYotiWebShareContext<T extends WithContextProps = WithContextProps>(
  WrappedComponent: ComponentType<T>,
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  type WithoutContextProps = Omit<T, keyof WithContextProps>

  const ComponentWithContext = (props: WithoutContextProps) => {
    const { sdkId, locale, skinId } = useContext(YotiWebShareContext)

    if (!sdkId) {
      console.warn('Component should be rendered within YotiWebShareContext')
      return null
    }

    const allProps: T = {
      ...(props as T),
      sdkId,
      skinId,
      locale,
    }

    return <WrappedComponent {...allProps} />
  }

  ComponentWithContext.displayName = `withYotiWebShareContext(${displayName})`

  return ComponentWithContext
}
