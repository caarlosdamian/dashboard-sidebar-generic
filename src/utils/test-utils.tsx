import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
// interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
//   // preloadedState?: Partial<RootState>;
//   // store?: AppStore;
// }

function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: RenderOptions = {}
) {
  const {
    // preloadedState = {},
    // store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <>{children}</>
    // <Provider store={store}>
    // <MemoryRouter>{children}</MemoryRouter>
    // </Provider>
  );

  return {
    // store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

export { renderWithProviders };
