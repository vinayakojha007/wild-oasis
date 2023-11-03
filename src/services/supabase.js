import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uxyguqpxgooogeviojhi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4eWd1cXB4Z29vb2dldmlvamhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNTY1OTYsImV4cCI6MjAxMzgzMjU5Nn0.m5VLYtJe1T-nooVE3BCYluv9r3ktGvl963uHh9zC8SM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
