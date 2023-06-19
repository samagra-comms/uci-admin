export const getBotUrl = ({
  startingMessage,
  phoneNumber,
}: {
  startingMessage: string;
  phoneNumber: string;
}): string => {
  return encodeURI(
    "https://api.whatsapp.com/send?text=" +
      startingMessage +
      "&phone=" +
      phoneNumber
  );
};

export const calculatePagesCount = (pageSize: number, totalCount: number) => {
  // we suppose that if we have 0 items we want 1 empty page
  return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
};

export const toFormData = (data: any) => {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    const value = data[key];
    formData.append(key, value);
  }
  return formData;
};


export const getUploadErrorMsg =(errorCode:string)=>{
    console.log("error:",`ODKUP-${errorCode}`)
   switch(errorCode){
    case 'ODKUP-CP-0' : return 'Media Files Upload Failed';
    case 'ODKUP-CP-1' : return 'Failed to Replace Media File Names';
    case 'ODKUP-CP-2' : return 'Form Parsing Failed';
    case 'ODKUP-CP-3' : return 'Form Upload Failed';
    case 'ODKUP-CP-4' : return 'Unknown Upload Error';
    case 'ODKUP-CP-5' : return 'Form Upload Failed';
    default : return 'Something went wrong !,please try again';
   }
}