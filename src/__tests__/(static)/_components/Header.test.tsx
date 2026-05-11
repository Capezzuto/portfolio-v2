import { vi, describe, expect, it, afterEach } from 'vitest';
import { render, cleanup, screen, act } from '@testing-library/react';
import Header from '@/app/(static)/_components/Header';

describe('Header for non-project pages', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render the header element', () => {
    const { getByRole } = render(<Header />);
    const headerEl = getByRole('banner');
    expect(headerEl).toBeDefined();
  });
  it('should render the mark/logo for the site as a link', () => {
    const { getByRole, getByTestId } = render(<Header />);
    const linkElement = getByTestId('header-link');
    const h2Element = getByRole('heading', { level: 2 });
    const h3Element = getByRole('heading', { level: 3 });
    const href = linkElement.getAttribute('href');
    expect(href).toBe('/');
    expect(h2Element).toBeDefined();
    expect(h3Element).toBeDefined();
  });

  it('should render the nav element', () => {
    const { getByRole } = render(<Header />);
    const navElement = getByRole('navigation');
    expect(navElement).toBeDefined();
  });
});
