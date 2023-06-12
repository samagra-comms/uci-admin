export const  getBotUrl=({startingMessage, phoneNumber}:{startingMessage:string, phoneNumber:string}):string => {
    return encodeURI('https://api.whatsapp.com/send?text=' + startingMessage + '&phone=' + phoneNumber);
}


export const calculatePagesCount = (pageSize:number, totalCount:number) => {
    // we suppose that if we have 0 items we want 1 empty page
    return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
  };
  

  export const toFormData= (data:any)=>{
      const formData = new FormData();

        for (const key of Object.keys(data)) {
            const value = data[key];
            formData.append(key, value);
        }

        return formData;
  }