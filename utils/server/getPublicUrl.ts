import { supabase } from "@/libs/supabase";

export async function getPublicUrl(image_path: string) {
    const publicUrl = await supabase.storage.from("memories").getPublicUrl(image_path)
    return publicUrl
}