import { useState, useEffect, useCallback } from 'react'
import type { TabId } from '../components/TabNav'

const VALID_TABS: Set<string> = new Set(['deck', 'memo', 'essay_01', 'essay_02', 'essay_03', 'secret'])

function parseHash(): { tab: TabId; section: string | null } {
  const raw = window.location.hash.slice(1)
  const slashIdx = raw.indexOf('/')
  const tab = slashIdx === -1 ? raw : raw.slice(0, slashIdx)
  const section = slashIdx === -1 ? null : raw.slice(slashIdx + 1) || null
  return {
    tab: VALID_TABS.has(tab) ? (tab as TabId) : 'deck',
    section,
  }
}

export function replaceSection(section: string | null) {
  const { tab } = parseHash()
  const newHash = section ? `#${tab}/${section}` : `#${tab}`
  if (window.location.hash !== newHash) {
    history.replaceState(null, '', newHash)
  }
}

export function useHashTab(): [TabId, (tab: TabId) => void, string | null] {
  const initial = parseHash()
  const [tab, setTab] = useState<TabId>(initial.tab)
  const [section, setSection] = useState<string | null>(initial.section)

  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseHash()
      setTab(parsed.tab)
      setSection(parsed.section)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const setHashTab = useCallback((next: TabId) => {
    window.location.hash = next
    setTab(next)
    setSection(null)
  }, [])

  return [tab, setHashTab, section]
}
