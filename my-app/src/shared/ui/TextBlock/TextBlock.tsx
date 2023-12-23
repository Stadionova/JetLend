import React from 'react';

import { TextBlockProps } from '../../types';

export const TextBlock = ({ title, children, styles, id }: TextBlockProps) => {
   return (
      <div id={id} className={styles}>
         {title}
         {children}
      </div>
   );
};
