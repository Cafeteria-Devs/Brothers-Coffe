import { Product } from "../types/Product";
import supabase from "../config/supabase";

async function productsData(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
    .from('products')
    .select('id, name, image_url, description')

    if(error) throw error

    return data || []
  }
  catch(err) {
    console.info('erro ao buscar produtos')
    return []
  }
}

export default productsData