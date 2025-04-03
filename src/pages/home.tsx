import React, { use, useState } from "react";
import { Container, Typography } from "@mui/material";
import Footer from "../components/footer/footer";

const Home: React.FC = () => {
    const [shortUrl, setShortUrl] = useState("");

    return (
        <div>
            <Container>
                <Typography variant="h3">URL shortener</Typography>
            </Container>
            <Footer/>
        </div>
    );
};

export default Home;
