import React, { lazy, Suspense } from 'react';

const LazyDemoComponent = lazy(() => import('./DemoComponent'));

const DemoComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDemoComponent {...props} />
  </Suspense>
);

export default DemoComponent;
