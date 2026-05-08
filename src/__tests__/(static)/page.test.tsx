import { vi, describe, expect, it } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import HomePage from '@/app/(static)/page';

describe('Home page', () => {
  it('should render a headline', async () => {
    render(<HomePage />);
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toBeDefined();
  });
});
