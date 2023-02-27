import React from 'react';

const PageContainers = ({children}) => {
  return (
    <div className="h-full box-border pl-16 flex w-full pb-6 pt-10  justify-start    items-start scroll-smooth">{children}</div>
  );
}

export default PageContainers;