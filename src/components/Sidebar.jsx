import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1586325194227-7625ed95172b?ix
            ib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'/>

            <div className={styles.profile}>
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/102385190?v=4" />

                <strong>Matheus Kurgonas</strong>
                <span>Web Developer</span>
                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}