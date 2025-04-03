import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    bgcolor: "#1A1A19",
                    color: "white",
                    padding: 1,
                }}
            >
                <Box
                    sx={{
                        my: 1,
                        "& svg": {
                            fontSize: "25px",
                            cursor: "pointer",
                            mr: 2,
                        },
                        "& svg:hover": {
                            color: " rgb(97 201 201) ",
                            transform: "translateX(1px)",
                            transition: "all 400ms",
                        },
                    }}
                >
                    {/* icons */}
                    <IconButton href="https://www.linkedin.com/company/accredianedu/">
                        <GitHubIcon sx={{color : 'white'}} />
                    </IconButton>
                    <IconButton href="">
                        <LinkedInIcon sx={{color : 'white'}} />
                    </IconButton>
                    <IconButton href="">
                        <EmailIcon sx={{color : 'white'}} />
                    </IconButton>
                </Box>
                <Typography
                    sx={{
                        "@media (max-width:600px)": {
                            fontSize: "1rem",
                        },
                    }}
                >
                    All Rights Reserved &copy;
                </Typography>
            </Box>
        </>
    );
};

export default Footer;