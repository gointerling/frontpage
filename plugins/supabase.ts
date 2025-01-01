import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL="https://rcfrgfsffyxksfwhzqbz.supabase.co"
const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZnJnZnNmZnl4a3Nmd2h6cWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2MjEzMTYsImV4cCI6MjA1MTE5NzMxNn0.1hHW6SzFBvjgIH5Nd6AnAnQKrgGQfbkvIKxOUxyTWlE"
        
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('supabase', supabase);
});
