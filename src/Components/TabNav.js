import React from 'react';

const TabNav = (props) => {
  return (
    <div>
      <div class='card text-center mx-auto'>
        <div class='card-header'>
          <ul className='nav nav-pills card-header-pills mx-auto'>
            {props.tabs.map((tab) => {
              const active = tab === props.selected ? ' active' : '';

              return (
                <li className='nav-item' key={tab}>
                  <a
                    href='/#'
                    className={'nav-link' + active}
                    onClick={() => props.setSelected(tab)}
                  >
                    {tab}
                  </a>
                </li>
              );
            })}
          </ul>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default TabNav;
