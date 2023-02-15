import React from 'react'

const AppHtmlHashAPI = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="#header"> jup to Header</a>
          </li>
          <li>
            <a href="#body"> jup to Body</a>
          </li>
          <li>
            <a href="#footer"> jup to Footer</a>
          </li>
        </ul>
        <div id="header" style={{ height: 300 }}>
          am header
        </div>
        <div id="body" style={{ height: 300 }}>
          am body
        </div>
        <div id="footer" style={{ height: 300 }}>
          am footer
        </div>
      </div>
    </div>
  )
}

export default AppHtmlHashAPI;