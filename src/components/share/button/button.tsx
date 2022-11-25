import React, {ReactNode, FC, SyntheticEvent} from 'react';
import "./button.scss"


interface IButtonProps {
    children: ReactNode;
    onClick?: (() => void) | ((e: SyntheticEvent) => void);
}

const Button: FC<IButtonProps> = ({children, onClick}) => {


    return (
        <div className={"button"} onClick={onClick}>
            {children}
        </div>
    );
}

export default Button;