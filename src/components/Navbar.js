import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({ onCategorySelect }) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleToggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleCategoryClick = (category) => {
        onCategorySelect(category);
        handleToggleDrawer();
    };

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleToggleDrawer}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        NewsFeed
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleToggleDrawer}
                sx={{
                    width: '240px', // Set the width of the drawer
                    height: '50vh', // Set a fixed height for the drawer
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '240px', // Set the width of the drawer paper
                        height: '50vh', // Set a fixed height for the drawer paper
                        boxSizing: 'border-box',
                    },
                }}
            >
                <div
                    role="presentation"
                    onClick={handleToggleDrawer}
                    onKeyDown={handleToggleDrawer}
                >
                    <List>
                        <ListItem  key="General" onClick={() => handleCategoryClick("general")} sx={{ cursor: 'pointer' }}>
                            <ListItemText primary="General" />
                        </ListItem>
                        <ListItem  key="Business" onClick={() => handleCategoryClick("business")} sx={{ cursor: 'pointer' }}>
                            <ListItemText primary="Business" />
                        </ListItem>
                        <ListItem  key="Entertainment" onClick={() => handleCategoryClick("entertainment")} sx={{ cursor: 'pointer' }}>
                            <ListItemText primary="Entertainment" />
                        </ListItem>
                        <ListItem  key="Health" onClick={() => handleCategoryClick("health")} sx={{ cursor: 'pointer' }}>
                            <ListItemText primary="Health" />
                        </ListItem>
                        <ListItem  key="Science" onClick={() => handleCategoryClick("science")} sx={{ cursor: 'pointer' }}>
                            <ListItemText primary="Science" />
                        </ListItem>
                        <ListItem  key="Sports" onClick={() => handleCategoryClick("sports")} sx={{ cursor: 'pointer' }}>
                            <ListItemText primary="Sports" />
                        </ListItem>
                        <ListItem  key="Technology" onClick={() => handleCategoryClick("technology")} sx={{ cursor: 'pointer' }}>
                            <ListItemText primary="Technology" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </React.Fragment>
    );
}

export default Navbar;



