import React from 'react';
import { Helmet } from 'react-helmet';

export type PageProps = {
  title?: string;
  children: React.ReactNode;
  className: string;
};

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ children, title = '', ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    );
  }
);

export default Page;
