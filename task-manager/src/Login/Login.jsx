import React from 'react'
import styles from './Login.module.css'
const Login=()=>{
return(
    <>
    <div className={styles.container}>
        <div className={styles.screen}>
            <div className={styles['screen__content']}>
                <form className={styles.login}>
                    <div className={styles['login__field']}>
                        <i className={styles['login__icon fas fa-user']}></i>
                        <input type="text" className={styles['login__input']} placeholder="User name / Email"/>
                    </div>
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                    <i className="fa-solid fa-user"></i>
                </form>

            </div>
        </div>
    </div>
    <i className={styles['fa fa-user-circle']} aria-hidden="true"></i>
	
    </>
)
}

export default Login