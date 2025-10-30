import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import FabricMapView from './NativeComponentMapView';
export const Commands = codegenNativeCommands({
    supportedCommands: [
        'animateToRegion',
        'setCamera',
        'animateCamera',
        'fitToElements',
        'fitToSuppliedMarkers',
        'fitToCoordinates',
        'setIndoorActiveLevelIndex',
    ],
});
export default codegenNativeComponent('RNMapsMapView', {});
