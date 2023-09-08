import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yauoxtiravfxygfonphu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhdW94dGlyYXZmeHlnZm9ucGh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMzAwMzUsImV4cCI6MjAwODkwNjAzNX0.GXn3vyu7IloaRavthGvXe_VJBzl15t3vO8jpnDXp00g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
