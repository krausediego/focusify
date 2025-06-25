import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const projectUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const projectKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

const supabase = createClient(projectUrl, projectKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export { supabase };
