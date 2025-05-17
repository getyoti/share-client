import {
  type CreateModalParams,
  type CreateInlineParams,
  createInlineElement,
  createModalElement,
} from './create.ts'
import { loadClient } from './loader'

export { loadClient } from './loader'

export const startYotiModalShare = async (params: CreateModalParams) => {
  await loadClient()
  const element = createModalElement(params)
  return window.Yoti?.Share.init({ elements: [element] })
}

export const startYotiInlineShare = async (params: CreateInlineParams) => {
  await loadClient()
  const element = createInlineElement(params)
  return window.Yoti?.Share.init({ elements: [element] })
}
