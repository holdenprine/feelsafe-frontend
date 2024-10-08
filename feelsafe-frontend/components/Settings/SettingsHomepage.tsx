import React from 'react'
import { View, Text, StyleSheet, ScrollView, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
import UserData from '@/mockData/UserData';

const SettingsHomepage = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // gets the users first letter of first name, will be updated to grab logged in users first letter
    const firstLetters = UserData.map(user => user.firstName ? user.firstName[0] : '');
    const accountSymbolLetter = firstLetters[Math.floor(Math.random() * firstLetters.length)];



  return (
    <SafeAreaView>
        <ScrollView>
            <Text style={styles.headerMain}>Settings</Text>
            <Box style={styles.boxContainer}>
                <Typography style={styles.menuItems}>General</Typography>
                <Typography style={styles.menuItems}>Notifications</Typography>
                <Tooltip title='Account Settings'>
                    <IconButton 
                        onClick={handleClick} 
                        size='small'
                        style={styles.accountSettings}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar style={styles.accountSettingsIcon}>{accountSymbolLetter}</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
        </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    headerMain: {
        fontSize: 24,
        fontFamily: 'Montserrat_700Bold',
        marginBottom: 10,
        color: '#333',
        paddingTop: 20
    },
    boxContainer: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    menuItems: {
        minWidth: 100,
    },
    accountSettings: {
        marginLeft: 2,
    },
    accountSettingsIcon: {
        width: 32,
        height: 32,
    }
});

export default SettingsHomepage