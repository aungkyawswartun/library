import React, { useContext, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./style.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import useTheme from "../../hooks/useTheme";

export default function Layout() {
  const location = useLocation();

  let { isDark } = useTheme();

  useEffect(() => {
    let body = document.body;
    if(isDark){
      body.classList.add('bg-dbg')
    } else {
      body.classList.remove('bg-dbg')
    }
  },[isDark])
  return (
    <div className={`${isDark ? 'bg-dbg' : ''}`}>
      <Navbar />
      <SwitchTransition>
        <CSSTransition timeout={200} classNames="fade" key={location.pathname} >
          <div className="max-w-6xl mx-auto p-3">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
