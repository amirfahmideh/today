import { Drawer, makeStyles } from "@material-ui/core";
import React from "react";
export interface MainDrawerProps {
  openDrawer: boolean;
  handleOnCloseDrawerClick: () => void;
}
const useStyles = makeStyles((theme) => ({
  root: {},
}));
const MainDrawer: React.FunctionComponent<MainDrawerProps> = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor={"right"}
      open={props.openDrawer}
      onClose={(e) => {
        props.handleOnCloseDrawerClick && props.handleOnCloseDrawerClick();
      }}
    >
      put whatever you want in here!
    </Drawer>
  );
};
export default MainDrawer;
