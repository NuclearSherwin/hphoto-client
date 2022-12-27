import React from 'react';

const REGISTER_USER = 'REGISTER_USER'

export const registerUser = (userData) => {
    return {
        type: REGISTER_USER,
        payload: userData,
    };
}