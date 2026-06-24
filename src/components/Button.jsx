import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'

const Button = ({ children, href, className, onClick, white, px }) => {

    const renderButton = () => (
        <button className={Classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    )
    const Classes = `button relative items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
} ${white ? "text-n-8" : "text-n-1"} ${className || "inline-flex"}`
    const spanClasses = 'relative z-10'
    const renderLink = () => (
        <a href={href} className={Classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )
    return href ? renderLink() : renderButton()
}

export default Button