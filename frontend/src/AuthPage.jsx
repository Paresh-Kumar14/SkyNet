import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post('http://localhost:3484/authenticate',
        {username:value}    
    )
    .then(p=>props.onAuth({...p.data,secret:value}))
    .catch(e=>console.log('error',e))
    };
    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Hello SkyNet</div>
                <div className="form-subtitle">Enter a Username to Get Started</div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username"/>
                    <button className="auth-button" type="submit">Enter</button>
                </div>
            </form>
        </div>
    )
}
export default AuthPage;