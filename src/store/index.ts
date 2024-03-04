import moment from "moment";
import { create } from "zustand";

const initialState = {
  isBroadcastBot: true,
  conversationLogic: [],
  conversationBot: { id: "" },
  state: {
    name: "",
    description: "",
    purpose: "",
    segmentId: "",
    status: "enabled",
    startDate: new Date(moment().subtract(1,'days').valueOf()),
    endDate: null,
    startingMessage: "",
    tags:""
  },
  segmentCount: 100,
  activeLogic: {},
  botIcon: "",
  userSegments: [],
  broadcastBotLogics: [],
};

export const useStore = create((set) => ({
  user: localStorage.getItem("user") || null,
  cadencePerPage:100,
  botToEdit: JSON.parse(localStorage.getItem("botToEdit") || "{}"),
  setBotToEdit: (data) => set((state) => ({ botToEdit: data })),
  setUser: (data) => set((state) => ({ user: data })),
  isLoading: false,
  startLoading: () => set((state) => ({ isLoading: true })),
  stopLoading: () => set((state) => ({ isLoading: false })),
  isBroadcastBot: true,
  setIsBroadcastBot: () =>
    set((state) => ({ isBroadcastBot: !state.isBroadcastBot })),
  conversationLogic: [],
  setConversationLogic: (newValue) => set({ conversationLogic: newValue }),
  conversationBot: { id: "" },
  setConversationBot: (newValue) => set({ conversationBot: newValue }),
  state: {
    name: "",
    description: "",
    purpose: "",
    segmentId: "",
    status: "enabled",
    startDate:new Date(moment().subtract(1,'days').valueOf()),
    endDate: null,
    startingMessage: "",
    tags:""
  },
  editState:{
  },
  setEditState:(newValue)=>set({editState:newValue}),
  setState: (newValue) => set({ state: newValue }),
  setCadencePerPage:(newValue)=>set({cadencePerPage:newValue}),
  segmentCount: 100,
  setSegmentCount: (newValue) => set({ segmentCount: newValue }),
  activeLogic: {},
  setActiveLogic: (newValue) => set({ activeLogic: newValue }),
  botIcon: "",
  setBotIcon: (newValue) => set({ botIcon: newValue }),
  userSegments: [],
  setUserSegments: (newValue) => set({ userSegments: newValue }),
  broadcastBotLogics: [],
  setBroadcastBotLogics: (newValue) => set({ broadcastBotLogics: newValue }),
  botList: [],
  setBotList: (newValue) => set({ botList: newValue }),
  onReset: () => set({ ...initialState }),
  theme: localStorage.getItem("theme") || "light",
  setTheme: (newValue) => set({ theme: newValue }),
}));
