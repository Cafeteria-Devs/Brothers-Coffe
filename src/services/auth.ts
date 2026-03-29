import config from '../config/config.js';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    config.apiURL,
    config.apiKEY
);

async function loginUser(email: string, pass: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: pass,
    });

    if (error) {
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

export default loginUser