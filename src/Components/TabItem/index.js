import './index.css'

const TabItem = props => {
  const {tab, selectedTab, isActive} = props

  const {displayText, tabId} = tab

  const highlightTab = () => {
    selectedTab(tabId)
  }

  const myTabs = (
    <li className="tabs-list-cont">
      <button
        className={isActive ? 'tab highlight' : 'tab'}
        type="button"
        onClick={highlightTab}
      >
        {displayText}
      </button>
    </li>
  )
  return myTabs
}

export default TabItem
