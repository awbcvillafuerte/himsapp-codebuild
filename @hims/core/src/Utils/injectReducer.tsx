import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { useStore } from 'react-redux';

import { getInjectors } from './reducerInjectors';
import { InjectReducerParams, InjectedStore } from '../Components/Stores';

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */

export default function hocWithReducer<P, Q>(
  createReducer: (injectedReducers: any) => any,
  { key, reducer }: InjectReducerParams<Q>,
) {
  function wrap(
    WrappedComponent: React.ComponentType<P>,
  ): React.ComponentType<P> {
    // dont wanna give access to HOC. Child only
    class ReducerInjector extends React.Component<P> {
      public static WrappedComponent = WrappedComponent;
      public static displayName = `withReducer(${WrappedComponent.displayName ||
        WrappedComponent.name ||
        'Component'})`;

      constructor(props: any, context: any) {
        super(props, context);

        getInjectors(createReducer, context.store).injectReducer(
          `${key}`,
          reducer,
        );
      }

      public render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    return hoistNonReactStatics(ReducerInjector, WrappedComponent) as any;
  }
  return wrap;
}

const useInjectReducer: <Q>(
  createReducer: (injectedReducers: any) => any,
  arg: InjectReducerParams<Q>,
) => void = (
  createReducer: (injectedReducers: any) => any,
  { key, reducer },
) => {
  const store = useStore() as InjectedStore;
  React.useEffect(() => {
    getInjectors(createReducer, store).injectReducer(`${key}`, reducer);
  }, []);
};

export { useInjectReducer };
