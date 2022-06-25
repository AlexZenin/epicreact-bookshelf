import React, { useState } from 'react'
import * as ReactDOMClient from 'react-dom/client';
import { Logo } from './components/logo'
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

root.render(<App />)

function App() {
    const [openModal, setOpenModal] = useState('none')
    const close = () => setOpenModal('none');

    return (
        <main>
            <Logo height='80' width='80'/>
            <h1>Bookshelf</h1>
            <div>
                <button onClick={() => setOpenModal('login')}>Login</button>
            </div>
            <div>
                <button onClick={() => setOpenModal('register')}>Register</button>
            </div>
            <Dialog aria-label="Login form" isOpen={openModal === 'login'} onDismiss={close}>
                <button onClick={close}>Close</button>
                <LoginForm onSubmit={(formState) => console.log(formState)} buttonText="Login" />
            </Dialog>
            <Dialog aria-label="Register form" isOpen={openModal === 'register'} onDismiss={close}>
                <button onClick={close}>Close</button>
                <LoginForm onSubmit={(formState) => console.log(formState)} buttonText="Register" />
            </Dialog>
        </main>
    )
}

function LoginForm({onSubmit, buttonText}) {
    const [formState, setFormState] = useState({username: '', password: ''})
    const { username, password } = formState

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit && onSubmit(formState)
    }
    
    function handleInputChange(e) {
        console.log(e.target.id)
        setFormState(formState => ({...formState, [e.target.name]: e.target.value}))
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username:</label>
                <input 
                    id="username" 
                    name="username" 
                    type="text" 
                    onChange={handleInputChange} 
                    value={username}
                />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    onChange={handleInputChange} 
                    value={password}
                />
            </div>
            <button type="submit">{buttonText}</button>
        </form>
    )
}