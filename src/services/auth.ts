import { redirect } from "react-router-dom";
import supabase from "../config/supabase";

export async function auth() {
    const { data, error } = await supabase.auth.getSession();
    console.log(data);
    
    if (!data.session) {
        return redirect('/login');
    }
    
    if (data.session?.user.email === import.meta.env.VITE_ADMIN) {
        console.log('logado');
    }
}