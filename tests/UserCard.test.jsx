import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import UserCard from "../components/cards/UserCard";

// Mock the useRouter function
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

const userCardProps = {
  id: '1',
  name: 'John Doe',
  username: 'johndoe',
  imgUrl: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
  personType: 'regular',
};

describe('UserCard', () => {
  it('renders the UserCard component with correct data', () => {
    render(<UserCard {...userCardProps} />);
    
    // Assert that the component is rendered with the correct data
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('@johndoe')).toBeInTheDocument();
    
    // You can add more assertions for other elements if needed
  });

});
