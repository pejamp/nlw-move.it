import styles from '../styles/components/Login.module.css';

export function Login() {

    return (
        <div className={styles.loginContainer}>

            <img src="./icons/Logo.svg" alt="moveit" />

            <div>
                <strong>Bem-vindo</strong>
                <img src="./icons/Github.svg" alt="github" />
                <p>Faça login com seu Github para começar</p>
            </div>
            <div>
                <input type="text" placeholder="Digite seu username" />
                <button>
                    <img src="./icons/arrowButton.svg" alt="" />
                </button>
            </div>
        </div>
    );
}