import YotiShareBase, {
  type YotiShareBaseProps,
  type YotiShareModalOnlyProps,
  type YotiShareWithShareUrlProps,
  type YotiShareWithScenarioProps,
} from './YotiShareBase'

export function ModalYotiShare(
  props: YotiShareBaseProps & YotiShareModalOnlyProps & YotiShareWithShareUrlProps,
) {
  return (
    <YotiShareBase
      type="modal"
      {...props}
    />
  )
}

export function ModalYotiShareWithScenario(
  props: YotiShareBaseProps & YotiShareModalOnlyProps & YotiShareWithScenarioProps,
) {
  return (
    <YotiShareBase
      type="modal"
      {...props}
    />
  )
}
