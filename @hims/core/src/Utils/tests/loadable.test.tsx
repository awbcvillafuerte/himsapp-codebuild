import React from 'react';
import { render } from '@testing-library/react';
import loadable from 'Utils/loadable';

const LoadingIndicator = () => <div>Loading</div>;

const LazyComponent = loadable(async () => import('./loadable.index'));

const LazyComponentWithFallback = loadable(
  async () => import('./loadable.index'),
  {
    fallback: <LoadingIndicator />,
  },
);

describe('loadable', () => {
  it('should render null by default', () => {
    const {
      container: { firstChild },
    } = render(<LazyComponent />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render fallback if given one', () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithFallback />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render LazyComponent after waiting for it to load', async () => {
    const {
      container: { firstChild },
    } = render(<LazyComponent />);
    expect(firstChild).toMatchSnapshot();
  });
});
