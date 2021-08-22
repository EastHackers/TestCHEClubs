// This renders the navigation bar at the top of the Home page

import React from 'react';
import styles from './NavBar.module.css';
import {motion} from 'framer-motion';

export function NavBar(props) {

    // Redirect functions if buttons are clicked(references functions in HomePage.js)
    function clubsList(){
        props.clubsList();
    }

    function home(){
        props.home();
    }

    return(
        <div>
            {/*Different buttons and on click redirections */}
            <div className={styles['nav-bar']}>
                <motion.span className="icon-text"
                    whileHover = {{scale: 1.15}}
                    >
                    <button className="button is-ghost has-text-light" onClick = {home}>
                        <span className="icon has-text-white">
                            <i className="fas fa-home"></i>
                        </span>
                        <strong className = "has-text-light">Home</strong>
                    </button>
                </motion.span>
                <motion.div
                    whileHover = {{scale: 1.15}}
                    >
                    <a href = {"https://sites.google.com/chclc.org/cheactivities/home#h.hk4pldn8i75t"}>
                    <button className="button is-ghost has-text-light"><strong>Make a Club</strong></button>
                    </a>
                </motion.div>
                <motion.div
                    whileHover = {{scale: 1.15}}
                    >
                    <a href = {"https://forms.gle/zrZdFn7pZ5ykT6DZ6"}>
                    <button className="button is-ghost has-text-light"><strong>Advertise Your Club</strong></button>
                    </a>
                </motion.div>
                <motion.div
                    whileHover = {{scale: 1.15}}
                    >
                    <button className="button is-ghost has-text-light" onClick = {clubsList}>
                        <strong className = "has-text-light">Clubs List</strong>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}