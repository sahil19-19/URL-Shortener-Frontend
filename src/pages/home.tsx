import React, { use, useState } from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import Footer from "../components/footer/footer";
import UrlForm from "../components/urlForm/urlForm";
import "../pages/home.css";
import { Calculate } from "@mui/icons-material";

const Home: React.FC = () => {
    const [shortUrl, setShortUrl] = useState("");

    return (
        <Box
            sx={{
                textAlign: "center",
                mt: "75px",
            }}
        >
            <Container className="form-container" sx={{
                width : {
                    xs : "90%",
                    sm: "90%",   // 600px and up
                    md: "75%",   // 900px and up
                    lg: "75%",   // 1200px and up
                },
                mb : 'auto',
            }}>
                <Typography variant="h4" sx={{mb : '0.5%'}}>URL shortener</Typography>
                <Divider sx={{
                    mb: '1.5%',
                }} />
                <UrlForm setShortUrl={setShortUrl} />
            </Container>
            <Footer />
        </Box>
    );
};

export default Home;
