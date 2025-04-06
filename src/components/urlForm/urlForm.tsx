import React, { useState } from "react";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import shortenURL from "../../services/shorten";
import { AxiosError } from "axios";

type urlFormProps = {
    setShortUrl: (shortUrl: string) => void;
};

const UrlForm: React.FC<urlFormProps> = ({ setShortUrl }) => {
    const [url, setUrl] = useState("");
    const [customUrl, setCustomUrl] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [err, setError] = useState(false);
    const [helperText, setHelperText] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!/^[a-zA-Z0-9]*$/.test(customUrl)) {
            setError(true);
            setHelperText("No special characters allowed");
            return;
        }
        if (customUrl.length > 10) {
            setError(true);
            setHelperText("Input should not exceed 10 digits");
            return;
        }
        try {
            const result = await shortenURL(url, customUrl);
            setCustomUrl("");
            setUrl("");
            setShortUrl(result);
        } catch (err : unknown) {
            const axiosError = err as AxiosError<{ message: string }>;

            setSnackbarOpen(true);
            if (axiosError?.response?.data?.message) {  
              setAlertMessage(axiosError.response.data.message);
            } else {
              setAlertMessage("An unexpected error occurred.");
            }
        }
    };

    const urlChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const customUrlChangeHanlder = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setError(false);
        setHelperText("");
        setCustomUrl(event.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="url"
                    type="text"
                    required
                    fullWidth
                    placeholder="Enter URL you want to shorten"
                    value={url}
                    label="URL"
                    margin="dense"
                    onChange={urlChangeHandler}
                />
                <TextField
                    name="customUrl"
                    type="text"
                    fullWidth
                    placeholder="Enter custom URL"
                    value={customUrl}
                    label="Custom URL"
                    margin="dense"
                    error={err}
                    helperText={helperText}
                    onChange={customUrlChangeHanlder}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    color="secondary"
                    sx={{ mt: "8px", minWidth: "100px" }}
                >
                    Submit
                </Button>
            </form>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000} // Hide after 4 seconds
                onClose={() => {
                    setSnackbarOpen(false)
                    setAlertMessage("")
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert
                    onClose={() => {
                        setSnackbarOpen(false)
                        setAlertMessage("")
                    }}
                    severity="error"
                >
                    {alertMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default UrlForm;
