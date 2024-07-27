import React, { ChangeEvent, MouseEvent } from "react";
import { TextFieldProps, ButtonProps } from "@mui/material";
import Button, { ButtonPropsSizeOverrides } from "@mui/material/Button";

interface ReusableInputfieldProps {
    onClick?: ButtonProps['onClick']
    text?: string;
    size?: string;
    value?: string | number;
    style?: React.CSSProperties;
    id?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
    variant?: ButtonProps["variant"];
    defaultValue?: string | number;
    label: ButtonProps["aria-label"];
    name?: string;
    required?: boolean;
    key?: string | number;
    error?: boolean;
    helperText?: string;
    className?: string;
    children?: React.ReactNode;
    type?: string;
}

const Buttons: React.FC<ReusableInputfieldProps> = ({
    text,
    size,
    variant,
    style,
    onClick,
    startIcon,
    endIcon,
    className,
    disabled,
    value,
    key,
    children,
    type
}) => {
    return (
        <>
            <Button
                variant={variant}
                onClick={onClick}
                size="small"
                style={style}
                key={key}
                disabled={disabled}
                startIcon={startIcon}
                value={value}
                endIcon={endIcon}
                sx={{
                    background: "#1B3252",
                    color: "#fff",
                    textTransform: "capitalize",
                    borderRadius: "6px",
                    margin: "0 0.5rem",
                    padding: "0.4rem 1rem",
                    "&:hover": { background: "#1B3252" }

                }}
            >
                {text}
            </Button>
        </>
    );
}

export default Buttons;