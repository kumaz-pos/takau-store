import supabase from "@/helpers/supabase";

export default async function Products() {
    const {data:products}=await supabase.from("orders").select("*");
    return <pre>{JSON.stringify(products,null,2)}</pre>
}