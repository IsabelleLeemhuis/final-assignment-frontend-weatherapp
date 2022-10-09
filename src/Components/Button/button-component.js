import './button-component-styles.css'

const Buttontype = {
    google: 'google-sign-in'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            className={`button-container ${Buttontype[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;