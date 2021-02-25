import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="rFooter">
            <Button
                variant="contained"
                size="small"
                color="secondary"
                component={Link}
                to="/react"
            >
                <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
                Back to React-App
            </Button>
        </div>
    )
}