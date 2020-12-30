import api from './api';

// GET ALL 
export async function GetCharacter ()  {
    const response = await api.get("/pessoas")
    return response.data
}