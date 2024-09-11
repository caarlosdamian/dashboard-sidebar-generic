import { renderWithProviders, screen } from './test-utils';
import { beforeAll, describe, expect, it } from 'vitest';
import { TestComponent } from './TestComponent';

describe('example test', () => {
  beforeAll(() => {
    renderWithProviders(<TestComponent />);
  });
  it('render App', () => {
    const container = screen.getByTestId(/container/i);
    const title = screen.getByTestId(/title/i);
    expect(container).toBeDefined();
    expect(title.innerHTML).toBe('test component');
  });
});
