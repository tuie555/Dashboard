"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [apiRes, setApiRes] = useState(null);
    const router = useRouter()
    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        fetch('http://localhost:3000/api', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setApiRes(data);
            const isLoginSuccessful = data.some((user) => username === user.name && password === user.pass);
        if (isLoginSuccessful) {
            console.log('Login successful');

        } else {
            console.log('Login failed');
            console.log(username, password);
        }
    }) .catch((error) => console.error('Error:', error));
        
    };

    return (
        
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#1E3A8A' }}>
            <div className="text-center">
                <div className="mb-8">
                    <i className="fas fa-shopping-cart text-white text-6xl"></i>
                </div>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="USERNAME"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border border-white rounded text-white bg-transparent focus:outline-none"
                        />
                        <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-white"></i>
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-white rounded text-white bg-transparent focus:outline-none"
                        />
                        <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-white"></i>
                    </div>
                    <button type="submit" onClick={() => router.replace('/dashboard')} className="w-full py-2 bg-white text-blue-700 rounded">LOGIN</button>
                </form>
                <div className="mt-4">
                    <a href="#" className="text-white">Forgot password?</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;