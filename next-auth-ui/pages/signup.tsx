import React from 'react';

export default function SignupPage() {
    return (
        <div style={styles.page}>
            <div style={styles.formBox}>
                <h2 style={styles.title}>Sign Up</h2>
                <input placeholder="Username" style={styles.input} />
                <input placeholder="Password" type="password" style={styles.input} />
                <button style={styles.button}>Sign Up</button>
                <p style={styles.switchText}>
                    Already have an account? <a href="/login" style={styles.link}>Login</a>
                </p>
            </div>
        </div>
    );
}

const styles = {
    page: {
        height: '100vh',
        backgroundColor: '#f0f2f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Segoe UI, sans-serif',
    },
    formBox: {
        backgroundColor: '#fff',
        padding: '32px 40px',
        borderRadius: 10,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: 400,
    },
    title: {
        marginBottom: 24,
        textAlign: 'center' as const,
        color: '#2c3e50',
    },
    input: {
        width: '100%',
        padding: 12,
        marginBottom: 16,
        borderRadius: 6,
        border: '1px solid #ccc',
        fontSize: 14,
        boxSizing: 'border-box' as const,
    },
    button: {
        width: '100%',
        padding: 12,
        backgroundColor: '#2c3e50',
        color: '#fff',
        fontSize: 16,
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
    },
    switchText: {
        marginTop: 16,
        textAlign: 'center' as const,
        fontSize: 14,
    },
    link: {
        color: '#2c3e50',
        textDecoration: 'underline',
        marginLeft: 4,
    },
};
