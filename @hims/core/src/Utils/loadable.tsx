import React, { lazy, Suspense } from 'react';

interface Props {
  fallback: React.ReactNode | null;
}
const loadable = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  { fallback = null }: Props = { fallback: null },
) => {
  const LazyComponent = lazy(importFunc);

  const Component = (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
  return Component;
};

export default loadable;
