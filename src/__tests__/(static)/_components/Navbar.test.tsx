import { vi, describe, expect, it } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import Navbar from '@/app/(static)/_components/Navbar';

describe('Navbar for non-project pages', () => {
  it('should render a <nav> element', () => {
    const { getByRole } = render(<Navbar />);
    const navElement = getByRole('navigation');
    expect(navElement).toBeDefined();
  });

  it('should render a link to the Home page', () => {
    const { getAllByRole } = render(<Navbar />);

    const homeLinks = getAllByRole('link', { name: /home/i });
    homeLinks.forEach((link) => {
      const href = link.getAttribute('href');
      expect(href).toBe('/');
    });
  });
  it('should render a link to the About page', () => {
    const { getAllByRole } = render(<Navbar />);

    const aboutLinks = getAllByRole('link', { name: /about/i });
    aboutLinks.forEach((link) => {
      const href = link.getAttribute('href');
      expect(href).toBe('/about');
    });
  });
  it('should render a link to the CV page', () => {
    const { getAllByRole } = render(<Navbar />);

    const cvLinks = getAllByRole('link', { name: /cv/i });
    cvLinks.forEach((link) => {
      const href = link.getAttribute('href');
      expect(href).toBe('/cv');
    });
  });
  it('should render a link to the Projects page', () => {
    const { getAllByRole } = render(<Navbar />);

    const projectPageLinks = getAllByRole('link', { name: /projects/i });
    projectPageLinks.forEach((link) => {
      const href = link.getAttribute('href');
      expect(href).toBe('/projects');
    });
  });
});
