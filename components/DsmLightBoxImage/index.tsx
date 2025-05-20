import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

import { DsmLightBoxImagePropsType } from './types';

import classes from './index.module.css';

export const DsmLightBoxImage = (props: DsmLightBoxImagePropsType) => {
  return (
    <Lightbox
      className={classes.lightbox}
      plugins={[Fullscreen, Zoom]}
      zoom={{
        scrollToZoom: true,
        maxZoomPixelRatio: 10,
        zoomInMultiplier: 2,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
        doubleClickMaxStops: 2,
        keyboardMoveDistance: 50,
        wheelZoomDistanceFactor: 100,
        pinchZoomDistanceFactor: 100,
      }}
      {...props}
    />
  );
};
