import { vi, describe, expect, it, afterEach } from 'vitest';
import { render, screen, act, cleanup } from '@testing-library/react';
import AboutPage from '@/app/(static)/about/page';

describe('About page', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render a headline', async () => {
    const { getByRole } = await render(<AboutPage />);
    const h1Element = getByRole('heading', { level: 1 });
    expect(h1Element).toBeDefined();
  });
  it('should render an image', async () => {
    const { getByRole } = await render(<AboutPage />);
    const imgElement = getByRole('img');
    expect(imgElement).toBeDefined();
  });
});
