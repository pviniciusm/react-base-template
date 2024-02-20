import { AppBar, Toolbar, styled } from "@mui/material";

const ToolbarStyled = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Header = () => {
    return (
        <AppBar position="static">
            <ToolbarStyled>
                <div>
                    <span>Logo</span>
                </div>
                <div>
                    <span>Actions</span>
                </div>
            </ToolbarStyled>
        </AppBar>
    );
};
