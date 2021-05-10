import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { isAuthorised, $auth } from '@mtfh/auth';
import Root from './root.component';

const mockUser = {
    token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTI4OTU2NTI2MTE1MDA3NTIxNzAiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpc3MiOiJIYWNrbmV5IiwibmFtZSI6IlRvbSBTbWl0aCIsImdyb3VwcyI6WyJURVNUX0dST1VQIl0sImp0aSI6IjRlZmUyMDA4LTc4NmMtNDE1Ni05MGJhLTJjM2UxMzk4ZDhmNSIsImlhdCI6MTYxODgyOTA5NSwiZXhwIjoxNjE4ODMyNjk1fQ.uXfOvdv5JiUUfRNMHWpdYDfqdyf8bWmzD3G4ns3lJPQ',
    email: 'test@example.com',
    name: 'Tom Smith',
    groups: ['TEST_GROUP'],
    sub: '112895652611500752170',
    iss: 'Hackney',
    iat: 1234,
};

describe('Root component', () => {
    it('should be in the document', () => {
        const { getByText } = render(<Root />);
        expect(getByText('Housing tool')).toBeInTheDocument();
    });

    it('should show sign in for unauthorised users', () => {
        const { getByText } = render(<Root />);
        expect(isAuthorised()).toBe(false);
        expect(getByText('Sign in')).toBeInTheDocument();
    });

    it('should show authenticated users name', () => {
        $auth.next(mockUser);
        const { getByText } = render(<Root />);
        expect(isAuthorised()).toBe(true);
        expect(getByText('Tom Smith')).toBeInTheDocument();
    });

    it('signing out should revert to unauthorised state', () => {
        $auth.next(mockUser);
        const { getByText } = render(<Root />);
        expect(getByText('Tom Smith')).toBeInTheDocument();
        const signout = getByText('Sign out');
        fireEvent.click(signout);
        expect(getByText('Sign in')).toBeInTheDocument();
    });
});
