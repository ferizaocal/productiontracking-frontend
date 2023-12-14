import {View, Text, Keyboard} from 'react-native';
import React, {useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import Backdrop from './Backdrop';

export interface CustomBottomSheetProps {
  isOpen: boolean;
  handleClose: (value: boolean) => void;
  children?: React.ReactNode;
  snapPoints?: string[];
  enableClose?: boolean;
  zIndex?: number;
  bgColor?: string;
  showIndicator?: boolean;
}
const CustomBottomSheet = React.forwardRef(
  (props: CustomBottomSheetProps, ref: any) => {
    {
      const snapPoints = useMemo(() => props.snapPoints || ['80%'], []);
      let enableClose = props.enableClose || true;
      return (
        <BottomSheet
          backgroundStyle={{
            backgroundColor: props.bgColor || '#fff',
          }}
          containerStyle={{
            zIndex: props.zIndex || 11,
            elevation: 11,
          }}
          handleIndicatorStyle={{
            display:
              props.showIndicator === undefined || props.showIndicator === true
                ? 'flex'
                : 'none',
          }}
          ref={ref}
          enablePanDownToClose={enableClose}
          index={props.isOpen ? 0 : -1}
          onChange={index => {
            if (index === -1) {
              props.handleClose(false);
            }
          }}
          backdropComponent={
            enableClose && props.isOpen
              ? props => <Backdrop {...props} />
              : null
          }
          snapPoints={snapPoints}>
          {props.children}
        </BottomSheet>
      );
    }
  },
);
export default CustomBottomSheet;
