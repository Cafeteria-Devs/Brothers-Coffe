import config from '../config/config.js';
import { createClient } from '@supabase/supabase-js';


const supabase = createClient(
    config.apiURL,
    config.apiKEY
);
const b = document.querySelector('#send') as HTMLButtonElement;
const msg = document.querySelector('#msg') as HTMLParagraphElement;

async function auth() {
    const email = (document.querySelector('#email') as HTMLInputElement).value;
    const password = (document.querySelector('#pass') as HTMLInputElement).value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) { console.error(error.message); return null };

    return data;
    
}

b.addEventListener('click', (e) =>{
    e.preventDefault();
    const r = auth();
    msg.textContent = r;
})