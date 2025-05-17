import { describe, expect, test, vi } from 'vitest'

import { createInlineElement, createModalElement } from './create'
import { loadClient } from './loader'
import { loadClient as exportedLoadClient, startYotiInlineShare, startYotiModalShare } from './main'

vi.mock('./loader')
vi.mock('./create')

vi.stubGlobal('window', {
  Yoti: {
    Share: {
      init: vi.fn(),
    },
  },
})

const Yoti = window.Yoti!

test('it exports loadClient()', async () => {
  expect(exportedLoadClient).toBe(loadClient)
})

const SDK_ID = 'client-sdk-id'
const DOM_ID = 'some-dom-id'
const SCENARIO_ID = 'scenario-id'

const mockedModalElement = {
  clientSdkId: SDK_ID,
  domId: DOM_ID,
  type: 'modal',
} as YotiShare.ConfigElement
vi.mocked(createModalElement).mockReturnValue(mockedModalElement)

describe('it exports startYotiModalShare()', async () => {
  test('that orchestrates loadClient() >> createModalElement() >> Yoti.Share.init()', async () => {
    const params = {
      clientSdkId: SDK_ID,
      domId: DOM_ID,
      controls: {
        scenarioId: SCENARIO_ID,
      },
    }
    await startYotiModalShare(params)

    expect(loadClient).toHaveBeenCalled()
    expect(createModalElement).toHaveBeenCalledWith(params)
    expect(Yoti.Share.init).toHaveBeenCalledWith({ elements: [mockedModalElement] })
  })
})

describe('it exports startYotiInlineShare()', async () => {
  test('that orchestrates loadClient() >> createInlineElement() >> Yoti.Share.init()', async () => {
    const params = {
      clientSdkId: SDK_ID,
      domId: DOM_ID,
      controls: {
        scenarioId: SCENARIO_ID,
      },
    }
    await startYotiInlineShare(params)

    expect(loadClient).toHaveBeenCalled()
    expect(createInlineElement).toHaveBeenCalledWith(params)
    expect(Yoti.Share.init).toHaveBeenCalledWith({ elements: [mockedModalElement] })
  })
})
