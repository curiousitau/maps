import { MapBrowserEvent, MapEvent } from 'ol';
import Map, {MapOptions} from 'ol/Map';
import {
	ForwardRefExoticComponent,
	PropsWithChildren,
	PropsWithoutRef,
	RefAttributes,
} from 'react';

type MapProps= {
	options?: MapOptions;
};

type MapEventListeners = {
    onSingleClick?: (event: MapBrowserEvent<MouseEvent>) => void;
    onDoubleClick?: (event: MapBrowserEvent<MouseEvent>) => void;
    onMoveEnd?: (event: MapEvent) => void;
    onMoveStart?: (event: MapEvent) => void;
    onPointerDrag?: (event: MapBrowserEvent<MouseEvent>) => void;
    onPointerMove?: (event: MapBrowserEvent<MouseEvent>) => void;
    onPostCompose?: (event: MapEvent) => void;
    onPostRender?: (event: MapEvent) => void;
    onPreCompose?: (event: MapEvent) => void;
    onPropertyChange?: (event: MapEvent) => void;
}

declare const _default: ForwardRefExoticComponent<
	RefAttributes<Map> & PropsWithChildren<PropsWithoutRef<MapProps & MapEventListeners>>
>;
export default _default;
//# sourceMappingURL=Map.d.ts.map
