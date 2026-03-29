import { redirect } from 'react-router-dom';
import config from '../config/config.js';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    config.apiURL,
    config.apiKEY
);

async function loginUser(email: string, pass: string) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: pass,
        options: {
            emailRedirectTo: 'admin/dashboard'
        }
    });

    if (error) {
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

export default loginUser