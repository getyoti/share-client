import YotiShareBase, {
  type YotiShareBaseProps,
  type YotiShareInlineOnlyProps,
  type YotiShareWithShareUrlProps,
  type YotiShareWithScenarioProps,
} from './YotiShareBase'

export function InlineYotiShare(
  props: YotiShareBaseProps & YotiShareInlineOnlyProps & YotiShareWithShareUrlProps,
) {
  return (
    <YotiShareBase
      type="inline"
      {...props}
    />
  )
}

export function InlineYotiShareWithScenario(
  props: YotiShareBaseProps & YotiShareInlineOnlyProps & YotiShareWithScenarioProps,
) {
  return (
    <YotiShareBase
      type="inline"
      {...props}
    />
  )
}
