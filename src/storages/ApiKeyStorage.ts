import {create} from 'zustand';

type ApiKeyStorage = {
    apiKey: string,
    setApiKey: (apiKey: string) => void,
    clearApiKey: () => void
}

const useApiKeyStorage = create<ApiKeyStorage>((set) => ({
        apiKey: "",
        setApiKey: apiKey => {
            set({apiKey: apiKey})
        },
        clearApiKey: () => {
            set({apiKey: ""})
        }
    }
))

export default useApiKeyStorage;