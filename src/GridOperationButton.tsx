import React from "react";
import {Button, Grid, styled} from "@mui/material";


interface GridOperationButtonProps {
    operation: string;
    selectOperation: (operation: string) => void;
    selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
    backgroundColor: "rgba(227,28,28,0.22)",
    borderColor: props.selected ? '#ffffff' : "rgb(213,3,3)"
}))

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
                                                                            operation,
                                                                            selectedOperation,
                                                                            selectOperation,

                                                                        }) => {
    return (
        <Grid item xs={3}>
            <StyledButton
                fullWidth
                variant={"outlined"}
                onClick={() => selectOperation(operation)}
                selected={selectedOperation === operation}>
                {operation}
            </StyledButton>
        </Grid>


    )
}