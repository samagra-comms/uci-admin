

export const loginUrl= `${process.env.REACT_APP_nl_login_url}/api/login`;

export const searchBot = `${process.env.REACT_APP_UCI_BASE_URL}/admin/bot/search`;

export const getStartConversationUrl =(bot:string)=> `${process.env.REACT_APP_UCI_BASE_URL}/admin/bot/start/${bot}`

export const createBotUrl = `${process.env.REACT_APP_UCI_BASE_URL}/admin/bot`;

export const getUpdateBotUrl = (id:string) =>`${process.env.REACT_APP_UCI_BASE_URL}/admin/bot/${id}`

export const segmentMappingUrl = `${process.env.REACT_APP_user_segment_url}/segment-bot-mapping`;

export const createSegmentUrl = `${process.env.REACT_APP_UCI_BASE_URL}/admin/user-segment`;

export const odkUploadUrl = `${process.env.REACT_APP_UCI_BASE_URL}/admin/form/upload`;

export const addLogicUrl = `${process.env.REACT_APP_UCI_BASE_URL}/admin/conversationLogic`

export const getBotByIdUrl =(id:string)=> `${process.env.REACT_APP_UCI_BASE_URL}/admin/bot/${id}`;

export const fetchService =(service_name:string,lines:number,date:string)=> `${process.env.REACT_APP_UCI_BASE_URL}/admin/monitoring/logs/${service_name}?lines=${lines}&date=${date}`;

export const triggerRealtimeData =`${process.env.REACT_APP_UCI_BASE_URL}/admin/monitoring/realtime/start`;

export const fetchRealtimeData =(file:string)=>`${process.env.REACT_APP_UCI_BASE_URL}/admin/monitoring/realtime?date=${file}`;

export const stopRealtimeData =`${process.env.REACT_APP_UCI_BASE_URL}/admin/monitoring/realtime/stop`;

export const getFiles =`${process.env.REACT_APP_UCI_BASE_URL}/admin/monitoring/realtime/available`;

export const fetchOverview =(file:string)=>`${process.env.REACT_APP_UCI_BASE_URL}/admin/monitoring/overview?date=${file}`;

export const downloadLog =(service_name:string,date:string)=>`${process.env.REACT_APP_UCI_BASE_URL}/admin/monitoring/logs/${service_name}/download/log?date=${date}`;

export const downloadErrLog =(service_name:string,date:string)=>`${process.env.REACT_APP_UCI_BASE_URL}/admin/monitoring/logs/${service_name}/download/error?date=${date}`;

export const getSegmentCountUrl = (segment:string | number) => `${process.env.REACT_APP_nl_url}/segments/${segment}/mentors/count`