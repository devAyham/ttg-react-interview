import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      background: 'white',
    },
    toolbar: {
      // width: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    mainTitle: {
      flexGrow: 1,
      fontWeight: 'bold',
      fontSize: 30,
      color: theme.palette.primary.main,
      textAlign: 'center',
    },
    logoContainer: {
      overflow: 'hidden',
      flexGrow: 1,
    },
    logo: {
      maxWidth: 300,
      maxHeight: 75,
    },
  })
);
