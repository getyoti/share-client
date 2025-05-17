import { expect, test } from 'vitest'

import { createInlineElement, createModalElement } from './create'

const SDK_ID = 'asd'
const DOM_ID = 'asd'
const SCENARIO_ID = 'asd'

test('calling createModalElement() - basic', async () => {
  const result = createModalElement({
    clientSdkId: SDK_ID,
    domId: DOM_ID,
    controls: {
      scenarioId: SCENARIO_ID,
    },
  })
  expect(result).toMatchSnapshot()
})

test('calling createInlineElement() - basic', async () => {
  const result = createInlineElement({
    clientSdkId: SDK_ID,
    domId: DOM_ID,
    controls: {
      scenarioId: SCENARIO_ID,
    },
  })
  expect(result).toMatchSnapshot()
})
