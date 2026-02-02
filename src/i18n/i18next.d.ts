import 'i18next'
import en from "./en"
import type de from './de'

declare module 'i18next' {
  interface CustomTypeOptions {
    enableSelector: 'optimize'
    defaultNS: 'shared'
    resources: typeof en & typeof de,
  }
}