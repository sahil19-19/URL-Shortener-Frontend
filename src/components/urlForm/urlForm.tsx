import React, { useState } from "react";
import { TextField } from "@mui/material";

type urlFormProps = {
    setShortUrl: (shortUrl: string) => void;
};

const UrlForm: React.FC<urlFormProps> = ({ setShortUrl }) => {
    const [url, setUrl] = useState("");
    const [customUrl, setCustomUrl] = useState("");

    return (
        <>
            <form>
                <TextField
                    name="url"
                    type="text"
                    required
                    fullWidth
                    placeholder="Enter URL you want to shorten"
                    value={url}
                    label="URL"
                    margin="dense"
                />
                <TextField
                    name="customUrl"
                    type="text"
                    fullWidth
                    placeholder="Enter custom URL"
                    value={customUrl}
                    label="Custom URL"
                    margin="dense"
                />
            </form>
        </>
    );
};

export default UrlForm;
