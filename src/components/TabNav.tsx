export type TabId = 'deck' | 'memo' | 'essay_01' | 'essay_02' | 'essay_03';

interface TabNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string }[] = [
  { id: 'deck', label: 'DECK' },
  { id: 'memo', label: 'MEMO' },
  { id: 'essay_01', label: 'ESSAY_01' },
  { id: 'essay_02', label: 'ESSAY_02' },
  { id: 'essay_03', label: 'ESSAY_03' },
];

export const TabNav: React.FC<TabNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="flex flex-col gap-2 w-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`w-full px-4 py-2 border-2 border-black text-xs font-bold font-mono uppercase tracking-wider transition-all text-left ${
            activeTab === tab.id
              ? 'bg-[#ff4d00] !text-white !shadow-none translate-x-[2px] translate-y-[2px]'
              : 'bg-white text-black hover:bg-zinc-50'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};
