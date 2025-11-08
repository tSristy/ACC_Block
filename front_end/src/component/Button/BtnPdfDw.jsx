import { Button } from "@mui/material";

const BtnPdfDw = ({fileDownload, fileName, variantStyle}) => {
    return (
        <Button color='success' size="large" variant={variantStyle} onClick={(e) => {
            const link = document.createElement('a');
            link.href = {fileDownload};
            link.download = {fileName};
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }}>{fileName}</Button>
    )
}

export default BtnPdfDw;