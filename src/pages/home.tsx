import React, { useState } from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import Footer from "../components/footer/footer";
import UrlForm from "../components/urlForm/urlForm";
import UrlDisplay from "../components/urlDisplay/urlDisplay";

const Home: React.FC = () => {
    const [shortUrl, setShortUrl] = useState("");

    return (
        <Box
            sx={{
                display : "flex",
                flexDirection : "column",
                textAlign: "center",
                pt : "75px",
                minHeight: "100vh",
            }}
        >
            <Container
                className="form-container"
                sx={{
                    width: {
                        xs: "90%",
                        sm: "90%", // 600px and up
                        md: "75%", // 900px and up
                        lg: "75%", // 1200px and up
                    },
                    mb: "auto",
                }}
            >
                <Typography variant="h4" sx={{ mb: "0.5%" }}>
                    URL shortener
                </Typography>
                <Divider
                    sx={{
                        mb: "1.5%",
                    }}
                />
                <UrlForm setShortUrl={setShortUrl} />
                {shortUrl && <UrlDisplay shortUrl={shortUrl}/>}
            </Container>
            <Footer />
        </Box>
    );
};

export default Home;
