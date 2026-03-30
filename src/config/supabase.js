import config from './config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    config.apiURL,
    config.apiKEY
);

export default supabase;