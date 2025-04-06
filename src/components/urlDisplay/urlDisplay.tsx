import { Button, Container, Typography } from "@mui/material";
import React from "react";

const UrlDisplay: React.FC<{ shortUrl: string }> = ({ shortUrl }) => {
    return (
        <Container sx={{mt : "50px"}}>
            <Typography variant="h6">Your Shortened URL:</Typography>
            <Typography variant="body1" color="primary">
                <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {shortUrl}
                </a>
            </Typography>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigator.clipboard.writeText(shortUrl)}
                sx={{
                    minWidth : "100px",
                    mt : "10px",
                }}
            >
                Copy
            </Button>
        </Container>
    );
};

export default UrlDisplay;
