import supabase from '../config/supabase';

export async function getProducts() {
    try {
        const { data, error } = await supabase.functions.invoke('get-product', {
            method: 'GET'
        });

        if (error) {
            console.error(error);
            return;
        }

        return JSON.parse(data);
    }
    catch (err: any) {
        console.log(err.message);
    }
}