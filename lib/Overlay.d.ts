import OLOverlay, {Options} from 'ol/Overlay';
import {
	ForwardRefExoticComponent,
	PropsWithChildren,
	PropsWithoutRef,
	RefAttributes,
} from 'react';
import {Coordinate} from 'ol/coordinate';

export default Overlay;

type OverlayProps = {
	options?: Options;
	element: HTMLElement | null | undefined;
	position: Coordinate | null | undefined;
	positioning: string;
};

declare const Overlay: ForwardRefExoticComponent<
	RefAttributes<OLOverlay> & PropsWithChildren<PropsWithoutRef<OverlayProps>>
>;
//# sourceMappingURL=Overlay.d.ts.map
