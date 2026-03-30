import config from './config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    config.apiURL,
    config.apiKEY, 
    {
        auth: {
            storage: window.sessionStorage,
            autoRefreshToken: true,
            persistSession: true
        }
    }
);

export default supabase;