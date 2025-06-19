import React, { useState } from 'react';

const styles = {
    container: {
        background: '#f0f2f5',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    formBox: {
        background: '#ffffff',
        padding: '30px 40px',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
    },
    heading: {
        marginBottom: '20px',
        color: '#2c3e50',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: '12px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '14px',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#2c3e50',
        color: '#fff',
        fontSize: '16px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#1a252f',
    },
    switchText: {
        marginTop: '16px',
        textAlign: 'center',
        fontSize: '14px',
    },
    switchButton: {
        marginLeft: '6px',
        background: 'none',
        border: 'none',
        color: '#2c3e50',
        cursor: 'pointer',
        fontWeight: 'bold',
        textDecoration: 'underline',
        fontSize: '14px',
    },
};

function AuthForm({ isLogin }) {
    return (
        <div style={styles.formBox}>
            <h2 style={styles.heading}>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <input placeholder="Username" style={styles.input} />
            <input placeholder="Password" type="password" style={styles.input} />
            <button style={styles.button}>{isLogin ? 'Login' : 'Sign Up'}</button>
        </div>
    );
}

export default function App() {
    const [loginMode, setLoginMode] = useState(true);

    return (
        <div style={styles.container}>
            <AuthForm isLogin={loginMode} />
            <p style={styles.switchText}>
                {loginMode ? 'No account?' : 'Already have an account?'}
                <button onClick={() => setLoginMode(!loginMode)} style={styles.switchButton}>
                    {loginMode ? 'Sign Up' : 'Login'}
                </button>
            </p>
        </div>
    );
}
