
import { omit } from 'lodash';
import { useStore } from '../store';


export const isWhatsappObjValid=(errors)=>{
    const store: any = useStore.getState();
    return (
        Object.values(errors).some((v) => v !== null) ||
        Object.values(
          store?.isBroadcastBot
            ? store?.state
            : omit(store?.state, ["segmentId"])
        ).some((v) => v === "" || v === undefined || v === null) 
      )
}

export const isSmsObjValid=(errors)=>{
    const store: any = useStore.getState();
    return  (
        Object.values(errors).some((v) => v !== null) ||
        Object.values(
          store?.state
        ).some((v) => v === "" || v === undefined || v === null) 
      );
}

export const isWebObjValid =(errors)=>{
    const store: any = useStore.getState();
    return (
        Object.values(errors).some((v) => v !== null) ||
        Object.values(
          store?.isBroadcastBot ? store?.state : omit(store?.state, ["segmentId"])
        ).some((v) => v === "" || v === undefined || v === null) ||
        store?.botIcon === "" ||
        store?.botIcon === null
      );
}