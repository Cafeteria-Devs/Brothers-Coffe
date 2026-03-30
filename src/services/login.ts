import supabase from '../config/supabase';

async function loginUser(email: string, pass: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: pass
    });

    if (error) {
        return { success: false, error: error.message };
    }

    return { success: true, data };
}

export default loginUser