import React, {useState} from 'react';
import './styles/SignUpPage.css';

const SignUpPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="sign-up-page">
            <div className="sign-up-content">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="input-container">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="signup-button">Create account</button>
                </form>
                <div className="additional-text">
                    Additional text or elements can go here.
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;